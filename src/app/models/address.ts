export interface TAddress {
    StreetAddress: string;
    Address1?: string;
    City?: string;
    State?: string;
    Zipcode?: string;
    coordinates?: {
        "lat": number,
        "lng": number
    }
}