export interface Language {
  id: string;
  name: string;
  description: string;
  facts: string[];
  emoji: string;
}

export const languages: Language[] = [
  {
    id: 'sarh',
    name: 'Sarh',
    emoji: '😤',
    description: 'On dirait qu\'ils vont te gronder pour un crime que tu n\'as même pas encore commis.',
    facts: [
      'Leur "bonjour" te fait déjà culpabiliser',
      'Même un compliment sonne comme un rappel à l\'ordre',
      'Tu t\'excuses avant qu\'ils aient fini leur phrase',
      'Leur ton fait passer ta mère pour une licorne douce',
      'Un simple "ça va" te donne envie de t\'expliquer pendant 20 minutes'
    ]
  },
  {
    id: 'ngambay',
    name: 'Ngambay',
    emoji: '🗣️',
    description: 'Spécialistes du commérage. Parler avec eux, c\'est comme lire le journal intime de tout le quartier.',
    facts: [
      'Ils connaissent tes secrets avant que tu les saches',
      'Même un "ça va ?" sonne comme un scoop',
      'Le silence est une notion étrangère',
      'Leur "bonjour" est accompagné de 5 nouvelles croustillantes',
      'Wikipédia les jalouse'
    ]
  },
  {
    id: 'mouroum',
    name: 'Mouroum',
    emoji: '😂',
    description: 'Accent naturellement drôle, comme si chaque phrase était un sketch de stand-up.',
    facts: [
      'Même quand ils râlent, tu rigoles',
      'Leur sérieux ne dure que le temps d\'un éternuement',
      'Ils peuvent annoncer une mauvaise nouvelle et te faire éclater de rire',
      'Netflix devrait les embaucher comme scénaristes',
      'Leur colère est un spectacle comique gratuit'
    ]
  },
  {
    id: 'daye',
    name: 'Daye',
    emoji: '🤯',
    description: 'Langue tellement compliquée qu\'il te faudrait un doctorat juste pour dire "salut".',
    facts: [
      'Leurs verbes ont plus de boutons qu\'un téléviseur ancien',
      'Une simple phrase peut durer trois saisons',
      'Tu devras reprendre ton souffle avant la fin de leur phrase',
      'Google Translate a démissionné',
      'Même eux oublient comment finir leurs phrases'
    ]
  },
  {
    id: 'zagawa',
    name: 'Zagawa',
    emoji: '😄',
    description: 'L\'accent le moins sérieux du Tchad. Rien de ce qu\'ils disent ne semble digne d\'être pris au sérieux.',
    facts: [
      'Même leurs menaces sont adorables',
      'Ils ne peuvent pas annoncer une mauvaise nouvelle sans rigoler',
      'Leur sarcasme mérite sa propre page TikTok',
      'Un président Zagawa transformerait l\'ONU en stand-up',
      'Leur voix fait fondre les cœurs de glace'
    ]
  },
  {
    id: 'moundang',
    name: 'Moundang',
    emoji: '🧐',
    description: 'On dirait qu\'ils calculent la racine carrée d\'hier avant de parler.',
    facts: [
      'Leur pause avant de parler est un vrai chargement mental',
      'Ils sonnent sages même quand ils commandent un sandwich',
      'Ne jamais argumenter — tu vas te faire battre en logique sans t\'en rendre compte',
      'Ils pensent en 4D pendant que tu comptes sur tes doigts',
      'Leur "euh..." dure plus longtemps qu\'un feu rouge'
    ]
  },
  {
    id: 'massa',
    name: 'Massa',
    emoji: '💥',
    description: 'Chaque mot sonne comme s\'ils se préparaient à te donner un coup... mais affectueux.',
    facts: [
      'Leur "bonjour" fait l\'effet d\'un gong de boxe',
      'Le ton est toujours réglé sur "intense"',
      'Tu sursautes sans raison',
      'Même leur chuchotement traverse trois murs',
      'Leurs câlins viennent avec un avertissement de sécurité'
    ]
  },
  {
    id: 'kanembou',
    name: 'Kanembou',
    emoji: '🏜️',
    description: 'Accent du désert : sec, direct, et absolument sans filtres. Zéro diplomatie, 100% authenticité.',
    facts: [
      'Ils disent "non" avant même que tu aies posé la question',
      'Leur "peut-être" signifie "jamais de la vie"',
      'La politesse ? Connais pas.',
      'Leurs compliments sonnent comme des insultes',
      'Tu préfères négocier avec un cactus'
    ]
  },
  {
    id: 'gorane',
    name: 'Gorane',
    emoji: '🐪',
    description: 'Parlent comme s\'ils montaient un chameau en tempête de sable : fort, résistant, impossible à ignorer.',
    facts: [
      'Leur volume par défaut est "mode hélicoptère"',
      'Chuchoter n\'est pas dans leur vocabulaire',
      'Même leurs silences sont bruyants',
      'Tu les entends avant de les voir',
      'Les voisins à 3 km suivent leurs conversations'
    ]
  },
  {
    id: 'baguirmi',
    name: 'Baguirmi',
    emoji: '👑',
    description: 'Langue royale et poétique. Chaque phrase sonne comme un discours d\'un sultan élégant et fatigué.',
    facts: [
      'Ils disent "je vais aux toilettes" comme s\'ils annonçaient une guerre',
      'Tout sonne noble, même "passe-moi le sel"',
      'Shakespeare est jaloux',
      'Leurs insultes ressemblent à de la poésie',
      'Tu applaudis sans savoir pourquoi'
    ]
  }
];
