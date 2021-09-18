// BIG ARRAY OF ALL ACTIVITIES
// Mandatory: id, phase, name, summary, desc
// Example:
//all_activities[i] = {
//  id:        i+1,
//  phase:     int in {1-5},
//  name:      "",
//  alternativeName: "",
//  summary:   "",
//  desc:      "Multiple \
//              Lines",
//  duration:  "",
//  source:    "",
//  more:      "", // a link
//  suitable:  "",
//};
// Values for duration: "<minMinutes>-<maxMinutes> perPerson"
// Values for suitable: "iteration, realease, project, introverts, max10People, rootCause, smoothSailing, immature, largeGroup"

all_activities = [];
all_activities[0] = {
phase: 0,
name: "ECVP",
summary: "Comment se sentent les participants de la rétro : Explorateur, Client, Vacancier, ou Prisonnier ?",
desc: "Préparer un paper-board avec des zones pour E, C, V, et P. Expliquer les concepts : <br>\
<ul>\
<li>Explorateur : Désireux de se lancer, de rechercher ce qui a et n'a pas fonctionné et comment améliorer.</li>\
<li>Client : Attitude positive. Content si de bonnes choses en ressortent.</li>\
<li>Vacancier : Hésitant à participer activement mais la rétro vaut mieux que le travail habituel.</li>\
<li>Prisonnier : Participe seulement car il (sent qu'il) le doit.</li>\
</ul>\
Faire un sondage (anonyme sur des bouts de papier). Compter les réponses et assurer le suivi sur le tableau \
pour que tous voient. Si la confiance est faible, détruire délibérément les votes pour assurer la confidentialité. \
Demander ce que les participants pensent des résultats. S'il y a une majorité de Vacanciers ou Prisonniers \
envisager d'utiliser la rétro pour discuter de ce constat.",
duration: "5-10 numberPeople",
source: source_agileRetrospectives,
suitable: "iteration, release, project, immature"
};
all_activities[1] = {
phase: 0,
name: "Bulletin météo",
summary: "Les participants marquent leur 'météo' (humeur) sur un paper-board.",
desc: "Préparer un paper-board avec un dessin d'orage, pluie, nuages ​​et soleil. \
Chaque participant marque son humeur sur le tableau.",
source: source_agileRetrospectives
};
all_activities[2] = {
phase: 0,
name: "Lancement - Question rapide", // TODO This can be expanded to at least 10 different variants - how?
summary: "Poser une question à laquelle chacun des participants répond à son tour.",
desc: "À tour de rôle chaque participant répond à la même question (sauf s'ils disent «je passe»). \
Exemples de questions: <br>\
<ul>\
<li>En un mot - Qu'attendez-vous de cette rétrospective ?</li>\
<li>En un mot - Qu'avez vous en tête ?<br>\
Traitez les préoccupations, par exemple en les écrivants et en les mettant - physiquement et mentalement - de côté</li>\
<li>Dans cette rétrospective - Si vous étiez une voiture, quel genre serait-elle ?</li>\
<li>Dans quel état émotionnel êtes-vous ? (par exemple, «heureux», «en colère», «triste», «effrayé»)</li>\
</ul><br>\
Évitez l'évaluation des commentaires, par exemple avec «Très Bien». «Merci» est suffisant.",
source: source_agileRetrospectives
};
all_activities[3] = {
phase: 1,
name: "Frise chronologie",
summary: "Les participants écrivent les événements marquants et les ordonnent chronologiquement.",
desc: "Diviser en groupes de 5 personnes ou moins. Distribuer des cartes et des marqueurs. \
Donner aux participants 10 minutes pour noter des événements mémorables et / ou personnellement significatifs. \
Il s'agit de recueillir plusieurs points de vue. Un consensus serait préjudiciable. Tous les participants \
affichent leurs cartes et les ordonnent. Il est normal d'ajouter des cartes à la volée. Analyser.<br>\
Des codes couleurs peuvent aider à faire ressortir des modèles, par exemple :<br>\
<ul>\
<li>Émotions</li>\
<li>Évènements (techniques, organisation, personnes, ...)</li>\
<li>Fonctions (testeur, développeur, manager, ...)</li>\
</ul>",
duration: "60-90 timeframe",
source: source_agileRetrospectives,
suitable: "iteration, introverts"
};
all_activities[4] = {
phase: 1,
name: "Analyse des fonctionnalités utilisateur",
summary: "Passer sur chaque fonctionnalité utilisateur traitée par l'équipe et chercher des améliorations possibles",
desc: "Préparation : Rassembler toutes les fonctionnalités utilisateur traitées lors de l'itération et les amener à \
la rétrospective. <br> \
En groupe (10 personnes max.) lire chaque fonctionnalité utilisateur. Pour chacune d'elles se demander si \
elle s'est bien passée ou non. Si tout s'est bien passé, saisir pourquoi. Sinon discuter de ce qu'il est possible de \
faire différemment à l'avenir. <br> \
Variantes : Vous pouvez effectuer cela pour les tickets de support, les bugs ou toute autre tâche \
effectuée par l'équipe.",
source: source_findingMarbles,
suitable: "iteration, max10people"
};
all_activities[5] = {
phase: 1,
name: "Aimer à aimer",
summary: "Les participants font correspondre des cartes qualité à leurs propres propositions &quot;Commencer-Arrêter-Continuer&quot;.",
desc: "Préparation: 20 cartes qualité, càd des fiches cartonnées colorées avec un unique mot \
comme <i>drôle, claire, sérieuse, géniale, dangereuse, désagréable</i>.<br> \
Chaque membre de l'équipe doit écrire au moins 9 cartes : 3 de chaque pour les choses \
à commencer à faire, à continuer et à arrêter. Choisir une personne qui sera le premier juge. \
Le juge retourne la première carte qualité. Chaque membre sélectionne alors parmi ses cartes \
celle qui correspond le mieux à ce mot et la pose face cachée sur la table. \
Le dernier à se décider doit remettre la carte dans son jeu. Le juge mélange toutes \
les cartes proposées, les retourne une par une et décide laquelle correspond le plus = la gagnante. \
Toutes les cartes sont jetées. La personne ayant proposée la carte gagnante reçoit \
la carte qualité. La personne à la gauche du juge devient alors le nouveau juge.<br> \
Arrêter lorsque tout le monde est à court de cartes (6-9 tours). Celui qui a le plus \
de cartes qualité gagne. Débriefer en demandant quelles sont les principales conclusions. \
<br>(Basé sur le jeu 'Apples to Apples')",
source: source_agileRetrospectives,
duration: "30-40",
suitable: "iteration, introverts"
};
all_activities[6] = {
phase: 1,
name: "Mad Sad Glad",
summary: "Collecter les évènements durant lesquels les membres de l'équipe se sont sentis en colère (mad), tristes (sad), ou contents (glad) et trouver les raisons.",
desc: "Affichez trois affiches intitulées 'en colère' (mad), 'triste' (sad), et 'content' (glad) ou '>:), :(, :)'. \
Les membres de l'equipe écrivent un évènement par carte lorsqu'ils ont ressenti ce sentiment, avec un code couleur pour chaque type de sentiment. \
Lorsque le temps est écoulé demander à chacun de placer ses cartes sur les affiches appropriées. Regrouper les cartes sur \
chaque affiche puis demander au groupe de nommer chaque regroupement. <br>\
Terminer en demandant :\
<ul>\
<li>Qu'en ressort-il ? Qu'est-ce qui est inattendu ?</li>\
<li>Qu'est-ce qui a rendu cette tâche difficile ? Qu'est-ce qui a été amusant ?</li>\
<li>Reconnaissez vous des motifs / modèles ? Que signifient-ils pour vous en tant qu'équipe ?</li>\
<li>Des suggestions sur comment continuer ?</li>\
</ul>",
source: source_agileRetrospectives,
duration: "15-25",
suitable: "iteration, release, project, introverts"
};
all_activities[7] = {
phase: 2,
name: "5 Pourquoi",
alternativeName: "La source des maux",
summary: "Examiner de près la cause racine de problèmes en vous demandant à plusieurs reprises 'Pourquoi ?'",
desc: "Diviser les participants en petits groupes (<= 4 personnes) et donner à chaque groupe \
l'un des problèmes le plus identifié précédemment. Instructions pour le groupe :\
<ul>\
<li>Une personne demande aux autres 'Pourquoi est-ce arrivé ?' à plusieurs reprises pour trouver la cause racine ou une suite d'évènements</li>\
<li>Notez la cause racine trouvée (souvent la réponse au 5ème 'Pourquoi ?')</li>\
</ul>\
Laisser le groupe partager ses conclusions.",
source: source_agileRetrospectives,
duration: "15-20",
suitable: "iteration, release, project, root_cause"
};
all_activities[8] = {
phase: 2,
name: "Matrice d'apprentissage",
summary: "Les membres de l'équipe 'brainstorment' sur 4 catégories afin de rapidement lister des problèmes.",
desc: "Après avoir discuté des données de la Phase 2, afficher un tableau à 4 quadrants intitulés \
':)', ':(', 'Idée !', et 'Appréciation'. Distribuez des post-its. \
<ul>\
<li>Les membres de l'équipe peuvent contribuer à chaque quadrant. Une idée par post-it.</li>\
<li>Regrouper les notes.</li>\
<li>Distribuer 6 à 10 points aux participants pour voter et élire les idées les plus importantes.</li>\
</ul>\
Cette liste sera celle utilisée pour la Phase 4.",
source: source_agileRetrospectives,
duration: "20-25",
suitable: "iteration"
};
all_activities[9] = {
phase: 2,
name: "Brainstorming / Filtrage",
summary: "Générer de nombreuses idées et filtrer les suivant vos critères.",
desc: "Exposer les règles du brainstorming, et le but : générer un maximum de nouvelles idées \
qui seront filtrées <em>après</em> le brainstorming.\
<ul>\
<li>Laisser les participants écrire leurs idées pendant 5 à 10 minutes</li>\
<li>Faire des tours de table en demandant de façon répétée une idée à chacun, jusqu'à ce que toutes les idées soient au tableau</li>\
<li>Demander ensuite des filtres (exemple : coût, temps demandé, unicité des concepts, pertinence par rapport à l'activité, ...). \
Laisser le groupe en choisir 4.</li>\
<li>Appliquer chaque filtre et marquer les idées qui passent les 4 filtres.</li>\
<li>Quelles idées le groupe veut-il faire avancer ? Est-ce que quelqu'un se sent particulièrement concerné par une de ces idées ? \
Autrement prendre une décision à la majorité.</li>\
</ul>\
Les idées sélectionnées rentrent en Phase 4.",
source: source_agileRetrospectives,
more: "<a href='http://www.mpdailyfix.com/the-best-brainstorming-nine-ways-to-be-a-great-brainstorm-lead/'>\
Nine Ways To Be A Great Brainstorm Lead</a>",
duration: "40-60",
suitable: "iteration, release, project, introverts"
};
all_activities[10] = {
phase: 3,
name: "Le Cercle des Questions",
summary: "Questions et r&eacute;ponses font le tour du cercle de l'&eacute;quipe - une excellente fa&ccedil;on de parvenir à un consensus.",
desc: "Tout le monde s'asseoit en cercle. Commencer en annonçant que vous allez faire un tour de questions pour d&eacute;couvrir \
ce que vous voulez faire en tant que groupe. Vous commencez par poser la premi&egrave;re question &agrave; votre voisin, par exemple \
'Quelle est la chose la plus importante que nous devrions d&eacute;marrer lors de la prochaine it&eacute;ration ?' Votre \
voisin r&eacute;pond et pose une question li&eacute;e &agrave; son voisin. Arr&ecirc;tez-vous quand un consensus &eacute;merge ou \
que le temps est &eacute;coul&eacute;. Faites au moins un tour, qu'on puisse entendre tout le monde !",
source: source_agileRetrospectives,
duration: "30+ groupsize",
suitable: "iteration, release, project, introverts"
};
all_activities[11] = {
phase: 3,
name: "D&eacute;marrer, Arr&ecirc;ter, Continuer",
summary: "R&eacute;fl&eacute;chir ensemble &agrave; ce que vous voulez d&eacute;marrer, arr&ecirc;ter ou continuer et garder les propositions les mieux not&eacute;es.",
desc: "Diviser le tableau en 3 colonnes nomm&eacute;es 'D&eacute;marrer', 'Continuer' and 'Arr&ecirc;ter'. \
Demander aux participants d'&eacute;crire des propositions concr&egrave;tes pour chaque cat&eacute;gorie - 1 \
id&eacute;e par carte. LEs laisser &eacute;crire en silence pendant quelques minutes. \
Puis chacun lit ses propositions &agrave; voix haute et les place dans la cat&eacute;gorie appropri&eacute;e. \
Mener une courte discussion sur les 20% d'id&eacute;es qui vous semblent les plus b&eacute;n&eacute;fiques. Voter en distribuant des points \
ou des croix &agrave; l'aide d'un marqueur, par exemple 1, 2, et 3 points &agrave; distribuer par personne. \
Les 2 ou 3 meilleures seront les actions &agrave; mener.\
<br><br>\
(Voir <a href='http://www.funretrospectives.com/open-the-box/'>Paulo Caroli's 'Open the Box'</a> pour une excellente alternative à cette activité.)",
source: source_agileRetrospectives,
duration: "15-30",
suitable: "iteration"
};
all_activities[12] = {
phase: 3,
name: "Objectifs SMART",
summary: "Formuler un plan d'action spécifique et mesurable.",
desc: "Présenter les <a href='http://en.wikipedia.org/wiki/SMART_criteria'>objectifs SMART</a> \
(Spécifique, Mesurable, Atteignable, Réaliste, défini dans le Temps) ainsi que des exemples d'objectifs \
plus ou moins SMART, par exemple 'Nous étudierons les stories avant des les accepter en en parlant avec le \
product owner tous les mercredi à 9h.' plutôt que 'Nous prendrons connaissance des stories avant qu'elles \
ne soit ajoutées au backlog du sprint'. <br>\
Créer des groupes par thématiques sur lesquelles l'équipe souhaite continuer à travailler. Chaque groupe identifie de 1 à 5 \
étapes concrètes pour atteindre l'objectif. Chaque groupe présente ses résultats. Tous les participants doivent \
s'accorder sur la compatibilité SMART des objectifs. Affiner et ratifier.",
source: source_agileRetrospectives,
duration: "20-60 groupsize",
suitable: "iteration, release, project"
};
all_activities[13] = {
phase: 4,
name: "La porte des retours - les chiffres",
summary: "Évaluer la satisfaction des participants à propos de la rétro sur une échelle de 1 à 5 en un minimum de temps.",
desc: "Placer des posts-its sur la porte numérotés de 1 à 5. 1 étant le plus haut et le meilleur score, 5 le plus bas et le pire. \
A la fin de la rétrospective, demander aux participants de placer un post-it sur le chiffre qui d'après eux \
correspond le mieux à la session. Le post-it peut être vide ou contenir un commentaire ou une suggestion.",
source: "ALE 2011, " + source_findingMarbles,
duration: "2-3",
suitable: "iteration, largeGroups"
};
all_activities[14] = {
phase: 4,
name: "Appréciations",
summary: "Les membres de l'équipe sont reconnaissants les uns envers les autres et concluent de manière positive.",
desc: "Commencer en remerciant de manière sincère l'un des participants. \
Cela peut concerner n'importe laquelle de ses contributions : aider l'équipe ou vous-même à résoudre un problème, ...<br />\
Inviter alors les autres à faire de même et attendre que quelqu'un se jette à l'eau. Arrêter quand personne n'a parlé pendant plus d'une minute.",
source: source_agileRetrospectives + " qui l'a adapté de 'The Satir Model: Family Therapy and Beyond'",
duration: "5-30 groupsize",
suitable: "iteration, release, project"
};
all_activities[15] = {
phase: 4,
name: "Aide, Gêne, Hypothèse",
summary: "Obtenir des retours concrets sur votre manière de faciliter.",
desc: "Préparer 3 feuilles de papier intitulées 'Aide', 'Gêne', et 'Hypothèse' \
(des suggestions de choses à essayer). \
Demander aux participants de vous aider à progresser et devenir un meilleur facilitateur en vous écrivant des post-its \
et en signant de leurs initiales pour que vous puissiez poser des questions par la suite.",
source: source_agileRetrospectives,
duration: "5-10",
suitable: "iteration, release"
};
all_activities[16] = {
phase: 4, // marche aussi pour 5
name: "SaMoLo (Plus de, Autant de, Moins de)",
summary: "Pour vous aider à redresser la barre dans votre rôle de facilitateur.",
desc: "Dessiner au tableau trois parties intitulées 'Plus de', 'Autant de', et 'Moins de'. \
Demander aux participants un coup de main pour vous aider à améliorer votre comportement : Écrire sur des post-its \
ce que vous devriez faire, plus souvent, moins souvent et ce qui est très bien comme ça. Lire et \
discuter un court moment des post-its collés dans chaque partie.",
more: "<a href='http://www.scrumology.net/2010/05/11/samolo-retrospectives/'>Les expériences de David Bland</a>",
source: "<a href='http://fairlygoodpractices.com/samolo.htm'>Fairly good practices</a>",
duration: "5-10",
suitable: "iteration, release, project"
};
all_activities[17] = {
phase:     0,
name:      "Lancement - Commentaires Amazon",
summary:   "Commenter l'itération sur Amazon. Ne pas oublier l'évaluation !",
desc:      "Chaque membre écrit un rapide commentaire qui comporte : \
<ul>\
<li>Un titre</li>\
<li>Un commentaire</li>\
<li>Une évaluation (5 étoiles pour le meilleur score) </li>\
</ul>\
Chacun lit son commentaire. Noter les évaluations sur un tableau.<br>\
Peut s'étendre à la rétrospective entière en demandant également ce qui est recommandé de faire et de ne pas faire pour l'itération.",
source:    "<a href='http://blog.codecentric.de/2012/02/unser-sprint-bei-amazon/'>Christian Hei&szlig;</a>",
duration:  "10",
suitable: "release, project"
};
all_activities[18] = {
phase:     1,
name:      "Hors-Bord / Voilier",
summary:   "Analyser les forces qui vous vont avancer et qui vous ralentissent.",
desc:      "Dessiner un bateau sur un tableau à feuilles. Le doter d'un bon moteur \
ainsi que d'une ancre très lourde. Les membres de l'équipe écrivent en silence sur des post-its ce qui a propulsé l'équipe vers l'avant \
et ce qui lui a fait faire du surplace. Une idée par post-it. Coller les post-its respectivement sur le moteur et l'ancre. \
Tous les lire et discuter de comment booster le 'moteur' et comment se passer de l’'ancre'.",
source:    source_innovationGames + ", trouvé à <a href='http://leadinganswers.typepad.com/leading_answers/2007/10/calgary-apln-pl.html'>Mike Griffiths</a>",
duration:  "10-15 par groupe",
suitable: "iteration, release"
};
all_activities[19] = {
phase:     2,
name:      "Le jeu de la perfection",
summary:   "Qu'est-ce qui pourrait faire que la prochaine itération obtienne une note de 10 sur 10 ?",
desc:      "Dessiner deux colonnes sur une feuille du tableau, une petite pour 'Évaluation' et une grande pour 'Actions'. \
Tout le monde évalue la dernière itération sur une échelle de 1 à 10. Ensuite chacun suggère quelles action(s) \
feraient que la prochaine itération obtienne un score de 10 sur 10.",
source:    "<a href='http://www.benlinders.com/2011/getting-business-value-out-of-agile-retrospectives/'>Ben Linders</a>",
suitable: "iteration, release"
};
all_activities[20] = {
phase:     3,
name:      "Fusion",
summary:   "Réduire le nombre d'actions possibles à seulement deux qui seront expérimentées par l'équipe.",
desc:      "Distribuer des cartes et des marqueurs. Dire à tout le monde d'écrire les deux actions qu'ils \
veulent essayer à la prochaine itération - aussi précises que possible \
(<a href='http://en.wikipedia.org/wiki/SMART_criteria'>SMART</a>). Ensuite tout le monde paire \
avec son voisin et ensemble ils doivent fusionner leurs actions en une seule liste avec \
deux actions. Les paires forment des groupes de 4. Puis 8. Maitenant ramasser les deux actions de tous les groupes \
et voter pour les deux finales.",
source:    "Lydia Grawunder &amp; Sebastian Nachtigall",
duration:  "15-30 groupSize",
suitable: "iteration, release, project, largeGroups"
};
all_activities[21] = {
phase:     0,
name:      "Prise de température",
summary:   "Les participants marquent leur 'température' (humeur) sur un tableau",
desc:      "Préparer un tableau avec un dessin de thermomètre allant de glacé à chaud \
en passant par la température du corps. \
Chaque participant marque son humeur au tableau.",
source:  source_unknown
};
all_activities[22] = {
phase:     4,
name:      "La porte des retours - Smileys",
summary:   "Mesurer la satisfaction des participants concernant la rétro en un minimum de temps en utilisant des smileys",
desc:      "Dessinez un ':)', ':|', et ':(' sur une feuille de papier et accrochez la sur la porte. \
À la fin de la rétrospective, demander aux participants de marquer leur niveau \
de satisfaction par rapport à la session par un 'x' sous le smiley correspondant.",
source:    "<a href='http://boeffi.net/tutorials/roti-return-on-time-invested-wie-funktionierts/'>Boeffi</a>",
duration:  "2-3",
suitable: "iteration, largeGroups"
};
all_activities[23] = {
phase:     3,
name:      "Liste des choses à faire",
summary:   "Les participants proposent et s'engagent sur des actions",
desc:      "Préparer un tableau avec 3 colonnes 'Quoi', 'Qui' et 'Échéance'. \
Demander à chaque participant à tour de rôle ce qu'ils souhaitent faire pour faire \
avancer l'équipe. Écrire la tâche, se mettre d'accord sur une date d'échéance \
et les laisser signer de leur nom. <br>\
Si quelqu'un suggère une action pour l'équipe entière, cette personne doit obtenir \
l'adhésion (et les signatures) des autres.",
source:    source_findingMarbles + ", inspiré par <a href='http://lwscologne.wordpress.com/2012/05/08/11-treffen-der-limited-wip-society-cologne/#Retrospektiven'>cette liste</a>",
duration:  "10-15 groupSize",
suitable: "iteration, release, smallGroups"
};
all_activities[24] = {
phase:     2,
name:      "Diagramme-Causes-Effets",
summary:   "Trouver la source des problèmes dont les origines sont difficiles à localiser \
et amènent à des discussions sans fin",
desc:      "Écrire le problème que vous souhaitez explorer sur un post-it et le coller au milieu d'un tableau blanc. \
Découvrir en quoi c'est un problème en demandant continuellement 'Et alors ?'. \
Découvrir les causes racines de ce problème en demandant continuellement 'Pourquoi (est-ce que cela se produit) ?'. \
Documenter vos conclusions en ajoutant des post-its et en explicitant la relation \
cause à effet avec des flèches. Chaque post-it peut avoir plus d'une raison et plus \
d'une conséquence.<br>\
Les cercles vicieux sont généralement de bons points de départ pour la prise d'actions. \
Si vous parvenez à casser leur mauvaise influence, vous pouvez gagner énormément.",
source:    "<a href='http://blog.crisp.se/2009/09/29/henrikkniberg/1254176460000'>Henrik Kniberg</a>",
more:      "<a href='http://finding-marbles.com/2011/08/04/cause-effect-diagrams/'>Corinna's experiences</a>",
duration:  "20-60 complexity",
suitable: "release, project, smallGroups, complex"
};
all_activities[25] = {
phase:     2,
name:      "Speed Dating",
summary:   "Chaque membre de l'équipe explore un sujet en détail dans une série de discussions en tête à tête",
desc:      "Chaque participant écrit un sujet qu'il souhaite approfondir, càd quelque chose \
qu'il aimerait voir changer. Former ensuite des paires et répartissez vous à travers la salle. \
Chaque paire discute des deux sujets et réfléchit aux actions possibles - 5 minute par\
participant (sujet) - l'un après l'autre. \
Après 10 minutes les paires se séparent et forment de nouvelles paires. Continuer \
jusqu'à ce que tout le monde ait discuté avec tout le monde. <br>\
Si le groupe a un nombre impair de membres, le facilitateur devient membre d'une paire \
mais son partenaire dispose de l'intégralité des 10 minutes sur son sujet.",
source:    source_kalnin,
duration:  "10 perPerson",
suitable: "iteration, release, smallGroups"
};
all_activities[26] = {
phase:     5,
name:      "Biscuits Chinois de Rétrospective",
summary:   "Amener l'équipe à manger à l'extérieur et susciter des discussions avec des biscuits chinois de rétrospective ('retrospective cookies')",
desc:      "Inviter l'équipe à manger à l'extérieur, de préférence Chinois si vous souhaitez \
rester dans le thème ;)<br>\
Distribuer des 'fortune cookies' (biscuits chinois renfermant un mot dans leur emballage) \
et faire un tour de table en ouvrant les biscuits et en discutant leur contenu. \
Quelques exemples de 'fortunes' :\
<ul>\
<li>Quelle a été la chose la plus efficace que vous ayez fait durant le Sprint, et pourquoi \
est-ce que cela a été si réussi ?</li>\
<li>Est-ce que le burndown reflète la réalité ? Pourquoi ?</li>\
<li>Que contribuez vous au sein de votre entreprise à la communauté de développeurs ? \
Que pourriez vous contribuer ?</li>\
<li>Quel a été le plus gros obstacle à l'équipe durant ce Sprint ?</li>\
</ul>\
Vous pouvez <a href='http://weisbart.com/cookies/'>commander des biscuits chinois de rétrospective chez Weisbart</a> \
ou cuisiner les vôtre, par exemple si l'Anglais n'est pas la langue natale de votre équipe.",
source:    "<a href='http://weisbart.com/cookies/'>Adam Weisbart</a>",
duration:  "90-120",
suitable: "iteration, release, smallGroups"
};
all_activities[27] = {
phase:     5,
name:      "Allez prendre l'air !",
summary:   "Allez dans le parc le plus proche, posez-vous des questions et parlez.",
desc:      "Fait-il beau dehors ? Oui ? Alors pourquoi rester enfermés quand on peut s'aérer les poumons \
et voir les choses sous un autre angle.<br /> \
Aller dehors et faire un tour dans le parc le plus proche. \
Vous parlerez naturellement du travail. C'est une bonne façon de changer vos habitudes lorsque tout fonctionne \
et que vous n'avez pas besoin de projeter des documents pour échanger.<br /> \
Les équipes matures peuvent très bien partager des idées et trouver des consensus malgré le contexte bien plus informel.",
source:    source_findingMarbles,
duration:  "60-90",
suitable: "iteration, release, smallGroups, smoothSailing, mature"
};
all_activities[28] = {
phase:     3,
name:      "Cercles d'Influence",
summary:   "Identifier des actions selon le niveau de contrôle que l'équipe souhaite avoir.",
desc:      "Preparer un tableau avec 3 cercles concentriques, chacun étant assez grand pour y coller des post-its.<br /> \
Nommer les cercles de l'intérieur vers l'extérieur :<br /> \
<ul>\
  <li>L'équipe contrôle - Actions directes</li>\
  <li>L'équipe influence - Actions de recommandation</li>\
  <li>Le reste - Actions de réponse/réaction</li>\
</ul> \
(&quot;Le reste&quot; représente l'environnement dans lequel l'équipe est embarquée.)<br /> \
Reprendre la liste des idées identifiée à l'étape précédente et les placer dans le cercle approprié. <br /> \
Les participants rédigent en binôme les actions possibles. Les encourager à se concentrer en priorité sur les éléments dans leur cercle d'influence.<br /> \
Les binômes collent ensuite leur plan d'actions à côté de chaque élément associé et le lise à voix haute. <br /> \
Mettez-vous d'accord sur le plan à essayer (via discussion, vote à la majorité, vote par gommette, etc).",
source:    "<a href='http://www.futureworksconsulting.com/blog/2010/07/26/circles-and-soup/'>Diana Larsen</a> \
qui l'a adapté de &quot;Seven Habits of Highly Effective People&quot; par Stephen Covey et \
'<a href='http://www.ayeconference.com/wiki/scribble.cgi?read=CirclesOfControlInfluenceAndConcern'>CircleofInfluenceAndConcern</a>' par Jim Bullock",
suitable: "iteration, release, project, stuck, immature"
};
all_activities[29] = {
phase:     5,
name:      "Plateau de discussion",
summary:   "Une approche structurée pour une discussion.",
desc:      "Un plateau de discussions ressemble un peu à un jeu de plateau. Il y a <a href='http://allankelly.net/dlgsheets/'>plusieurs grilles disponibles (EN)</a>.<br />\
En choisir une, l'imprimer dans le plus grand format possible (idéalement en A1) et suivre ses instructions.",
source:    "<a href='http://allankelly.net/dlgsheets/'>Allen Kelly chez Software Strategy</a>",
duration:  "90-120",
suitable: "iteration, release, project"
};
all_activities[30] = {
phase:     0,
name:      "Lancement - Dessinez l'itération",
summary:   "Les participants dessinent certains aspects de l'itération.",
desc:      "Distribuee des cartes et des marqueurs et choisir le sujet. Exemples de sujet : \
<ul> \
  <li>Comment avez-vous vécu l'itération ?</li>\
  <li>Quel a été le moment le plus marquant ?</li>\
  <li>Quel a été le plus gros problème ?</li>\
  <li>Qu'auriez-vous désiré ?</li>\
</ul>\
Demander à chaque membre de l'équipe de dessiner sa réponse. Coller tous les dessins sur un tableau. <br />\
Pour chaque dessin, laisser les gens deviner ce qu'il représente avant que son auteur ne l'explique.<br />\
Les métaphores apportent un nouvel éclairage et créent une compréhension partagée.",
source:    source_findingMarbles + ", adapté de \
<a href='http://vinylbaustein.net/2011/03/24/draw-the-problem-draw-the-challenge/'>Thorsten Kalnin</a> \
et Olivier Gourment",
duration:  "5 + 3 par personne",
suitable: "iteration, release, project"
};
all_activities[31] = {
phase:     0,
name:      "Gauge du projet par émoticônes",
summary:   "Aider les membres de l'équipe à exprimer leur sentiment vis à vis du projet et en traiter les causes au plus tôt.",
desc:      "Preparer un tableau avec des visages exprimant diverses émotions telles que :\
<ul>\
  <li>choc / surprise</li>\
  <li>nervosité / stress</li>\
  <li>impuissance / contrainte</li>\
  <li>confusion</li>\
  <li>joie</li>\
  <li>colère</li>\
  <li>dépassement</li>\
</ul>\
Laisser chaque membre de l'équipe choisir comment il se sent à propos du projet, c'est un moyen fun et efficace de faire remonter plus tôt les problèmes. <br />\
Vous pourrez en trouver les solutions dans les étapes qui suivent.",
source:    "Andrew Ciccarelli",
duration:  "10 pour 5 personnes",
suitable: "iteration, release"
};
all_activities[32] = {
phase:     1,
name:      "Fier(ère) & Désolé(e)",
summary:   "De quoi les membres de l'équipe sont ils fiers ou désolés ?",
desc:      "Afficher deux feuilles &quot;fier(e)&quot; et &quot;désolé(e)&quot;.<br />\
Les membres de l'équipe listent un commentaire pour chaque feuille.<br />\
Lorsque le temps est écoulé, faire un tour de table pour que chacun lise ses notes et les colle sous le thème approprié. <br/>\
Démarrer une courte conversation en demandant :\
<ul>\
  <li>Est ce que quelque chose vous a surpris ?</li>\
  <li>Quels motifs peut-on constater ? Que cela signifie-t-il en tant qu'équipe ?</li>\
</ul>",
source:    source_agileRetrospectives,
duration:  "10-15",
suitable: "iteration, release"
};
all_activities[33] = {
phase:     4,
name:      "La douche de l'appréciation",
summary:   "Ecouter les gens parler dans votre dos (et uniquement des bonnes choses) !",
desc:      "Par groupes de 3, chaque groupe déplace ses chaises pour que 2 chaises soient face à face et que la troisième leur tourne le dos.\
Quelque chose comme ça : >^<.<br />\
Les deux personnes dans les chaises qui se font face parlent de la troisième personne pendant qu'elle se douche durant 2 minutes.<br />\
Elles ne peuvent dire que des choses positives et rien de ce qu'il se dit ne peut être minimisé en en reparlant par la suite.<br />\
Faire trois tours pour que chacun puisse se doucher une fois !",
source:    '<a href="http://www.miarka.com/de/2010/11/shower-of-appreciation-or-talking-behind-ones-back/">Ralph Miarka</a>',
duration:  "10-15",
suitable: "iteration, release, matureTeam"
};
all_activities[34] = {
phase:     1,
name:      "L'auto-évaluation Agile",
summary:   "Evaluer où vous en êtes via une checklist.",
desc:      "Imprimer une checklist qui vous convient, exemples :\
<ul>\
  <li><a href='http://www.crisp.se/gratis-material-och-guider/scrum-checklist'>L'excellente checklist Scrum de Henrik Kniberg</a></li>\
  <li><a href='http://finding-marbles.com/2011/09/30/assess-your-agile-engineering-practices/'>L'auto-évaluation des pratiques agiles d'ingénierie (EN)</a></li>\
  <li><a href='http://agileconsortium.blogspot.de/2007/12/nokia-test.html'>Test Nokia (EN)</a></li>\
</ul>\
Les parcourir avec l'équipe et échanger pour savoir là où vous en êtes et si vous êtes sur la bonne voie. <br />\
C'est une bonne activité à pratiquer lorsque qu'une itération s'est déroulée sans événement majeur.",
source:    source_findingMarbles,
duration:  "10-25 minutes selon la liste",
suitable: "smallTeams, iteration, release, project, smoothGoing"
};
all_activities[35] = {
phase:     0,
name:      "Objectif reconnaissance",
summary:   "Formuler un objectif positif pour la session.",
desc:      "Concentrez-vous sur les aspects positifs au lieu des problèmes en définissant un objectif positif. Exemples : \
<ul>\
  <li>Trouvons plusieurs façons de renforcer notre travail d'équipe et nos process</li>\
  <li>Trouvons comment étendre nos bonnes pratiques et méthodes d'ingénierie</li>\
  <li>Nous identifierons et tenterons de trouver plus de rapports dans le travail qui fonctionnent</li>\
  <li>Nous identifierons là où nous avons produit le plus de valeur ajoutée au cours de la dernière itération afin d'agumenter celle que nous fournirons lors du prochain</li>\
</ul>",
source:    "<a href='http://www.ayeconference.com/appreciativeretrospective/'>Diana Larsen</a>",
duration:  "3 minutes",
suitable: "iteration, release, project"
};
all_activities[36] = {
phase:     2,
name:      "Souvenons-nous de l'avenir",
summary:   "Imaginer que la prochaine itération est parfaite. A quoi ressemble-t-elle ? Qu'avez-vous fait ?",
desc:      "<p>Imaginer que vous puissez voyager à travers le temps jusqu'à la fin de la prochaine itération (ou release).<br />\
Vous y apprenez que ça a été la meilleure itération et la plus productive que vous ayez fait !<br />\
Comment vos futurs vous vous la décrivent ? Qu'y voyez-vous et entendez-vous ?</p>\
<p>Donner un peu de temps à l'équipe pour imaginer cette situation et prendre quelques notes / mots clés pour aider leur mémoire.<br />\
  Ensuite, laisser chacun décrire sa vision de l'itération parfaite.<br />\
  Pousuivre ensuite avec la question &quot;Quels changements avons-nous réalisés pour atteindre un avenir si productif et satisfaisant ?&quot;<br />\
  Noter les réponses sur des cartes pour s'en servir dans la phase suivante.</p>",
source:    source_innovationGames + ", trouvé à <a href='http://www.ayeconference.com/appreciativeretrospective/'>Diana Larsen</a>",
suitable: "iteration, release, project"
};
all_activities[37] = {
phase:     3,
name:      "Vote par gommette - Garder, Abandonner, Démarrer",
summary:   "Phosphorer sur les comportements à garder, abandonner et démarrer et en garder les principaux.",
desc:      "Séparer un tableau en trois ensembles intitulés :\
<ul><li>Garder</li>\
  <li>Abandonner</li>\
  <li>Démarrer</li>\
</ul>\
Demander à vos participants d'écrire des propositions concrètes pour chaque catégorie avec une idée par thème.\
Les laisser écrire en silence pendant quelques minutes. <br />\
Chacun lis ensuite ses notes à voix haute et colle ses cartes dans la catégorie appropriée.<br />\
Mener la conversation pour identifiez 20% des idées qui seraient les plus bénéfiques. <br />\
Laisser chacun voter avec des gommettes ou avec un marqueur en pouvant distribuer 1, 2 ou 3 points aux idées (répartis comme bon lui semble).<br />\
Les 2 ou 3 principales idées seront votre plan d'actions.",
source:    source_agileRetrospectives,
duration:  "15-30",
suitable: "iteration"
};
all_activities[38] = {
phase:     3,
name:      "Vote par gommette - Fonctionne bien, Faire différemment",
summary:   "Phosphorer sur ce qui a bien fonctionné et ce qu'il faudrait faire différemment et gardez les meilleurs idées.",
desc:      "Intituler respectivement deux tableaux &quot;Fonctionne bien&quot; et &quot;Faire différemment&quot;.<br /> \
Demander à vos participants d'écrire des propositions concrètes pour chaque catégorie avec une idée par thème.\
Les laisser écrire en silence pendant quelques minutes.<br />\
Chacun lis ensuite ses notes à voix haute et colle ses cartes dans la catégorie appropriée.<br />\
Laisser chacun voter avec des gommettes ou avec un marqueur en pouvant distribuer 1, 2 ou 3 points aux idées (répartis comme bon lui semble).<br />\
Les 2 ou 3 principales idées seront votre plan d'actions.",
source:    source_agileRetrospectives,
duration:  "15-30",
suitable: "iteration"
};
all_activities[39] = {
phase:     4,
name:      "Plus & Delta",
summary:   "Chaque participant note une chose qu'il aime et une qu'il voudrait changer à propos de la rétro.",
desc:      "Préparer une tableau avec deux colonnes &quot;Plus&quot; et &quot;Delta&quot;. \
Demander à chaque participant d'écrire un aspect de la rétrospective qu'il a aimé et un qu'il souhaiterait modifier sur des cartes différentes. <br />\
Afficher et passer rapidement en revue les cartes en clarifiant leur sens exact \
et en identifiant la tendance majoritaire lorsque des notes vont dans deux directions opposées pour un même point.",
source:    "<a href='http://agileretrospectivewiki.org/index.php?title=Weekly_Retrospective_Simple_%2B_delta'>Rob Bowley</a>",
duration:  "5-10",
suitable: "release, project"
};
all_activities[40] = {
phase:     2,
name:      "Le banc du parc",
summary:   "Discussion de groupe avec un nombre variable de sous-groupes de participants.",
desc:      "Placer au moins 4 et au maximum 6 chaises en ligne afin qu'elles fassent face au groupe. <br />\
Expliquer les règles :<ul>\
  <li>Vous asseoir sur le banc lorsque vous voulez contribuer à la discussion</li>\
  <li>Le banc doit toujours avoir une place de libre</li>\
  <li>Lorsque la dernière place du banc est prise, quelqu'un doit obligatoirement partir et retourner dans le public</li>\
</ul>\
Démarrer en vous asseyant sur le &quot;banc&quot; et en vous demandant à voix haute \
ce que vous avez appris au cours de la phase précédente jusqu'à ce que quelqu'un vous rejoigne.<br />\
Arrêter l'activité lorsque vous voyez que les discussions cessent.<br />\
C'est une variante du &quot;bocal à poisson&quot;. C'est adapté pour les groupes de 10-25 personnes.",
source:    "<a href='http://www.futureworksconsulting.com/blog/2010/08/24/park-bench/'>Diana Larsen</a>",
duration:  "15-30",
suitable: "release, project, largeGroups"
};
all_activities[41] = {
phase:     0,
name:      "Cartes postales",
summary:   "Les participants choissisent une carte postale qui représente leurs pensées / sentiments",
desc:      "Amener un lot de cartes postales variées - au moins quatre fois plus que de participants. \
Les éparpiller dans la pièce et demander aux membre de l'équipe de choisir la carte postale qui représente \
le mieux leur vision de la dernière itération. Après avoir choisi, ils écrivent 3 mots-clefs qui \
décrivent la carte postale, par exemple sprint, sur une petite fiche. Tour à tour tout le monde accroche sa carte \
postale ainsi que sa fiche et explique son choix.",
source:    "<a href='http://finding-marbles.com/2012/03/19/retrospective-with-postcards/'>Corinna Baldauf</a>",
duration:  "15-20",
suitable: "iteration, release, project",
};
all_activities[42] = {
phase:     0,
name:      "Prise de position - Ouverture",
summary:   "Les participants se positionnent, pour indiquer leur niveau de satisfaction par rapport à l'itération",
desc:      "Créer une grande échelle (par exemple une longue ligne) sur le sol avec du rouleau adhésif. Définir une extrémité \
comme 'Génial' et l'autre comme 'Nul'. Inviter les participants à se positionner sur l'échelle \
en fonction de leur satisfaction à propos de la dernière itération. Psychologiquement, \
prendre position physiquement est différent de juste dire quelque chose. C'est plus 'réel'.<br> \
Vous pouvez réutiliser cette échelle de valeurs si vous terminez avec l'activité #44.",
source:    source_findingMarbles + ", inspiré par <a href='http://www.softwareleid.de/2012/06/eine-retro-im-kreis.html'>Christoph Pater</a>",
duration:  "2-5",
suitable: "iteration, release, project"
};
all_activities[43] = {
phase:     4,
name:      "Prise de position - Conclusion",
summary:   "Les participants se positionnent, pour indiquer leur niveau de satisfaction par rapport à la rétrospective",
desc:      "Créer une grande échelle (par exemple une longue ligne) sur le sol avec du rouleau adhésif. Définir une extrémité \
comme 'Génial' et l'autre comme 'Nul'. Invitez les participants à se positionner sur l'échelle \
en fonction de leur satisfaction à propos de la rétrospective. Psychologiquement, \
prendre position physiquement est différent de juste dire quelque chose. C'est plus 'réel'.<br> \
Voir l'activité #43 pour voir comment la retrospective avec la même échelle de valeurs",
source:    source_findingMarbles + ", inspiré par <a href='http://www.softwareleid.de/2012/06/eine-retro-im-kreis.html'>Christoph Pater</a>",
duration:  "2-5",
suitable: "iteration, release, project"
};
all_activities[44] = {
phase:     4,
name:      "Ravi & Surpris",
summary:   "Qu'est-ce qui a plu et/ou supris les participants pendant la retrospective",
desc:      "Faire simplement un rapide tour du groupe et inviter chaque participant à pointer du doigt une \
constatation de la retrospective qui les a soit surpris soit ravi (ou les deux).",
source:    source_unknown,
duration:  "5",
suitable: "iteration, release, project"
};
all_activities[45] = {
phase:     0,
name:      "Pourquoi des rétrospectives ?",
summary:   "Demander &quot;Pourquoi faisons-nous des rétrospectives ?&quot;",
desc:      "Revenir aux sources et commencer la rétrospective en demandant &quot;Pourquoi faisons nous ça ?&quot; \
Écrire toutes les réponses pour qu'elles soient visibles par tout le monde. Vous pourriez être surpris.",
source:    "<a href='http://proessler.wordpress.com/2012/07/20/check-in-activity-agile-retrospectives/'>Pete Roessler</a>",
duration:  "5",
suitable: "iteration, release, project"
};
all_activities[46] = {
phase:     1,
name:      "Vider la boîte aux lettres",
summary:   "Jetons un coup d'&#156;il aux notes collectées pendant le sprint",
desc:      "Mettre en place une 'boîte à lettres de rétrospective' au début de l'itération. Lorsque quelque-chose \
d'important se produit ou que quelqu'un a une idée d'amélioration, il l'écrit. \
et le 'poste'. (La 'boîte aux lettres' peut être également un endroit visible. Cela peut initier \
une discussion pendant l'itération.) <br>\
Parcourir toutes les notes et en discuter.<br>\
Une boîte aux lettres est bien pour les longues itérations et les équipes distraites.",
source:    source_skycoach,
more:      "<a href='http://skycoach.be/2010/06/17/12-retrospective-exercises/'>Article original</a>",
duration:  "15",
suitable: "release, project"
};
all_activities[47] = {
phase:     3,
name:      "Prenez position - Dancez sur le fil",
summary:   "Faites vous une idée de l'opinion de tout le monde et atteignez le consensus",
desc:      "Lorsque l'équipe ne parvient pas à trancher entre deux options, créer une grande échelle (ex : une longue ligne) \
au sol avec du scotch de peintre. Marquez une extrémité comme étant l'option A) et l'autre comme étant l'option B). \
Les membres de l'équipe se répartissent le long de l'échelle selon leur position entre les deux options. \
Ensuite, reformuler les options jusqu'à ce que l'une d'entre elles ait une majorité clairement visible.",
source:    source_skycoach,
more:      "<a href='http://skycoach.be/2010/06/17/12-retrospective-exercises/'>Article original</a>",
durationDetail:  "5 à 10' par décision",
duration:    "Courte",
stage:    "Storming, Norming",
suitable: "iteration, release, project"
};
all_activities[48] = {
phase:     3,
name:      "Vote par gommette - Etoile de mer",
summary:   "Collect what to start, stop, continue, do more and less of",
summary:   "Collectez quoi commencer, arrêter, continuer, faire plus et faire moins de",
desc:      "Dessiner 5 rayons sur un tableau, afin de former 5 sections. \
Nommez les 'Commencer à', 'Arrêter de', 'Continuer de', 'Faire plus de' and 'Faire moins de'. \
Les participants notent leurs propositions sur des post-its et les collent \
dans les sections appropriées. Après avoir regroupé les notes selon les idées \
faire un vote par gommettes pour les propositions à tenter.",
source:    "<a href='http://www.thekua.com/rant/2006/03/the-retrospective-starfish/'>Pat Kua</a>",
durationDetail:  "15 min",
duration:    "Medium",
stage:    "All",
suitable:  "iteration, release, project"
};
all_activities[49] = {
phase:     2,
name:      "V&#156;u accordé",
summary:   "Une féé vous accorde un v&#156;u, comment réalisez-vous qu'il a été exaucé ?",
desc:      "Donner 2 minutes à chaque participant pour trancher la réponse qu'ils donneraient à la question suivante :<br /> \
&quot;Une fée vous accorde un v&#156;u qui résoudra votre plus gros problème au travail au cours de la nuit. Que lui demandez-vous ?&quot;<br /> \
Poursuivre par : &quot;Vous arrivez au travail le lendemain matin. Vous constatez que la fée a exaucé votre v&#156;u. Comment pouvez-vous le dire ? \
Qu'est ce qui a changé ? &quot;<br /> \
Si la confiance au sein du group est importante, laisser chacun décrire son environnement de travail &quot;féérique&quot;.<br /> \
Si tel n'est pas le cas, demander à chacun de garder son souhait à l'esprit pour la prochaine étape et de suggérer des actions qui aideraient à d'approcher son souhait.",
source:    "Lydia Grawunder &amp; Sebastian Nachtigall",
durationDetail:  "15 min",
duration:    "Medium",
stage:    "Storming, Norming",
suitable:  "iteration"
};
