import Window from "./window";

export default function Word(props) {

    let body = "Johny Taboada (he/him) is the head of Out in Tech's Dallas-Fort Worth chapter. Recruited by the national organization about a year ago, Johny "

    return (
        <Window windowState={props.windowState} icon="./notepad.png" width={1000} height={900} setWindowState={props.setWindowState} title="Gayosoft Writing Program 2003">
            <div className={`w-[100.5%]`}>
                <div className="pl-1 bg-gradient-to-b from-[#ddecfe] to-[#81a9e2] flex flex-row space-x-1">
                    <span className="first-letter:underline">
                        File
                    </span>
                    <span className="first-letter:underline">
                        Edit
                    </span>
                    <span className="first-letter:underline">
                        View
                    </span>
                    <span className="first-letter:underline">
                        Insert
                    </span>
                    <span className="first-letter:underline">
                        Tools
                    </span>
                    <span className="first-letter:underline">
                        Window
                    </span>
                    <span className="first-letter:underline">
                        Help
                    </span>
                </div>
                <div className="bg-[#aecaf7] h-full">
                    <div className="h-5"></div>
                    <div className="bg-white w-[600px] h-[834px] mx-auto font-TNR text-base p-[75px]">
                        <div className="text-center font-bold">Queer Tech in Texas today: interview with Johny Taboada</div>
                        {body}
                    </div>
                </div>
            </div>
        </Window>
    );
}