import { useEffect, useRef, useState } from "react";
import ChatItem from "../components/ChatItem";
import TypingDots from "../components/TypingDots";
import { ContentEditable } from "./ContentEditable";
export default function ChatBarSide() {
  const [newMessage, setNewMessage] = useState({
    isNewMessage: false,
    numNewMessage: 0,
  });
  const ChatListRef = useRef(null);
  const ScrollBottomRef = useRef(null);
  const [commentList, setCommentList] = useState([]);
  const [commentText, setCommentText] = useState("");
  useEffect(() => {
    document.getElementById("input_message").focus();
  }, []);
  useEffect(() => {
    const IsViewingHistory =
      ChatListRef.current.scrollHeight - ChatListRef.current.scrollTop > 1000;
    console.log(IsViewingHistory);
    if (!IsViewingHistory) {
      ScrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      setNewMessage({
        isNewMessage: true,
        numNewMessage: newMessage.numNewMessage + 1,
      });
    }
  }, [commentList]);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
    console.log("change " + e.target.value);
  };
  const handleCommentKeyDown = (e) => {
    // console.log(commentList);
    console.log("down" + commentText);
    if (e.key === "Enter") {
      e.preventDefault();
      if (commentText.trim() === "") return;
      setCommentList([
        ...commentList,
        { comment_text: commentText.replaceAll("&nbsp;", "").trim() },
      ]);
      setCommentText("");
      console.log(commentList);
    }
  };
  const handleonPaste = (e) => {
    const coppyText = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, coppyText);
    e.preventDefault();
  };

  const onNewMessageClick = () => {
    ScrollBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setNewMessage({ numNewMessage: 0, isNewMessage: false });
  };
  return (
    <div className="flex flex-col bg-white h-[calc(100vh-64px)] pb-2  w-full lg:w-[348px] xl:w-[400px] ">
      <div className="p-3  text-center border-y-2 border-gray-400">
        <h1 className="font-medium">#368156</h1>
        <h2>Vô chơi đi mấy đứa</h2>
      </div>
      <div
        ref={ChatListRef}
        className="flex flex-col flex-1 space-y-4 overflow-y-auto scrollbar p-3"
      >
        {commentList.map((e, index) => (
          <div ref={ScrollBottomRef}>
            <ChatItem key={index} commentText={e.comment_text} />
          </div>
        ))}
      </div>
      <div className="px-1">
        <div className="bg-transparent py-2 flex items-center justify-center relative">
          <div
            className={`bottom-full left-0 right-0 p-1 absolute flex justify-center transition-opacity duration-200 ${
              newMessage.isNewMessage ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              onClick={onNewMessageClick}
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer p-1 rounded-full  text-white text-base"
            >{`${newMessage.numNewMessage} tin nhắn mới`}</a>
          </div>
          <ContentEditable
            onPaste={handleonPaste}
            html={commentText}
            onKeyDown={handleCommentKeyDown}
            onChange={handleCommentChange}
            placeholder="Viết gì gì đó đi <3"
            className="outline-none max-h-96 min-h-[43.94px] overflow-y-auto scrollbar items-center px-3 py-2
                w-full border-2 border-gray-300 rounded-xl bg-gray-100 hover:cursor-text"
            id="input_message"
          />
        </div>
        <div className="flex space-x-2 items-center animate-fadeUp invi">
          <TypingDots />
          <div className="">
            <span className="font-medium">Nguyễn Thắng</span>
            <span>{" đang gõ..."} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
