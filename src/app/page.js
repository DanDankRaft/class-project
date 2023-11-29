"use client";
import { useState } from "react";
import EmailClient from "./email";
import Word from "./word";
import Guestbook from "./guestbook";
import Itunes from "./itunes";
import About from "./about";

function DesktopIcon(props)
{

  return (
    <div
      onClick={(e) => props.setAppState(true)}
      className={`p-0 mb-2 border-none ${props.appState ? "cursor-default" : "cursor-pointer"}`}
    >
      <img src={props.icon} className="mx-auto h-16 w-16" />
      <p className="bg-[#004e98] text-white mt-1 px-1 w-fit mx-auto ">{props.name}</p>
    </div>
  );
}

export default function Home() {
  const [emailOpen, setEmailOpen] = useState(false);
  const [wordOpen, setWordOpen] = useState(false);
  const [guestbookOpen, setGuestbookOpen] = useState(false);
  const [itunesOpen, setItunesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(true);

  async function fullscreen(e) {
    if(!document.fullscreenElement)
      await document.documentElement.requestFullscreen({ navigationUI: "show" });
    else
      await document.exitFullscreen();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <img src="\bliss.jpg" className="w-screen h-screen" />
      <button className="absolute bottom-5" onClick={fullscreen}>Fullscreen</button>
      <div className="absolute m-5 left-0">
        <DesktopIcon setAppState={setAboutOpen} icon={"/info.png"} name="About This Exhibit" appState={aboutOpen} />
        <DesktopIcon setAppState={setEmailOpen} icon={"/mailapp.png"} name="Emails" appState={emailOpen} />
        <DesktopIcon setAppState={setWordOpen} icon={"/notepad.png"} name="Writer" appState={wordOpen}/>
        <DesktopIcon setAppState={setItunesOpen} icon={"/itunes.png"} name="iTunez" appState={itunesOpen} />
        <DesktopIcon setAppState={setGuestbookOpen} icon={"/addressbook.png"} name="Guest Book" appState={guestbookOpen}/>
      </div>
      <About windowState={!aboutOpen} setWindowState={setAboutOpen} />
      <EmailClient windowState={!emailOpen} setWindowState={setEmailOpen} />
      <Word windowState={!wordOpen} setWindowState={setWordOpen} />
      <Guestbook windowState={!guestbookOpen} setWindowState={setGuestbookOpen} />
      <Itunes windowState={!itunesOpen} setWindowState={setItunesOpen} />
    </main>
  );
}
