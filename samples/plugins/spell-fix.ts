import type { Plugin, PluginInput } from './elecxzy-plugin'

// +==================================================================+
// |  spell-fix — fix common English misspellings in the buffer       |
// |  Run it with  M-x spell-fix                                       |
// +==================================================================+
//
// Operates on the active selection, or the whole buffer when nothing is
// selected. Every known misspelling is corrected in place and the echo line
// reports what changed, e.g.:
//
//     spell-fix: fixed 3 (teh→the, recieve→receive, occured→occurred)
//
// WHY a fixed list instead of a real dictionary?  A plugin runs in a sandboxed
// worker with no network and no room for a 100k-word dictionary, and checking
// every word against a small list would flag tons of valid-but-rare words.
// A curated map of *frequent* misspellings is small, offline, and has very few
// false positives — it catches the typos people actually make. Undo (C-_)
// reverts the whole pass if you disagree with a fix.

// Lowercase misspelling -> correction. Keep keys single-token (\b-safe).
const CORRECTIONS: Record<string, string> = {
  // typos / letter swaps
  teh: 'the',
  hte: 'the',
  taht: 'that',
  adn: 'and',
  nad: 'and',
  thier: 'their',
  recieve: 'receive',
  recieved: 'received',
  recieving: 'receiving',
  beleive: 'believe',
  acheive: 'achieve',
  acheived: 'achieved',
  wierd: 'weird',
  freind: 'friend',
  freinds: 'friends',
  peice: 'piece',
  greatful: 'grateful',
  whcih: 'which',
  wich: 'which',
  yeild: 'yield',
  sieze: 'seize',
  // double / single consonant
  occured: 'occurred',
  occuring: 'occurring',
  occurence: 'occurrence',
  begining: 'beginning',
  comming: 'coming',
  runing: 'running',
  refered: 'referred',
  prefered: 'preferred',
  transfered: 'transferred',
  commited: 'committed',
  commiting: 'committing',
  recomend: 'recommend',
  recomended: 'recommended',
  reccomend: 'recommend',
  accross: 'across',
  adress: 'address',
  adressed: 'addressed',
  agression: 'aggression',
  apparant: 'apparent',
  arguement: 'argument',
  embarass: 'embarrass',
  embarassed: 'embarrassed',
  harrass: 'harass',
  harrassment: 'harassment',
  millenium: 'millennium',
  neccessary: 'necessary',
  necessery: 'necessary',
  ocassion: 'occasion',
  occassion: 'occasion',
  occassionally: 'occasionally',
  posession: 'possession',
  proffesional: 'professional',
  proffesor: 'professor',
  tommorow: 'tomorrow',
  tommorrow: 'tomorrow',
  untill: 'until',
  paralel: 'parallel',
  parralel: 'parallel',
  interupt: 'interrupt',
  // -tion / -sion / -ent / -ance
  definately: 'definitely',
  definatly: 'definitely',
  seperate: 'separate',
  seperated: 'separated',
  seperately: 'separately',
  enviroment: 'environment',
  goverment: 'government',
  goverenment: 'government',
  independant: 'independent',
  maintainance: 'maintenance',
  maintenence: 'maintenance',
  persistant: 'persistent',
  consistant: 'consistent',
  existance: 'existence',
  existant: 'existent',
  relevent: 'relevant',
  resistence: 'resistance',
  responsability: 'responsibility',
  importent: 'important',
  // common everyday words
  alot: 'a lot',
  becuase: 'because',
  becasue: 'because',
  beacuse: 'because',
  calender: 'calendar',
  cemetary: 'cemetery',
  changable: 'changeable',
  collegue: 'colleague',
  completly: 'completely',
  concious: 'conscious',
  decison: 'decision',
  dilemna: 'dilemma',
  dissapoint: 'disappoint',
  dissapointed: 'disappointed',
  effecient: 'efficient',
  enought: 'enough',
  espesially: 'especially',
  especialy: 'especially',
  excelent: 'excellent',
  exellent: 'excellent',
  exersize: 'exercise',
  familar: 'familiar',
  feasable: 'feasible',
  finaly: 'finally',
  foriegn: 'foreign',
  fourty: 'forty',
  fullfil: 'fulfil',
  gaurd: 'guard',
  garantee: 'guarantee',
  guarentee: 'guarantee',
  happend: 'happened',
  heirarchy: 'hierarchy',
  immediatly: 'immediately',
  inteligence: 'intelligence',
  intresting: 'interesting',
  knowlege: 'knowledge',
  langauge: 'language',
  lenght: 'length',
  liason: 'liaison',
  libary: 'library',
  lisence: 'license',
  managment: 'management',
  mispell: 'misspell',
  noticable: 'noticeable',
  particurly: 'particularly',
  pavillion: 'pavilion',
  posible: 'possible',
  pratice: 'practice',
  priviledge: 'privilege',
  probaly: 'probably',
  probarly: 'probably',
  pronounciation: 'pronunciation',
  publically: 'publicly',
  questionaire: 'questionnaire',
  readible: 'readable',
  realy: 'really',
  rememberance: 'remembrance',
  rythm: 'rhythm',
  saftey: 'safety',
  similiar: 'similar',
  sincerly: 'sincerely',
  speach: 'speech',
  succesful: 'successful',
  successfull: 'successful',
  suprise: 'surprise',
  suprised: 'surprised',
  temperture: 'temperature',
  threshhold: 'threshold',
  thru: 'through',
  truely: 'truly',
  unfortunatly: 'unfortunately',
  usefull: 'useful',
  usualy: 'usually',
  vaccum: 'vacuum',
  vehical: 'vehicle',
  visable: 'visible',
  withing: 'within',
  writting: 'writing',
  // contraction-as-one-word (unambiguous)
  dosnt: "doesn't",
  doesnt: "doesn't",
  dont: "don't",
  cant: "can't",
  wont: "won't",
  wouldnt: "wouldn't",
  couldnt: "couldn't",
  shouldnt: "shouldn't",
  didnt: "didn't",
  isnt: "isn't",
  wasnt: "wasn't",
  arent: "aren't",
  werent: "weren't",
  hasnt: "hasn't",
  havent: "haven't",
  youre: "you're",
  theyre: "they're",
}

