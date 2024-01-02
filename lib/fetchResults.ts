import { SearchParams } from "@/app/search/page";

export async function fetchResults(searchParams: SearchParams) {
  const username = process.env.OXYLABS_USERNAME;
  const password = process.env.OXYLABS_PASSWORD;

  const url = new URL(searchParams.url);
  Object.keys(searchParams).forEach((Key) => {
    if (Key === "url" || Key === "location") return;

    const value = searchParams[Key as keyof SearchParams];

    if (typeof value === "string") {
      url.searchParams.append(Key, value);
    }
  });
  console.log("scraping url >>>", url.href);
}
