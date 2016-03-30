export interface Weather {
    latitude: number;
    longitude: number;
    city: string;
    temp: number;
    tempUnit: string;
    tempToggleUnit: string;
    description: string;
    wind: {
        deg: number,
        speed: number
    }
    iconUrl: string;
}