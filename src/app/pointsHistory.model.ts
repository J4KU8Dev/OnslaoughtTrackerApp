export interface pointsHistory {
    id: string;
    days:{
        day:number,
        points:number;
    }[];
    actualRank: string;
}