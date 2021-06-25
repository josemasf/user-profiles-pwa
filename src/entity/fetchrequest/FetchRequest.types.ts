import { Profile } from "@/entity/profile/Profile.types";

export interface FetchRequest {
    info: {
        page: number;
        result: number;
        seed: string;
        version: string;
    }
    
    results: Array<Profile>
}