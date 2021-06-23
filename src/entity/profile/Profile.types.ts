export interface ProfileData {
    gender: string;
    name: PersonName;
    location: Location;
    email: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    dob: Born;
    registered: Registration;
    phone: string;
    cell: string;
    id: unknown
    picture: Picture;
    nat: string;
}

export interface Profile extends ProfileData{}


export interface PersonName {
    title: string;
    first: string;
    last: string;
}

export interface Registration {
    date: Date;
    age: number
}

export interface Picture {
    large: string
    medium: string
    thumbnail: string
}

export interface Born {
    date: Date
    age: number
}

export interface Location{
    street: {
        number: number,
        name: string
        },
        city: string
        state: string
        country: string
        postcode: string
        coordinates: {
        latitude: string
        longitude: string
        },
        timezone: {
        offset: string
        description: string
        }
}