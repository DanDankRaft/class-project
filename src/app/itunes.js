"use client"
import { useState } from "react";
import Window from "./window";

export default function Itunes(props) {

    let body=[
        "One of the biggest struggles of queer people in the workplace is getting the same domestic partner benefits that straight couples enjoy.",
        "Here is how Apple helped queer employees in Texas get benefits:",
        "In 1993, Apple announces plans to build a new call center in Williamson county, Texas (near Austin).",
        "It asks for $750,000 in tax relief.",
        "On November 30th, the county's board of commissioners rejects Apple's request in a 2-3 vote: the company's commitment to domestic partner benefits for same-sex couples was unacceptable.",
        "The story goes national - Washington Post and Wall Street Journal run stories about it by the following day.",
        "There are questions about what Apple would do next? Would they cave in to commissioners? Would they relocate the call center somewhere else?",
        "They do neither - they instead insist that they will keep trying to set up a call center in Texas that supports queer employees.",
        "Analysts note at the time that this probably comes from a rare, genuine desire among Apple management to support queer employees.",
        "In 1993, Apple was not the titan that it is today. It was hammoraging money and rapidly veering towards bankruptcy.",
        "Yet, they spent the following week lobbying county commissioners.",
        "They were also supported by Texas governor Ann Richards, who fought to keep the company in the state.",
        "On December 7th, the commission meets again and re-votes on the tax break. One commissioner flips. Williamson county will get a queer-supporting tech employer."
    ];

    return (
        <Window windowState={props.windowState} icon={"/itunes.png"} width={1000} height={600} setWindowState={props.setWindowState} title="iTunez - Generic Music App">
            <div className="ml-[1px] w-[994px]">
                <div className="h-[570px]">
                <img src="/itunesBackground.png" />
                    <div className="h-[503px] overflow-y-scroll">
                        {body.map((line, i) => {
                            return (<div key={i} className="px-1 text-lg" style={{backgroundColor: (i % 2 == 0 ? "#edf3fe" : "#ffffff")}}>{line}</div>);
                        })}
                    </div>
                </div>
            </div>
        </Window>
    );
}