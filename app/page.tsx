'use client';
import Comment from "./components/Comment";
import { comments } from "./components/lib/data";
export default function Home() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center   ">
      <div className="w-full md:w-3/5 sm:w-4/5 p-5 bg-white ">

        <Comment comments={comments}/>
      </div>
      
    </div>
  );
}
