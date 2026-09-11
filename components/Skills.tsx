"use client";

import ContentHeader from "@/components/ContentHeader";
import Stars from "./Stars";
import Skill from "./Skill";

function Skills() {
    return (
        <section id="skills" className="relative">
            <ContentHeader title="SKILLS" emoji="💻" side="right-[-2px]" />
            <table className="mx-auto mb-7 block w-[90%]">
                <thead>
                    <tr className="leading-[2]">
                        <th className="border-b-2" scope="col">
                            技術
                        </th>
                        <th
                            className="border-b-2 mx-4 block translate-y-[1px]"
                            scope="col"
                        >
                            レベル
                        </th>
                        <th className="border-b-2" scope="col">
                            インフォ
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <Skill
                        skill="HTML"
                        starNum={4}
                        info="セマンティックに基づく作成、既存DOMの読解、SEOを考慮した実装"
                    />
                    <Skill
                        skill="CSS/SCSS"
                        starNum={4}
                        info="レスポンシブ対応、デザインに沿ったUI調整、表示崩れの修正"
                    />
                    <Skill
                        skill="JavaScript"
                        starNum={4}
                        info="DOM操作、イベント制御、フォーム制御、既存JSの調査・修正"
                    />
                    <Skill
                        skill="Figma"
                        starNum={3}
                        info="デザインカンプ作成、コンポーネント設計、デザインデータからの実装"
                    />
                    <Skill
                        skill="TypeScript"
                        starNum={3}
                        info="型定義、Propsでの型付け"
                    />
                    <Skill
                        skill="React"
                        starNum={3}
                        info="コンポーネント実装、Hooksの理解、状態管理"
                    />
                    <Skill
                        skill="Next.js"
                        starNum={3}
                        info="サイト作成、ヘッダレスCMSとの連携、ページ方式の理解"
                    />
                    <Skill
                        skill="Chrome DevTools"
                        starNum={4}
                        info="DOM/CSS/JS確認、コンソール、パフォーマンス検証、オーバーライド"
                    />
                    <Skill
                        skill="Git"
                        starNum={3}
                        info="コミット、プルリクエスト、ブランチ運用"
                    />
                    <Skill
                        skill="SAP/ABAP"
                        starNum={4}
                        info="基幹システム開発・保守、業務理解"
                    />
                </tbody>
            </table>
            <div className="w-[90%] mx-auto mb-7">
                <ul className="w-fit">
                    <li>
                        <Stars starNum={5} /> …
                        技術選定・設計を主導し、チームの技術水準を引き上げられる
                    </li>
                    <li>
                        <Stars starNum={4} /> …
                        設計から実装まで一人で完結でき、レビューや指導ができる
                    </li>
                    <li>
                        <Stars starNum={3} /> …
                        基本的な実装ができ、一人で実装を完結できる
                    </li>
                    <li>
                        <Stars starNum={2} /> …
                        学習経験があり、簡単な実装ができる
                    </li>
                    <li>
                        <Stars starNum={1} /> … 基礎知識のみ
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Skills;
