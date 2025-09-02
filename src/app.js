import { question } from "readline-sync";
import { createObjToAddRiddle, readRiddles, createObjToUpdateRiddle, deleteRiddle } from "../service/riddle.service.js";
import { startGame } from "../service/game.service.js";
import { viewLeaderboard } from "../service/player.service.js";
import { guest, login, signup } from "../service/loginOptions.js";

const loginOptions = async () => {
    console.log("Welcome to the world's biggest math game!!!!");

    let stop = false;
    let connected = false;
    while (!stop) {
        const selectedOption = question("Select by number:\n1. Register\n2. Login\n3. Enter as guest\n");
        switch (selectedOption) {
            case "1":
                connected = await signup();
                if (connected) stop = true;
                break;
            case "2":
                const username = await login();
                console.log(username);
                if (username) {
                    stop = true;
                    return username;
                }
            case "3":
                connected = await guest();
                if (connected) stop = true;
                break;
            default:
                console.log("Please choose a valid number (0-6)");
        }
    }
}
const username = await loginOptions()

const menuToUser = async () => {
    let stop = false;
    while (!stop) {
        const numberMenu = question("What do you want to do (choose by number)?\n1. Play the game\n2. Create a new riddle\n3. Read all riddles\n4. Update an existing riddle\n5. Delete a riddle\n6. View leaderboard\n0. exit\n");
        switch (numberMenu) {
            case "1":
                await startGame(username);
                break;
            case "2":
                await createObjToAddRiddle();
                break;
            case "3":
                console.log(await readRiddles());
                break;
            case "4":
                await createObjToUpdateRiddle();
                break;
            case "5":
                await deleteRiddle();
                break;
            case "6":
                await viewLeaderboard();
                break;
            case "0":
                stop = true;
                break;
            default:
                console.log("Please choose a valid number (0-6)");
        }
    }
}
await menuToUser();