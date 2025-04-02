import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HeroHeader } from "@/components/hero-header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-24 pt-5 md:pb-32 lg:pb-56 lg:pt-44">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                <h1 className="mt-5 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                  Hire a developer for your next product or team.
                </h1>
                <p className="mt-5 md:mt-10 max-w-2xl text-pretty text-lg">
                I’m Amanamabasi Akpan. I build great products with clean interfaces that wow users, keep them engaged, all while being efficient, scalable, and fast.
                </p>

                <div className="mt-5 md:mt-15 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base max-sm:w-80">
                    <Link href="#contact">
                      <span className="text-nowrap">Contact Me</span>
                    </Link>
                  </Button>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-5 text-base max-sm:w-80"
                  >
                    <Link href="#projects">
                      <span className="text-nowrap">See My Work</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                className="-z-10 order-first ml-auto h-106 w-full object-cover object-top sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-56 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                src="/hero.webp" 
                alt="hero"
                height="1000"
                width="1000"
              />
            </div>

          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">My Development Toolbox</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit dark:invert"
                      src="/assets/nexticon.svg"
                      alt="Next.js Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/react.svg"
                      alt="Reactjs Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/node.svg"
                      alt="Nodejs Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/typescript.svg"
                      alt="Typescript Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/tailwindcss.svg"
                      alt="tailwindcss Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit dark:invert"
                      src="/assets/github.svg"
                      alt="Github Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/figma.svg"
                      alt="Figma Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/materialui.svg"
                      alt="Material UI Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/shopify.svg"
                      alt="Shopify Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit"
                      src="/assets/stripe.svg"
                      alt="Stripe Logo"
                      height="20"
                      width="20"
                    />
                  </div>

                  <div className="flex">
                    <Image
                      className="mx-auto h-8 w-fit dark:invert"
                      src="/assets/wordpress.svg"
                      alt="WordPress Logo"
                      height="20"
                      width="20"
                    />
                  </div>
              
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
