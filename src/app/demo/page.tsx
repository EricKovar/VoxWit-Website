import type { Metadata } from "next";
import { DemoExperience } from "./DemoExperience";
import "./demo.css";

export const metadata: Metadata = {
  title: "VoxWit Demo | Hook Builder",
  description:
    "Hands-on VoxWit demo that mirrors the Chrome extension hook builder — edit your draft, pick a style, and generate clever options.",
};

export default function DemoPage() {
  return <DemoExperience />;
}
