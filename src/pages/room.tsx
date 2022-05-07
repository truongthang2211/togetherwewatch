import { useState } from "react";
import YouTube from "react-youtube";
import ChatItem from "../components/ChatItem";

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
          <div className="flex justify-between p-3 bg-white items-center">
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
          <div className="mt-3 text-center bg-white border-gray-300 border-2 p-3 mx-1 shadow-md">
            <h2 className="text-xl font-medium">Cat Falling</h2>
            <div className="text-gray-500 mt-2">Thời lượng: 1:00:00</div>
          </div>
        </div>

        <div className="flex flex-col h-[calc(100vh-64px)] pb-2  w-full lg:w-[348px] xl:w-[400px]">
          <div className="p-3 bg-white text-center border-y-2 border-gray-400">
            <h1 className="font-medium">#368156</h1>
            <h2>Vô chơi đi mấy đứa</h2>
          </div>
          <div className="flex flex-col h-full p-3 bg-white">
            <div className="flex-1 overflow-y-scroll space-y-4">
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
              <ChatItem />
            </div>
            <div className="">
              <div className="bg-transparent h-14 py-2">
                {/* <textarea className="outline-none items-center px-3 h-full w-full border-2 border-gray-300 rounded-full bg-white"></textarea> */}
                <div
                  role="textbox"
                  aria-haspopup="listbox"
                  aria-invalid="false"
                  aria-autocomplete="list"
                  className="relative outline-none whitespace-pre-wrap break-words h-auto w-full px-3 border-2 border-gray-300 rounded-full bg-white"
                  data-can-focus="true"
                  aria-label="Message #chit-chat"
                  aria-multiline="true"
                  data-slate-editor="true"
                  data-slate-node="value"
                  contentEditable="true"
                >
                  <div data-slate-node="element">
                    <span data-slate-node="text">
                      <span data-slate-leaf="true" className="emptyText-1o0WH_">
                        <span
                          data-slate-zero-width="n"
                          data-slate-length="0"
                        ></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-400 h-6"></div>
            </div>
          </div>
        </div>
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
