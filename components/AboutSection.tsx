import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="/assets/amanamabasi.png"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1200}
                height={920}
              />
              <Image
                src="/assets/amanamabasi.png"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1200}
                height={920}
              />
            </div>
          </div>

          <div className="relative space-y-4 lg:py-10">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          Meet Amanamabasi.
        </h2>
            <p className="text-muted-foreground">
            I’m Amanamabasi Akpan,{" "}
              <span className="text-accent-foreground font-bold">
              a JavaScript, TypeScript, React, and Node.js developer with a product-focused mindset.
              </span>{" "}
            </p>

            <p className="text-muted-foreground">
              With 2+ years in front-end development and 5 years in marketing, I build fast, scalable, and user-driven applications for startups and businesses
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  I help startups and businesses like yours bring ideas to life with clean, efficient code.
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium">Amanamabasi, Front-end Developer</cite>
                  <a href="https://www.linkedin.com/in/amanamabasiakpan/">
                  <Image
                    src="/assets/linkedin.png"
                    className="h-6 w-fit dark:invert"
                    alt="Linkedin Logo"
                    width={80}
                    height={20}
                  />
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
