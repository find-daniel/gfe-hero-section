import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex justify-center">
      {/* <!-- Well crafted abstract images
      High quality abstract images for your projects, wallpaper and presentations.
      Learn more
      See pricing --> */}
      {/* Hero Container */}
      <header
        className="m-4 max-w-[1440px] rounded border bg-white
 px-3 shadow-sm xl:p-24"
        role="banner">
        <section className="my-14 flex flex-col md:my-16 xl:my-0 xl:flex-row xl:items-center">
          {/* Content Container */}
          <div className="mb-12 pt-12 xl:mb-0 xl:w-1/2 xl:pt-0">
            {/* Headline */}
            <h1 className="mb-4 text-4xl font-semibold text-neutral-900 md:text-5xl xl:text-6xl">
              Well crafted abstract images
            </h1>
            {/* Description  */}
            <p className="mb-8 text-lg font-normal text-neutral-600 md:text-xl">
              High quality abstract images for your projects, wallpaper and presentations.
            </p>
            {/* CTA Container */}
            <div className="flex space-x-4 md:w-[458px] md:space-x-8 xl:w-9/12">
              {/* Button Learn More */}
              {/* TODO: create a component that takes a button type and to set this styling once and adjust with types */}
              <button className="w-full rounded border border-neutral-200 bg-white px-[29px] py-3 text-base font-medium text-neutral-900 shadow hover:bg-neutral-50 focus-visible:rounded-md focus-visible:bg-neutral-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] disabled:border-none disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none md:px-14 xl:px-9">
                Learn more
              </button>
              {/* Button See Pricing */}
              <button className="w-full rounded bg-indigo-700 px-[29px] py-3 text-base font-medium text-white shadow hover:bg-indigo-800 focus-visible:rounded-md focus-visible:bg-indigo-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12] disabled:border-none disabled:bg-neutral-100 disabled:text-neutral-400 disabled:shadow-none md:px-14 xl:px-9">
                See pricing
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <Image
            // TODO: There has to be a better way of constraining this image with this component
            className="pb-12 md:pb-[27px] xl:w-1/2 xl:max-w-[696px]"
            src={'/prism.png'}
            layout="responsive"
            width={696}
            height={464}
            alt="Stacked images with a prism photo at the top"
          />
        </section>
      </header>

      {/* <!-- Attribute this challenge to yourself! --> */}
      <div className="credits">
        A challenge by
        <a href="https://www.greatfrontend.com/projects?ref=challenges" target="_blank">
          &nbsp;GreatFrontEnd Projects
        </a>
        . Built by
        <a href="https://www.greatfrontend.com/projects/u/danieo" target="_blank">
          &nbsp;danieo
        </a>
        .
      </div>
    </main>
  );
}
