import Image from "next/image";
export default function ChatItem() {
  return (
    <>
      <div className="w-full flex bg-white items-start space-x-2">
        <div className="relative rounded-full w-12 h-12 overflow-hidden">
          <Image layout="fill" src="/img/pepe3.jpg" objectFit="cover" />
        </div>
        <div className="flex  flex-1 flex-col">
          <div className="flex space-x-2 items-center">
            <span className="font-medium">Nguyễn Thắng</span>
            <span className="text-sm text-gray-400">Hôm nay 17:23:15</span>
          </div>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ex hic
            quia consectetur architecto optio quas sequi eveniet ipsam
            laboriosam neque impedit, unde soluta obcaecati consequuntur nam
            sapiente! Ratione, aliquam?
          </div>
        </div>
      </div>
    </>
  );
}
