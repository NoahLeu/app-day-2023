export type Challenge = {
    id: string;
    title: string;
    image: string;
    description: string;
    category: string;
    location: Location;
    difficulty: number;
    defaultScore: number;
};

export type Location = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    address: string;
};

export type User = {
    id: string,
    username: string,
    email: string,
    challenge_score: number,
    image: string | null,
    password: string | null,
    emailVerified: Date | null,
    activeChallengeId: string | null,

}
