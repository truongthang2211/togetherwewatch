import { useState } from "react";
import YouTube from "react-youtube";

export default function Room() {
  const [like, setLike] = useState(false);
  const [dislike, setDiskike] = useState(false);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  };
  const handleVoteClick = (e: string) => {
    if (e === "dislike") {
      setDiskike(!dislike);
      like && setLike(false);
    } else if ((e = "like")) {
      setLike(!like);
      dislike && setDiskike(false);
    }
  };
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap animate-fadeDown">
        <div className="w-full lg:flex-1 h-[calc(100vh-64px)]">
          <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={_onReady}
            className="h-2/3 lg:h-3/5 xl:h-4/5"
          />
          <div className="flex justify-between p-3">
            <div className="text-gray-500">
              <i className="fa-solid fa-eye"></i>
              <span className="ml-2 ">88 người đang xem</span>
            </div>
            <div className="flex space-x-2">
              <div onClick={() => handleVoteClick("like")}>
                <VoteButton
                  state={like}
                  Color="main-green"
                  icon="fa-solid fa-heart"
                />
              </div>
              <div onClick={() => handleVoteClick("dislike")}>
                <VoteButton
                  state={dislike}
                  Color="main-red"
                  icon="fa-solid fa-heart-crack"
                />
              </div>
            </div>
            <div className="py-2 px-3 text-lg w-28 h-10 text-center text-white rounded-full flex items-center justify-center bg-blue-500 hover:cursor-pointer hover:bg-blue-600">
              <i className="fa-solid fa-plus"></i>
              <span className="ml-2 text-sm ">Thêm link</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[348px] xl:w-[400px]"></div>
      </div>
    </>
  );
}
interface VoteButton {
  state: boolean;
  Color: string;
  icon: string;
}
function VoteButton({ state, Color, icon }: VoteButton) {
  return (
    <div
      className={
        "py-2 px-3 text-lg w-28 h-10 text-center rounded-full flex items-center justify-center  hover:cursor-pointer " +
        (state
          ? `bg-${Color} hover:bg-opacity-80 text-white`
          : "text-gray-500 border-2 border-gray-300 shadow-md bg-white hover:bg-gray-100 ")
      }
    >
      <i className={`${icon} ` + (!state && `text-${Color}`)}></i>
      <span className="ml-2">88</span>
    </div>
  );
}
