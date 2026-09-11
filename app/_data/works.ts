export type WorkDetailData = {
    id: string;
    title: string;
    role: string;
    tech: string[];
    overview: string;
    points: string[];
    url?: string;
};

export const works: Record<string, WorkDetailData> = {
    ec: {
        id: "ec",
        title: "某ECサイト",
        role: "フロントエンド / ディレクション",
        tech: ["HTML", "CSS", "JavaScript", "RCMS"],
        overview: "コーポレートサイトの制作を担当しました。",
        points: [
            "セマンティックなマークアップを意識し、SEOに配慮",
            "スマホ表示時の可読性を優先したフォントサイズ設計",
        ],
    },
    aruhi: {
        id: "aruhi",
        title: "或陽",
        role: "デザイン / フロントエンド / ディレクション",
        tech: ["HTML", "CSS", "JavaScript", "Figma"],
        overview: "コーポレートサイトの制作を担当しました。",
        points: [
            "セマンティックなマークアップを意識し、SEOに配慮",
            "スマホ表示時の可読性を優先したフォントサイズ設計",
        ],
        url: "https://aruhi-music.github.io/official/",
    },
    pleasanit: {
        id: "pleasanit",
        title: "PLEASANIT",
        role: "デザイン / フロントエンド / ディレクション",
        tech: ["React", "Figma"],
        overview: "コーポレートサイトの制作を担当しました。",
        points: [
            "セマンティックなマークアップを意識し、SEOに配慮",
            "スマホ表示時の可読性を優先したフォントサイズ設計",
        ],
        url: "https://pleasanit.co.jp/",
    },
    bluenova: {
        id: "bluenova",
        title: "Blue-Nova",
        role: "デザイン / フロントエンド / バックエンド",
        tech: ["Next.JS", "Figma", "MicroCMS"],
        overview: "",
        points: ["", ""],
        url: "https://shunta-iwasaki.github.io/blue-nova/",
    },
    teetee: {
        id: "teetee",
        title: "てぇてぇ水",
        role: "デザイン / フロントエンド",
        tech: ["HTML", "CSS", "JavaScript", "Figma"],
        overview: "ポートフォリオ用に商品LPのデザインと実装を担当しました。",
        points: [
            "スクロール連動アニメーションで訴求力を向上",
            "画像を最適化し、表示速度を改善",
        ],
        url: "https://shunta-iwasaki.github.io/teeteeWater/",
    },
    diary: {
        id: "diary",
        title: "片道交換日記",
        role: "デザイン / ディレクション / バックエンド構築 / 公開",
        tech: ["Expo (React Native)", "TypeScript", "Firebase"],
        overview: "",
        points: ["", ""],
        url: "https://apps.apple.com/jp/app/%E7%89%87%E9%81%93%E4%BA%A4%E6%8F%9B%E6%97%A5%E8%A8%98-%E6%97%A5%E5%B8%B8%E3%81%A8%E6%87%BA%E6%82%94/id6773616871",
    },
    a: {
        id: "",
        title: "",
        role: "",
        tech: [""],
        overview: "",
        points: ["", ""],
        url: "",
    },
};
