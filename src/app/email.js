"use client"
import { useState } from "react";
import data from './emails.json';
import Window from "./window";

// email client

function EmailButton(props) {

    return (
        <div onClick={props.onClick} className={`p-1 border-b-2 w-[300px] cursor-pointer text-lg ${props.isCurrent ? "bg-neutral-300" : "bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300"}`}>
            <div>
            <img src={props.wasRead ? "/email_read.png" : "/email_unread.png"} height="32" width="32" className="inline pr-1"/>
            <span className="font-bold inline-block translate-y-2">{props.sender}</span>
            </div>
            <div>{props.title}</div>
        </div>
    );
}


export default function EmailClient(props) {
    let emails = data["emails"];
    let [currentEmail, setCurrentEmail] = useState(0);
    let [readEmails, setReadEmails] = useState([0]);

    function onClick(i, e) {
        setCurrentEmail(i);
        setReadEmails([...readEmails, i]);
    }


    return (
      <Window windowState={props.windowState} icon={"/mailapp.png"} width={1000} height={600} setWindowState={props.setWindowState} title="Gayosoft Email 2003">
        <div className="flex flex-row w-[100.5%] h-full">
          <div className="flex-grow">
            <div className="flex flex-col border-r-4 h-full bg-neutral-100 overflow-y-scroll">
              {emails.map((email, i) => {
                  return (<EmailButton key={i} sender={email.sender} title={email.title} isCurrent={i == currentEmail} wasRead={readEmails.includes(i)} onClick={(e) => onClick(i, e)} />);
              })}
            </div>
          </div>
          <div className="grow-0 px-2 pt-3 bg-neutral-100">
            <div className="text-2xl font-semibold">{emails[currentEmail].title}</div>
            <div className="text-lg mb-[-7px]"> <span className="text-neutral-500 font-semibold">From: </span>{emails[currentEmail].sender}</div>
            <div className="text-lg mb-[-7px]"> <span className="text-neutral-500 font-semibold">To: </span>{emails[currentEmail].recipient}</div>
            <div className="text-lg mb-[-7px]"><span className="text-neutral-500 font-semibold">cc: {emails[currentEmail].cc}</span></div>
            <div>{emails[currentEmail].date}</div>
            <hr className="border-[0.5] border-neutral-500 w-full" />
            <div className="text-lg font-serif overflow-y-scroll h-[440px] w-[673px]">
                {emails[currentEmail].body.map((line, i) => {
                  return (
                    <div key={i} style={{minHeight: 12}}>
                      {line}
                    </ div>
                  );
                })}
            </div>
          </div>
        </div>
      </Window>
    )
  }