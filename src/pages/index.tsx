import type { NextPage } from "next";
import Head from "next/head";
import ExamlpleRedux from "../components/ExampleRedux";
import HomeRoomCard from "../components/HomeRoomCard";

const IndexPage: NextPage = () => {
  return (
    <div className="container mx-auto overflow-auto">
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
  );
};

export default IndexPage;
