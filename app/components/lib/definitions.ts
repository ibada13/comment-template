

export interface comment { 
    pfp: string,
    username: string, 
    date: string, 
    comment:string,
    upvotes: number,
    replies:comment[]
}