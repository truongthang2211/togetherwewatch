import Image from "next/image";

export default function PlayListItem({ isPlaying }) {
  return (
    <div
      className={
        "flex justify-center items-center transition hover:-translate-y-[2px] hover:bg-opacity-80 bg-opacity-40 " +
        (isPlaying ? "bg-main-green" : "bg-slate-100")
      }
    >
      <span className="text-center text-gray-900 p-3">1</span>
      <div className="flex min-w-0">
        <div
          className={
            "mr-2 h-12 relative overflow-hidden flex-shrink-0 " +
            (isPlaying
              ? "rounded-full animate-spin-slow w-12"
              : "rounded-md  w-14")
          }
        >
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
PlayListItem.defaultProps = {
  isPlaying: false,
};
