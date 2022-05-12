import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import Swal from "sweetalert2";
import ChatBarSide from "../components/CharBarSide";
import Popup from "../components/Popup";
import ValidYoutubeURL, { youtube_id } from "../utils/YoutubeUtils";

export default function Room() {
  const [youtube, setYoutube] = useState({
    url: "",
    valid_url: true,
    title: "",
    youtube_id: "kyck8iUOTKU",
    duration: 0,
  });
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

  const handleOnYoutubeUrlChange = async (e) => {
    const url = e.target.value;
    if (ValidYoutubeURL(e.target.value)) {
      try {
        const dataYoutube = await (
          await fetch(`http://www.youtube.com/oembed?url=${url}&format=json`)
        ).json();
        // Swal.fire({
        //   text: "Thêm video thành công",
        //   icon: "success",
        //   confirmButtonText: "Hay",
        // });
        setYoutube({
          ...youtube,
          title: dataYoutube.title,
          url: url,
          youtube_id: youtube_id(url),
          valid_url: true,
        });

        setOpenAddLink(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setYoutube({ ...youtube, url: e.target.value, valid_url: false });
    }
  };
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap animate-fadeDown">
        {/* Left Side */}
        <div className="w-full lg:flex-1 h-[calc(100vh-64px)] flex flex-col">
          <YouTube
            videoId={youtube.youtube_id}
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
              <div className="w-1/2">
                <div className="py-2 px-3 rounded-full bg-white border-2 border-gray-500 flex items-center">
                  <i className="fa-brands fa-youtube text-xl text-red-500"></i>

                  <input
                    value={youtube.url}
                    onFocus={(e) => {
                      e.currentTarget.select();
                    }}
                    onChange={handleOnYoutubeUrlChange}
                    placeholder="Nhập đường dẫn youtube mà bạn muốn share"
                    autoFocus
                    type="text"
                    className="py-1 px-3 outline-none w-full"
                  />
                </div>
                <div
                  className={`bg-transparent text-red-400 mt-2 pl-4 transition-opacity duration-150 ${
                    youtube.valid_url ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <i className="fa-solid fa-circle-exclamation"></i>
                  <span className="font-medium ml-2">
                    Đường dẫn không hợp lệ
                  </span>
                </div>
              </div>
            </Popup>
          </div>
          {/* Video Info */}
          <div className="mt-3 xl:my-auto text-center bg-white border-gray-300 border-2 p-3 mx-1 shadow-md">
            <h2 className="text-xl font-medium">{youtube.title}</h2>
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
