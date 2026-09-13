import { WorkDetailData } from "@/app/_data/works";

type Props = {
    data: WorkDetailData;
};

export default function WorkDetail({ data }: Props) {
    return (
        <div className="h-[100%] relative">
            <div className="overflow-y-scroll h-[92%]">
                <h3 className="text-xl font-bold mb-4">{data.title}</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    className="w-60 mx-auto mb-5"
                    src={data.imageUrl}
                    alt={data.title}
                />

                <dl className="mb-4">
                    <div className="flex gap-4 py-2 border-b">
                        <dt className="min-w-[80px] font-bold">担当範囲</dt>
                        <dd>{data.role}</dd>
                    </div>
                    <div className="flex gap-4 py-2 border-b">
                        <dt className="min-w-[80px] font-bold">使用技術</dt>
                        <dd>{data.tech.join(" / ")}</dd>
                    </div>
                </dl>

                <h4 className="font-bold mt-4 mb-2">■概要</h4>
                <div className="mb-7">{data.overview}</div>

                <h4 className="font-bold mb-2">■工夫した点</h4>
                <div className="mb-4">{data.points}</div>
            </div>

            {data.url && (
                <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-600 underline absolute bottom-0"
                >
                    サイトを見る
                </a>
            )}
        </div>
    );
}
