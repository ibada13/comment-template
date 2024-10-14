import Comment from "./components/Comment";
import { comments } from "./components/lib/data";
export default function Home() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-cente ">
      <div className="w-3/5 p-10 bg-white h-4/5">

        <Comment comments={comments}/>
      </div>
      
    </div>
  );
}
