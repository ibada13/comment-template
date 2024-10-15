

export interface comment { 
    pfp: string,
    username: string, 
    date: string, 
    comment:string,
    upvotes: number,
    upvoted: boolean,
    downvoted:boolean,
    replies:comment[]
}