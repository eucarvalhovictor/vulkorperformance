/**
 * VULKOR PERFORMANCE - Combat Sports Data Matrix
 */

const VULKOR_DATA = {
  modalities: [
    {
      id: "kimonos",
      name: "Kimonos",
      cardTitle: "Kimonos",
      tag: "BJJ & KIMONOS",
      number: "01",
      tagline: "Kimonos Trançados 450GSM de Alta Densidade e Modelagem 0-Radius",
      description: "Fabricação própria de kimonos de alta densidade para Jiu-Jitsu. Modelagem 0-Radius com corte anatômico e ajuste perfeito sem sobras de pano para dificultar as pegadas adversárias no tatame.",
      heroImage: "public/kimonos.jpg",
      featuredImage: "public/kimonos.jpg",
      stats: {
        material: "Trançado 450GSM Algodão Pré-Encolhido",
        homologation: "Homologado IBJJF, CBJJE & CBJJ",
        reinforcedSeams: "Costura Tripla com Fio Balístico",
        warranty: "Garantia Vitalícia contra rasgos de costura"
      },
      article: {
        title: "Confecção de Alta Densidade para a Arte Suave",
        paragraphs: [
          "O Jiu-Jitsu exige vestuário que acompanhe cada transição de guarda, raspagem e finalização sem prender movimentos. O corte exclusivo Vulkor Zero-Radius elimina pontos de folga na gola e axilas, tornando a pegada do adversário substancialmente mais difícil.",
          "Nossa tecnologia de gola com núcleo de borracha vulcanizada EVA antimicrobiana seca até 4x mais rápido que as tradicionais, prevenindo o acúmulo de fungos e bactérias típicos de treinos intensos."
        ],
        bulletPoints: [
          "Gola EVA vulcanizada imune a deformações e proliferação fúngica",
          "Calça em tecido Ripstop militar com reforço duplo nos joelhos",
          "Bordas cortadas em ângulo reto sem rebarbas para conforto térmico",
          "Kimonos trançados pré-encolhidos com padrão oficial de competição"
        ]
      },
      sizeChart: [
        { size: "A0", height: "1,55m a 1,65m", weight: "50kg a 62kg" },
        { size: "A1", height: "1,65m a 1,75m", weight: "63kg a 75kg" },
        { size: "A2", height: "1,75m a 1,85m", weight: "76kg a 88kg" },
        { size: "A3", height: "1,85m a 1,93m", weight: "89kg a 102kg" },
        { size: "A4", height: "1,90m a 2,00m", weight: "103kg a 120kg" }
      ],
      gearHighlights: ["Kimono Pro Comp 450GSM", "Kimono Light Training", "Faixas 12 Costuras", "Kimono Ultra-Resistente"]
    },
    {
      id: "camisas",
      name: "Camisas",
      cardTitle: "Camisas",
      tag: "RASHGUARDS & COMPRESSÃO",
      number: "02",
      tagline: "Rashguards de Compressão No-Gi e Camisetas Técnicas Dry-Fit",
      description: "Linha de camisas de compressão rashguards e camisetas técnicas desenvolvidas para treinos pesados de No-Gi Jiu-Jitsu e striking. Tecidos com microcanais de ventilação AeroDry™ e costuras flatlock anti-atrito.",
      heroImage: "public/camisas.jpg",
      featuredImage: "public/camisas.jpg",
      stats: {
        material: "Poliéster Dry-Fit AeroDry™ + Elastano 4-Way",
        homologation: "Padrão Oficial IBJJF No-Gi & Camps",
        wristProtection: "Costura Flatlock 4 Agulhas Anti-Atrito",
        padding: "Tratamento Antibacteriano Permanente"
      },
      article: {
        title: "Compressão Muscular e Ventilação para o Tatame",
        paragraphs: [
          "Durante os rolas pesados de No-Gi, o acúmulo de suor no tecido convencional aumenta o peso e causa assaduras. Nossas rashguards utilizam fios de alta elasticidade com fita de silicone na barra interna que impede a camisa de subir.",
          "As costuras planas flatlock de 4 agulhas deslizam suavemente sobre a pele, eliminando queimaduras de atrito com o tatame."
        ],
        bulletPoints: [
          "Fita de silicone na cintura que mantém a rashguard firme no corpo",
          "Painéis dorsais com tecnologia AeroDry™ de evaporação instantânea",
          "Costuras planas flatlock anti-atrito com o tatame",
          "Proteção UV50+ e estampas totalmente sublimadas"
        ]
      },
      sizeChart: [
        { size: "P", height: "1,60m a 1,70m", weight: "55kg a 68kg" },
        { size: "M", height: "1,70m a 1,80m", weight: "68kg a 80kg" },
        { size: "G", height: "1,78m a 1,88m", weight: "80kg a 94kg" },
        { size: "GG", height: "1,85m a 1,98m", weight: "+94kg" }
      ],
      gearHighlights: ["Rashguard No-Gi Armor", "Camiseta Striker Dry-Fit", "Rashguard Long Sleeve", "Regata Tática No-Gi"]
    },
    {
      id: "calcas",
      name: "Calças",
      cardTitle: "Calças",
      tag: "RIPSTOP & SPATS",
      number: "03",
      tagline: "Calças de Kimono Ripstop Militar e Spats de Compressão",
      description: "Calças avulsas em tecido Ripstop militar 10oz com reforço duplo do joelho à barra e spats de compressão térmica para treinos No-Gi e aquecimento muscular contínuo.",
      heroImage: "public/calcas.jpg",
      featuredImage: "public/calcas.jpg",
      stats: {
        material: "Ripstop Militar 10oz + Spats Compressão",
        homologation: "Compatível com Regulamentos Oficiais de BJJ",
        mobility: "Reforço Duplo nos Joelhos",
        cooling: "Cordão Tático de Ajuste Rápido"
      },
      article: {
        title: "Durabilidade Balística e Mobilidade Inferior",
        paragraphs: [
          "As calças de Jiu-Jitsu sofrem atrito extremo nos joelhos e virilha durante guardas, passagens e defesas de queda. O tecido Ripstop Vulkor é imune a furos e esgarçamentos de pegadas.",
          "O sistema de 4 passadores com cordão cilíndrico garante amarração firme que não desata no meio do combate."
        ],
        bulletPoints: [
          "Reforço duplo de tecido acolchoado nos joelhos",
          "Costuras triplas nos pontos de tração da virilha",
          "Tecido Ripstop com trama anti-rasgo",
          "Spats de compressão que auxiliam no retorno venoso"
        ]
      },
      sizeChart: [
        { size: "A0", height: "1,55m a 1,65m", weight: "50kg a 62kg" },
        { size: "A1", height: "1,65m a 1,75m", weight: "63kg a 75kg" },
        { size: "A2", height: "1,75m a 1,85m", weight: "76kg a 88kg" },
        { size: "A3", height: "1,85m a 1,93m", weight: "89kg a 102kg" },
        { size: "A4", height: "1,90m a 2,00m", weight: "103kg a 120kg" }
      ],
      gearHighlights: ["Calça Ripstop Pro Comp", "Spats Compressão Armor", "Calça de Treino Diário", "Spats Thermal Control"]
    },
    {
      id: "shorts",
      name: "Shorts",
      cardTitle: "Shorts",
      tag: "NO-GI & FLEX-SPLIT",
      number: "04",
      tagline: "Shorts Flex-Split Ripstop e Bermudas No-Gi de Alta Mobilidade",
      description: "Shorts desenvolvidos para No-Gi Jiu-Jitsu, grappling e MMA com fendas laterais de 12cm, cós sem botões e painel elástico de virilha que libera total amplitude de guarda e chutes.",
      heroImage: "public/shorts.jpg",
      featuredImage: "public/shorts.jpg",
      stats: {
        material: "Microfibra 4-Way Stretch + Ripstop Tático",
        homologation: "Padrão IBJJF No-Gi & ADCC",
        splitLeg: "Fenda Lateral Tática de 12cm",
        glovePadding: "Cós Anatômico com Fechamento Velcro Tático"
      },
      article: {
        title: "Engenharia de Movimento para Grappling e Luta Livre",
        paragraphs: [
          "Na luta No-Gi, um short que trava a rotação de quadril pode custar uma raspagem ou passagem de guarda. Nossos shorts Flex-Split possuem abertura lateral de 12cm e painel central em elastano elástico.",
          "O cós com fecho de velcro embutido e cordão interno elimina qualquer metal ou plástico, oferecendo 100% de segurança para você e seu parceiro de treino."
        ],
        bulletPoints: [
          "Fechamento em velcro anatômico sem pontas plásticas",
          "Painel de virilha em elastano flexível para chutes e guardas abertas",
          "Tecido ultraleve de secagem rápida hidrofóbica",
          "Fendas laterais de 12cm para mobilidade irrestrita"
        ]
      },
      sizeChart: [
        { size: "P / 38-40", height: "1,60m a 1,72m", weight: "Cintura: 78 - 84 cm" },
        { size: "M / 42", height: "1,70m a 1,80m", weight: "Cintura: 84 - 90 cm" },
        { size: "G / 44", height: "1,78m a 1,88m", weight: "Cintura: 90 - 98 cm" },
        { size: "GG / 46-48", height: "1,85m a 1,98m", weight: "Cintura: 98 - 108 cm" }
      ],
      gearHighlights: ["Shorts Flex-Split Ripstop", "Bermuda Grappling Pro", "Shorts No-Gi Combat", "Shorts Fight Camp"]
    }
  ],

  products: [
    // JIU-JITSU PRODUCTS
    {
      id: "prod-bjj-01",
      name: "Kimono Vulkor Pro Comp 450GSM",
      modality: "jiujitsu",
      modalityLabel: "Jiu-Jitsu",
      price: 649.00,
      oldPrice: 729.00,
      installments: "6x de R$ 108,16 sem juros",
      rating: 5.0,
      reviewsCount: 84,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80",
      badge: "BEST SELLER",
      techBadge: "RIPSTOP 450GSM",
      description: "Kimono trançado de alta densidade com gola emborrachada vulcanizada anti-fungos. Pré-encolhido de fábrica e com reforço nas axilas, costas e joelhos.",
      specs: ["100% Algodão Trançado 450GSM", "Calça Ripstop Militar 10oz", "Gola EVA Vulcanizada", "Aprovado pela IBJJF"],
      sizes: ["A0", "A1", "A2", "A3", "A4"]
    },
    {
      id: "prod-bjj-02",
      name: "Rashguard Vulkor No-Gi Armor Tech",
      modality: "jiujitsu",
      modalityLabel: "Jiu-Jitsu",
      price: 189.00,
      oldPrice: 220.00,
      installments: "3x de R$ 63,00 sem juros",
      rating: 4.9,
      reviewsCount: 62,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
      badge: "COMPRESSÃO",
      techBadge: "AERODRY™",
      description: "Camisa de compressão com costuras flatlock 4 agulhas que não incomodam a pele. Fita de silicone na barra interna para não subir durante a luta.",
      specs: ["85% Poliéster / 15% Elastano", "Proteção UV50+", "Silicone Anti-Deslizante", "Estampa Sublimada Inviolável"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-bjj-03",
      name: "Faixa Especial Vulkor 12 Costuras",
      modality: "jiujitsu",
      modalityLabel: "Jiu-Jitsu",
      price: 119.00,
      oldPrice: 140.00,
      installments: "2x de R$ 59,50 sem juros",
      rating: 5.0,
      reviewsCount: 110,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=700&q=80",
      badge: "PREMIUM",
      techBadge: "12 COSTURAS",
      description: "Faixa grossa e estruturada que proporciona nós firmes que não desatam sozinhos no meio do combate. Ponteira preta reforçada.",
      specs: ["100% Algodão Pesado", "Espessura de 5mm", "12 Linhas de Costura Paralelas", "Ponteira Reforçada 10cm"],
      sizes: ["A1 (2,60m)", "A2 (2,80m)", "A3 (3,00m)", "A4 (3,20m)"]
    },
    {
      id: "prod-bjj-04",
      name: "Spats Compressão Vulkor Tatame Grip",
      modality: "jiujitsu",
      modalityLabel: "Jiu-Jitsu",
      price: 169.00,
      oldPrice: 199.00,
      installments: "3x de R$ 56,33 sem juros",
      rating: 4.8,
      reviewsCount: 39,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
      badge: "LANÇAMENTO",
      techBadge: "PRO-GUARD",
      description: "Calça térmica de compressão projetada para evitar queimaduras de tatame e manter a musculatura das pernas aquecida.",
      specs: ["Compressão Graduada", "Costuras Reforçadas", "Secagem Ultra-Rápida", "Tratamento Anti-Bactéria"],
      sizes: ["P", "M", "G", "GG"]
    },

    // BOXING & STRIKING APPAREL PRODUCTS
    {
      id: "prod-boxe-01",
      name: "Camiseta Vulkor Striker Pro Dry-Fit",
      modality: "boxe",
      modalityLabel: "Boxe & Striking",
      price: 149.00,
      oldPrice: 179.00,
      installments: "2x de R$ 74,50 sem juros",
      rating: 5.0,
      reviewsCount: 98,
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=700&q=80",
      badge: "DRY-FIT",
      techBadge: "AERODRY™",
      description: "Camiseta de alta performance com painéis microperfurados de ventilação e corte atlético 0-radius que acompanha rotações pesadas de tronco.",
      specs: ["100% Microfibra Poliéster Dry-Fit", "Costura Flatlock 4 Agulhas", "Secagem Instantânea", "Proteção Térmica UV50+"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-boxe-02",
      name: "Regata Tática de Treino Vulkor Shadow",
      modality: "boxe",
      modalityLabel: "Boxe & Striking",
      price: 129.00,
      oldPrice: 150.00,
      installments: "2x de R$ 64,50 sem juros",
      rating: 4.9,
      reviewsCount: 75,
      image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=700&q=80",
      badge: "STRIKER",
      techBadge: "FREEDOM CUT",
      description: "Regata com corte nadador profundo desenvolvida para mobilidade total de ombros e trapézios durante o shadowboxing e sparring.",
      specs: ["Algodão Pima com Elastano", "Corte Nadador Anatômico", "Gola Reforçada", "Estampa Tática Sublimada"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-boxe-03",
      name: "Short de Boxe & Striking Vulkor Pro",
      modality: "boxe",
      modalityLabel: "Boxe & Striking",
      price: 179.00,
      oldPrice: 210.00,
      installments: "3x de R$ 59,66 sem juros",
      rating: 4.9,
      reviewsCount: 64,
      image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=700&q=80",
      badge: "ALTA MOBILIDADE",
      techBadge: "SATIN FLEX",
      description: "Short profissional com cós largo de 10cm, cordão de travamento interno e fendas laterais para trabalho ágil de pernas e esquivas.",
      specs: ["Tecido Cetim Técnico Heavy", "Cós Elástico 10cm", "Fenda Lateral 10cm", "Bordado de Alta Definição"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-boxe-04",
      name: "Moletom Tático Vulkor Heavyweight Camp",
      modality: "boxe",
      modalityLabel: "Boxe & Striking",
      price: 299.00,
      oldPrice: 349.00,
      installments: "4x de R$ 74,75 sem juros",
      rating: 5.0,
      reviewsCount: 88,
      image: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=700&q=80",
      badge: "CAMP ESSENCIAL",
      techBadge: "ALGODÃO 400GSM",
      description: "Moletom pesado de corte reto 0-radius desenvolvido para aquecimento pré-luta, perda de peso e viagens de camps.",
      specs: ["100% Algodão Pesado 400GSM", "Capuz Estruturado Duplo", "Bolso Canguru Reforçado", "Punhos Canelados Anti-Deformação"],
      sizes: ["P", "M", "G", "GG"]
    },

    // TAEKWONDO APPAREL PRODUCTS
    {
      id: "prod-tkd-01",
      name: "Dobok Vulkor Aerotech Ultra-Leve WT",
      modality: "taekwondo",
      modalityLabel: "Taekwondo",
      price: 349.00,
      oldPrice: 399.00,
      installments: "3x de R$ 116,33 sem juros",
      rating: 5.0,
      reviewsCount: 54,
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=700&q=80",
      badge: "WT HOMOLOGADO",
      techBadge: "AEROTECH 120G",
      description: "Uniforme de Taekwondo desenvolvido em tecido Jacquard texturizado ultraleve 120g. Proporciona o som característico de estalo (snap) nos golpes e secagem instantânea.",
      specs: ["Tecido Jacquard 100% Poliéster", "Gola Preta Oficial WT", "Fole de Virilha em Elastano Diamond", "Ultra-resistente a vincos"],
      sizes: ["0 (150cm)", "1 (160cm)", "2 (170cm)", "3 (180cm)", "4 (190cm)"]
    },
    {
      id: "prod-tkd-02",
      name: "Uniforme Vulkor Poomsae Master WT",
      modality: "taekwondo",
      modalityLabel: "Taekwondo",
      price: 389.00,
      oldPrice: 440.00,
      installments: "3x de R$ 129,66 sem juros",
      rating: 4.9,
      reviewsCount: 38,
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=700&q=80",
      badge: "POOMSAE",
      techBadge: "COTTON POLY 240G",
      description: "Uniforme estruturado com jaqueta branca/calça azul ou preta homologado para competições oficiais de formas e demonstração técnica.",
      specs: ["65% Algodão / 35% Poliéster Estruturado", "Gola Rígida de Alta Postura", "Cós com Cordão Tático", "Caimento Impecável 0-Radius"],
      sizes: ["1 (160cm)", "2 (170cm)", "3 (180cm)", "4 (190cm)"]
    },
    {
      id: "prod-tkd-03",
      name: "Calça de Treino Vulkor Diamond Crotch 180°",
      modality: "taekwondo",
      modalityLabel: "Taekwondo",
      price: 169.00,
      oldPrice: 199.00,
      installments: "2x de R$ 84,50 sem juros",
      rating: 4.8,
      reviewsCount: 47,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
      badge: "FLEX 180°",
      techBadge: "DIAMOND CROTCH",
      description: "Calça avulsa com recorte especial de virilha em formato de diamante, permitindo abertura total de pernas e chutes altos sem puxar o tecido.",
      specs: ["Tecido Microfibra Leve com Elastano", "Cós Elástico com Cordão", "Reforço Duplo na Barra", "Secagem Rápida"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-tkd-04",
      name: "Camiseta Vulkor TKD Strike Dry-Fit",
      modality: "taekwondo",
      modalityLabel: "Taekwondo",
      price: 139.00,
      oldPrice: 160.00,
      installments: "2x de R$ 69,50 sem juros",
      rating: 4.9,
      reviewsCount: 31,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
      badge: "DRY-FIT",
      techBadge: "AERODRY™",
      description: "Camiseta de treino para condicionamento físico e treinos sem dobok, com tecnologia de dispersão térmica contínua.",
      specs: ["100% Poliéster Micro-Aero", "Costuras Flatlock", "Proteção Solar UV50+", "Estampa Vulkor Tática"],
      sizes: ["P", "M", "G", "GG"]
    },

    // MMA APPAREL PRODUCTS
    {
      id: "prod-mma-01",
      name: "Shorts Vulkor Cage Fighter Flex-Split Ripstop",
      modality: "mma",
      modalityLabel: "MMA & Luta Livre",
      price: 189.00,
      oldPrice: 220.00,
      installments: "3x de R$ 63,00 sem juros",
      rating: 5.0,
      reviewsCount: 124,
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80",
      badge: "BEST SELLER",
      techBadge: "RIPSTOP SPLIT 12CM",
      description: "Short de luta com fendas laterais de 12cm e painel interno em lycra flexível. Não prende chutes altos nem transições no solo.",
      specs: ["Tecido Ripstop Hidro-Repelente Militar", "Painel de Virilha 4-Way Stretch", "Cós Tático com Cordão Interno", "Zero Partes Metálicas"],
      sizes: ["P (38-40)", "M (42)", "G (44)", "GG (46-48)"]
    },
    {
      id: "prod-mma-02",
      name: "Rashguard Vulkor Armor Cage 4-Way",
      modality: "mma",
      modalityLabel: "MMA & Luta Livre",
      price: 199.00,
      oldPrice: 230.00,
      installments: "3x de R$ 66,33 sem juros",
      rating: 4.9,
      reviewsCount: 89,
      image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=700&q=80",
      badge: "BLINDADA",
      techBadge: "4-WAY COMPRESS",
      description: "Camisa de compressão com densidade reforçada contra abrasão da lona da grade e tatame. Costuras quadruplas que não arrebentam em puxões.",
      specs: ["88% Poliéster / 12% Spandex Heavy", "Grip de Silicone na Cintura", "Costuras Planas 4 Agulhas", "Anti-Fungos e Anti-Odor"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-mma-03",
      name: "Bermuda de Compressão Vulkor Vale-Tudo Pro",
      modality: "mma",
      modalityLabel: "MMA & Luta Livre",
      price: 159.00,
      oldPrice: 189.00,
      installments: "2x de R$ 79,50 sem juros",
      rating: 4.8,
      reviewsCount: 67,
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=700&q=80",
      badge: "COMPRESSÃO",
      techBadge: "PRO-LOCK",
      description: "Shorts de compressão térmica estilo Vale-Tudo clássico com compartimento interno anatômico para coquilha e costuras reforçadas.",
      specs: ["Tecido de Média/Alta Compressão", "Bolso Interno para Coquilha", "Cós Elástico Largo de 5cm", "Comprimento Médio na Coxa"],
      sizes: ["P", "M", "G", "GG"]
    },
    {
      id: "prod-mma-04",
      name: "Camiseta Tática Vulkor Fight Camp",
      modality: "mma",
      modalityLabel: "MMA & Luta Livre",
      price: 139.00,
      oldPrice: 165.00,
      installments: "2x de R$ 69,50 sem juros",
      rating: 5.0,
      reviewsCount: 110,
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=700&q=80",
      badge: "CAMP SERIES",
      techBadge: "AERODRY™",
      description: "Camiseta oficial de treino para equipes e atletas profissionais, com modelagem 0-radius que se ajusta ao corpo de lutador.",
      specs: ["Algodão Pima com Elastano", "Corte Reto 0-Radius", "Estampa em Silk Tático Inviolável", "Pré-Encolhida"],
      sizes: ["P", "M", "G", "GG"]
    }
  ]
};
