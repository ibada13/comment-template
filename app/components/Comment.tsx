import { comment } from "./lib/definitions";
import Image from "next/image";
import { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

export default function Comment({ comments }: { comments: comment[] }) {
  const [Comments, Setcomments] = useState<comment[]>(comments);
  const upvote = (comment: comment) => { 
    if (comment.upvoted) {
      comment.upvotes -= 1;
    }
    else { 
      comment.upvotes += 1;
      if (comment.downvoted) { 
        comment.downvoted = false; 
      }

    }
    comment.upvoted = !comment.upvoted;
    Setcomments(e => [...e, comment]);
  }
  const downvote = (comment: comment) => { 
    if (comment.downvoted) {
      comment.upvotes += 1;

    } else { 
      comment.upvotes -= 1;
      if (comment.upvoted) {
        comment.upvoted = false;
       }
    }
    comment.downvoted = !comment.downvoted; 
     
    Setcomments(e => [...e, comment]);

  }

  return (
    <div className="w-full bg-white flex flex-col text-black min-h-1/2 text-wrap whitespace-nowrap">
      {comments.map((comment, index) => (
        <div  key={`commment-${index}`} className="w-full flex gap-x-3 mb-2">
          {/* Profile Picture */}
          <div className="flex-shrink-0 flex flex-col  gap-y-1">
            <Image
              className="rounded-full"
              alt={`${comment.username}'s picture`}
              src={comment.pfp}
              width={50}   // Adjusted size
              height={50}  // Adjusted size
                  />
                  <div className="w-[2px] h-full bg-gray-300 self-center"></div>
          </div>

          {/* Comment Content */}
          <div className="flex flex-col gap- w-full">
            <div className="flex items-center gap-x-2">
              <p className="font-bold">{comment.username}</p>
              <p className="text-gray-500 text-sm">{comment.date}</p>
            </div>

            <div >{comment.comment}</div>

            <div className="flex gap-x-4 text-sm text-gray-600">
              <div className="flex items-center gap-x-1 text-lg">
                <FaAngleUp onClick={()=>upvote(comment)} color={comment.upvoted?"#00ff00":"" } className="cursor-pointer" />
                <span className={`${comment.upvoted?"text-[#00ff00]":null}`}>{comment.upvotes}</span>
                <FaAngleDown onClick={()=>downvote(comment)} color={comment.downvoted?"#ff0000":"" } className="cursor-pointer " />
              </div>
              <p className="cursor-pointer hover:underline ">Reply</p>
              <p className="cursor-pointer hover:underline">Report</p>
            </div>

            {/* Recursively render replies if they exist */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="ml-6 mt-4">
                <Comment comments={comment.replies} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
