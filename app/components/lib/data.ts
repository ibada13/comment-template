import { comment } from "./definitions";
import user1 from '../Assets/User-Avatar-1.svg'
import user2 from '../Assets/User-Avatar-2.svg'
import user3 from '../Assets/User-Avatar-3.svg'
import user4 from '../Assets/User-Avatar-4.svg'


export const comments: comment[] = [
    {
        pfp: user1, 
        date: "20 hours ago",
        username: "adamsdavid",
        upvotes: 2,
        comment: "some comment with ",
        replies: [
            {
                pfp: user2, 
                date: "16 hours ago",
                username: "sara may",
                upvotes: 5,
                comment: "some reply with ",
                replies: [
                    {
                        pfp: user3, 
                        date: "14 hours ago",
                        username: "jessica21",
                        upvotes: 5,
                        comment: "okey a reply to reply to comment comment with ",
                        replies:[],
                    }
                ]
            }
        ]
    }, {
        pfp: user4, 
        date: "20 hours ago",
        username: "andrew231",
        upvotes: 2,
        comment: "some another comment from andrew ",
        replies:[]
    }
]