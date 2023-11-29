import Window from "./window";
import { useState } from "react";

export default function About(props)
{
    return (
        <Window windowState={props.windowState} icon={"/info.png"} width={610} height={740} setWindowState={props.setWindowState} title="About your PC">
            <div className="ml-[1px] w-[604px]">
                <div className="p-1 aboutGradient border-b-4 border-[#f59434]">
                    <div className="flex flex-row w-fit mx-auto">
                        <img src="windowslogo.png" className="w-28" />
                        <p className="text-white text-5xl font-bold italic my-auto">GayOS</p>
                    </div>
                </div>
                <div className="text-3xl font-bold text-center">About This Exhibit</div>
                <hr className="mx-1 border-black" />
                <div className="text-[17px] px-[10px] h-[620px] overflow-y-scroll">
                    <p style={{textIndent: 20}}>
                        Queer people are everywhere - tech included. Yet we often tend to think of queer history and tech history as two completely separate fields. We had Alan Turing, and then what?
                    </p>
                    <p style={{textIndent: 20}}>
                        It turns out, the connection between queerness and tech runs deep. The people developing many of the technologies we use every day used these same technologies to explore, express, and advance queerness.
                    </p>
                    <p style={{textIndent: 20}}>
                        Discover how Bell Labs employees used some early email technologies that they developed to organize the first private sector queer resource group in the United States. These fictional emails are recreations of real events documented by Margot Canaday's book Queer Career and AT&T LEAGUE's website.
                    </p>
                    <p style={{textIndent: 20}}>
                        Find out how Apple helped queer people gain domestic partner benefits in Texas despite some heavy homophobic opposition.This story was preserved by reports from Washington Post, Wall Street Journal, and the New York Times.
                    </p>
                    <p style={{textIndent: 20}}>
                        Read a brief summary of an interview with a tech worker in Dallas, explaining what it is like to work in tech in Texas as a queer person today.
                    </p>
                    <p style={{textIndent: 20}}>
                        Finally, you can tell your own story by writing in our guest book. The history of queer workers in tech is long and necessary, but criminally under-written.
                    </p>
                    <p style={{textIndent: 20}}>
                        We are not just queer people who happen to be in tech; nor are we STEM kids who just happen to be queer. We are queer STEM kids. And that matters.
                    </p>
                </div>
            </div>
        </Window>
    );
}