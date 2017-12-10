/*
NOTE: I'm not a taxonomist, so take this information with a grain of salt. Some phylogeny that could use some extra scrutiny are the following.
* S. purpurea purpurea
* D. filiformis tracyi
* D. finlaysoniana
*/

const rawTaxonomy = [
  {
    taxon: null,
    commonName: "general parameters",
    environment: {
      temperature: {
        ambient: [],
        soil: [],
        extremes: [],
        notes: null,
      },
      humidity: [50, 90],
      luminosity: [],
      moisture: [],
      airFlow: [],
      ph: [],
      soil: [],
      container: [],
      dormancyPeriod: null,
      propagation: [],
    },
    databases: {
      eol: null, // Encyclopedia of Life id
      itis: null, // ITIS taxonomic serial number
      usda: null, // USDA plants symbol
    },
    sources: [
      {
        text: "Barry Rice, <i>About Humidity</i>, The Carnivorous Plant FAQ (2007)",
        link: "http://www.sarracenia.com/faq/faq3440.html",
      }
    ],
  }, {
    taxon: "Byblis liniflora",
    commonName: "Rainbow Plant",
    environment: {
      temperature: [[null, null], [60, 85], [38, 100]],
      humidity: [50, 80],
      luminosity: [[8, 10], "full to partly  sunny"],
      moisture: ["damp, but not waterlogged"],
    },
    sources: [
      {
        text: "Brian Barnes, <i>Growing Byblis successfully</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Byblis.php",
      }, {
        text: "Peter D'Amato, <i>The Savage Garden: Cultivating Carnivorous Plants</i>, p184-185, 1998",
        link: "ISBN: 0-89815-915-6",
      }
    ],
    databases: {
      eol: 6359448,
    },
  }, {
    taxon: "Darlingtonia californica",
    commonName: "Cobra Lily",
    environment: {
      temperature: [[null, 62.6], [null, 80]],
      luminosity: [14],
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Darlingtonia californica</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Darlingtonia.php",
      }, {
        text: "Jennifer Brownfield, <i>Rearing Cobras</i>, Carnivorous Plant Newsletter 14(3):78-80 (1985)",
        link: "http://www.carnivorousplants.org/cpn/articles/CPNv14n3p78_80.pdf",
      }
    ],
    databases: {
      eol: 584644,
      itis: 22004,
      usda: "DACA5",
    },
  }, {
    taxon: "Utricularia subulata",
    commonName: "Zigzag Bladderwort",
    environment: {
      temperature: [[68, 86]],
      luminosity: ["medium (some shade)"],
    },
    sources: [
      {
        text: "Barry Rice, <i>About terrestrial Utricularia</i>, The Carnivorous Plant FAQ (2007)",
        link: "http://www.sarracenia.com/faq/faq5583.html",
      }
    ],
    databases: {
      eol: 577808,
      itis: 34465,
      usda: "UTSU",
    },
  }, {
    taxon: "Pinguicula lusitanica",
    commonName: "Pale Butterwort",
    environment: {
      temperature: [[60, null]],
      propagation: ["by seed, self-polinating, homophyllus bi or triannual species"],
    },
    sources: [
      {
        text: "<i>Growing warm temperate Pinguicula</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Pings_WarmTemp.php",
      }, {
        text: "<i>Pinguicula lusitanica</i>, A World of Pinguicula",
        link: "http://www.pinguicula.org/pages/plantes/pinguicula_lusitanica.htm",
      }
    ],
    databases: {
      eol: 5652048,
    },
  }, {
    taxon: "Proboscidea parviflora var. hohokamiania",
    commonName: "Devil's Claw",
    environment: {
      temperature: ["heat tolerant"],
    },
    sources: [
      {
        text: "<i>Growing Ibicella and Proboscidea</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Ibicella.php",
      }
    ],
    databases: {
      itis: 833964,
      usda: "PRPAH",
    },
  }, {
    taxon: "Drosera rotundifolia",
    commonName: "Round-Leafed Sundew",
    environment: {
      temperature: [[60, 90], "goes dormant below 60"],
      humidity: [50, 60],
      luminosity: ["as much as possible; will flower >16 hr photoperiod"],
    },
    sources: [
      {
        text: "Aaron May, <i>Drosera rotundifolia 'Charles Darwin'</i>, The Sundew Grow Guides",
        link: "http://www.growsundews.com/sundews/rotundifolia_charles_darwin.html",
      }
    ],
    databases: {
      eol: 593301,
    },
  }, {
    taxon: "Drosera filiformis tracyi",
    commonName: "Thread-Leafed Sundew, white form",
    environment: {
      temperature: ["USDA zone 6-9, with winter protection. Most likely need a wintering to germinate seeds."],
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Drosera filiformis and Drosera tracyi</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/D_filiformis.php",
      }, {
        text: "Barry Rice, <The Thread-leaf Sundews Drosera Filiformis and Drosera Tracyi</i>, International Carnivorous Plant Society",
        link: "http://www.sarracenia.com/pubs/cpn40-4-16.pdf",
      }
    ],
    databases: {
      eol: 481344,
      itis: 527788,
      usda: "DRTR4",
    },
  }, {
    taxon: "Drosera capensis",
    commonName: "Cape Sundew, typical form",
    environment: {
      temperature: [[45, 90]],
      humidity: [50, null],
      luminosity: ["will turn red with 16hr photoperiod"],
    },
    sources: [
      {
        text: "Aaron May, <i>Drosera capensis varieties</i>, The Sundew Grow Guides",
        link: "http://www.growsundews.com/sundews/Drosera_capensis.html",
      }
    ],
    databases: {
      eol: 5470948,
      itis: 896168,
      usda: "DRCA14",
    },
  }, {
    taxon: "Sarracenia leucophylla",
    commonName: "White-topped Pitcher Plant",
    environment: {
      temperature: ["needs seasons, summer - mid 90's, winter - can tolerate freezing"],
      luminosity: ["full sun"],
    },
    sources: [
      {
        text: "<i>Growing Sarracenia leucophylla</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/S_leucophylla.php",
      }
    ],
    databases: {
      eol: 584635,
    },
  }, {
    taxon: "Nepenthes (N. maxima x N. northiana)",
    commonName: "Miranda",
    environment: {
      temperature: [[68, 95], "fairly wide temperature range. It does best with warm to hot days and cool nights, but avoid longer periods of cold night time temperatures"],
      humidity: ["consistently high humidity"],
      luminosity: [13, "consistent, low-intensity illumination, or at least indirect sunlight"],
    },
    sources: [
      {
        text: "David P. Evans, <i>Nepenthes maxima ‘Lake Poso’</i>, Carnivorous Plant Newsletter 38(1):12-22 (2009)",
        link: "http://www.carnivorousplants.org/cpn/Species/v38n1p12_22.html",
      }, {
        text: "Jeff Shafer, <i>Cultivation of Nepenthes Northiana</i>, Carnivorous Plant Newsletter 32(2):49-51 (2003)",
        link: "http://www.carnivorousplants.org/cpn/articles/CPNv32n2p49_51.pdf",
      }
    ],
    hybrid: 896583,
    896594: 896594,
  }, {
    taxon: "Sarracenia purpurea purpurea",
    commonName: "Northern Purple Pitcher Plant",
    environment: {
      temperature: [[-20, null], "most cold hardy of the <i>Sarracenia</i>, can survive USDA zone 5 and colder"],
      luminosity: ["bright, or full sun"],
      soil: "live sphagnum",
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Sarracenia purpurea and S. rosea</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/S_purpurea.php",
      }, {
        text: "John Brittnacher, <i>Growing Sarracenia</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Sarracenia.php",
      }
    ],
    databases: {
      eol: 1249326,
      itis: 195652,
      usda: "SAPUP6",
    },
  }, {
    taxon: "Drosera binata",
    commonName: "t-form",
    environment: {
      luminosity: ["strong light"],
      moisture: ["medium wet to sodden during growth periods, and some moisture during dormancy"],
      ph: ["acidic"],
    },
    sources: [
      {
        text: "I. Gilbert, <i>Drosera Binata</i>, Carnivorous Plant Newsletter 13(3):74-76 (1984)",
        link: "http://carnivorousplants.org/cpn/articles/CPNv13n3p74_76.pdf",
      }
    ],
  }, {
    taxon: "Sarracenia rubra ssp. gulfensis",
    commonName: "ancestral x giant",
    databases: {
      itis: 195665,
      usda: "SARUG",
    },
  }, {
    taxon: "Nepenthes ventricosa x (singalana x aristolochioides)",
    hybrid: [896638, [896617, 896517]],
  }, {
    taxon: "Drosera adelae",
    environment: {
      temperature: ["hot"],
      humidity: ["high humidity, but not necessarily as much as the other sisters"],
      luminosity: ["cited as found in wild with low light intensity, but lots of light cited by growers - see citations"],
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Drosera adelae and sisters</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/DroseraTropical.php",
      }, {
        text: "Roger Hoelter, <i>On the Care and (Not) Feeding of D. Adelae, Prolifera and Schizandra</i>, Carnivorous Plant Newsletter 17(1):22-24 (1988)",
        link: "http://www.carnivorousplants.org/cpn/articles/CPNv17n1p22_24.pdf",
      }, {
        text: "Dr. P. S. Lavarack, <i>Rainforest Drosera of North Queensland</i>, Carnivorous Plant Newsletter 8(2):61-64 (1979)",
        link: "http://www.carnivorousplants.org/cpn/articles/CPNv08n2p60_64.pdf",
      }
    ],
  }, {
    taxon: "Drosophyllum lusitanicum",
    commonName: "dewey pine",
    environment: {
      temperature: [[40, 75], [], [null, 100], "will survive a light frost"],
      humidity: ["not humid"],
      luminosity: [["1500 foot candles", null], "mostly sunny to full sun"],
      moisture: ["moist but dont let get soggy. well-drained."],
      dormancyPeriod: [true, "cease to grow during the hot, dry summers. planting medium must be drier during the dormant period."],
      soil: ["sphagnum moss (living and nonliving)", "sphagnum peat moss", "1 part sphagnum peat moss to 1 part perlite or 1 part sand", "1 part sphagnum peat moss to 3 parts sand or 3 parts perlite", "some growers add powdered limestone or dolomite at a rate of 1 teaspoon (5ml) per quart (liter) of medium"],
    },
    sources: [
      {
        text: "Tom Cahill, <i>Growing Drosophyllum lusitanicum</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Drosophyllum.php",
      }, {
        text: "Adrian Slack, <i>On Growing Drosphyllum Lusitanicum, The Portuguese Dewy Pine</i>, Carnivorous Plant Newsletter 8(2):64-67 (1979)",
      }, {
        text: "James and Patricia Pietropaolo, <i>Carnivorous Plants of the World</i>, pg 100-104 (1986)",
      }
    ],
    databases: {
      eol: 5471391,
    },
  }, {
    taxon: "Sarracenia psittacina",
    commonName: "parrot pitcher plant",
    environment: {
      temperature: ["is not freeze tolerant"],
      luminosity: ["full sun"],
      moisture: ["can handle submersion"],
    },
    sources: [
      {
        text: "Growing Sarracenia psittacina, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/S_psittacina.php",
      }, {
        text: "Barry Rice, <i>About Sarracenia psittacina, the parrot pitcher plant</i>",
        link: "http://www.sarracenia.com/faq/faq5536.html",
      }
    ],
    databases: {
      itis: 22001,
      usda: "SAPS2",
    },
    notes: "top-water regularly to maintain oxygen levels for the roots and to keep salt levels down in the soil",
  }, {
    taxon: "Dionaea muscipula 'Royal Red'",
    environment: {
      temperature: [[10.4, null], "cool"],
      humidity: ["humid"],
      luminosity: ["full sun"],
      moisture: ["wet, but not soggy. water level should be more than 5cm (2 in) below surface of soil."],
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Dionaea muscipula</i>",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Dionaea.php",
      }
    ],
    databases: {
      itis: 22008,
      usda: "DIMU4",
    },
  }, {
    taxon: "Pinguicula primuliflora",
    environment: {
      temperature: [[50, 86], [null, null], [32, 95], "doesn't have any special adaptations to survive freezing weather"],
      humidity: ["high humidity"],
      luminosity: ["indirect light or filtered, avoid direct sun exposure"],
      moisture: ["moist, can tolerate flooded conditions for a short period of time. a good aeration is especially necessary to avoid the prone rotting of the plants."],
    },
    databases: {
      itis: 34440,
      usda: "PIPR",
    },
    sources: [
      {
        text: "<i>Pinguicula primuliflora</i>, A World of Pinguicula",
        link: "http://www.pinguicula.org/A_world_of_Pinguicula_2/Pages/pinguicula_primuliflora.htm",
      }, {
        text: "<i>Growing warm temperate Pinguicula</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Pings_WarmTemp.php",
      }
    ],
  }, {
    taxon: "Pinguicula cyclosecta",
    environment: {
      temperature: [[68, 95], [null, null], [39.2, 100], "warm humid in summer, cooler and drier in winter. cool nights."],
      humidity: [[40, 80], "high humidity when carnivorous leaves, less when not."],
      luminosity: ["medium light, need seasonal light cues"],
      moisture: ["not boggy. water according to leaf type, not season. when the plants have carnivorous leaves, they need to be kept moist and enjoy high humidity although they do fine at 20% RH. Succulent leaves means they need less water, keep soild lightly damp. Can be totally dry if air is very humid."],
      airFlow: ["windy"],
      ph: ["alkaline"],
    },
    sources: [
      {
        text: "Johan van Marm, <i>'Here at last: Pinguicula cyclosecta</i>' The International Pinguicula Study Group, Newsletter No. 6, April 1995",
        link: "http://www.carnivorousplants.org/IPSG/IPSG_06.PDF",
      }, {
        text: "John Brittnacher, <i>Growing Mexican Pinguicula</i>, International Carnivorous Plant Society",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/Pings_Mexican.php",
      }, {
        text: "<i>Pinguicula cyclosecta</i>, A World of Pinguicula",
        link: "http://www.pinguicula.org/pages/plantes/pinguicula_cyclosecta.htm",
      }, {
        text: "Charles L. Powell, <i>Mexican Pings.</i>, Carnivorous Plant Newsletter 16(4):106-110 (1987)",
        link: "http://www.carnivorousplants.org/cpn/articles/CPNv16n4p106_110.pdf",
      }
    ],
  }, {
    taxon: "Nepenthes x maxima",
    databases: {
      itis: 896583,
    },
  }, {
    taxon: "Nepenthes singalana 'Tujuh'",
    databases: {
      itis: 896617,
    },
  }, {
    taxon: "Nepenthes ventricosa x glandulifera",
    hybrid: 896549,
    896638: 896638,
  }, {
    taxon: "Sarracenia 'Abandoned Hope'",
    sources: [
      {
        text: "Peter D'Amato, <i>Sarracenia</i> 'Abandoned Hope'",
        link: "http://www.carnivorousplants.org/cpn/Species/v29n2p46_49.html#hope",
      }
    ],
  }, {
    taxon: "Sarracenia. flava v. cuprea 'BH' x v. ornata 'Bulloch Co, GA'",
  }, {
    taxon: "Drosera dichotoma 'T-Form'",
  }, {
    taxon: "Sarracenia x 'Judith Hindle' (cross of Sarracenia (leucophylla X flava 'rugelli') X. S. purpurea 'chipola')",
    sources: [
      {
        text: 'James T. Robinson, <i>New CP Cultivar Received in 1992</i>, Carnivorous Plant Newsletter 22(1 & 2):38 (1993)',
        link: 'http://www.carnivorousplants.org/cpn/articles/CPNv22n1_2p38.pdf',
      }, {
        text: 'Doug Peel, <i>A Cure for the Common Cold</i>, Carnivorous Plant Newsletter 31(2):57-59 (2002)',
        link: 'http://www.carnivorousplants.org/cpn/articles/CPNv31n2p57_59.pdf',
      }
    ],
    // TODO: add these notes from A Cure for the Common Cold
    // bog gardens in temperate zones (up to 100F, fork leafed sundew dont survive below 15F regularly (but could)), temps logged for purpurea, leucophylla, s. flava, judith hindle, rubra subsp. ruba, oreophila, psittacina x leucophylla (35-45F that night, 30 ok too (pupurea mentioned))
  }, {
    taxon: "Sarracenia flava 'orange flower' x purpurea ssp. purpurea",
  }, {
    taxon: "Drosera intermedia x capillaris",
    hybrid: "DRIN3",
    "DRCA2": "DRCA2",
  }, {
    taxon: "Drosera filiformis 'FL Giant'",
    databases: {
      itis: 22012,
      usda: "DRFI",
    },
  }, {
    taxon: "Cephalotus follicularis",
    databases: {
      itis: 896744,
    },
  }, {
    taxon: "Nepenthes sanguinea",
    databases: {
      itis: 896614,
    },
  }, {
    taxon: "Utricularia",
    databases: {
      itis: 34443,
      usda: "UTRIC",
    },
  }, {
    taxon: "Utricularia sandersonii",
    environment: {
      moisture: "The soil should be permanently moist--I keep my pots in trays filled with enough water so the water table is just a few cm beneath the soil surface.",
      soil: "Use either pure dead milled Sphagnum or a 2:1 peat-sand mix in a 5 cm (2\") pot.",
      temperature: "warm year round, around 20-30°C (68-86°F).If the plants are kept too cool they grow extremely slowly, while if overheated the flowers are pale in colour and do not last as long. Since they are found in shady places in the wild I give them medium light. While this means some shade in the greenhouse, the light available in most 4-6 fluorescent bulb terrarium set-ups is fine.",
    },
    sources: [
      {
        text: "<i>U. sandersonii--a Siren from Utricularia</a>, Bulletin of the A.C.P.S. 13:1, 6. (1994)",
        link: "http://www.sarracenia.com/pubs/sand.html",
      }
    ],
  }, {
    taxon: "Drosera",
    datbases: {
      itis: 22009,
      usda: "DROSE",
    },
  }, {
    taxon: "Nepenthes",
    databases: {
      itis: 564924,
      usda: "NEPEN",
    },
  }, {
    taxon: "Pinguicula",
    databases: {
      itis: 34433,
      usda: "PINGU",
    },
  }, {
    taxon: "Tillandsia",
    carnivorous: false,
    databases: {
      itis: 42359,
      usda: "TILLA2",
    },
  }, {
    taxon: "Tillandsia tenuifolia",
    carnivorous: false,
    databases: {
      itis: 565569,
      usda: "TITE",
    },
  }, {
    taxon: "Tillandsia tricolor",
    carnivorous: false,
  }, {
    taxon: "Tillandsia caliginosa",
    carnivorous: false,
  }, {
    taxon: "Tillandsia xerographica",
    databases: {
      itis: 803809,
    },
  }, {
    taxon: "Tillandsia xerographica x brachycaulos",
    carnivorous: false,
    hybrid: [803809, null],
  }, {
    taxon: "Tillandsia ehlersiana",
    carnivorous: false,
  }, {
    taxon: "Tillandsia captita 'Silver Rose'",
    carnivorous: false,
  }, {
    taxon: "Tillandsia paleacea x tectorum",
    carnivorous: false,
  }, {
    taxon: "Sarracenia",
    databases: {
      itis: 21992,
      usda: "SARRA",
    },
    environment: {
      dormancy: true,
      humidity: "high",
      moisture: "wet",
      soil: "live sphagnum is best",
    },
    sources: [
      {
        text: "Schnell, D.E. (1973) Growing Sarracenias. Carnivorous Plant Newsletter. 2(3):44-46",
        link: "http://www.carnivorousplants.org/cpn/articles/CPNv02n3p44_46.pdf",
      }
    ],
  }, {
    taxon: "Drosera intermedia",
    databases: {
      itis: 22013,
      usda: "DRIN3",
    },
  }, {
    taxon: "Drosera capillaris",
    databases: {
      itis: 22011,
      usda: "DRCA2",
    },
  }, {
    taxon: "Nepenthes ventricosa",
    databases: {
      itis: 896638,
    },
  }, {
    taxon: "Nepenthes glandulifera",
    databases: {
      itis: 896549,
    },
  }, {
    taxon: "Nepenthes maxima",
    databases: {
      itis: 896583,
    },
  }, {
    taxon: "Nepenthes northiana",
    databases: {
      itis: 896594,
    },
  }, {
    taxon: "sphagnum",
    databases: {
      itis: 15683,
      usda: "SPHAG2",
    },
  }, {
    taxon: "Nepenthes fusca",
    databases: {
      itis: 896547,
    },
  }, {
    taxon: "Nepenthes singalana",
    databases: {
      itis: 896617,
    },
  }, {
    taxon: "Nepenthes aristolochioides",
    databases: {
      itis: 896517,
    },
  }, {
    taxon: "Sarracenia rubra",
    databases: {
      itis: 22002,
      usda: "SARU4",
    },
  }, {
    taxon: "Nepenthes maxima",
    databases: {
      itis: 896583,
    },
  }, {
    taxon: "Pinguicula emarginata",
  }, {
    taxon: "Mimosa pudica",
    carnivorous: false,
    databases: {
      itis: 26790,
      usda: "MIPU8",
    },
  }, {
    taxon: "Drosophyllaceae",
    databases: {
      itis: 896867,
    },
  }, {
    taxon: "Drosera rotundifolia",
    databases: {
      itis: 22017,
      usda: "DRRO",
    },
    environment: {
      dormancy: true,
    },
  }, {
    taxon: "Drosera spatulata",
    databases: {
      usda: "DRSP3",
    },
    environment: {
      dormancy: "semi-dormancy",
      temperature: {
        ambient: [70, 80],
      },
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing the Drosera spatulata species complex</i>",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/D_spatulata.php",
      }
    ],
  }, {
    taxon: "Drosera tokaiensis",
    hybrid: ["DRSP3", "DRRO"],
    databases: {
      eol: 5471262,
    },
  }, {
    taxon: "Sarracenia jonesii",
    databases: {
      itis: 195667,
      usda: "SARUJ",
    },
  }, {
    taxon: "Drosera burmannii",
    databases: {
      eol: 5471289,
      usda: "DRBU3",
    },
    environment: {
      annual: true,
      temperature: {
        ambient: [70, 80],
      },
      soil: ["They can grow well in pure Sphagnum moss, live, long fibered or shredded, as well as the standard peat:sand \"CP mix\" which can be anything from 30% to 100% peat."],
      propagation: ["sow seeds on the surface. The soil surface should be lightly misted after the seeds are placed. It helps germination and settles the seed around large sand particles."],
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Subtropical Drosera</i>",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/D_subtropical.php",
      }
    ],
  }, {
    taxon: "Drosera finlaysoniana",
    databases: {
      eol: 2886784,
    },
    environment: {
      annual: true,
      temperature: {
        ambient: [80],
      },
      luminosity: ["bright"],
      moisture: ["When the plants get to a few cm tall, Drosera finlaysoniana tends to prefer drier soil and can die if the plants are too wet. However watch your plants carefully. There can be major differences in preferences depending on the source location of the seeds. For some you can even allow the pots to go almost dry between waterings. Plants native to other locations may require constant wet conditions."],
      soil: ["sandy. Drosera finlaysoniana does not do well in the typical sopping wet peat mix used for bog plants. A soil mix of mostly or even complete sand works best. Some people have told of success using an airy mix of peat and perlite."],
      propagation: ["Sow the seeds on the surface and put the pot in a very warm and bright location. Drosera finlaysoniana is an annual and it has been reported it never reproduces from root or leaf cuttings. You may prolong its life by cutting the top off and re-rooting. This does not always produce a healthy plant. It is best to start over again from seed. The plant is a strict annual and will die after setting seed."],
    },
    sources: [
      {
        text: "John Brittnacher, <i>Growing Drosera indica complex species</i>",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/D_indica.php",
      }, {
        text: "John Brittnacher, <i>The Drosera indica complex</i>",
        link: "http://www.carnivorousplants.org/cp/Drosera_indica_complex.php",
      }, {
        text: "John Brittnacher, <i>Growing Subtropical Drosera</i>",
        link: "http://www.carnivorousplants.org/howto/GrowingGuides/D_subtropical.php",
      }
    ],
  }
];

export default rawTaxonomy;
