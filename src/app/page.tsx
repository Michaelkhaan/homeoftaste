import Image from "next/image";
import Nav from "../components/Nav";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Review from "@/components/Review";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Review />
    </Layout>
  );
}
