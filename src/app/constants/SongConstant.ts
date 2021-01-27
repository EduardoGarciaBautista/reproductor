import {SongModel} from '@models/song.model';

export const SONG_INITIAL_STATE: SongModel = {
    hub: {actions: [], image: '', type: ''},
    title: '',
    images: {background: '', coverart: '', coverarthq: ''},
    key: '',
    layout: '',
    share: {avatar: '', href: '', html: '', image: '', snapchat: '', subject: '', text: '', twitter: ''},
    subtitle: '',
    type: ''
};
