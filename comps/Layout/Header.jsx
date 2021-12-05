import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Header(){
  const title = "AIDA Defect analysis";
  const desc =
    "Find out the lifespan of your machine assets with just your smartphone. By using audio recorded on your phone we can estimate the remaining useful life of these vital resources.";
  const ogImgRelativePath = "/OG.png";

  const siteURL = "https://feu-2-final-exam-kjg1wdspa-drsfieldsima.vercel.app/about";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const siteName = "AIDA";
  const siteKeywords = "Audio Defect analysis, automation for repairs and maintanence, maintanence, predictive maintanence, Artificial Intelligent managment, resource planning, engineering warranty  ";

  return (
    <NextSeo
      title={title}
      description={desc}
      keywords={siteKeywords}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "en_US", //  Default is en_US
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: "AIDA - Home logo",
          },
        ],
        site_name: siteName,
      }}
      additionalMetaTags={[
        {
          property: "AIDA - owner S Fields",
          content: "AIDA  Artificial Intelligence Defect Analysis. Factory and industry assets will always work to demand which fluctuates and an environment that can change. At Aida we want to work towards a more streamlined way of managing and replacing these assets" ,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `${siteURL}/favicon.ico`,
        },
        // {
        //   rel: "manifest",
        //   href: "/site.manifest",
        // },
      ]}
    />
  );
}