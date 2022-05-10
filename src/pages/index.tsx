import type { NextPage } from "next";
import Head from "next/head";
import ExamlpleRedux from "../components/ExampleRedux";
import HomeRoomCard from "../components/HomeRoomCard";

const IndexPage: NextPage = () => {
  return (
    <div className="h-[calc(100vh-64px)] scrollbar overflow-y-auto">
      <div className="container mx-auto px-4 xl:px-16 2xl:px-40">
        <div className="py-6 grid grid-flow-row grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 animate-fadeDown">
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
          <HomeRoomCard />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
