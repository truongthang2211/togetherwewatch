import Image from "next/image";
import Link from "next/link";
export default function HomeRoomCard() {
  return (
    <>
      <div className=" h-[300px] shadow-md rounded-lg overflow-hidden hover:scale-[105%] hover:shadow-lg transition-all ease-out duration-200">
        <Link href="/room">
          <div className="h-2/3 relative group">
            <Image src={"/img/maxresdefault.jpg"} layout="fill" />
            <div className="absolute w-full h-full bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-200 ease-in hover:cursor-pointer"></div>
          </div>
        </Link>
        <div className="flex flex-col justify-between p-2  text-gray-700 overflow-hidden h-1/3">
          <div className="flex justify-between">
            <Link href="/room">
              <h2 className="inline-block text-lg font-medium flex-1 overflow-hidden text-ellipsis whitespace-nowrap hover:text-main-red transition-colors duration-150 hover:cursor-pointer">
                #351862 - Vô chơi đi mấy đứa
              </h2>
            </Link>
            <div className="space-x-2 text-gray-400 flex">
              <div className="relative  group ">
                <i className="fa-solid fa-hand-back-fist"></i>
                <div className="transition-opacity ease-out duration-200 delay-500 opacity-0 p-2 shadow-lg w-44 absolute invisible group-hover:visible group-hover:opacity-100 right-full top-full z-50 bg-white text-sm rounded-lg">
                  Người chủ phòng sẽ là người làm chủ
                </div>
              </div>
              <div className="relative  group">
                <i className="fa-solid fa-lock"></i>
                <div className="transition-opacity ease-out duration-200 delay-500 opacity-0 p-2 shadow-lg w-44 absolute invisible group-hover:visible group-hover:opacity-100 right-full top-full z-50 bg-white text-sm rounded-lg">
                  Bạn cần có mật khẩu để vào phòng này
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink overflow-hidden w-full whitespace-nowrap text-ellipsis">
            <i className="fa-solid fa-forward text-gray-500 text-sm "></i>
            <span className="ml-2">Đang phát: </span>
            <h3 className="inline">
              Xóm Đêm (Phạm Đình Chương) | Intermediate 1 | Piano solo | Linh
              Nhi
            </h3>
          </div>
          <div>
            <div className="flex justify-between text-sm ">
              <div className="text-gray-500 flex-1 overflow-hidden whitespace-nowrap text-ellipsis pr-8">
                <i className="fa-solid fa-book"></i>
                <span className="ml-2 ">Nghe nhạc - Trữ tình</span>
              </div>
              <div className="text-gray-500 flex space-x-3 items-center">
                <div>
                  <i className="fa-solid fa-user text-main-red"></i>
                  <span className="ml-1">80</span>
                </div>
                <div>
                  <i className="fa-solid fa-comment text-emerald-500"></i>
                  <span className="ml-1">1600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
