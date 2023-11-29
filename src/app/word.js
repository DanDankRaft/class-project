import Window from "./window";

export default function Word(props) {

    let body = "Johny Taboada (he/him) is the head of Out in Tech's Dallas-Fort Worth chapter. Recruited by the national organization about a year ago, Johny organizes social events for queer tech workers in the Dallas-Fort Worth area. He also helps members navigate being queer in the workplace."
    let body2 = "Johny is originally from Chicago. Growing up, he had an affinity for art and design. He also always had a strong desire to help people and let them open up to him. The conversations he had with friends and family due to these qualities helped him realize he was gay. They also helped eventually guide him towards working in UX design. For Johny, his job enables him to make the products he works on more accessible to users from different backgrounds - including queer users. In this way, he sees his job and his queerness as somewhat connected."
    let body3 = "In 2015, Johny moved from Chicago to Dallas for work. Immediately, he felt that the queer community here was different. For one, it was much more Hispanic than in Chicago. As a Hispanic person himself, that helped him more immediately connect with the queer community here. He also notes that, in general, the queer community in Dallas has a more forthcoming ahd helpful attitude - Southern Hospitality is real."
    let body4 = "All of these qualities helped him form stronger connections in the Dallas community than he had in Chicago."
    let body5 = "Since he started working in tech 10 years ago, Johny noted that it became easier to be queer at work. When he just started, he was the only out, queer person on his team. He had to think each time he met a new coworker or got a new manager if and how to let them know that he was gay. Now, he has several out coworkers, and he doesn't feel like he has to worry about being out at work anymore"
    let body6 = "The way Johny describes it, he has one 'self' at work, and one 'self' when he hangs out with queer friends. Those two selves are never going to be the same, but over the past 10 years they became much more similar to each other."

    return (
        <Window windowState={props.windowState} icon="./notepad.png" width={1000} height={950} setWindowState={props.setWindowState} title="Gayosoft Writing Program 2003">
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
                <div className="bg-[#aecaf7] h-[904px]">
                    <div className="h-5"></div>
                    <div className="bg-white w-[600px] h-[834px] mx-auto font-TNR text-base p-[50px]">
                        <div className="text-center font-bold">Queer Tech in Texas today: interview with Johny Taboada</div>
                        <p>{body}</p>
                        <p>{body2}</p>
                        <p>{body3}</p>
                        <p>{body4}</p>
                        <p>{body5}</p>
                        <p>{body6}</p>
                    </div>
                </div>
            </div>
        </Window>
    );
}