"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { works } from "@/app/_data/works";
import WorkDetail from "./WorkDetail";

type myWorkCardProps = {
    id: string;
    title: React.ReactNode;
    tag: string;
    work: string;
    img: string;
};

function MyWorkCard({ id, title, tag, work, img }: myWorkCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const detail = works[id];
    const alt = String(title);
    return (
        <>
            <button
                className="text-center relative cursor-pointer hover-scale-up border-1 p-3"
                onClick={() => setIsOpen(true)}
            >
                <div className="h-[200px]">
                    <img
                        className="mx-auto w-auto h-[100%] object-contain"
                        src={img}
                        alt={alt}
                    />
                </div>
                <p className="mb-1">{title}</p>
                <p className="text-[10px] text-[#6C6C6C]">{work}</p>
                <p className="absolute top-[10px] right-[10px] text-[12px] bg-white rounded-[4px] border px-1.5">
                    {tag}
                </p>
                <div className="mx-auto mt-3 py-1 bg-[#FF8600] rounded-md text-white text-xs w-[160px]">
                    詳細を確認
                </div>
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {detail ? <WorkDetail data={detail} /> : <p>準備中です</p>}
            </Modal>
        </>
    );
}

export default MyWorkCard;
