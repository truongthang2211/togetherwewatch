import { useState } from "react";
import ContentEditable from "react-contenteditable";
import YouTube from "react-youtube";
import ChatItem from "../components/ChatItem";
import TypingDots from "../components/TypingDots";

export default function Room() {
  const [commentList, setCommentList] = useState([]);
  const [commentText, setcommentText] = useState("");
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
  const handleCommentChange = (e) => {
    if (e.key === "Enter") {
      return;
    }
    setcommentText(e.target.value);
    console.log("changed " + commentText);
  };
  const handleCommentKeyDown = (e) => {
    // console.log(commentList);
    console.log("down" + commentText);
    if (e.key === "Enter") {
      setCommentList([...commentList, { comment_text: commentText }]);
      setcommentText("");
    }
  };
  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap animate-fadeDown">
        <div className="w-full lg:flex-1 h-[calc(100vh-64px)]">
          <YouTube
            videoId="kyck8iUOTKU"
            opts={opts}
            onReady={_onReady}
            className="h-2/3 lg:h-3/5 xl:h-4/5"
          />
          <div className="flex flex-wrap justify-between p-3 bg-white items-center">
            <div className="text-gray-500">
              <i className="fa-solid fa-eye"></i>
              <span className="ml-2 ">881 người đang xem</span>
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
        <div className="flex flex-col bg-white h-[calc(100vh-64px)] pb-2  w-full lg:w-[348px] xl:w-[400px] ">
          <div className="p-3  text-center border-y-2 border-gray-400">
            <h1 className="font-medium">#368156</h1>
            <h2>Vô chơi đi mấy đứa</h2>
          </div>
          <div className="flex flex-col flex-1 space-y-4 overflow-y-auto scrollbar p-3 ">
            {commentList.map((e, index) => (
              <ChatItem key={index} commentText={e.comment_text} />
            ))}
          </div>
          <div className="px-1">
            <div
              className="bg-transparent py-2 flex items-center justify-center "
              onKeyDown={handleCommentKeyDown}
            >
              <ContentEditable
                html={commentText}
                disabled={false}
                onChange={handleCommentChange}
                placeholder="Viết gì gì đó đi <3"
                className="outline-none max-h-96 min-h-[43.94px] overflow-y-auto  scrollbar items-center px-3 py-2
                w-full border-2 border-gray-300 rounded-xl bg-gray-100 hover:cursor-text"
              />
            </div>
            <div className="flex space-x-2 items-center">
              <TypingDots />
              <div className="">
                <span className="font-medium">Nguyễn Thắng</span>
                <span>{" đang gõ..."} </span>
              </div>
            </div>
          </div>
        </div>
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
