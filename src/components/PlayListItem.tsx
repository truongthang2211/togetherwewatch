import Image from "next/image";

export default function PlayListItem() {
  return (
    <div className="flex py-1 justify-center items-center ">
      <span className="text-center text-gray-900 p-3">1</span>
      <div className="flex min-w-0">
        <div className="mr-2 w-14 h-12 relative rounded-md overflow-hidden flex-shrink-0">
          <Image
            layout="fill"
            className="scale-150"
            src="https://i.ytimg.com/vi/McfK9yUYEX8/hqdefault.jpg"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col min-w-0">
          <p className="whitespace-nowrap text-ellipsis overflow-hidden">
            <a
              className="font-semibold hover:text-main-red transition "
              target="_blank"
              href="https://www.youtube.com/watch?v=McfK9yUYEX8&list=RDMM&index=1"
            >
              INDILA - Ainsi Bas La Vida (REMIX by CHIRONIC) slowed to
              perfection
            </a>
          </p>
          <p>
            <a
              className="text-sm text-gray-500 hover:underline"
              target="_blank"
              href="https://www.youtube.com/channel/UCeBuPFPMoEVutl3gK__GqMw"
            >
              Thành Lộc Nguyễn official
            </a>
          </p>
        </div>
      </div>
      <div className="p-3">
        <div
          title="Người đề xuất: Nguyễn Thắng"
          className="w-10 h-10 rounded-full overflow-hidden relative"
        >
          <Image layout="fill" src="/img/pepe3.jpg" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
