import Image from 'next/image';
// HOME
const Page = () => {
  {
    return (
      <main>
        <Image
          src="/images/poignee-de-main-interculturelle-en-plein-air.jpg"
          alt="Home Image"
          width={1920}
          height={1080}
          className="w-full"
        />
      </main>
    );
  }
};

export default Page;