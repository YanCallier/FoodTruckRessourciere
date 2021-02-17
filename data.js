data = {
  backGroundImage: "img/fond_transparent.png",
  introImage: "img/truck.svg",
  timesUp: 10 * 60,
  timesMalus: 60,
  landscapeMessage: "Veuillez passer en mode paysage pour jouer",
  enigmes: [
    {
      title: "Réduire ses déchets",
      welcomeMessage: "TEXTE D'INTRO MISSION",
      doc: "doc1",
      image: "test_poubelle.png",
      zones: {
        emballage: {
          top: "35%",
          left: "70%",
          width: "15%",
          height: "28%",
          border: "1px solid black",
          wrongText: "humm.. non ça c'est une banane",
        },
        produit: {
          top: "10%",
          left: "60%",
          width: "12%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le torchon ça marche pas",
        },
        bocal: {
          top: "60%",
          left: "50%",
          width: "20%",
          height: "35%",
          border: "1px solid black",
          wrongText: "Non la liste de courses ça marche pas",
        },
        bouteille: {
          top: "10%",
          left: "30%",
          width: "20%",
          height: "30%",
          border: "1px solid black",
          wrongText: "Non le yaourt ça marche pas",
        },
        frigoDuDesert: {
          top: "15%",
          left: "5%",
          width: "20%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le frigo du désert ça marche pas",
        },
        chocolat: {
          top: "60%",
          left: "5%",
          width: "20%",
          height: "30%",
          border: "1px solid red",
          wrongText: "Non le chocolat ça marche pas",
        },
      },
      questions: [
        {
          questionImage: "Trouve un déchet que tu peux refuser lors de ton achat.",
          answerImage: "emballage",
          qcm: {
            question:
              "Quelle quantité de déchet est produite en moyenne par un français chaque année ?",
            propositions: ["278 Kg", "344 Kg", "568 Kg", "690 Kg"],
            answer: "568 Kg",
            correction:
              "Un français produit chaque année 573 kg de déchets. Les objets dont vous n’avez pas besoin ou ceux à usage unique. Pour cela il faut prévoir des objets réutilisables (gourde, beewrap, sac en tissus..).",
          },
        },
        {
          questionImage:
            "Trouve un déchet que tu peux réduire en le fabriquant par toi-même.",
          answerImage: "produit",
          qcm: {
            question:
              "Avec du vinaigre je peux :",
            propositions: ["Fabriquer un produit multi-usage", "Faire la vaisselle", "Assouplir le linge", "Nettoyer le sol"],
            answer: "Fabriquer un produit multi-usage", "Assouplir le linge",
            correction:
              "Le vinaigre est un produit de base très économique qui remplis de multiples usages. Sa consommation en repensant ses besoins. Des produits de bases très économiques permettent répondre à de nombreuses utilités et d’éviter l’achat de produits transformés sur-emballés. ",
          },
        },
        {
            questionImage:
            "Trouve un déchet que tu peux réutiliser",
          answerImage: "bocal",
          qcm: {
            question:
              "Quel est le principal moyen de traitement des déchets en France ?",
            propositions: [
              "L'incinération",
              "Le recyclage",
              "L'enffouisement",
            ],
            answer: "L'incinération",
            correction:
              "Avant d’être un déchet, un objet peut trouver une nouvelle utilité. Vous pouvez l’utiliser en l’état ou en faire autre chose.",
          },
        },
        {
          questionImage:
            "Trouve un objet qui peut être recyclé.",
          answerImage: "bouteille",
          qcm: {
            question:
              "Quelle est la proportion de nos déchets qui sont recyclés aujourd’hui ? ",
            propositions: ["Fabriquer un produit multi-usage", "Faire la vaisselle", "Assouplir le linge", "Nettoyer le sol"],
            answer: "Fabriquer un produit multi-usage", "Assouplir le linge",
            correction:
              "Le tri n’est pas encore optimisé. Pour trier correctement, renseignez-vous auprès de votre collectivité.",
          },
        },
        {
          questionImage:
            "Trouve un objet qui peut être composté.",
          answerImage: "pomme",
          qcm: {
            question:
              "Quelle proportion de nos déchets ménagers sont compostables ?",
            propositions: [
              "5%",
              "10%",
              "15%",
              "27%",
            ],
            answer: "27%",
            correction:
              "Le compostage permet de valoriser 27% de nos déchets ménagers en engrais. Un compost bien géré reste sain et sans odeurs !",
          },
        },
      ],
    },
    {
      title: "Itinéraire d'un burger 2",
      welcomeMessage: "Bienvenue dans l'itinéraire d'un burger !",
      doc: "doc2",
      image: "img/enigmeTest.jpg",
      zones: {
        bananes: {
          top: "35%",
          left: "70%",
          width: "15%",
          height: "28%",
          border: "1px solid black",
          wrongText: "humm.. non ça c'est une banane",
        },
        torchon: {
          top: "10%",
          left: "60%",
          width: "12%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le torchon ça marche pas",
        },
        listeCourse: {
          top: "60%",
          left: "50%",
          width: "20%",
          height: "35%",
          border: "1px solid black",
          wrongText: "Non la liste de courses ça marche pas",
        },
        yaourt: {
          top: "10%",
          left: "30%",
          width: "20%",
          height: "30%",
          border: "1px solid black",
          wrongText: "Non le yaourt ça marche pas",
        },
        frigoDuDesert: {
          top: "15%",
          left: "5%",
          width: "20%",
          height: "40%",
          border: "1px solid black",
          wrongText: "Non le frigo du désert ça marche pas",
        },
        chocolat: {
          top: "60%",
          left: "5%",
          width: "20%",
          height: "30%",
          border: "1px solid red",
          wrongText: "Non le chocolat ça marche pas",
        },
      },
      questions: [
        {
          questionImage: "Retrouve un objet qui te permet d’économiser",
          answerImage: "listeCourse",
          qcm: {
            question:
              "Quelle quantité de plats non déballés est jetée par an pour une personne ?",
            propositions: ["7Kg", "2Kg", "10Kg", "5Kg"],
            answer: "7Kg",
            correction:
              "Une personne jette 7 kg de plat non déballé par an. Faire sa liste de course permet d’acheter seulement ce dont on a besoin.",
          },
        },
        {
          questionImage:
            "Retrouve un élément qui permet de conserver le pain plus longtemps",
          answerImage: "torchon",
          qcm: {
            question:
              "Quelle quantité de pain est gaspillée à la maison pour une personne ?",
            propositions: ["4Kg", "500g", "1Kg", "3Kg"],
            answer: "4Kg",
            correction:
              "Une personne jette 4 kg de pain par an en moyenne. Le pain se conserve plus longtemps dans un torchon, on peut aussi en faire du pain perdu.",
          },
        },
        {
          questionImage:
            "Retrouve un aliment qui se consomme encore 2 semaines après sa date de péremption.",
          answerImage: "yaourt",
          qcm: {
            question:
              "Le CO2 émis par la production d’un yaourt est équivalent à un trajet de :",
            propositions: [
              "12 km en voiture",
              "20 km en voiture",
              "3 km en voiture",
              "9 km en voiture",
            ],
            answer: "12 km en voiture",
            correction:
              "La production de nos aliments a nécessité des ressources et du transport. Lorsque l’on jette un produit, ce sont toutes ses ressources utilisées qui sont gaspillées.",
          },
        },
      ],
    },
  ],
};
