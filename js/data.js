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
      tagline: "Camisetas e Baby Looks — Lisas, Estampas da Marca e Personalizadas",
      description: "Camisetas em modelagem tradicional e baby look (manga curta e manga longa) confeccionadas com alto padrão de qualidade em tecidos respiráveis, de alta durabilidade e flexibilidade. Perfeitas para treino, preparação física, uniformização de equipes e uso casual com identidade marcial.",
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
      gearHighlights: ["Camiseta Striker Respirável", "Baby Look Manga Curta", "Baby Look Manga Longa", "Camiseta Sublimada Equipe"]
    },
    {
      id: "shorts",
      name: "Shorts de Combate",
      cardTitle: "Shorts de Combate",
      tag: "MUAY THAI, MMA & NO-GI",
      number: "03",
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
      tag: "LEGGINGS DE COMPRESSÃO & ALTA SUSTENTAÇÃO",
      number: "04",
      tagline: "Calças Legging Masculinas e Femininas — Alta Sustentação e Zero Transparência",
      description: "Calças legging masculinas e femininas em tecido respirável de alta densidade e compressão. Ajuste anatômico firme que não enrola nem deforma, cintura com alta sustentação e versões femininas comprovadamente sem transparência. Ideais para treinos de luta, funcional, musculação e uso diário.",
      heroImage: "public/calca_personalizada.jpg",
      featuredImage: "public/calca_personalizada.jpg",
      images: [
        { url: "public/calca_personalizada.jpg", label: "Sua Personalização Aqui", desc: "Calças legging com sua marca e cores" }
      ],
      stats: {
        material: "Tecidos Respiráveis de Alta Compressão",
        homologation: "Ajuste Anatômico que Não Enrola",
        reinforcedSeams: "Costuras Macias Anti-Atrito",
        sublimation: "Sublimação Total em Alta Definição"
      },
      article: {
        title: "Compressão, Conforto e Mobilidade",
        paragraphs: [
          "A calça legging Vulkor acompanha cada movimento sem prender o quadril: o tecido respirável de alta densidade mantém a regulação térmica e a elasticidade multidirecional durante agachamentos, transições no solo e corridas.",
          "A cintura com alta sustentação permanece no lugar sem desabar, enquanto as costuras macias evitam atrito e irritação na pele durante treinos intensos."
        ],
        bulletPoints: [
          "Tecido respirável de alta densidade com proteção solar",
          "Cintura de alta sustentação que não desaba nem aperta",
          "Versões femininas comprovadamente sem transparência",
          "Costuras macias reforçadas que não machucam a pele"
        ]
      },
      sizeChart: [
        { size: "P", height: "1,60m a 1,70m", weight: "55kg a 68kg" },
        { size: "M", height: "1,70m a 1,80m", weight: "68kg a 80kg" },
        { size: "G", height: "1,78m a 1,88m", weight: "80kg a 94kg" },
        { size: "GG", height: "1,85m a 1,98m", weight: "+94kg" }
      ],
      gearHighlights: ["Calça Legging Masculina", "Calça Legging Feminina", "Alta Sustentação & Zero Transparência", "Legging Personalizada Equipe"]
    },
    {
      id: "body",
      name: "Body",
      cardTitle: "Body",
      tag: "SUSTENTAÇÃO & CONFORTO",
      number: "05",
      tagline: "Body No-Gi Feminino de Manga Curta e Manga Longa — Lisos e 100% Personalizados",
      description: "Body no-gi feminino de manga curta e manga longa de alta performance. Ajuste anatômico firme que modela a silhueta, sustentação reforçada no busto e tecido flexível respirável para máxima liberdade de movimentos no tatame e na musculação.",
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
      gearHighlights: ["Body No-Gi Manga Curta", "Body No-Gi Manga Longa", "Body Anatômico Vulkor", "Body Personalizado Equipe"]
    },
    {
      id: "shorts_fem",
      name: "Shorts Feminino",
      cardTitle: "Shorts Feminino",
      tag: "ALTA MOBILIDADE & CONFORTO",
      number: "06",
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
    // ==========================================
    // MASCULINO
    // ==========================================
    {
      id: "prod-m-rash-mc-01",
      name: "Rashguard Manga Curta Vulkor No-Gi",
      audience: "masculino",
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
      description: "Rashguard masculina de manga curta em tecido respirável e flexível de alta durabilidade. Costuras reforçadas que não machucam a pele, fita de silicone na barra e sublimação em alta definição com 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Respirável de Alta Elasticidade", "Proteção Solar UV50+", "Silicone de Ajuste na Cintura", "Sublimação Total em Alta Definição"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-m-rash-ml-01",
      name: "Rashguard Manga Longa Vulkor Pro Combat",
      audience: "masculino",
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
      description: "Rashguard masculina de manga longa para proteção total dos braços contra atrito de tatame. Confeccionada com costuras reforçadas, compressão anatômica e estampa sublimada 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Respirável e Flexível", "Compressão Anatômica nos Braços", "Proteção Solar UV50+", "Silicone de Ajuste na Barra"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-m-cam-01",
      name: "Camiseta Vulkor Striker Performance",
      audience: "masculino",
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
      description: "Camiseta masculina técnica em tecido respirável com microcanais de ventilação e estampa frontal 'SUA PERSONALIZAÇÃO AQUI'. Corte anatômico que acompanha os movimentos de treino.",
      specs: ["Tecido Respirável Leve", "Costura Macia e Reforçada", "Secagem Rápida", "Estampa Sublimada de Alta Durabilidade"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-m-sho-01",
      name: "Shorts Flex Muay Thai & Striking Vulkor",
      audience: "masculino",
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
      description: "Short masculino para Muay Thai, Kickboxing e No-Gi com fenda lateral anatômica, cós confortável com cordão interno e estampa 'SUA PERSONALIZAÇÃO AQUI'. Amplitude total para chutes e joelhadas.",
      specs: ["Tecido Técnico Leve e Flexível", "Abertura Lateral Anatômica", "Cós Elástico com Cordão Interno", "Sublimação Total de Alta Definição"],
      sizes: ["P (38-40)", "M (42)", "G (44)", "GG (46-48)"]
    },
    {
      id: "prod-m-cal-01",
      name: "Calça Legging Masculina Vulkor Compressão",
      audience: "masculino",
      modality: "calcas",
      modalityLabel: "Calças & Leggings",
      price: 169.00,
      oldPrice: 199.00,
      installments: "3x de R$ 56,33 sem juros",
      rating: 4.9,
      reviewsCount: 66,
      image: "public/calca_personalizada.jpg",
      images: [
        "public/calca_personalizada.jpg"
      ],
      badge: "LEGGING",
      techBadge: "COMPRESSÃO ANATÔMICA",
      description: "Calça legging masculina de compressão em tecido respirável que auxilia na circulação muscular e evita queimaduras de atrito com o tatame. Ajuste anatômico firme que não enrola nem deforma.",
      specs: ["Tecido Respirável de Alta Compressão", "Costuras Macias que não Machucam", "Secagem Rápida", "Proteção Solar"],
      sizes: ["P", "M", "G", "GG"]
    },

    // ==========================================
    // FEMININO
    // ==========================================
    {
      id: "prod-f-body-mc-01",
      name: "Body No-Gi Manga Curta Vulkor",
      audience: "feminino",
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
      badge: "MANGA CURTA",
      techBadge: "ALTA SUSTENTAÇÃO",
      description: "Body no-gi feminino de manga curta com ajuste anatômico firme, sustentação reforçada no busto e tecido respirável de secagem rápida. Zero transparência para treinos e lutas.",
      specs: ["Tecido Respirável e Flexível", "Sustentação Firme no Busto", "Costuras Macias Anti-Atrito", "Sublimação em Alta Definição"],
      sizes: ["PP", "P", "M", "G"]
    },
    {
      id: "prod-f-body-ml-01",
      name: "Body No-Gi Manga Longa Vulkor",
      audience: "feminino",
      modality: "body",
      modalityLabel: "Body",
      price: 189.00,
      oldPrice: 220.00,
      installments: "3x de R$ 63,00 sem juros",
      rating: 4.9,
      reviewsCount: 58,
      image: "public/body_personalizado.jpg",
      images: [
        "public/body_personalizado.jpg"
      ],
      badge: "MANGA LONGA",
      techBadge: "PROTEÇÃO + SUSTENTAÇÃO",
      description: "Body no-gi feminino de manga longa que protege os braços do atrito de tatame com sustentação reforçada no busto, costuras macias anti-atrito e sublimação total de alta definição.",
      specs: ["Proteção dos Braços contra Atrito", "Sustentação Reforçada no Busto", "Tecido Respirável Zero Transparência", "Silicone de Ajuste"],
      sizes: ["PP", "P", "M", "G"]
    },
    {
      id: "prod-f-bbl-mc-01",
      name: "Baby Look Manga Curta Vulkor",
      audience: "feminino",
      modality: "camisetas",
      modalityLabel: "Baby Look",
      price: 119.00,
      oldPrice: 140.00,
      installments: "2x de R$ 59,50 sem juros",
      rating: 5.0,
      reviewsCount: 76,
      image: "public/cropped_personalizado.jpg",
      images: [
        "public/cropped_personalizado.jpg"
      ],
      badge: "MANGA CURTA",
      techBadge: "LEVE & FLEXÍVEL",
      description: "Baby look feminina de manga curta com caimento justo e moderno, toque macio e estampa frontal 'SUA PERSONALIZAÇÃO AQUI'. Tecido respirável ideal para aquecimento, treino e uso diário.",
      specs: ["Modelagem Baby Look Justa", "Tecido Respirável e Confortável", "Estampa Sublimada em Alta Resolução", "Gola com Reforço"],
      sizes: ["PP", "P", "M", "G"]
    },
    {
      id: "prod-f-bbl-ml-01",
      name: "Baby Look Manga Longa Vulkor",
      audience: "feminino",
      modality: "camisetas",
      modalityLabel: "Baby Look",
      price: 139.00,
      oldPrice: 160.00,
      installments: "2x de R$ 69,50 sem juros",
      rating: 4.9,
      reviewsCount: 64,
      image: "public/cropped_personalizado.jpg",
      images: [
        "public/cropped_personalizado.jpg"
      ],
      badge: "MANGA LONGA",
      techBadge: "TOQUE MACIO",
      description: "Baby look feminina de manga longa em tecido respirável e flexível, com modelagem justa que valoriza a silhueta e sublimação total que não racha nem desbota.",
      specs: ["Modelagem Baby Look de Manga Longa", "Tecido Leve de Secagem Rápida", "Costuras Macias Reforçadas", "Sublimação Total em Alta Definição"],
      sizes: ["PP", "P", "M", "G"]
    },
    {
      id: "prod-f-cam-01",
      name: "Camiseta Feminina Vulkor Striker",
      audience: "feminino",
      modality: "camisetas",
      modalityLabel: "Camisetas",
      price: 139.00,
      oldPrice: 160.00,
      installments: "2x de R$ 69,50 sem juros",
      rating: 5.0,
      reviewsCount: 71,
      image: "public/camiseta_personalizada.jpg",
      images: [
        "public/camiseta_personalizada.jpg"
      ],
      badge: "RESPIRÁVEL",
      techBadge: "CONTROLE TÉRMICO",
      description: "Camiseta feminina técnica em tecido respirável de alta durabilidade, corte moderno e estampa sublimada 'SUA PERSONALIZAÇÃO AQUI'. Versátil para treino, uniformização de equipes e uso casual.",
      specs: ["Tecido Respirável Leve", "Modelagem Feminina Confortável", "Secagem Rápida", "Estampa Sublimada de Alta Durabilidade"],
      sizes: ["PP", "P", "M", "G"]
    },
    {
      id: "prod-f-sho-01",
      name: "Shorts Feminino Anatômico Vulkor Flex",
      audience: "feminino",
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
      description: "Short feminino de treino com cós anatômico alto, comprimento ideal que não sobe na coxa e tecido encorpado de alta densidade. Zero transparência em agachamentos, chutes e corridas.",
      specs: ["Tecido Flexível de Alta Mobilidade", "Cós Anatômico Firme", "Secagem Rápida", "Proteção Solar"],
      sizes: ["PP", "P", "M", "G"]
    },
    {
      id: "prod-f-cal-01",
      name: "Calça Legging Feminina Vulkor Alta Sustentação",
      audience: "feminino",
      modality: "calcas",
      modalityLabel: "Calças & Leggings",
      price: 169.00,
      oldPrice: 199.00,
      installments: "3x de R$ 56,33 sem juros",
      rating: 5.0,
      reviewsCount: 82,
      image: "public/calca_personalizada.jpg",
      images: [
        "public/calca_personalizada.jpg"
      ],
      badge: "LEGGING",
      techBadge: "ALTA SUSTENTAÇÃO",
      description: "Calça legging feminina de alta densidade com sustentação superior, zero transparência e cintura que não desaba. Ideal para treinos de luta, funcional e musculação.",
      specs: ["Tecido de Alta Densidade Zero Transparência", "Alta Sustentação na Cintura", "Costuras Macias Anti-Atrito", "Sublimação Total em Alta Definição"],
      sizes: ["PP", "P", "M", "G"]
    },

    // ==========================================
    // INFANTIL
    // ==========================================
    {
      id: "prod-i-rash-mc-01",
      name: "Rashguard Infantil Manga Curta Vulkor",
      audience: "infantil",
      modality: "rashguards",
      modalityLabel: "Rash Guards",
      price: 149.00,
      oldPrice: 179.00,
      installments: "2x de R$ 74,50 sem juros",
      rating: 5.0,
      reviewsCount: 47,
      image: "public/rashguard_personalizada.jpg",
      images: [
        "public/rashguard_personalizada.jpg"
      ],
      badge: "MANGA CURTA",
      techBadge: "LEVE & RESPIRÁVEL",
      description: "Rashguard infantil de manga curta em tecido respirável e leve, com costuras macias que não machucam a pele, silicone de ajuste na barra e sublimação total de alta definição.",
      specs: ["Tecido Respirável e Leve", "Costuras Macias Anti-Atrito", "Proteção Solar UV50+", "Sublimação Total que Não Desbota"],
      sizes: ["4", "6", "8", "10", "12"]
    },
    {
      id: "prod-i-rash-ml-01",
      name: "Rashguard Infantil Manga Longa Vulkor",
      audience: "infantil",
      modality: "rashguards",
      modalityLabel: "Rash Guards",
      price: 169.00,
      oldPrice: 199.00,
      installments: "3x de R$ 56,33 sem juros",
      rating: 4.9,
      reviewsCount: 39,
      image: "public/rashguard_personalizada.jpg",
      images: [
        "public/rashguard_personalizada.jpg"
      ],
      badge: "MANGA LONGA",
      techBadge: "PROTEÇÃO UV50+",
      description: "Rashguard infantil de manga longa que protege os braços contra atrito de tatame, com compressão confortável, fita de silicone na barra e estampa sublimada 'SUA PERSONALIZAÇÃO AQUI'.",
      specs: ["Tecido Respirável e Flexível", "Proteção Solar UV50+", "Silicone de Ajuste na Barra", "Costuras Reforçadas Anti-Atrito"],
      sizes: ["4", "6", "8", "10", "12"]
    },
    {
      id: "prod-i-cam-01",
      name: "Camiseta Infantil Vulkor",
      audience: "infantil",
      modality: "camisetas",
      modalityLabel: "Camisetas",
      price: 99.00,
      oldPrice: 120.00,
      installments: "2x de R$ 49,50 sem juros",
      rating: 5.0,
      reviewsCount: 53,
      image: "public/camiseta_personalizada.jpg",
      images: [
        "public/camiseta_personalizada.jpg"
      ],
      badge: "CONFORTÁVEL",
      techBadge: "TOQUE MACIO",
      description: "Camiseta infantil em tecido respirável, macio e resistente, ideal para treinos, uniformização de equipes e uso diário. Estampa sublimada que não racha nem desbota.",
      specs: ["Tecido Macio e Confortável", "Gola Reforçada com Pesponto Duplo", "Secagem Rápida", "Estampa Sublimada de Alta Durabilidade"],
      sizes: ["4", "6", "8", "10", "12"]
    },
    {
      id: "prod-i-sho-01",
      name: "Short Infantil Vulkor Treino & Luta",
      audience: "infantil",
      modality: "shorts",
      modalityLabel: "Shorts de Combate",
      price: 99.00,
      oldPrice: 120.00,
      installments: "2x de R$ 49,50 sem juros",
      rating: 4.9,
      reviewsCount: 44,
      image: "public/shorts_personalizado.jpg",
      images: [
        "public/shorts_personalizado.jpg"
      ],
      badge: "INFANTIL",
      techBadge: "ALTA MOBILIDADE",
      description: "Short infantil para treinos e lutas com cós elástico seguro, abertura lateral para liberdade de movimento, tecido de secagem rápida e sublimação total com estampa da sua equipe.",
      specs: ["Tecido Leve e Flexível", "Cós Elástico com Cordão Interno", "Sem Partes Metálicas", "Sublimação Total de Alta Definição"],
      sizes: ["4", "6", "8", "10", "12"]
    }
  ]
};
