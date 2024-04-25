import React from "react";

import { Link } from "react-router-dom";

const Home = () => {
  function FilmIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
    );
  }
  return (
    <div>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-[#141414] text-white">
          <Link className="flex items-center justify-center" href="#">
            <FilmIcon className="h-6 w-6" />
            <span className="sr-only">gptFlix</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/login"
            >
              Login
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full pt-12 md:pt-24 lg:pt-36 bg-[#141414] text-white">
            <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
              <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16 ">
                <div className="pb-20">
                  <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                    Discover Your Next Cinematic Obsession
                  </h1>
                  <p className="mx-auto max-w-[700px] pt-2 text-gray-300 md:text-xl dark:text-gray-400">
                    GptFlix, your personal AI-powered movie concierge, curates
                    tailored recommendations to ignite your cinematic passion.
                  </p>
                </div>
                <div className="flex flex-col items-start space-y-4">
                  <img
                    alt="Hero"
                    className="mx-auto aspect-[2/1] overflow-hidden rounded-t-xl object-cover"
                    height="300"
                    src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className=" space-y-12 px-4 md:px-6">
              <div className="flex flex-col items-center justify-center text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Revolutionize Your Movie Experience
                  </h2>
                  <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    GptFlix's cutting-edge technology and AI-powered
                    recommendations transform the way you discover and enjoy
                    movies.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#e50914] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#c20812] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e50914] disabled:pointer-events-none disabled:opacity-50"
                  to="/login"
                >
                  Start Watching
                </Link>
              </div>
            </div>
          </section>
        </main>
        <footer className=" py-6  bg-[#141414] text-white">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            © 2024 GptFlix.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