/** Re-apply the capitalisation pattern of `src` onto `repl`. */
function matchCase(src: string, repl: string): string {
  if (src === src.toUpperCase() && src !== src.toLowerCase()) {
    return repl.toUpperCase()
  }
  if (src[0] === src[0].toUpperCase() && src.slice(1) === src.slice(1).toLowerCase()) {
    return repl.charAt(0).toUpperCase() + repl.slice(1)
  }
  return repl
}

// Build one big alternation, longest keys first so overlaps resolve sensibly.
const KEYS = Object.keys(CORRECTIONS).sort((a, b) => b.length - a.length)
const RE = new RegExp(`\\b(${KEYS.join('|')})\\b`, 'gi')

const plugin: Plugin = {
  command: 'spell-fix',
  description: 'Fix common English misspellings (selection or whole buffer)',
  apiVersion: 1,
  execute(input: PluginInput) {
    const hasRegion = !!(input.selection && input.selection.length > 0)
    const start = hasRegion ? input.selection!.start : 0
    const length = hasRegion ? input.selection!.length : input.text.length
    const slice = input.text.slice(start, start + length)

    const changes: string[] = []
    const counts: Record<string, number> = {}
    const fixed = slice.replace(RE, (whole) => {
      const repl = CORRECTIONS[whole.toLowerCase()]
      if (!repl) return whole
      const out = matchCase(whole, repl)
      const key = `${whole}→${out}`
      if (!counts[key]) {
        counts[key] = 0
        changes.push(key)
      }
      counts[key]++
      return out
    })

    if (fixed === slice) {
      return { message: 'spell-fix: no common misspellings found' }
    }

    const total = Object.values(counts).reduce((a, b) => a + b, 0)
    const shown = changes.slice(0, 6).join(', ')
    const more = changes.length > 6 ? `, +${changes.length - 6} more` : ''
    const message = `spell-fix: fixed ${total} (${shown}${more})`

    return {
      text: fixed,
      start,
      length,
      cursor: Math.min(input.cursor, start + fixed.length),
      message,
    }
  },
}

export default plugin
