type commentsType = {
    id: string;
    body: string;
    color: string;
};

export type itemType = {
    id: number;
    name: string;
    comments: commentsType[];
    active: boolean;
};

export type initialState = {
    items: itemType[];
};
