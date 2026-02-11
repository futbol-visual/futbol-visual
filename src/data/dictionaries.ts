export type Language = 'es' | 'ja';

export type Dictionary = {
    nav: {
        courses: string;
        packs: string;
        mentorship: string;
        blog: string;
        login: string;
        signup: string;
        dashboard: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta_courses: string;
        cta_packs: string;
        badge_video: string;
        badge_exercises: string;
        badge_online: string;
        live_analysis: string;
        live_analysis_sub: string;
    };
    value_prop: {
        title: string;
        subtitle: string;
        card1_title: string;
        card1_desc: string;
        card2_title: string;
        card2_desc: string;
        card3_title: string;
        card3_desc: string;
    };
    courses: {
        tag: string;
        title: string;
        subtitle: string;
        cta_all: string;
        coming_soon_title: string;
        coming_soon_desc: string;
    };
    packs: {
        tag: string;
        title: string;
        subtitle: string;
        cta_all: string;
        cta_mobile: string;
    };
    pro: {
        tag: string;
        subtitle: string;
        cta_waitlist: string;
    };
    cta_final: {
        title: string;
        subtitle: string;
        button: string;
    };
    footer: {
        about: string;
        links: string;
        legal: string;
        social: string;
        rights: string;
    };
};

export const translations: Record<Language, Dictionary> = {
    es: {
        nav: {
            courses: 'Cursos',
            packs: 'Packs por Posición',
            mentorship: 'Mentorías',
            blog: 'Blog',
            login: 'Iniciar Sesión',
            signup: 'Empezar Gratis',
            dashboard: 'Mi Área',
        },
        hero: {
            title: 'Eleva tu nivel como Entrenador de Fútbol',
            subtitle: 'La primera academia online basada en el aprendizaje visual. Domina la táctica con análisis de video, ejercicios reales y formación específica por posición.',
            cta_courses: 'Ver Cursos Completos',
            cta_packs: 'Packs por Posición',
            badge_video: 'Micro-conceptos Tácticos',
            badge_exercises: 'Tareas Listas para Entrenar',
            badge_online: '100% Online, a tu ritmo, con resultados inmediatos',
            live_analysis: 'Análisis Táctico',
            live_analysis_sub: 'Presión Alta vs Bloque Bajo',
        },
        value_prop: {
            title: '¿Por qué elegir Fútbol Visual?',
            subtitle: 'Olvídate de la teoría aburrida. Nuestra metodología se basa en lo que realmente sucede en el campo.',
            card1_title: 'Cortes Tácticos',
            card1_desc: 'Aprende viendo, no solo leyendo. Desglosamos jugadas reales para que entiendas el "por qué" de cada movimiento al instante.',
            card2_title: 'De la Pantalla al Campo',
            card2_desc: 'Tareas listas para tu sesión. Conecta el análisis visual con ejercicios prácticos diseñados para transferir los conceptos a tus jugadores.',
            card3_title: 'Micro-Conceptos',
            card3_desc: 'Mejora jugador a jugador. Contenido ultra-específico por demarcación para potenciar el rendimiento individual dentro del sistema colectivo.',
        },
        courses: {
            tag: 'Formación de Élite',
            title: 'Cursos Destacados',
            subtitle: 'Programas completos diseñados para transformar tu comprensión del juego desde la base hasta la élite.',
            cta_all: 'Ver catálogo completo',
            coming_soon_title: 'Próximamente',
            coming_soon_desc: 'Nuevos cursos en producción',
        },
        packs: {
            tag: 'Específico por Posición',
            title: 'Packs de Video',
            subtitle: 'Mejora el rendimiento individual de tus jugadores con colecciones de clips categorizados por demarcación.',
            cta_all: 'Ver todos los packs',
            cta_mobile: 'Ver todos los packs',
        },
        pro: {
            tag: 'PRÓXIMAMENTE',
            subtitle: 'Acceso ilimitado a toda la academia por una suscripción mensual. Cursos avanzados, packs semanales, recursos descargables y sesiones de análisis en vivo exclusivas.',
            cta_waitlist: 'Unirse a la lista de espera',
        },
        cta_final: {
            title: '¿Listo para transformar la identidad de tu equipo?',
            subtitle: 'Únete a la nueva generación de entrenadores que dominan el lenguaje visual del fútbol moderno.',
            button: 'Empezar Ahora',
        },
        footer: {
            about: 'La plataforma definitiva para entrenadores que buscan la excelencia a través del análisis visual.',
            links: 'Enlaces',
            legal: 'Legal',
            social: 'Redes',
            rights: 'Todos los derechos reservados.',
        },
    },
    ja: {
        nav: {
            courses: 'コース',
            packs: 'ポジション別パック',
            mentorship: 'メンターシップ',
            blog: 'ブログ',
            login: 'ログイン',
            signup: '無料で始める',
            dashboard: 'マイエリア',
        },
        hero: {
            title: 'サッカー監督としてのレベルを高める',
            subtitle: '視覚学習に基づいた初のオンラインアカデミー。ビデオ分析、実践的な練習、ポジション別の専門トレーニングで戦術をマスターしましょう。',
            cta_courses: '全コースを見る',
            cta_packs: 'ポジション別パック',
            badge_video: '戦術的マイクロコンセプト', // Updated
            badge_exercises: 'すぐに使えるトレーニング課題', // Updated
            badge_online: '100% オンライン、自分のペースで、即座に結果を', // Updated
            live_analysis: '戦術分析',
            live_analysis_sub: 'ハイプレス vs ローブロック',
        },
        value_prop: {
            title: 'なぜFútbol Visualを選ぶのか？',
            subtitle: '退屈な理論は忘れましょう。私たちの方法は、ピッチ上で実際に起こっていることに基づいています。',
            card1_title: '戦術クリップ', // Removed 4K
            card1_desc: '読むだけでなく、見て学ぶ。実際のプレーを分解し、それぞれの動きの「なぜ」を瞬時に理解できるようにします。', // Removed HD ref
            card2_title: '画面からピッチへ',
            card2_desc: 'セッションですぐに使えるタスク。視覚的な分析を、コンセプトを選手に伝えるために設計された実践的な練習と結びつけます。',
            card3_title: 'マイクロコンセプト',
            card3_desc: '選手一人ひとりを改善する。集団システムの中で個人のパフォーマンスを最大化するための、ポジション別の超具体的なコンテンツ。',
        },
        courses: {
            tag: 'エリートトレーニング',
            title: '注目のコース',
            subtitle: '基礎からエリートレベルまで、ゲームの理解を一変させるために設計された完全なプログラム。',
            cta_all: '全カタログを見る',
            coming_soon_title: '近日公開',
            coming_soon_desc: '新しいコースを制作中',
        },
        packs: {
            tag: 'ポジション別',
            title: 'ビデオパック',
            subtitle: 'ポジションごとに分類されたクリップ集で、選手の個々のパフォーマンスを向上させます。',
            cta_all: '全パックを見る',
            cta_mobile: '全パックを見る',
        },
        pro: {
            tag: '近日公開',
            subtitle: '月額サブスクリプションでアカデミーのすべてに無制限アクセス。上級コース、毎週のパック、ダウンロード可能なリソース、独占ライブ分析セッション。',
            cta_waitlist: 'ウェイティングリストに参加',
        },
        cta_final: {
            title: 'チームのアイデンティティを変える準備はできていますか？',
            subtitle: '現代サッカーの視覚言語を操る次世代の監督たちに加わりましょう。',
            button: '今すぐ始める',
        },
        footer: {
            about: '視覚的な分析を通じて卓越性を追求する監督のための究極のプラットフォーム。',
            links: 'リンク',
            legal: '法的事項',
            social: 'ソーシャル',
            rights: '全著作権所有。',
        },
    },
};

export type TranslationKey =
    | `nav.${keyof Dictionary['nav']}`
    | `hero.${keyof Dictionary['hero']}`
    | `value_prop.${keyof Dictionary['value_prop']}`
    | `courses.${keyof Dictionary['courses']}`
    | `packs.${keyof Dictionary['packs']}`
    | `pro.${keyof Dictionary['pro']}`
    | `cta_final.${keyof Dictionary['cta_final']}`
    | `footer.${keyof Dictionary['footer']}`;
