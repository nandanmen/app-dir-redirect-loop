import { redirect } from "next/navigation";

export default function Home({ searchParams }) {
  if (searchParams.app) {
    redirect("/app");
  }
  redirect("/pages");
}
