import Link from "next/link";
import NextImage from "next/image.js";

const Custom404 = () => {
  // const background = "/images/404_2.png";
  const Image = NextImage.default;
  return (
    <div className="w-screen h-screen">
      <Image src="/images/404.png" alt="404 Background" layout="fill"  objectFit="contain" priority />
    </div>
  );
};

export default Custom404;

{
  /* <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300">Ooops! The page you are looking for does not exist.</p>
        <Link href="/home/about_me">
          <span className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">Go to Home</span>
        </Link> */
}
