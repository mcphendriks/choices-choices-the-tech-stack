import styles from "./styles/main.css";
import { json } from "@remix-run/node"; 
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [
    { title: "The Ocean Cleanup" },
    { name: "description", content: "The Ocean Cleanup is a non-profit organization dedicated to developing advanced technologies to rid the world's oceans of plastic pollution. Join our mission to clean up and protect our oceans for a sustainable future." },
  ];
};

export async function loader() {
  const res = await fetch("https://fdnd-toc-api.netlify.app/total");
  return json(await res.json());
}

export default function Index() {
  const loaderData = useLoaderData(); 

  console.log(loaderData); 

  return (
    <section>
        <header><h1>Dashboard</h1></header>
        <article><h2>{loaderData.totals.debris_extracted_total}</h2></article>
        <article><h2>{loaderData.totals.debris_extracted_last_30d}</h2></article>
        <article><h2>Trash removed in total</h2></article>
        <article>map</article>
        <article><h2>Introduction</h2></article>
        <article><h2>Cirkeldiagram</h2></article>
        <article><h2>Cirkeldiagram</h2></article>
        <article><h2>Trash removed month</h2></article>
        <article>system status</article>
    </section>
  );
}




export const links = () => [
  { rel: "stylesheet", href: styles },
];
