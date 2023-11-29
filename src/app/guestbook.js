"use client"
import { useState, useEffect } from "react";
import Window from "./window";


export default function Guestbook(props) {
    let [currentGuest, setCurrentGuest] = useState(0);
    let [guests, setGuests] = useState([{name: "null", body: "null"}]);
    let [isEditor, setIsEditor] = useState(false);

    let [editorName, setEditorName] = useState("");
    let [editorBody, setEditorBody] = useState("");

    useEffect(() => {
        fetch("https://gayos.vercel.app/guestbook")
        .then(res => res.json())
        .then(res => setGuests(res.guests));
    }, [props.windowState, isEditor])
    

    async function submitStory(e)
    {
        e.preventDefault();
        let name = e.target.elements.name.value;
        let body = e.target.elements.body.value;
        
        if(!name || !body)
            //TODO: some sort of error message about how you need to have both a name and a message body
            return;

        let reqBody = JSON.stringify({name: name, body: body});

        //todo, replace with environment variable
        fetch("https://gayos.vercel.app/guestbook/post",
        {method: "POST",
         body: reqBody})
        .then(res => setGuests(g => [...g, reqBody]))
        .then(res => setIsEditor(false))
    }


    function setWindowState(val)
    {
        props.setWindowState(val);
        setIsEditor(false);
    }

    return (
        <Window windowState={props.windowState} icon={"./addressbook.png"} width={1000} height={700} setWindowState={setWindowState} title="My Contacts">
            <div className="mx-3 my-2 h-full w-[98%]">
                    <p className="text-lg">This guestbook contains the stories of queer people and tech, including other visitors to this exhibit. Want to say a little bit about yourself and what your story was? Write it here!</p>
                    {!isEditor &&
                            <>
                                <div className="flex flex-row space-x-1 h-[86%]">
                                    <div className="w-[30%] h-full border-[3px] border-t-[#7f7e74] border-l-[#7f7e74] bg-white p-2 overflow-y-scroll">
                                        {guests.map((guest, i) => {
                                            return (<div className={`text-lg capitalize cursor-pointer w-fit px-1 ${currentGuest == i ? "bg-[#004e98] text-white" : ""}`} key={i} onClick={(e) => setCurrentGuest(i)}>{guest.name}</div>);
                                        })}
                                    </div>
                                    <div className="w-[675px] h-full border-[3px] border-t-[#7f7e74] border-l-[#7f7e74] bg-white p-2">
                                        <div className="text-2xl capitalize">
                                            {guests.length > currentGuest ? guests[currentGuest].name : "Guest book is empty"}
                                        </div>
                                        <div className="text-lg overflow-y-scroll h-[460px]">
                                            {guests.length > currentGuest ? guests[currentGuest].body : "You can be the first person on the guest book! Just press \"Write your own story\" below and start writing!"}
                                        </div>
                                    </div>
                                </div>
                                <button onClick={(e) => setIsEditor(true)}>
                                    Tell your own story
                                </button>
                            </>
                    }
                    { isEditor &&
                        <>
                            <div>
                            <form onSubmit={submitStory}>
                                <div>Name:</div>
                                <input type="text" name="name" onInput={e => setEditorName(e.target.value)}/>
                                <div>Your story:</div>
                                <textarea name="body" rows="10" cols="159" onInput={e => setEditorBody(e.target.value)}/>
                                <br />
                                <button className="mr-1 mt-1" onClick={(e) => setIsEditor(false)}>Cancel</button>
                                <button type="submit" disabled={editorName == "" || editorBody == ""}>Submit</button>
                            </form>
                            </div>
                        </>    
                    }
            </div>
        </Window>
    );
}