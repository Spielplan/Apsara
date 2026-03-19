const baseProducts = [
  {
    slug: 'ocio',
    name: 'Ocio',
    description:
      'AI-native networking app for shared interests, safe socializing, and real-world community integration.',
    overview:
      'Ocio helps people grow meaningful networks by matching shared interests with trusted social participation in events and communities.',
  },
  {
    slug: 'hangout',
    name: 'HangOut',
    description:
      'AI-native app for planning and running online/offline gatherings for interest groups and communities.',
    overview:
      'HangOut simplifies event planning, participation, and follow-up so communities can stay active and connected over time.',
  },
  {
    slug: 'sportcenter',
    name: 'SportCenter',
    description:
      'AI-first operating platform for sport centre management, booking, events, coaching, and leagues.',
    overview:
      'SportCenter connects operations and member participation through reservations, partner matching, tournament management, and analytics.',
  },
  {
    slug: 'danceschool-pro',
    name: 'DanceSchool Pro',
    description:
      'Platform for dance schools covering classes, schedules, student operations, performances, and events.',
    overview:
      'DanceSchool Pro helps dance schools run structured programs while supporting learner engagement and school-level event coordination.',
  },
  {
    slug: 'player',
    name: 'Player',
    description:
      'AI-native app for finding locations, partners, and games, with performance stats and leaderboards.',
    overview:
      'Player helps sportspeople coordinate play and improve over time with discovery, participation, and progression features.',
  },
  {
    slug: 'dancer',
    name: 'Dancer',
    description:
      'AI-native app for dancers to find partners, classes, festivals, and relevant communities.',
    overview:
      'Dancer supports ongoing participation in dance by helping users discover opportunities, partners, and community connections.',
  },
]

