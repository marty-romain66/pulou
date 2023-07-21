"use client";
import { useContext } from "react";
import Image from "next/image";
import Auth from "./components/auth";
import Index from "./components/Index";
import { MyContext } from "./components/Mycontext";

export default function Home() {
  const { data, setData } = useContext(MyContext);

  return (
    <>
    {
      (data ==="pulou") ? <Index /> : <Auth />
    }
    </>
  );
}
