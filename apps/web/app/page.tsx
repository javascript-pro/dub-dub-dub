import styles from "./theme/page.module.css";
import Image from "next/image";
import Link from "next/link";
import Hero from "@repo/ui/Hero/Hero";
import ResizingGrid from "@repo/ui/ResizingGrid/ResizingGrid";
import Appshell from "@repo/ui/Appshell/Appshell";
import chapterList from "../public/json/chapters.json";

export default function Home() {
  return <Appshell />
};
