import { useEffect, useRef, useState, memo } from "react";
import ChatItem from "../components/ChatItem";
import TypingDots from "../components/TypingDots";
import { ContentEditable } from "./ContentEditable";
import removeSpace from "../utils/RemoveSpace";
function ChatBarSide() {
  const [newMessage, setNewMessage] = useState({
    isNewMessage: false,
    numNewMessage: 0,
  });
  const ChatListRef = useRef(null);
  const ScrollBottomRef = useRef(null);
  const [commentList, setCommentList] = useState([]);
  const [commentText, setCommentText] = useState("");
  console.log("Render chatbar");
  useEffect(() => {
    document.getElementById("input_message").focus();
  }, []);
  useEffect(() => {
    const IsViewingHistory =
      ChatListRef.current.scrollTop <
      ChatListRef.current.scrollHeight -
        ChatListRef.current.clientHeight -
        64 * 5;
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
  };
  const handleCommentKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (commentText.trim() === "") return;
      setCommentList([
        ...commentList,
        { comment_text: removeSpace(commentText.trim()) },
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
  const handleOnScroll = () => {
    if (
      ChatListRef.current.scrollTop + 64 * 2 >=
      ChatListRef.current.scrollHeight - ChatListRef.current.clientHeight
    )
      setNewMessage({ numNewMessage: 0, isNewMessage: false });
  };
  return (
    <div className="flex flex-col bg-white h-[calc(100vh-64px)] pb-2  w-full lg:w-[348px] xl:w-[400px] ">
      <div className="p-3 flex justify-between border-y-2 border-gray-400">
        <div className="">
          <h2>V?? ch??i ??i m???y ?????a</h2>
          <a className="text-gray-500 hover:cursor-pointer hover:text-main-red">
            sanke2211
          </a>
        </div>
        <div className="text-right">
          <h1 className="font-medium">#368156</h1>
          <p className="text-gray-500">Nghe nh???c - Tr??? t??nh</p>
        </div>
      </div>
      <div
        onScroll={handleOnScroll}
        ref={ChatListRef}
        className="flex flex-col flex-1 space-y-4 overflow-y-auto scrollbar p-3"
      >
        {commentList.map((e, index) => (
          <div ref={ScrollBottomRef} key={index}>
            <ChatItem commentText={e.comment_text} />
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
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer py-1 px-2 rounded-full  text-white text-base"
            >{`${newMessage.numNewMessage} tin nh???n m???i`}</a>
          </div>
          <ContentEditable
            onPaste={handleonPaste}
            html={commentText}
            onKeyDown={handleCommentKeyDown}
            onChange={handleCommentChange}
            placeholder="Vi???t g?? g?? ???? ??i <3"
            className="outline-none max-h-96 min-h-[43.94px] overflow-y-auto scrollbar items-center px-3 py-2
                w-full border-2 border-gray-300 rounded-xl bg-gray-100 hover:cursor-text"
            id="input_message"
          />
        </div>
        <div className="flex space-x-2 items-center animate-fadeUp invi">
          <TypingDots />
          <div className="">
            <span className="font-medium">Nguy???n Th???ng</span>
            <span>{" ??ang g??..."} </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ChatBarSide);
