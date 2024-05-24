export interface TopUpOptionDto {
    id: number;
    points: number;
    price: number;
}

export interface GameDto {
    id: number;
    name: string;
    topUpOptions: TopUpOptionDto[];
}
