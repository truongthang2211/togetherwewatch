import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import Swal from "sweetalert2";
import ChatBarSide from "../components/CharBarSide";
import PlayListItem from "../components/PlayListItem";
import Popup from "../components/Popup";
import ValidYoutubeURL, { secToTime, youtube_id } from "../utils/YoutubeUtils";

export default function Room() {
  const addLinkYoutubeRef = useRef(null);
  const [timerId, setTimerId] = useState(0);
  const [duration, setDuration] = useState(0);
  const [youtube, setYoutube] = useState({
    url: "",
    valid_url: true,
    title: "K'NAAN - Wavin' Flag (Coca-Cola Celebration Mix)",
    youtube_id: "WTJSt4wP2ME",
  });
  const [like, setLike] = useState(false);
  const [dislike, setDiskike] = useState(false);
  const [openAddLink, setOpenAddLink] = useState(false);
  const [openPlaylist, setOpenPlaylist] = useState(false);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      rel: 0,
    },
  };
  const handleVoteClick = (e: string) => {
    if (e === "dislike") {
      setDiskike(!dislike);
      like && setLike(false);
    } else if (e === "like") {
      setLike(!like);
      dislike && setDiskike(false);
    }
  };
  const handleOnclickAddlink = (e) => {
    e.stopPropagation();
    setOpenAddLink((e) => !e);
  };
  const handleOnclickPlaylist = (e) => {
    e.stopPropagation();
    setOpenPlaylist((e) => !e);
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
        clearInterval(timerId);

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
        setYoutube({ ...youtube, url: url, valid_url: false });
      }
    } else {
      setYoutube({ ...youtube, url: e.target.value, valid_url: false });
    }
  };
  const handleKeyPressAddLink = (e) => {
    if (e.key === "Enter") {
      handleOnYoutubeUrlChange(e);
    }
  };
  const onVideoReady = (e) => {
    setDuration(e.target.getDuration());
  };
  console.log("Render Room");
  const handleVideoPlaying = async (e) => {
    if (e.target.getPlayerState() === 1) {
      let idTimer = window.setInterval(() => {
        setDuration(e.target.getDuration() - e.target.getCurrentTime());
      }, 1000);
      setTimerId(idTimer);
    } else {
      clearInterval(timerId);
    }
  };
  useEffect(() => {
    if (openAddLink) {
      (async () => {
        await new Promise((r) => setTimeout(r, 30));
        addLinkYoutubeRef.current.focus();
      })();
    }
  }, [openAddLink]);
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap animate-fadeDown">
        {/* Left Side */}
        <div className="w-full lg:flex-1 h-[calc(100vh-64px)] flex flex-col">
          <YouTube
            onStateChange={handleVideoPlaying}
            videoId={youtube.youtube_id}
            opts={opts}
            className="h-2/3 lg:h-3/5 xl:h-4/5"
            onReady={onVideoReady}
          />
          <div className="flex flex-wrap justify-between p-3 bg-white items-center">
            <div className="text-gray-500 lg:w-1/5">
              <i className="fa-solid fa-eye"></i>
              <span className="ml-2 ">88 người đang xem</span>
            </div>
            <div className="flex space-x-2">
              <div onClick={() => handleVoteClick("like")}>
                <VoteButton
                  vote_num={8}
                  state={like}
                  bgColor="bg-main-green"
                  tColor="text-main-green"
                  icon="fa-solid fa-heart"
                />
              </div>
              <div onClick={() => handleVoteClick("dislike")}>
                <VoteButton
                  vote_num={14}
                  state={dislike}
                  bgColor="bg-main-red"
                  tColor="text-main-red"
                  icon="fa-solid fa-heart-crack"
                />
              </div>
            </div>
            {/* ActionBar */}
            {/* Playlist */}
            <div className="flex mt-2 justify-end w-full lg:mt-0 lg:w-1/5">
              <div
                onClick={handleOnclickPlaylist}
                className="py-2 px-3 text-lg h-10 text-center text-gray-900 rounded-full flex items-center justify-center bg-slate-100 shadow-sm hover:cursor-pointer hover:bg-gray-200 transition"
              >
                <i className="fa-solid fa-table-list"></i>
                <span className="ml-2 text-sm ">Danh sách phát</span>
              </div>
              <Popup trigger={openPlaylist} setTrigger={handleOnclickPlaylist}>
                <div className="overflow-hidden rounded-md w-3/4 lg:w-auto max-w-lg relative">
                  <div className="top-3 right-4 absolute text-2xl">
                    <i
                      className="fa-solid fa-xmark hover:text-main-red transitron hover:cursor-pointer"
                      onClick={handleOnclickPlaylist}
                    ></i>
                  </div>
                  <div className="bg-slate-100 p-5 text-center text-gray-800 border-b-[1px] border-gray-400 text-lg">
                    Danh sách phát
                  </div>
                  <div className="flex flex-col max-h-[484px] overflow-y-scroll scrollbar bg-slate-100 space-y-1 bg-opacity-95">
                    <PlayListItem />
                    <PlayListItem isPlaying={true} />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                    <PlayListItem />
                  </div>
                </div>
              </Popup>
              {/* Add share link */}
              <div
                onClick={handleOnclickAddlink}
                className="py-2 px-3 ml-2 text-lg h-10 text-center text-white rounded-full flex items-center justify-center bg-blue-500 hover:cursor-pointer hover:bg-blue-600 transition"
              >
                <i className="fa-solid fa-plus"></i>
                <span className="ml-2 text-sm ">Thêm link</span>
              </div>
              <Popup trigger={openAddLink} setTrigger={handleOnclickAddlink}>
                <div className="w-3/4 lg:w-1/2">
                  <div className="py-2 px-3 rounded-full bg-white border-2 border-gray-500 flex items-center">
                    <i className="fa-brands fa-youtube text-xl text-red-500"></i>
                    <input
                      ref={addLinkYoutubeRef}
                      onKeyDown={handleKeyPressAddLink}
                      value={youtube.url}
                      onFocus={(e) => {
                        e.currentTarget.select();
                      }}
                      autoFocus
                      onChange={handleOnYoutubeUrlChange}
                      placeholder="Nhập đường dẫn youtube mà bạn muốn share"
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
          </div>
          {/* Video Info */}
          <div className="mt-3 xl:my-auto text-center bg-white border-gray-300 border-2 p-3 mx-1 shadow-md">
            <h2 className="text-xl font-medium">{youtube.title}</h2>
            <div className="text-gray-500 mt-2">
              Thời lượng: {secToTime(duration)}
            </div>
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
  vote_num: number;
}
function VoteButton({ state, bgColor, tColor, icon, vote_num }: VoteButton) {
  return (
    <div
      className={
        "py-2 px-3 text-lg w-28 h-10 text-center rounded-full flex items-center justify-center  hover:cursor-pointer transition " +
        (state
          ? `${bgColor} hover:bg-opacity-80 text-white`
          : "text-gray-500 border-2 border-gray-300 shadow-md bg-white hover:bg-gray-100 ")
      }
    >
      <i className={`${icon} ` + (!state && `${tColor}`)}></i>
      <span className="ml-2">{vote_num}</span>
    </div>
  );
}
