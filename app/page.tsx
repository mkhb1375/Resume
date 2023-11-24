"use client";
import Nav from "./ui/Nav";
import Main from "./Main";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <RecoilRoot>
      <div>
        <Nav />
        <Main />
      </div>
    </RecoilRoot>
  );
}
