import fs from 'fs/promises';

export async function POST(request) {
    //get the json from the file
    let guestbook = JSON.parse(await fs.readFile(process.cwd() + "/src/app/guestbook/guests.json"));
    let newGuest = await request.json();
    guestbook["guests"] = [...guestbook["guests"], newGuest];

    //write the json to the file
    fs.writeFile(process.cwd() + "/src/app/guestbook/guests.json", JSON.stringify(guestbook));

    return new Response(null, {status: 200});
}