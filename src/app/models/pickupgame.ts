import { TAddress } from "./address";
import { TGames } from "./games";
import { User } from "./user";

export interface TPickupgame {
    Participants: User[];
    Game: TGames;
    DateTime: Date;
    Address: TAddress;
    Name: String;
    OOID: String
}
