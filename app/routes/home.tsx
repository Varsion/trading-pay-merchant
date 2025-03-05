import type { Route } from "./+types/home";
import { HomePage } from "@/pages/home/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Trading Pay Merchant" },
    { name: "description", content: "Welcome to Trading Pay Merchant!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
