import {promises as fs} from 'fs';

export var guests = [];

export async function GET(request) {
    //read file
    // const guestbook = JSON.parse(await fs.readFile(process.cwd() + "/src/app/guestbook/guests.json"));
    // return Response.json(guestbook);
    let guestObject = {guests: guests};
    return Response.json(guestObject);
}