import Image from "next/image";

interface ChatItem {
  commentText: string;
}
export default function ChatItem({ commentText }: ChatItem) {
  return (
    <>
      <div className="w-full flex bg-white items-start space-x-2 animate-[fade_0.3s_ease-out]">
        <div className="relative rounded-full w-12 h-12 overflow-hidden">
          <Image layout="fill" src="/img/pepe3.jpg" objectFit="cover" />
        </div>
        <div className="flex  flex-1 flex-col">
          <div className="flex space-x-2 items-center">
            <span className="font-medium">Nguyễn Thắng</span>
            <span className="text-sm text-gray-400">Hôm nay 17:23:15</span>
          </div>
          <div
            className="break-words"
            dangerouslySetInnerHTML={{ __html: commentText }}
          />
        </div>
      </div>
    </>
  );
}
