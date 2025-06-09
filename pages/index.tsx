import Link from "next/link";
import Youtube from "../components/Youtube"; // Assuming this component is already Tailwind-based or self-contained
import ProTip from "../src/ProTip"; // Assuming this component is already Tailwind-based or self-contained
import { siteTitle } from "./_app"; // Assuming this is still relevant

export default function Home() {
  return (
    <>
      <section className="my-8 flex flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-4xl font-bold">
          {siteTitle}
        </h1>
      </section>
      <section className="my-8 flex flex-col items-start justify-center"> {/* Consider removing justify-center if parent width is full and height is not constrained */}
        <p className="mb-4 text-base">
          Welcome to the companion website for the{" "}
          <Link
            href="https://www.youtube.com/channel/UCbgBDBrwsikmtoLqtpc59Bw"
            target="_blank"
            className="text-blue-600 hover:underline dark:text-blue-400">
            Teaching Tech YouTube channel
          </Link>
          .
        </p>
        <p className="mb-4 text-base">
          Teaching Tech is a YouTube channel dedicated to providing quality
          content that will help expand your technology related skills and
          knowledge.
        </p>
        <p className="mb-4 text-base">
          As a qualified Industrial Designer and Primary/Secondary school
          teacher, my expertise is very broad. The channel features tutorials on
          3D modelling, 3D printing, laser cutting, CNC machining, coding,
          robotics, electronics and graphic design. I also have other fun tech
          which I review and feature.
        </p>
        <p className="mb-4 text-base">
          I pride myself on my integrity and can guarantee only unbiased, unpaid
          reviews and opinions. The content of my videos is something you can
          trust to help form your opinion. Finally, I love doing things on a
          budget. This means I can pass on some great tips that can get you
          started for minimal outlay.
        </p>
        <p className="mb-4 text-base">
          This website aims to build on the content provided by my YouTube
          videos. In some ways it will be more useful than video, which is a one
          way communication, because I can include interactive content or
          detailed methodologies. In time this site will be expanded to include
          more written instructions to compliment videos.
        </p>
        <p className="mb-4 text-base">
          This site, like the YouTube video descriptions, contain affiliate
          marketing links. These include affiliate links through Amazon as I am
          an Amazon Associate. An affiliate link gives me a percentage of the
          sale price as a commision, with no increase in price for you. It is
          understandable if you wish not to use them, so please avoid them if
          you prefer.
        </p>
        <p className="mb-6 text-base"> {/* Increased bottom margin before Youtube component */}
          This channel trailer was the first ever video on the channel but
          proved to be accurate. Although I primarily focus on 3D printing, I
          have covered everything listed except video editing.
        </p>
        <Youtube videoId="fYVO7ulhOp0" />
        <div className="mt-8 w-full"> {/* Added margin top for ProTip and ensured it can take full width if needed */}
          <ProTip />
        </div>
      </section>
    </>
  );
}
