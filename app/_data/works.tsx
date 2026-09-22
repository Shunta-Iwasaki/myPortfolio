export type WorkDetailData = {
    id: string;
    title: string;
    role: string;
    tech: string[];
    overview: React.ReactNode;
    points: React.ReactNode;
    url?: string;
    imageUrl: string;
};

export const works: Record<string, WorkDetailData> = {
    ec: {
        id: "ec",
        title: "某ECサイト",
        role: "フロントエンド / ディレクション",
        tech: ["HTML", "CSS", "JavaScript", "RCMS"],
        overview: (
            <p>
                通販事業を展開する企業のECサイトで、運用保守と新規機能の開発を担当しました。
                <br />
                稼働中の大規模サイトへの改修が中心のため、既存実装への影響を確認しながら実装を行いました。
            </p>
        ),
        points: (
            <p>
                <span style={{ fontWeight: "bold" }}>
                    汎用的なコンポーネントの実装：
                </span>
                <br />
                購入導線のモーダルやスライダーを含む商品カード群のコンポーネントを作成する際は、すべての商品ページで使用できるような汎用的なコンポーネントを作成しました。すべての商品での使用を保証するため、パターンテストを行いました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    SEO・パフォーマンスを意識した実装：
                </span>
                <br />
                画像の遅延読み込み、FV画像の事前読み込みによるLCP改善、領域の確保によるCLS対策、不要スタイルの削除などを実施しました。あわせて構造化データとセマンティックなマークアップを実装し、SEOの対策も行いました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    既存システムへの影響を抑えた改修：
                </span>
                <br />
                RCMSの検索機能を用いて影響範囲の調査などを行い、仕組みを理解することで既存システムへの影響を抑えた改修を行いました。調査に基づくテストパターンで検証することで悪影響の有無を保証しました。
            </p>
        ),
        imageUrl: "./img/img_mywork_ec.png",
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
        imageUrl: "./img/img_mywork_aruhi.png",
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
        points: (
            <p>
                <span style={{ fontWeight: "bold" }}>チームでの品質担保：</span>
                <br />
                制作メンバーに初心者がいたため、着手前にBEMの命名規則と VS
                CodeでのGit操作手順をドキュメント化。事前にルールを整備することでコードの統一性を保ち、自分は制作とディレクションに集中できる体制を作りました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    早期デザイン共有による手戻り削減：
                </span>
                <br />
                デザインについて、主要ページ3枚を1〜2日で仕上げ、全体トーンの合意を先に取りました。言葉だけでは見つからなかった方向性のズレを早期に発見でき、手戻りが削減できました。
            </p>
        ),
        url: "https://pleasanit.co.jp/",
        imageUrl: "./img/img_mywork_pleasanit.png",
    },
    bluenova: {
        id: "bluenova",
        title: "Blue-Nova",
        role: "デザイン / フロントエンド / バックエンド",
        tech: ["Next.JS", "Figma", "MicroCMS"],
        overview: (
            <p>
                ポートフォリオ用に、架空のECサイトを作成しました。人気IPを多数抱えるゲーム会社を想定しています。
                <br />
            </p>
        ),
        points: (
            <p>
                <span style={{ fontWeight: "bold" }}>
                    Zodを用いた、バリデーションの管理：
                </span>
                <br />
                Zodでスキーマを定義し、それを元に型定義することで、管理を一元化しました。条件付き必須などの複雑な処理もRefineで実装しました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    客単価向上のための導線設計：
                </span>
                <br />
                客単価向上のため、商品ページの関連商品・「あなたにおすすめ」・カート画面のアップセルなどの購入導線を実装しました。IPへの愛着を購入へと繋げることを意識しています。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    購入後の体験を見せるSNS投稿コンテンツ：
                </span>
                <br />
                SNS投稿コンテンツをページに配置し、購入後の体験を具体的に想起させる設計にしました。よりユーザーに近い人の体験を提示することで、購入意欲を向上させる狙いです。
            </p>
        ),
        url: "https://blue-nova-five.vercel.app/",
        imageUrl: "./img/img_mywork_bn.png",
    },
    teetee: {
        id: "teetee",
        title: "てぇてぇ水",
        role: "デザイン / フロントエンド",
        tech: ["HTML", "CSS", "JavaScript", "Figma"],
        overview: (
            <p>
                ポートフォリオ用に、架空の商品LPを作成しました。「推しの香りを再現する香水」という架空商品です。
            </p>
        ),
        points: (
            <p>
                <span style={{ fontWeight: "bold" }}>
                    ターゲットに合わせたトーン設計：
                </span>
                <br />
                ターゲットを10〜20代のオタク層女性に絞り、配色・フォント・言葉選びを選定しました。ターゲット外には刺さりづらいが、ターゲットには強く刺さる表現を狙いました。
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>
                    CTA到達のためのスクロール設計：
                </span>
                <br />
                スクロール量に連動して表示されるコンテンツを実装し、スクロールを促すことでCTAの到達を後押ししました。
            </p>
        ),
        url: "https://shunta-iwasaki.github.io/teeteeWater/",
        imageUrl: "./img/img_mywork_teetee.png",
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
        imageUrl: "./img/img_mywork_diary.png",
    },
    a: {
        id: "",
        title: "",
        role: "",
        tech: [""],
        overview: "",
        points: ["", ""],
        url: "",
        imageUrl: "",
    },
};
