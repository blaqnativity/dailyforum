import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="">
        <div class="max-w-7xl mx-auto flex-col px-6 pt-20 lg:flex lg:px-10 xl:px-24">
          <div class="text-zinc-600 cursor-default lg:flex lg:flex-row lg:gap-x-16">
            <div>
              <h2 class="text-2xl text-zinc-800 font-mono font-bold">
                Tech Solutions Co.
              </h2>
              <ul class="mt-4 text-sm flex flex-col items-start justify-start gap-2">
                <li class="flex flex-row items-start">
                  <p class="font-inter">Tech Solutions LLC</p>
                </li>
                <li class="flex flex-row items-start">
                  <p class="font-inter">
                    81807 E. County Road 22, Deer Trail, CO 80105, US
                  </p>
                </li>
              </ul>
            </div>
            <div class="mt-4 md:mt-0 lg:mt-0 flex flex-row flex-wrap lg:flex-nowrap lg:justify-center gap-4 lg:gap-x-24">
              <div class="flex flex-col">
                <h2 class="font-mono font-bold text-zinc-700 text-lg">
                  Contact
                </h2>
                <ul class="mt-4 grid gap-2 ">
                  <li class="flex items-start text-sm">
                    <a
                      target="javascript:;"
                      class="text-left text-zinc-600 break-words hover:underline hover:text-zinc-800"
                      href="javascript:;"
                    >
                      contact@techsolutionsco.net
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col">
                <h2 class="font-mono font-bold text-zinc-700 text-lg">
                  Company
                </h2>
                <ul class="mt-4 grid gap-2 grid-cols-2">
                  <li class="flex items-start text-sm">
                    <span></span>
                    <a
                      target="javascript:;"
                      class="text-left text-zinc-600 break-words hover:underline hover:text-zinc-800"
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li class="flex items-start text-sm">
                    <span></span>
                    <a
                      target="javascript:;"
                      class="text-left text-zinc-600 break-words hover:underline hover:text-zinc-800"
                      href=""
                    >
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-full mt-10 py-10 border-t border-zinc-200 font-inter text-center text-xs text-zinc-400">
            Copyright © 2024 Tech Solutions Co. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
