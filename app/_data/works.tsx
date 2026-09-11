export type WorkDetailData = {
    id: string;
    title: string;
    role: string;
    tech: string[];
    overview: React.ReactNode;
    points: React.ReactNode;
    url?: string;
};

export const works: Record<string, WorkDetailData> = {
    ec: {
        id: "ec",
        title: "某ECサイト",
        role: "フロントエンド / ディレクション",
        tech: ["HTML", "CSS", "JavaScript", "RCMS"],
        overview: (
            <p>
                ECサイトの運用保守、新規機能作成を担当しました。
                <br />
            </p>
        ),
        points: <p>セマンティックなマークアップを意識し、SEOに配慮</p>,
    },
    aruhi: {
        id: "aruhi",
        title: "或陽",
        role: "デザイン / フロントエンド / ディレクション",
        tech: ["HTML", "CSS", "JavaScript", "Figma"],
        overview: (
            <p>
                友人が所属するインディーズバンドの、オフィシャルサイトを作成しました。
                <br />
                ライブに定評のあるインディーズバンドで、ライブ情報、ニュース情報、楽曲情報などが掲載されています。
            </p>
        ),
        points: (
            <p>
                <span style={{ fontWeight: "bold" }}>
                    SNSへのスムーズな導線：
                </span>
                <br />
                SNSへの流入増加が大きな目標の一つだったので、画面のどの位置からでもSNSへアクセスできるようなUIを実装しました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    視覚的な世界観の提示：
                </span>
                <br />
                FVに動画を配置、メンバー写真や動画コンテンツのサイト上部掲載などにより、視覚的にバンドのカッコ良さを伝えようと、コンテンツ配置を工夫しました。
            </p>
        ),
        url: "https://aruhi-music.github.io/official/",
    },
    pleasanit: {
        id: "pleasanit",
        title: "PLEASANIT",
        role: "デザイン / フロントエンド / ディレクション",
        tech: ["React", "Figma"],
        overview: (
            <p>
                コーポレートサイト新規作成に伴う、制作作業全般を行いました。
                <br />
            </p>
        ),
        points: <p>セマンティックなマークアップを意識し、SEOに配慮</p>,
        url: "https://pleasanit.co.jp/",
    },
    bluenova: {
        id: "bluenova",
        title: "Blue-Nova",
        role: "デザイン / フロントエンド / バックエンド",
        tech: ["Next.JS", "Figma", "MicroCMS"],
        overview: (
            <p>
                ECサイトの運用保守、新規機能作成を担当しました。
                <br />
            </p>
        ),
        points: <p>セマンティックなマークアップを意識し、SEOに配慮</p>,
        url: "https://shunta-iwasaki.github.io/blue-nova/",
    },
    teetee: {
        id: "teetee",
        title: "てぇてぇ水",
        role: "デザイン / フロントエンド",
        tech: ["HTML", "CSS", "JavaScript", "Figma"],
        overview: (
            <p>
                ECサイトの運用保守、新規機能作成を担当しました。
                <br />
            </p>
        ),
        points: <p>セマンティックなマークアップを意識し、SEOに配慮</p>,
        url: "https://shunta-iwasaki.github.io/teeteeWater/",
    },
    diary: {
        id: "diary",
        title: "片道交換日記",
        role: "デザイン / ディレクション / バックエンド構築 / 公開",
        tech: ["Expo (React Native)", "TypeScript", "Firebase"],
        overview: (
            <p>
                自主制作で、日記を書くと誰かの日記が匿名で届くアプリを作成しました。
                <br />
                普段の何気ないことを書く「日常モード」と、誰にも言えないことを吐き出す「懺悔モード」を実装しました。
                <br />
                誰かとのつながりをゆるく感じながら、日常の記録や、後悔の懺悔が行えるアプリです。
            </p>
        ),
        points: (
            <p>
                <span style={{ fontWeight: "bold" }}>
                    読まれたら消えるデータ設計：
                </span>
                <br />
                日記は1人に読まれた瞬間にDBから物理削除し、本文は端末ローカルにのみ保存することで、拡散リスクの排除とサーバー運用コストの圧縮を同時に実現しました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>DBアクセスへの制限：</span>
                <br />
                FirestoreへのアクセスをすべてCloud
                Functions経由に限定。不正な改ざんに対するセキュリティ対策を講じました。
            </p>
        ),
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
