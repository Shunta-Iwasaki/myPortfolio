import { WorkDetailData } from "@/app/_data/works";

type Props = {
    data: WorkDetailData;
};

export default function WorkDetail({ data }: Props) {
    return (
        <div>
            <h3 className="text-xl font-bold mb-4">{data.title}</h3>

            <dl className="mb-4">
                <div className="flex gap-4 py-2 border-b">
                    <dt className="w-24 font-bold">担当範囲</dt>
                    <dd>{data.role}</dd>
                </div>
                <div className="flex gap-4 py-2 border-b">
                    <dt className="w-24 font-bold">使用技術</dt>
                    <dd>{data.tech.join(" / ")}</dd>
                </div>
            </dl>

            <h4 className="font-bold mt-4 mb-2">概要</h4>
            <p className="mb-4">{data.overview}</p>

            <h4 className="font-bold mb-2">工夫した点</h4>
            <ul className="list-disc pl-5">
                {data.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            {data.url && (
                <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 underline"
                >
                    サイトを見る
                </a>
            )}
        </div>
    );
}
