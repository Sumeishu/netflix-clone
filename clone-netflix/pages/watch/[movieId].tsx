import React from "react";
import {useRouter} from "next/router";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";
const watch = () => {
    const router = useRouter();
    const {movieId} = router.query;

    const {data}  = useMovie(movieId as string);

    return(
        <div className="h-screen w-screen bg-black">
            <nav className="
              fixed
              w-full
              p-4
              z-10
              flex
              flex-row
              items-center
              gap-8
              bg-black
              bg-opacity-70
            ">
                <AiOutlineArrowLeft onClick={() => router.push('/')} size={30} className="text-white cursor-pointer" />
                <p className="text-white text-1xl md:text-2xl font-bold">
                    <span className="font-light px-2">
                        Watching
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video
              autoPlay
              controls
              className="w-full h-full"
              src={data?.videoUrl}></video>  
        </div>
    )
}

export default watch;