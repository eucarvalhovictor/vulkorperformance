/**
 * VULKOR PERFORMANCE - BASE DE DADOS OFICIAL DO PROJETO
 * Foco: Sublimação total, personalização para equipes/academias, tecidos respiráveis, duráveis e flexíveis
 */

const VULKOR_DATA = {
  // Tecidos principais trabalhados pela Vulkor
  fabrics: [
    {
      id: "respiravel",
      name: "Tecidos Respiráveis de Alta Tecnologia",
      badge: "RESPIRABILIDADE TÉRMICA",
      icon: "fa-solid fa-wind",
      desc: "Microcanais que evaporam o suor instantaneamente. Proteção solar e regulação térmica ideal para combates e treinos intensos."
    },
    {
      id: "durabilidade",
      name: "Alta Durabilidade & Resistência",
      badge: "RESISTÊNCIA AO ATRITO",
      icon: "fa-solid fa-shield-halved",
      desc: "Construção reforçada com suporte a tração extrema e atrito constante de tatame, mantendo o ajuste e durabilidade impecáveis."
    },
    {
      id: "performance",
      name: "Máxima Performance & Elasticidade",
      badge: "ALTA ELASTICIDADE",
      icon: "fa-solid fa-bolt-lightning",
      desc: "Elasticidade multidirecional que acompanha giros, chutes e transições no solo com conforto anatômico absoluto."
    }
  ],

  modalities: [
    {
      id: "rashguards",
      name: "Rash Guards",
      cardTitle: "Rash Guards",
      tag: "MANGA CURTA & LONGA",
      number: "01",
      tagline: "Rashguards de Compressão — Lisas, Estampas da Marca e 100% Personalizadas",
      description: "Linha de rashguards de manga curta e manga longa desenvolvidas para Jiu-Jitsu No-Gi, Muay Thai, MMA e treinos intensos. Confeccionadas em tecidos respiráveis de alta durabilidade e elasticidade, costuras reforçadas que não machucam a pele e sublimação total de alta definição que não racha nem desbota.",
      heroImage: "public/rashguard_personalizada.jpg",
      featuredImage: "public/rashguard_personalizada.jpg",
      images: [
        { url: "public/rashguard_personalizada.jpg", label: "Sua Personalização Aqui", desc: "Personalização e sublimação total da sua academia" }
      ],
      stats: {
        material: "Tecidos Respiráveis de Alta Performance",
        homologation: "Padrão Oficial de Competições",
        reinforcedSeams: "Costura Reforçada Anti-Atrito",
        sublimation: "Sublimação Total em Alta Definição"
      },
      article: {
        title: "Tecnologia Têxtil e Sublimação para Esportes de Combate",
        paragraphs: [
          "A Rashguard Vulkor foi projetada para atletas amadores e profissionais que exigem proteção total da pele contra atrito de tatame e compressão muscular para suporte durante os rounds mais intensos de treino.",
          "O grande diferencial da Vulkor é a confecção própria com tecnologia de sublimação total em tecidos respiráveis de altíssima durabilidade: as tintas penetram diretamente nas fibras em alta temperatura, garantindo cores vibrantes, toque zero e resistência que não craquela."
        ],
        bulletPoints: [
          "Modelos disponíveis em Manga Curta e Manga Longa com silicone de ajuste na cintura",
          "Tecidos respiráveis com evaporação acelerada do suor e proteção solar",
          "Costuras macias e ultra-reforçadas contra tração e puxões",
          "Opção de peças lisas, linha oficial Vulkor ou personalização total para sua academia"
        ]
      },
      sizeChart: [
        { size: "P", height: "1,60m a 1,70m", weight: "55kg a 68kg" },
        { size: "M", height: "1,70m a 1,80m", weight: "68kg a 80kg" },
        { size: "G", height: "1,78m a 1,88m", weight: "80kg a 94kg" },
        { size: "GG", height: "1,85m a 1,98m", weight: "+94kg" }
      ],
      gearHighlights: ["Rashguard Manga Curta Lisa", "Rashguard Manga Longa Pro", "Rashguard Sublimada Vulkor", "Rashguard Personalizada Academia"]
    },
    {
      id: "camisetas",
      name: "Camisetas",
      cardTitle: "Camisetas",
      tag: "ALTA DURABILIDADE & PERFORMANCE",
      number: "02",
      tagline: "Camisetas Técnicas de Treino e Casual — Lisas, Estampas da Marca e Personalizadas",
      description: "Camisetas confeccionadas com alto padrão de qualidade em tecidos respiráveis, de alta durabilidade e flexibilidade. Perfeitas para treino, preparação física, uniformização de equipes e uso casual com identidade marcial.",
      heroImage: "public/camiseta_personalizada.jpg",
      featuredImage: "public/camiseta_personalizada.jpg",
      images: [
        { url: "public/camiseta_personalizada.jpg", label: "Sua Personalização Aqui", desc: "Camisetas técnicas e casuais com a sua estampa" }
      ],
      stats: {
        material: "Tecidos Respiráveis de Alta Durabilidade",
        homologation: "Padrão de Confecção Própria Vulkor",
        reinforcedSeams: "Gola Reforçada e Pesponto Duplo",
        sublimation: "Sublimação Total de Alta Definição"
      },
      article: {
        title: "Tecidos Respiráveis e Versatilidade para Atletas",
        paragraphs: [
          "A linha de camisetas Vulkor atende tanto a rotina pesada de condicionamento físico quanto a identidade visual de praticantes fora dos tatames e ringues.",
          "Trabalhamos com os melhores tecidos respiráveis do mercado, garantindo absorção total de tinta sublimática, alta durabilidade e controle térmico para treinos de alta intensidade."
        ],
        bulletPoints: [
          "Tecidos respiráveis com máxima dispersão térmica para treinos e preparação física",
          "Acabamento premium, confortável, macio e altamente resistente",
          "Personalização de estampas para academias, equipes de competição e eventos",
          "Modelagem moderna com corte que valoriza a postura do atleta"
        ]
      },
      sizeChart: [
        { size: "P", height: "1,60m a 1,70m", weight: "55kg a 68kg" },
        { size: "M", height: "1,70m a 1,80m", weight: "68kg a 80kg" },
        { size: "G", height: "1,78m a 1,88m", weight: "80kg a 94kg" },
        { size: "GG", height: "1,85m a 1,98m", weight: "+94kg" }
      ],
      gearHighlights: ["Camiseta Striker Respirável", "Camiseta Casual Vulkor", "Camiseta Sublimada Equipe", "Regata Tática de Treino"]
    },
    {
      id: "kimonos",
      name: "Kimonos",
      cardTitle: "Kimonos",
      tag: "BJJ & KIMONOS",
      number: "03",
      tagline: "Kimonos Reforçados de Alta Durabilidade para Jiu-Jitsu",
      description: "Kimonos de alta resistência para Jiu-Jitsu com corte anatômico e ajuste perfeito sem sobras de pano para dificultar as pegadas adversárias no tatame. Gola emborrachada vulcanizada antimicrobiana e tecido reforçado pré-encolhido.",
      heroImage: "public/kimono_personalizado.jpg",
      featuredImage: "public/kimono_personalizado.jpg",
      images: [
        { url: "public/kimono_personalizado.jpg", label: "Sua Personalização Aqui", desc: "Kimono personalizado com patches e bordados da sua equipe" }
      ],
      stats: {
        material: "Tecido Reforçado Pré-Encolhido",
        homologation: "Homologado para Competições Oficiais",
        reinforcedSeams: "Costura Tripla Reforçada",
        warranty: "Garantia de Confecção Própria Vulkor"
      },
      article: {
        title: "Confecção Reforçada para o Jiu-Jitsu",
        paragraphs: [
          "O Jiu-Jitsu exige vestuário que acompanhe cada transição de guarda, raspagem e finalização sem prender movimentos. O corte ergonômico Vulkor elimina pontos de folga na gola e axilas, tornando a pegada do adversário substancialmente mais difícil.",
          "Nossa tecnologia de gola com núcleo emborrachado antimicrobiano seca rapidamente, prevenindo o acúmulo de odores e umidade típicos de treinos intensos."
        ],
        bulletPoints: [
          "Gola emborrachada resistente a deformações",
          "Calça em tecido reforçado com dupla camada nos joelhos",
          "Bordas confortáveis com acabamento de precisão",
          "Kimonos pré-encolhidos com padrão oficial de competição"
        ]
      },
      sizeChart: [
        { size: "A0", height: "1,55m a 1,65m", weight: "50kg a 62kg" },
        { size: "A1", height: "1,65m a 1,75m", weight: "63kg a 75kg" },
        { size: "A2", height: "1,75m a 1,85m", weight: "76kg a 88kg" },
        { size: "A3", height: "1,85m a 1,93m", weight: "89kg a 102kg" },
        { size: "A4", height: "1,90m a 2,00m", weight: "103kg a 120kg" }
      ],
      gearHighlights: ["Kimono Pro Comp Reforçado", "Kimono Light Training", "Faixas de Graduação Reforçadas", "Kimono Personalizado Equipe"]
    },
    {
      id: "shorts",
      name: "Shorts de Combate",
      cardTitle: "Shorts de Combate",
      tag: "MUAY THAI, MMA & NO-GI",
      number: "04",
      tagline: "Shorts e Bermudas de Luta com Alta Mobilidade e Flexibilidade",
      description: "Shorts desenvolvidos para Muay Thai, No-Gi Jiu-Jitsu, MMA e treinos em geral. Fendas laterais estratégicas, cós anatômico sem botões e painel elástico entrepernas que libera total amplitude para chutes altos e movimentos rápidos sem prender o quadril.",
      heroImage: "public/shorts_personalizado.jpg",
      featuredImage: "public/shorts_personalizado.jpg",
      images: [
        { url: "public/shorts_personalizado.jpg", label: "Sua Personalização Aqui", desc: "Shorts personalizados para academias e atletas" }
      ],
      stats: {
        material: "Tecidos Flexíveis e Anti-Rasgo",
        homologation: "Padrão Oficial para Artes Marciais",
        reinforcedSeams: "Fenda Lateral Anatômica e Costura Reforçada",
        sublimation: "Sublimação Total sem Perda de Cor"
      },
      article: {
        title: "Liberdade de Movimento para Luta e Treino",
        paragraphs: [
          "Nos esportes de combate, a liberdade de rotação do quadril é determinante para a potência dos golpes e para a agilidade das movimentações no solo.",
          "Os shorts Vulkor combinam tecidos leves, flexíveis e altamente resistentes, com abertura lateral e fechamento anatômico sem partes metálicas, proporcionando segurança máxima e zero restrição de movimento."
        ],
        bulletPoints: [
          "Fechamento anatômico com cordão interno e ajuste seguro",
          "Painel flexível entrepernas para chutes altos e guarda aberta",
          "Tecido respirável de secagem rápida que não acumula peso",
          "Disponível em versões lisas ou totalmente personalizadas sob encomenda"
        ]
      },
      sizeChart: [
        { size: "P / 38-40", height: "1,60m a 1,72m", weight: "Cintura: 78 - 84 cm" },
        { size: "M / 42", height: "1,70m a 1,80m", weight: "Cintura: 84 - 90 cm" },
        { size: "G / 44", height: "1,78m a 1,88m", weight: "Cintura: 90 - 98 cm" },
        { size: "GG / 46-48", height: "1,85m a 1,98m", weight: "Cintura: 98 - 108 cm" }
      ],
      gearHighlights: ["Shorts Flex Muay Thai", "Shorts No-Gi Combat", "Bermuda de Treino", "Shorts Personalizado Equipe"]
    },
    {
      id: "calcas",
      name: "Calças & Leggings",
      cardTitle: "Calças & Leggings",
      tag: "CALÇAS REFORÇADAS & SPATS",
      number: "05",
      tagline: "Calças Reforçadas de Kimono, Leggings e Spats de Compressão",
      description: "Calças avulsas em tecido reforçado anti-rasgo com proteção acolchoada nos joelhos, calças legging femininas de alta densidade e spats térmicos para treinos de luta, proporcionando conforto contínuo e proteção da pele.",
      heroImage: "public/calca_personalizada.jpg",
      featuredImage: "public/calca_personalizada.jpg",
      images: [
        { url: "public/calca_personalizada.jpg", label: "Sua Personalização Aqui", desc: "Calças reforçadas e leggings com sua marca" }
      ],
      stats: {
        material: "Tecidos Reforçados e de Compressão",
        homologation: "Regulamentos Oficiais de Luta",
        reinforcedSeams: "Reforço Duplo e Costuras Reforçadas",
        sublimation: "Tratamento Confortável e Proteção Solar"
      },
      article: {
        title: "Durabilidade, Resistência e Mobilidade",
        paragraphs: [
          "As calças de treino sofrem atrito intenso nos joelhos e virilha durante movimentações e quedas. O tecido reforçado da Vulkor é resistente a furos e tração contínua.",
          "O sistema de passadores com cordão firme garante ajuste seguro que não desata durante os treinos."
        ],
        bulletPoints: [
          "Reforço duplo de tecido acolchoado nos joelhos",
          "Costuras reforçadas nos pontos de tração",
          "Tecido reforçado com trama anti-rasgo",
          "Spats de compressão anatômicos que auxiliam na circulação"
        ]
      },
      sizeChart: [
        { size: "A0 / P", height: "1,55m a 1,65m", weight: "50kg a 62kg" },
        { size: "A1 / M", height: "1,65m a 1,75m", weight: "63kg a 75kg" },
        { size: "A2 / G", height: "1,75m a 1,85m", weight: "76kg a 88kg" },
        { size: "A3 / GG", height: "1,85m a 1,93m", weight: "89kg a 102kg" },
        { size: "A4", height: "1,90m a 2,00m", weight: "103kg a 120kg" }
      ],
      gearHighlights: ["Calça de Kimono Reforçada", "Calça Legging Alta Sustentação", "Spats de Compressão", "Spats Personalizado Equipe"]
    },
    {
      id: "macaquinho",
      name: "Macaquinho",
      cardTitle: "Macaquinho",
      tag: "FITNESS & COMBATE FEMININO",
      number: "06",
      tagline: "Macaquinho de Compressão Anatômico — Lisos e 100% Personalizados",
      description: "Macaquinho feminino inteiriço desenvolvido para treinos de alta intensidade, lutas e preparação física. Modelagem anatômica que abraça o corpo com sustentação superior, zero transparência e bolso funcional para celular.",
      heroImage: "public/macaquinho_personalizado.jpg",
      featuredImage: "public/macaquinho_personalizado.jpg",
      images: [
        { url: "public/macaquinho_personalizado.jpg", label: "Sua Personalização Aqui", desc: "Macaquinho personalizado para sua academia ou equipe" }
      ],
      stats: {
        material: "Tecidos Flexíveis de Alta Densidade",
        homologation: "Zero Transparência & Suporte Anatômico",
        reinforcedSeams: "Costura Reforçada Anti-Atrito",
        sublimation: "Sublimação Total e Estampas Exclusivas"
      },
      article: {
        title: "Alta Sustentação, Conforto e Zero Transparência",
        paragraphs: [
          "O macaquinho feminino Vulkor foi projetado para oferecer ajuste perfeito ao corpo, garantindo compressão confortável que não enrola na coxa nem limita a mobilidade.",
          "Com bolso lateral funcional e confecção em tecido respirável de alta densidade, proporciona total segurança em agachamentos, flexões e movimentos de combate."
        ],
        bulletPoints: [
          "Modelagem inteiriça anatômica com suporte no busto",
          "Bolso lateral utilitário de fácil acesso",
          "Tecido de alta densidade comprovadamente sem transparência",
          "Opções lisas ou 100% personalizadas com a marca da sua academia"
        ]
      },
      sizeChart: [
        { size: "PP / 34-36", height: "1,50m a 1,60m", weight: "45kg a 53kg" },
        { size: "P / 38", height: "1,58m a 1,68m", weight: "54kg a 62kg" },
        { size: "M / 40", height: "1,65m a 1,74m", weight: "63kg a 72kg" },
        { size: "G / 42-44", height: "1,70m a 1,80m", weight: "73kg a 85kg" }
      ],
      gearHighlights: ["Macaquinho Fight & Fitness", "Macaquinho Anatômico Pro", "Macaquinho Personalizado Equipe"]
    },
    {
      id: "body",
      name: "Body",
      cardTitle: "Body",
      tag: "SUSTENTAÇÃO & CONFORTO",
      number: "07",
      tagline: "Body Feminino Anatômico — Lisos e 100% Personalizados",
      description: "Body fitness e combate de alta performance. Ajuste anatômico firme que modela a silhueta, sustentação reforçada no busto e tecido flexível respirável para máxima liberdade de movimentos.",
      heroImage: "public/body_personalizado.jpg",
      featuredImage: "public/body_personalizado.jpg",
      images: [
        { url: "public/body_personalizado.jpg", label: "Sua Personalização Aqui", desc: "Body personalizado com sua marca e cores" }
      ],
      stats: {
        material: "Tecidos Respiráveis de Alta Compressão",
        homologation: "Ajuste Anatômico Seguro",
        reinforcedSeams: "Costuras Macias Anti-Atrito",
        sublimation: "Sublimação Digital em Alta Resolução"
      },
      article: {
        title: "Modelagem Anatômica e Liberdade de Movimento",
        paragraphs: [
          "Desenvolvido para atletas que buscam uma peça versátil, firme e elegante para treinos intensos e esportes de ação.",
          "O tecido respirável mantém a regulação térmica contínua, enquanto as costuras reforçadas evitam atrito com a pele durante giros e movimentações intensas."
        ],
        bulletPoints: [
          "Corte anatômico com excelente sustentação",
          "Tecido respirável de secagem rápida com proteção solar",
          "Costuras macias reforçadas que não machucam",
          "Personalização completa para turmas e academias"
        ]
      },
      sizeChart: [
        { size: "PP / 34-36", height: "1,50m a 1,60m", weight: "45kg a 53kg" },
        { size: "P / 38", height: "1,58m a 1,68m", weight: "54kg a 62kg" },
        { size: "M / 40", height: "1,65m a 1,74m", weight: "63kg a 72kg" },
        { size: "G / 42-44", height: "1,70m a 1,80m", weight: "73kg a 85kg" }
      ],
      gearHighlights: ["Body Anatômico Vulkor", "Body Fitness Combat", "Body Personalizado Equipe"]
    },
    {
      id: "cropped",
      name: "Cropped",
      cardTitle: "Cropped",
      tag: "MANGA CURTA & LONGA",
      number: "08",
      tagline: "Camisetas Cropped Femininas — Lisas e 100% Personalizadas",
      description: "Camisetas Cropped femininas desenvolvidas para aquecimento, treino e uso diário de atletas. Disponíveis em manga curta e manga longa, com toque macio, corte moderno e estampa personalizada.",
      heroImage: "public/cropped_personalizado.jpg",
      featuredImage: "public/cropped_personalizado.jpg",
      images: [
        { url: "public/cropped_personalizado.jpg", label: "Sua Personalização Aqui", desc: "Cropped personalizado com a sua estampa" }
      ],
      stats: {
        material: "Tecidos Leves, Respiráveis e Flexíveis",
        homologation: "Modelagem Moderna Esportiva",
        reinforcedSeams: "Gola e Barra com Reforço",
        sublimation: "Sublimação Total em Alta Definição"
      },
      article: {
        title: "Estilo, Conforto Térmico e Performance",
        paragraphs: [
          "O Cropped Vulkor combina caimento despojado com a tecnologia dos tecidos esportivos respiráveis da marca.",
          "Ideal para compor uniformes femininos em academias de lutas, cross-training e estúdios de artes marciais."
        ],
        bulletPoints: [
          "Versões disponíveis em Manga Curta e Manga Longa",
          "Tecido leve, respirável e de secagem rápida",
          "Caimento confortável que acompanha o movimento do tronco",
          "Estampas nítidas que não desbotam nem racham"
        ]
      },
      sizeChart: [
        { size: "PP / 34-36", height: "1,50m a 1,60m", weight: "45kg a 53kg" },
        { size: "P / 38", height: "1,58m a 1,68m", weight: "54kg a 62kg" },
        { size: "M / 40", height: "1,65m a 1,74m", weight: "63kg a 72kg" },
        { size: "G / 42-44", height: "1,70m a 1,80m", weight: "73kg a 85kg" }
      ],
      gearHighlights: ["Cropped Manga Curta Striker", "Cropped Manga Longa Combat", "Cropped Personalizado Academia"]
    },
    {
      id: "shorts_fem",
      name: "Shorts Feminino",
      cardTitle: "Shorts Feminino",
      tag: "ALTA MOBILIDADE & CONFORTO",
      number: "09",
      tagline: "Shorts Feminino de Treino — Cós Alto Anatômico sem Transparência",
      description: "Shorts esportivo feminino desenvolvido com ajuste firme e comprimento ideal que não sobe na coxa durante agachamentos, chutes ou corridas. Tecido flexível de alta densidade e secagem rápida.",
      heroImage: "public/shorts_fem_personalizado.jpg",
      featuredImage: "public/shorts_fem_personalizado.jpg",
      images: [
        { url: "public/shorts_fem_personalizado.jpg", label: "Sua Personalização Aqui", desc: "Shorts feminino personalizado com sua marca" }
      ],
      stats: {
        material: "Tecido Denso de Alta Elasticidade",
        homologation: "Zero Transparência Comprovada",
        reinforcedSeams: "Costuras Macias Reforçadas",
        sublimation: "Sublimação Total em Alta Resolução"
      },
      article: {
        title: "Ajuste Firme e Liberdade Total para Chutar e Movimentar",
        paragraphs: [
          "O shorts feminino Vulkor foi desenhado para proporcionar segurança absoluta em qualquer tipo de treino: do tatame à musculação e treinos de striking.",
          "O cós anatômico oferece sustentação firme sem apertar em excesso, mantendo a peça no lugar em todos os rounds."
        ],
        bulletPoints: [
          "Cós alto anatômico que não enrola",
          "Comprimento perfeito que não sobe durante o exercício",
          "Tecido encorpado que não fica transparente",
          "Estampa personalizada sob medida para sua equipe"
        ]
      },
      sizeChart: [
        { size: "PP / 34-36", height: "1,50m a 1,60m", weight: "45kg a 53kg" },
        { size: "P / 38", height: "1,58m a 1,68m", weight: "54kg a 62kg" },
        { size: "M / 40", height: "1,65m a 1,74m", weight: "63kg a 72kg" },
        { size: "G / 42-44", height: "1,70m a 1,80m", weight: "73kg a 85kg" }
      ],
      gearHighlights: ["Shorts Feminino Flex Vulkor", "Shorts Treino Anatômico", "Shorts Feminino Personalizado"]
    }
  ],

  products: [
    // RASH GUARDS
    {
      id: "prod-rash-01",
      name: "Rashguard Manga Curta Vulkor No-Gi",
      modality: "rashguards",
      modalityLabel: "Rash Guards",
      price: 189.00,
      oldPrice: 220.00,
      installments: "3x de R$ 63,00 sem juros",
      rating: 5.0,
      reviewsCount: 84,
      image: "public/rashguard_personalizada.jpg",
      images: [
        "public/rashguard_personalizada.jpg"
      ],
      badge: "MANGA CURTA",
      techBadge: "RESPIRÁVEL + SUBLIMAÇÃO",
      description: "Rashguard de manga curta em tecido respirável e flexível de alta durabilidade. Costuras reforçadas que não machucam a pele, fita de silicone na barra e sublimação em alta definição com 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Respirável de Alta Elasticidade", "Proteção Solar UV50+", "Silicone de Ajuste na Cintura", "Sublimação Total em Alta Definição"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-rash-02",
      name: "Rashguard Manga Longa Vulkor Pro Combat",
      modality: "rashguards",
      modalityLabel: "Rash Guards",
      price: 209.00,
      oldPrice: 240.00,
      installments: "3x de R$ 69,66 sem juros",
      rating: 4.9,
      reviewsCount: 72,
      image: "public/rashguard_personalizada.jpg",
      images: [
        "public/rashguard_personalizada.jpg"
      ],
      badge: "MANGA LONGA",
      techBadge: "COMPRESSÃO ANATÔMICA",
      description: "Rashguard de manga longa para proteção total dos braços contra atrito de tatame. Confeccionada com costuras reforçadas e estampa sublimada 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Respirável e Flexível", "Compressão Anatômica nos Braços", "Proteção Solar UV50+", "Silicone de Ajuste na Barra"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-rash-03",
      name: "Rashguard Personalizada para Equipes & Academias",
      modality: "rashguards",
      modalityLabel: "Rash Guards",
      price: 179.00,
      oldPrice: 210.00,
      installments: "3x de R$ 59,66 sem juros",
      rating: 5.0,
      reviewsCount: 116,
      image: "public/rashguard_personalizada.jpg",
      images: [
        "public/rashguard_personalizada.jpg"
      ],
      badge: "100% PERSONALIZADA",
      techBadge: "SUBLIMAÇÃO TOTAL",
      description: "Produzimos rashguards exclusivas para sua equipe, filiais e atletas. Envie sua logo e criamos o layout completo em manga curta ou longa com condições especiais para pedidos de atacado.",
      specs: ["Sublimação Digital em Alta Resolução", "Manga Curta ou Manga Longa", "Cores Oficiais da sua Equipe", "Pedido Mínimo Sob Consulta no WhatsApp"],
      sizes: ["P", "M", "G", "GG"]
    },

    // CAMISETAS
    {
      id: "prod-cam-01",
      name: "Camiseta Vulkor Striker Performance",
      modality: "camisetas",
      modalityLabel: "Camisetas",
      price: 139.00,
      oldPrice: 160.00,
      installments: "2x de R$ 69,50 sem juros",
      rating: 5.0,
      reviewsCount: 95,
      image: "public/camiseta_personalizada.jpg",
      images: [
        "public/camiseta_personalizada.jpg"
      ],
      badge: "RESPIRÁVEL",
      techBadge: "CONTROLE TÉRMICO",
      description: "Camiseta técnica em tecido respirável com microcanais de ventilação e estampa frontal 'SUA PERSONALIZAÇÃO AQUI'. Corte anatômico que acompanha os movimentos de treino.",
      specs: ["Tecido Respirável Leve", "Costura Macia e Reforçada", "Secagem Rápida", "Estampa Sublimada de Alta Durabilidade"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-cam-02",
      name: "Camiseta Casual Vulkor Heritage",
      modality: "camisetas",
      modalityLabel: "Camisetas",
      price: 129.00,
      oldPrice: 150.00,
      installments: "2x de R$ 64,50 sem juros",
      rating: 4.9,
      reviewsCount: 68,
      image: "public/camiseta_personalizada.jpg",
      images: [
        "public/camiseta_personalizada.jpg"
      ],
      badge: "CONFORTÁVEL",
      techBadge: "TOQUE MACIO",
      description: "Camiseta casual e pós-treino em tecido macio e encorpado com personalização sob medida. Toque suave, gola estruturada e modelagem anatômica que não deforma.",
      specs: ["Tecido Macio e Confortável", "Sensação Térmica Agradável", "Gola Reforçada", "Estampa Exclusiva Vulkor"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-cam-03",
      name: "Camisetas Personalizadas para Equipes",
      modality: "camisetas",
      modalityLabel: "Camisetas",
      price: 119.00,
      oldPrice: 140.00,
      installments: "2x de R$ 59,50 sem juros",
      rating: 5.0,
      reviewsCount: 130,
      image: "public/camiseta_personalizada.jpg",
      images: [
        "public/camiseta_personalizada.jpg"
      ],
      badge: "PERSONALIZADA",
      techBadge: "UNIFORMES EQUIPE",
      description: "Uniformes completos para turmas de artes marciais, instrutores e eventos. Estampas sob medida com a identidade visual da sua escola.",
      specs: ["Opções para Treino ou Uso Casual", "Sublimação Total de Alta Definição", "Desenvolvimento de Layout Incluso", "Condições Especiais no Atacado"],
      sizes: ["P", "M", "G", "GG"]
    },

    // MACAQUINHO
    {
      id: "prod-mac-01",
      name: "Macaquinho Feminino Vulkor Fight & Fitness",
      modality: "macaquinho",
      modalityLabel: "Macaquinho",
      price: 219.00,
      oldPrice: 259.00,
      installments: "3x de R$ 73,00 sem juros",
      rating: 5.0,
      reviewsCount: 88,
      image: "public/macaquinho_personalizado.jpg",
      images: [
        "public/macaquinho_personalizado.jpg"
      ],
      badge: "MACAQUINHO",
      techBadge: "ZERO TRANSPARÊNCIA",
      description: "Macaquinho feminino inteiriço com bolso lateral e alta sustentação. Modela o corpo com costuras confortáveis e tecido respirável sem transparência para treinos e lutas.",
      specs: ["Tecido Flexível de Alta Densidade", "Zero Transparência Comprovada", "Bolso Lateral para Celular", "Costuras Macias Anti-Atrito"],
      sizes: ["PP", "P", "M", "G"]
    },

    // BODY
    {
      id: "prod-bod-01",
      name: "Body Feminino Anatômico Vulkor",
      modality: "body",
      modalityLabel: "Body",
      price: 169.00,
      oldPrice: 199.00,
      installments: "3x de R$ 56,33 sem juros",
      rating: 5.0,
      reviewsCount: 74,
      image: "public/body_personalizado.jpg",
      images: [
        "public/body_personalizado.jpg"
      ],
      badge: "BODY FEMININO",
      techBadge: "ALTA SUSTENTAÇÃO",
      description: "Body esportivo feminino com ajuste firme e recorte anatômico. Conforto total para treinos intensos, com estampa 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Respirável e Flexível", "Sustentação Firme no Busto", "Costuras Reforçadas", "Sublimação em Alta Definição"],
      sizes: ["PP", "P", "M", "G"]
    },

    // CROPPED
    {
      id: "prod-crp-01",
      name: "Camiseta Cropped Vulkor Striker",
      modality: "cropped",
      modalityLabel: "Cropped",
      price: 119.00,
      oldPrice: 140.00,
      installments: "2x de R$ 59,50 sem juros",
      rating: 5.0,
      reviewsCount: 76,
      image: "public/cropped_personalizado.jpg",
      images: [
        "public/cropped_personalizado.jpg"
      ],
      badge: "CROPPED FEMININO",
      techBadge: "LEVE & FLEXÍVEL",
      description: "Camiseta Cropped feminina com caimento moderno, toque suave e estampa frontal 'SUA PERSONALIZAÇÃO AQUI'. Tecido respirável e flexível, ideal para aquecimento e treinos.",
      specs: ["Modelagem Cropped Esportiva", "Tecido Respirável e Confortável", "Estampa Sublimada em Alta Resolução", "Gola com Reforço"],
      sizes: ["PP", "P", "M", "G"]
    },

    // SHORTS FEMININO
    {
      id: "prod-shf-01",
      name: "Shorts Feminino Anatômico Vulkor Flex",
      modality: "shorts_fem",
      modalityLabel: "Shorts Feminino",
      price: 139.00,
      oldPrice: 165.00,
      installments: "2x de R$ 69,50 sem juros",
      rating: 4.9,
      reviewsCount: 61,
      image: "public/shorts_fem_personalizado.jpg",
      images: [
        "public/shorts_fem_personalizado.jpg"
      ],
      badge: "SHORTS FEMININO",
      techBadge: "FLEXÍVEL & ANATÔMICO",
      description: "Shorts feminino de treino com ajuste firme e comprimento ideal que não sobe na coxa. Conforto total para chutes, treinos funcionais e corrida com 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Flexível de Alta Mobilidade", "Cós Anatômico Firme", "Secagem Rápida", "Proteção Solar"],
      sizes: ["PP", "P", "M", "G"]
    },

    // KIMONOS BJJ
    {
      id: "prod-bjj-01",
      name: "Kimono Vulkor Pro Comp Reforçado",
      modality: "kimonos",
      modalityLabel: "Kimonos",
      price: 649.00,
      oldPrice: 729.00,
      installments: "6x de R$ 108,16 sem juros",
      rating: 5.0,
      reviewsCount: 84,
      image: "public/kimono_personalizado.jpg",
      images: [
        "public/kimono_personalizado.jpg"
      ],
      badge: "BEST SELLER",
      techBadge: "ALTA DENSIDADE",
      description: "Kimono de alta densidade para Jiu-Jitsu com corte anatômico e ajuste perfeito sem sobras de pano para dificultar as pegadas adversárias no tatame. Gola emborrachada antimicrobiana e estampa/patch 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Reforçado Pré-Encolhido", "Calça com Reforço Duplo", "Gola Emborrachada Antimicrobiana", "Aprovado para Competições Oficiais"],
      sizes: ["A0", "A1", "A2", "A3", "A4"]
    },
    {
      id: "prod-bjj-02",
      name: "Kimono Vulkor Light Training",
      modality: "kimonos",
      modalityLabel: "Kimonos",
      price: 489.00,
      oldPrice: 549.00,
      installments: "5x de R$ 97,80 sem juros",
      rating: 4.9,
      reviewsCount: 65,
      image: "public/kimono_personalizado.jpg",
      images: [
        "public/kimono_personalizado.jpg"
      ],
      badge: "LEVE & RESISTENTE",
      techBadge: "SECAGEM RÁPIDA",
      description: "Kimono leve projetado para treinos diários e pesagens em competições. Secagem rápida, reforço duplo nas axilas e personalização completa da equipe.",
      specs: ["Tecido Leve Pré-Encolhido", "Gola Emborrachada", "Calça com Cordão Firme", "Secagem Acelerada"],
      sizes: ["A0", "A1", "A2", "A3", "A4"]
    },

    // SHORTS & BERMUDAS
    {
      id: "prod-sho-01",
      name: "Shorts Flex Muay Thai & Striking Vulkor",
      modality: "shorts",
      modalityLabel: "Shorts de Combate",
      price: 179.00,
      oldPrice: 210.00,
      installments: "3x de R$ 59,66 sem juros",
      rating: 5.0,
      reviewsCount: 98,
      image: "public/shorts_personalizado.jpg",
      images: [
        "public/shorts_personalizado.jpg"
      ],
      badge: "MUAY THAI",
      techBadge: "ALTA MOBILIDADE",
      description: "Shorts profissional para Muay Thai, Kickboxing e Boxe com fenda lateral anatômica, cós confortável e estampa 'SUA PERSONALIZAÇÃO AQUI'. Amplitude total para chutes e joelhadas.",
      specs: ["Tecido Técnico Leve e Flexível", "Abertura Lateral Anatômica", "Cós Elástico com Cordão Interno", "Sublimação Total de Alta Definição"],
      sizes: ["P (38-40)", "M (42)", "G (44)", "GG (46-48)"]
    },
    {
      id: "prod-sho-02",
      name: "Shorts Fighter No-Gi & MMA Reforçado",
      modality: "shorts",
      modalityLabel: "Shorts de Combate",
      price: 189.00,
      oldPrice: 220.00,
      installments: "3x de R$ 63,00 sem juros",
      rating: 5.0,
      reviewsCount: 124,
      image: "public/shorts_personalizado.jpg",
      images: [
        "public/shorts_personalizado.jpg"
      ],
      badge: "MMA & NO-GI",
      techBadge: "ANTI-RASGO",
      description: "Short de luta com fendas laterais e painel interno flexível com estampa 'SUA PERSONALIZAÇÃO AQUI'. Não prende chutes altos nem transições no solo.",
      specs: ["Tecido Reforçado Anti-Rasgo", "Painel de Virilha Flexível", "Cós Firme com Cordão Interno", "Sem Partes Metálicas"],
      sizes: ["P (38-40)", "M (42)", "G (44)", "GG (46-48)"]
    },

    // CALÇAS & LEGGINGS / SPATS
    {
      id: "prod-cal-01",
      name: "Calça de Kimono Reforçada BJJ Vulkor",
      modality: "calcas",
      modalityLabel: "Calças & Leggings",
      price: 219.00,
      oldPrice: 249.00,
      installments: "3x de R$ 73,00 sem juros",
      rating: 5.0,
      reviewsCount: 89,
      image: "public/calca_personalizada.jpg",
      images: [
        "public/calca_personalizada.jpg"
      ],
      badge: "REFORÇADA",
      techBadge: "REFORÇO JOELHO",
      description: "Calça avulsa de kimono em tecido reforçado com estampa 'SUA PERSONALIZAÇÃO AQUI', proteção acolchoada dupla do joelho à barra e passadores com cordão firme.",
      specs: ["Tecido Reforçado Anti-Rasgo", "Reforço Duplo nos Joelhos", "Costuras Triplas Reforçadas", "Cordão de Amarração Firme"],
      sizes: ["A0", "A1", "A2", "A3", "A4"]
    },
    {
      id: "prod-cal-02",
      name: "Spats Térmico de Compressão Vulkor",
      modality: "calcas",
      modalityLabel: "Calças & Leggings",
      price: 169.00,
      oldPrice: 199.00,
      installments: "3x de R$ 56,33 sem juros",
      rating: 4.8,
      reviewsCount: 52,
      image: "public/calca_personalizada.jpg",
      images: [
        "public/calca_personalizada.jpg"
      ],
      badge: "SPATS TÉRMICO",
      techBadge: "COMPRESSÃO ANATÔMICA",
      description: "Calça de compressão térmica desenvolvida para homens e mulheres com estampa 'SUA PERSONALIZAÇÃO AQUI'. Evita queimaduras de atrito com o tatame e auxilia na circulação muscular.",
      specs: ["Tecido Respirável de Alta Compressão", "Costuras Macias que não Machucam", "Secagem Rápida", "Proteção Solar"],
      sizes: ["P", "M", "G", "GG"]
    }
  ]
};