const localizedProductText = {
  de: {
    ocio: {
      description:
        'KI-native Networking-App für gemeinsame Interessen, sicheres soziales Miteinander und Community-Integration.',
      overview:
        'Ocio hilft Menschen, durch interessenbasierte Matches und vertrauensvolle Event-Teilnahme ein starkes Netzwerk aufzubauen.',
    },
    hangout: {
      description:
        'KI-native App zur Planung von Online- und Offline-Treffen für Interessengruppen und Communities.',
      overview:
        'HangOut vereinfacht Planung, Teilnahme und Nachbereitung, damit Communities dauerhaft aktiv bleiben.',
    },
    sportcenter: {
      description:
        'KI-first Plattform für Sportcenter-Management, Buchungen, Events, Coaching und Ligen.',
      overview:
        'SportCenter verbindet Betrieb und Mitgliederbeteiligung über Reservierungen, Matching, Turnierverwaltung und Analysen.',
    },
    'danceschool-pro': {
      description:
        'Plattform für Tanzschulen mit Klassen, Zeitplänen, Schülerverwaltung, Auftritten und Events.',
      overview:
        'DanceSchool Pro hilft Tanzschulen, strukturierte Programme und Event-Abläufe effizient zu steuern.',
    },
    player: {
      description:
        'KI-native App zum Finden von Orten, Partnern und Spielen mit Statistiken und Ranglisten.',
      overview:
        'Player unterstützt Sportler bei Koordination und Leistungsentwicklung durch Discovery- und Fortschrittsfunktionen.',
    },
    dancer: {
      description:
        'KI-native App für Tänzer zum Finden von Partnern, Kursen, Festivals und Communities.',
      overview:
        'Dancer unterstützt kontinuierliche Tanzteilnahme durch bessere Sichtbarkeit von Partnern, Möglichkeiten und Communitys.',
    },
  },
  fr: {
    ocio: {
      description:
        'Application IA native pour développer son réseau, partager des intérêts et socialiser en sécurité.',
      overview:
        'Ocio aide à créer des connexions de qualité grâce aux intérêts communs et à la participation à des événements.',
    },
    hangout: {
      description:
        'Application IA native pour organiser des rencontres en ligne et hors ligne pour des communautés.',
      overview:
        'HangOut simplifie la planification, la participation et le suivi pour garder les groupes actifs.',
    },
    sportcenter: {
      description:
        'Plateforme IA-first pour la gestion des centres sportifs, réservations, événements, coaching et ligues.',
      overview:
        'SportCenter relie opérations et engagement des membres via réservation, matching et gestion de compétitions.',
    },
    'danceschool-pro': {
      description:
        'Plateforme pour écoles de danse: cours, plannings, opérations élèves, spectacles et événements.',
      overview:
        'DanceSchool Pro aide les écoles à structurer les programmes et à gérer les activités avec fiabilité.',
    },
    player: {
      description:
        'Application IA native pour trouver lieux, partenaires et matchs avec statistiques et classements.',
      overview:
        'Player aide les sportifs à organiser le jeu et à progresser grâce à des outils de découverte et de suivi.',
    },
    dancer: {
      description:
        'Application IA native pour trouver partenaires de danse, cours, festivals et communautés.',
      overview:
        'Dancer favorise une participation continue grâce à la découverte d’opportunités et de connexions pertinentes.',
    },
  },
  it: {
    ocio: {
      description:
        'App AI-native per far crescere il network, trovare interessi comuni e socializzare in sicurezza.',
      overview:
        'Ocio aiuta a costruire connessioni reali tramite interessi condivisi ed eventi con partecipazione affidabile.',
    },
    hangout: {
      description:
        'App AI-native per organizzare incontri online e offline per gruppi di interesse e community.',
      overview:
        'HangOut semplifica pianificazione, partecipazione e follow-up per mantenere vive le community.',
    },
    sportcenter: {
      description:
        'Piattaforma AI-first per gestione centri sportivi, prenotazioni, eventi, coaching e leghe.',
      overview:
        'SportCenter unisce operazioni e coinvolgimento membri con booking, matching e gestione competizioni.',
    },
    'danceschool-pro': {
      description:
        'Piattaforma per scuole di danza con classi, calendari, gestione studenti, performance ed eventi.',
      overview:
        'DanceSchool Pro supporta scuole di danza nella gestione strutturata dei programmi e delle attività.',
    },
    player: {
      description:
        'App AI-native per trovare location, partner e partite con statistiche e classifiche.',
      overview:
        'Player aiuta sportivi a coordinare il gioco e migliorare nel tempo con strumenti di scoperta e progresso.',
    },
    dancer: {
      description:
        'App AI-native per trovare partner di danza, corsi, festival e community rilevanti.',
      overview:
        'Dancer favorisce partecipazione continua attraverso scoperta di opportunità e connessioni utili.',
    },
  },
  pt: {
    ocio: {
      description:
        'Aplicativo AI-native para ampliar rede, encontrar interesses em comum e socializar com segurança.',
      overview:
        'Ocio ajuda pessoas a criar conexões relevantes com interesses compartilhados e participação confiável em eventos.',
    },
    hangout: {
      description:
        'Aplicativo AI-native para organizar encontros online e offline para grupos e comunidades.',
      overview:
        'HangOut simplifica planejamento, participação e acompanhamento para manter comunidades ativas',
    },
    sportcenter: {
      description:
        'Plataforma AI-first para gestão de centros esportivos, reservas, eventos, coaching e ligas.',
      overview:
        'SportCenter conecta operação e engajamento dos membros com booking, matching e gestão de torneios.',
    },
    'danceschool-pro': {
      description:
        'Plataforma para escolas de dança com aulas, agendas, gestão de alunos, apresentações e eventos.',
      overview:
        'DanceSchool Pro ajuda escolas a operar programas de forma estruturada e consistente.',
    },
    player: {
      description:
        'Aplicativo AI-native para encontrar locais, parceiros e jogos com estatísticas e rankings.',
      overview:
        'Player apoia atletas a jogar com frequência e evoluir com recursos de descoberta e progresso.',
    },
    dancer: {
      description:
        'Aplicativo AI-native para dançarinos encontrarem parceiros, aulas, festivais e comunidades.',
      overview:
        'Dancer facilita participação contínua por meio de descoberta de oportunidades e conexões relevantes.',
    },
  },
  es: {
    ocio: {
      description:
        'App AI-native para ampliar red, encontrar intereses compartidos y socializar de forma segura.',
      overview:
        'Ocio ayuda a crear conexiones valiosas con intereses comunes y participación confiable en eventos.',
    },
    hangout: {
      description:
        'App AI-native para organizar encuentros online y offline para grupos y comunidades.',
      overview:
        'HangOut simplifica planificación, participación y seguimiento para mantener comunidades activas.',
    },
    sportcenter: {
      description:
        'Plataforma AI-first para gestión de centros deportivos, reservas, eventos, coaching y ligas.',
      overview:
        'SportCenter conecta operaciones y participación de miembros con booking, matching y gestión de torneos.',
    },
    'danceschool-pro': {
      description:
        'Plataforma para escuelas de danza con clases, horarios, gestión de alumnos, shows y eventos.',
      overview:
        'DanceSchool Pro ayuda a las escuelas a operar programas estructurados de forma confiable.',
    },
    player: {
      description:
        'App AI-native para encontrar lugares, compañeros y partidos con estadísticas y ranking.',
      overview:
        'Player ayuda a deportistas a jugar más y mejorar con funciones de descubrimiento y progreso.',
    },
    dancer: {
      description:
        'App AI-native para que bailarines encuentren pareja, clases, festivales y comunidades.',
      overview:
        'Dancer impulsa participación continua con descubrimiento de oportunidades y conexiones relevantes.',
    },
  },
  he: {
    ocio: {
      description:
        'אפליקציית AI-native להרחבת רשת חברתית, תחומי עניין משותפים וסוציאליזציה בטוחה.',
      overview:
        'Ocio מסייעת ליצור קשרים משמעותיים דרך התאמה לפי עניין והשתתפות מהימנה באירועים.',
    },
    hangout: {
      description:
        'אפליקציית AI-native לארגון מפגשים אונליין ואופליין לקבוצות וקהילות.',
      overview:
        'HangOut מפשטת תכנון, השתתפות ומעקב כדי לשמור על קהילות פעילות לאורך זמן.',
    },
    sportcenter: {
      description:
        'פלטפורמת AI-first לניהול מרכזי ספורט, הזמנות, אירועים, אימון וליגות.',
      overview:
        'SportCenter מחברת תפעול ומעורבות חברים דרך הזמנות, התאמות וניהול תחרויות.',
    },
    'danceschool-pro': {
      description:
        'פלטפורמה לבתי ספר למחול: שיעורים, לוחות זמנים, ניהול תלמידים והפקות.',
      overview:
        'DanceSchool Pro מסייעת לבתי ספר למחול לנהל תוכניות באופן מובנה ועקבי.',
    },
    player: {
      description:
        'אפליקציית AI-native למציאת מגרשים, שותפים ומשחקים עם סטטיסטיקות ודירוגים.',
      overview:
        'Player תומכת בספורטאים בתיאום משחקים ושיפור מתמשך באמצעות כלי גילוי והתקדמות.',
    },
    dancer: {
      description:
        'אפליקציית AI-native לרקדנים למציאת שותפים, שיעורים, פסטיבלים וקהילות.',
      overview:
        'Dancer מקדמת השתתפות רציפה באמצעות גילוי הזדמנויות וחיבורים רלוונטיים.',
    },
  },
  hi: {
    ocio: {
      description:
        'AI-native ऐप जो नेटवर्क बढ़ाने, साझा रुचियों वाले लोगों को खोजने और सुरक्षित सामाजिक जुड़ाव में मदद करता है।',
      overview:
        'Ocio इवेंट और कम्युनिटी भागीदारी के माध्यम से भरोसेमंद और सार्थक नेटवर्क बनाने में मदद करता है।',
    },
    hangout: {
      description:
        'AI-native ऐप जो interest groups और communities के लिए online/offline gatherings को संगठित करता है।',
      overview:
        'HangOut planning, participation और follow-up को सरल बनाता है ताकि community लगातार सक्रिय रहे।',
    },
    sportcenter: {
      description:
        'स्पोर्ट सेंटर प्रबंधन, बुकिंग, इवेंट, कोचिंग और लीग्स के लिए AI-first प्लेटफॉर्म।',
      overview:
        'SportCenter संचालन और सदस्य भागीदारी को reservations, matching और tournament workflows से जोड़ता है।',
    },
    'danceschool-pro': {
      description:
        'डांस स्कूल्स के लिए प्लेटफॉर्म: classes, schedules, student operations, performances और events.',
      overview:
        'DanceSchool Pro डांस स्कूल्स को structured programs और smooth operations चलाने में मदद करता है।',
    },
    player: {
      description:
        'AI-native ऐप जो locations, partners और games खोजने में मदद करता है, stats और leaderboards के साथ।',
      overview:
        'Player खिलाड़ियों को खेल समन्वय और performance growth के लिए discovery और progression tools देता है।',
    },
    dancer: {
      description:
        'AI-native ऐप जिससे dancers partners, classes, festivals और communities खोज सकते हैं।',
      overview:
        'Dancer नियमित भागीदारी को support करता है और relevant opportunities से जोड़ता है।',
    },
  },
  ar: {
    ocio: {
      description:
        'تطبيق AI-native لتنمية الشبكة الاجتماعية، واكتشاف الاهتمامات المشتركة، والتواصل الآمن.',
      overview:
        'يساعد Ocio المستخدمين على بناء علاقات موثوقة عبر الاهتمامات المشتركة والمشاركة الفعلية في الفعاليات.',
    },
    hangout: {
      description:
        'تطبيق AI-native لتنظيم اللقاءات عبر الإنترنت وعلى أرض الواقع للمجموعات والمجتمعات.',
      overview:
        'يبسّط HangOut التخطيط والمشاركة والمتابعة للحفاظ على تفاعل المجتمعات بشكل مستمر.',
    },
    sportcenter: {
      description:
        'منصة AI-first لإدارة المراكز الرياضية والحجوزات والفعاليات والتدريب والدوريات.',
      overview:
        'يربط SportCenter بين التشغيل ومشاركة الأعضاء عبر الحجز والمطابقة وإدارة البطولات.',
    },
    'danceschool-pro': {
      description:
        'منصة لمدارس الرقص تشمل الصفوف والجداول وإدارة الطلاب والعروض والفعاليات.',
      overview:
        'يساعد DanceSchool Pro مدارس الرقص على تشغيل برامجها بشكل منظم وفعّال.',
    },
    player: {
      description:
        'تطبيق AI-native للعثور على الملاعب والشركاء والألعاب مع الإحصاءات ولوحات الترتيب.',
      overview:
        'يساعد Player الرياضيين على تنسيق اللعب وتحسين الأداء عبر أدوات الاكتشاف والتقدم.',
    },
    dancer: {
      description:
        'تطبيق AI-native للراقصين للعثور على شركاء ودروس ومهرجانات ومجتمعات مناسبة.',
      overview:
        'يدعم Dancer المشاركة المستمرة من خلال ربط المستخدمين بفرص وعلاقات ذات صلة.',
    },
  },
  zh: {
    ocio: {
      description:
        'AI 原生社交产品，帮助用户拓展人脉、发现共同兴趣并实现安全社交。',
      overview:
        'Ocio 通过兴趣匹配与线下活动参与，帮助用户建立可信且有价值的社交关系。',
    },
    hangout: {
      description:
        '面向社群与兴趣群体的 AI 原生活动组织应用，支持线上与线下聚会。',
      overview:
        'HangOut 简化活动策划、参与与复盘，帮助社区保持长期活跃。',
    },
    sportcenter: {
      description:
        'AI-first 运动中心运营平台，覆盖预订、活动、教练、赛事与联赛管理。',
      overview:
        'SportCenter 通过预约、匹配与赛事流程连接运营效率和会员参与度。',
    },
    'danceschool-pro': {
      description:
        '面向舞蹈学校的平台，覆盖课程、排期、学员运营、演出与校级活动管理。',
      overview:
        'DanceSchool Pro 帮助舞蹈学校稳定运行结构化教学与活动流程。',
    },
    player: {
      description:
        'AI 原生体育应用，帮助用户找场地、找搭档、组局并通过数据与榜单持续提升。',
      overview:
        'Player 结合发现、参与与成长机制，支持运动爱好者长期进步。',
    },
    dancer: {
      description:
        'AI 原生舞者应用，帮助寻找舞伴、课程、节庆活动与相关社区。',
      overview:
        'Dancer 通过机会发现与社区连接，支持舞者持续参与与成长。',
    },
  },
  ko: {
    ocio: {
      description:
        '공유 관심사 기반 네트워크 확장과 안전한 소셜 활동을 지원하는 AI-native 앱입니다.',
      overview:
        'Ocio는 관심사 매칭과 오프라인 참여를 통해 신뢰도 높은 인간관계를 형성하도록 돕습니다.',
    },
    hangout: {
      description:
        '관심 그룹과 커뮤니티를 위한 온라인/오프라인 모임 운영 AI-native 앱입니다.',
      overview:
        'HangOut은 기획, 참여, 후속 관리를 단순화해 커뮤니티의 지속적인 활동을 지원합니다.',
    },
    sportcenter: {
      description:
        '스포츠센터 운영, 예약, 이벤트, 코칭, 리그를 위한 AI-first 플랫폼입니다.',
      overview:
        'SportCenter는 예약, 매칭, 대회 워크플로로 운영 효율과 회원 참여를 함께 높입니다.',
    },
    'danceschool-pro': {
      description:
        '댄스 학원을 위한 플랫폼으로 수업, 일정, 수강생 운영, 공연, 이벤트를 지원합니다.',
      overview:
        'DanceSchool Pro는 체계적인 교육 운영과 학원 이벤트 관리를 안정적으로 지원합니다.',
    },
    player: {
      description:
        '장소·파트너·게임 탐색과 통계/리더보드를 제공하는 AI-native 스포츠 앱입니다.',
      overview:
        'Player는 발견-참여-성장 흐름을 통해 스포츠 참여와 실력 향상을 돕습니다.',
    },
    dancer: {
      description:
        '댄서를 위한 AI-native 앱으로 파트너, 수업, 페스티벌, 커뮤니티 탐색을 지원합니다.',
      overview:
        'Dancer는 기회 탐색과 연결 강화를 통해 지속적인 댄스 참여를 돕습니다.',
    },
  },
  ja: {
    ocio: {
      description:
        '共有関心によるつながり拡大と安全な交流を支える AI ネイティブアプリです。',
      overview:
        'Ocio は関心ベースのマッチングとイベント参加を通じて、信頼できる人間関係の構築を支援します。',
    },
    hangout: {
      description:
        'コミュニティ向けにオンライン/オフラインの集まりを運営できる AI ネイティブアプリです。',
      overview:
        'HangOut は企画・参加・フォローアップを簡素化し、継続的なコミュニティ活動を促進します。',
    },
    sportcenter: {
      description:
        'スポーツ施設運営、予約、イベント、コーチング、リーグを支える AI-first プラットフォームです。',
      overview:
        'SportCenter は予約、マッチング、大会運営を通じて運営効率と参加体験を同時に高めます。',
    },
    'danceschool-pro': {
      description:
        'ダンススクール向けに、クラス、スケジュール、生徒運営、発表会、イベントを管理するプラットフォームです。',
      overview:
        'DanceSchool Pro はスクール運営を構造化し、学習体験とイベント進行を安定化します。',
    },
    player: {
      description:
        '場所・パートナー・ゲーム探索に加え、統計とランキングで成長を支える AI ネイティブアプリです。',
      overview:
        'Player は発見・参加・成長の流れを通じて、継続的なプレーと上達を支援します。',
    },
    dancer: {
      description:
        'ダンサー向けに、パートナー、レッスン、フェスティバル、コミュニティ探索を支援する AI ネイティブアプリです。',
      overview:
        'Dancer は機会発見とつながり強化を通じて、継続的なダンス参加を促進します。',
    },
  },
}

export const getProducts = (language = 'en') =>
  baseProducts.map((product) => {
    const localized = localizedProductText[language]?.[product.slug]
    return {
      ...product,
      description: localized?.description ?? product.description,
      overview: localized?.overview ?? product.overview,
    }
  })

export const products = getProducts('en')
