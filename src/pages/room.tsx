import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import ChatBarSide from "../components/CharBarSide";
import Popup from "../components/Popup";

export default function Room() {
  const [like, setLike] = useState(false);
  const [dislike, setDiskike] = useState(false);
  const [openAddLink, setOpenAddLink] = useState(false);
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
  const handleClosePopup = (e) => {
    e.stopPropagation();
    console.log(openAddLink);
    setOpenAddLink((e) => !e);
  };
  console.log("link" + openAddLink);
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap animate-fadeDown">
        {/* Left Side */}
        <div className="w-full lg:flex-1 h-[calc(100vh-64px)] flex flex-col">
          <YouTube
            videoId="kyck8iUOTKU"
            opts={opts}
            onReady={_onReady}
            className="h-2/3 lg:h-3/5 xl:h-4/5"
          />
          <div className="flex flex-wrap justify-between p-3 bg-white items-center">
            <div className="text-gray-500">
              <i className="fa-solid fa-eye"></i>
              <span className="ml-2 ">88 người đang xem</span>
            </div>
            <div className="flex space-x-2">
              <div onClick={() => handleVoteClick("like")}>
                <VoteButton
                  state={like}
                  bgColor="bg-main-green"
                  tColor="text-main-green"
                  icon="fa-solid fa-heart"
                />
              </div>
              <div onClick={() => handleVoteClick("dislike")}>
                <VoteButton
                  state={dislike}
                  bgColor="bg-main-red"
                  tColor="text-main-red"
                  icon="fa-solid fa-heart-crack"
                />
              </div>
            </div>
            {/* ActionBar */}
            <div
              onClick={handleClosePopup}
              className="py-2 px-3 text-lg w-28 h-10 text-center text-white rounded-full flex items-center justify-center bg-blue-500 hover:cursor-pointer hover:bg-blue-600"
            >
              <i className="fa-solid fa-plus"></i>
              <span className="ml-2 text-sm ">Thêm link</span>
            </div>
            <Popup trigger={openAddLink} setTrigger={handleClosePopup}>
              <div className="bg-white text-black">em dep lam</div>
            </Popup>
          </div>
          {/* Video Info */}
          <div className="mt-3 xl:my-auto text-center bg-white border-gray-300 border-2 p-3 mx-1 shadow-md">
            <h2 className="text-xl font-medium">Cat Falling</h2>
            <div className="text-gray-500 mt-2">Thời lượng: 1:00:00</div>
          </div>
        </div>
        {/* Chat Bar Side */}
        <ChatBarSide />
      </div>
    </>
  );
}
interface VoteButton {
  state: boolean;
  bgColor: string;
  tColor: string;
  icon: string;
}
function VoteButton({ state, bgColor, tColor, icon }: VoteButton) {
  return (
    <div
      className={
        "py-2 px-3 text-lg w-28 h-10 text-center rounded-full flex items-center justify-center  hover:cursor-pointer " +
        (state
          ? `${bgColor} hover:bg-opacity-80 text-white`
          : "text-gray-500 border-2 border-gray-300 shadow-md bg-white hover:bg-gray-100 ")
      }
    >
      <i className={`${icon} ` + (!state && `${tColor}`)}></i>
      <span className="ml-2">88</span>
    </div>
  );
}
