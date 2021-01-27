export interface SongModel {
    layout: string;
    type: string;
    key: string;
    title: string;
    subtitle: string;
    share: Share;
    images: Images;
    hub: Hub;
}

export enum StatusSong {
    pause = 'pause',
    playing = 'playing',
    stop = 'stop',
}

interface Share {
    subject: string;
    text: string;
    href: string;
    image: string;
    twitter: string;
    html: string;
    avatar: string;
    snapchat: string;
}

interface Images {
    background: string;
    coverart: string;
    coverarthq: string;
}


interface Hub {
    type: string;
    image: string;
    actions: Action[];
}

interface Action {
    name: string;
    type: string;
    id: string;
    uri: string;
}
