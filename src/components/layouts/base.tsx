import React from "react";
import "../../assets/css/app.css";

interface IBaseProps {
   children: React.ReactChild;
   title?: string;
}

const BaseLayout = ({
   children,
   title = "Logan Blangenois - React JS Front-end Developper",
}: IBaseProps) => {
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>{title}</title>
            <meta description="Front-end developper on a mission to provide a high-performance and accessible application for all" />
         </head>
         <body className="bg-primary">
            {children}

            <div className="px-4 fixed bottom-0 left-0 right-0">
               <nav className="max-w-7xl mx-auto">
                  <ul className="-ml-2 inline-flex flex-col items-center space-y-1 after:block after:w-[3px] after:h-14 after:mt-3 after:bg-black">
                     <li>
                        <a
                           href="https://github.com/MKlblangenois"
                           target="_blank"
                           rel="noopener"
                           className="inline-flex w-10 h-10 items-center justify-center hover:bg-primary-300 rounded-full transition ease-in-out duration-200 hover:outline-2 hover:outline-black hover:outline outline outline-transparent outline-offset-0"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 25"
                              className="w-6 h-auto"
                           >
                              <path
                                 fill="#181B1B"
                                 d="M8.027 19.229c0 .097-.11.174-.251.174-.16.015-.271-.063-.271-.174 0-.097.111-.174.251-.174.146-.015.271.063.271.174zm-1.504-.218c-.034.097.062.208.208.237.125.049.27 0 .3-.096.029-.097-.063-.209-.208-.252-.126-.034-.267.015-.3.111zm2.138-.082c-.14.034-.237.126-.222.237.014.097.14.16.285.126.14-.034.237-.126.223-.223-.015-.092-.145-.154-.286-.14zM11.845.387C5.134.387 0 5.482 0 12.193c0 5.367 3.377 9.959 8.202 11.575.619.111.837-.271.837-.586 0-.3-.015-1.955-.015-2.97 0 0-3.387.725-4.098-1.443 0 0-.552-1.408-1.345-1.77 0 0-1.108-.76.077-.746 0 0 1.205.097 1.868 1.249 1.06 1.867 2.835 1.33 3.527 1.01.112-.773.426-1.31.774-1.63-2.704-.3-5.433-.692-5.433-5.347 0-1.33.367-1.998 1.141-2.85-.125-.314-.537-1.61.126-3.285C6.673 5.085 9 6.706 9 6.706a11.369 11.369 0 013.039-.41c1.03 0 2.07.14 3.038.41 0 0 2.328-1.625 3.34-1.306.662 1.679.25 2.971.125 3.285.774.857 1.248 1.525 1.248 2.85 0 4.67-2.85 5.042-5.554 5.347.445.383.822 1.108.822 2.245 0 1.631-.014 3.649-.014 4.046 0 .314.222.696.837.585C20.719 22.152 24 17.56 24 12.194 24 5.482 18.556.386 11.845.386zM4.703 17.076c-.063.048-.048.16.034.251.078.078.189.112.252.049.063-.049.048-.16-.034-.252-.078-.077-.189-.111-.252-.048zm-.522-.392c-.034.063.014.14.11.189.078.048.175.033.209-.034.034-.063-.015-.14-.111-.189-.097-.029-.174-.014-.208.034zm1.567 1.722c-.077.063-.048.209.063.3.112.112.252.126.315.049.063-.063.034-.208-.063-.3-.107-.111-.252-.126-.315-.049zm-.551-.71c-.078.047-.078.173 0 .285.077.11.208.16.27.11.078-.062.078-.188 0-.3-.067-.11-.193-.159-.27-.096z"
                              ></path>
                           </svg>
                           <span className="sr-only">GitHub</span>
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.instagram.com/loganblangenois"
                           target="_blank"
                           rel="noopener"
                           className="inline-flex w-10 h-10 items-center justify-center hover:bg-primary-300 rounded-full transition ease-in-out duration-200 hover:outline-2 hover:outline-black hover:outline outline outline-transparent outline-offset-0"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 25"
                              className="w-6 h-auto"
                           >
                              <path
                                 fill="#181B1B"
                                 d="M12.005 6.554a6.146 6.146 0 00-6.155 6.155 6.146 6.146 0 006.155 6.155 6.146 6.146 0 006.156-6.155 6.146 6.146 0 00-6.156-6.155zm0 10.157a4.01 4.01 0 01-4.001-4.002 4.006 4.006 0 014.001-4.002 4.006 4.006 0 014.002 4.002 4.01 4.01 0 01-4.002 4.002zM19.848 6.3c0 .8-.643 1.437-1.435 1.437a1.436 1.436 0 111.436-1.436zm4.077 1.458c-.091-1.923-.53-3.627-1.94-5.03-1.403-1.404-3.107-1.843-5.03-1.94C14.973.677 9.032.677 7.05.79c-1.918.091-3.621.53-5.03 1.934C.61 4.127.177 5.83.08 7.753c-.112 1.983-.112 7.924 0 9.906.091 1.923.53 3.627 1.94 5.03 1.409 1.404 3.107 1.843 5.03 1.94 1.982.112 7.923.112 9.905 0 1.924-.091 3.627-.53 5.03-1.94 1.404-1.403 1.843-3.107 1.94-5.03.113-1.982.113-7.918 0-9.9zm-2.56 12.027a4.051 4.051 0 01-2.283 2.282c-1.58.627-5.33.482-7.077.482-1.746 0-5.501.14-7.076-.482a4.052 4.052 0 01-2.283-2.282c-.626-1.58-.482-5.33-.482-7.077 0-1.746-.139-5.502.482-7.077A4.051 4.051 0 014.93 3.35c1.58-.627 5.33-.482 7.076-.482 1.747 0 5.502-.14 7.077.482a4.051 4.051 0 012.282 2.282c.627 1.58.482 5.33.482 7.077 0 1.746.145 5.502-.482 7.077z"
                              ></path>
                           </svg>
                           <span className="sr-only">Instagram</span>
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://codepen.io/lblangenois"
                           target="_blank"
                           rel="noopener"
                           className="inline-flex w-10 h-10 items-center justify-center hover:bg-primary-300 rounded-full transition ease-in-out duration-200 hover:outline-2 hover:outline-black hover:outline outline outline-transparent outline-offset-0"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="w-6 h-auto"
                           >
                              <path
                                 fill="#181B1B"
                                 d="M23.545 7.487L12.575.174a1.042 1.042 0 00-1.15 0L.454 7.487A1.048 1.048 0 000 8.344v7.313c0 .334.174.67.455.857l10.97 7.313c.373.23.773.233 1.15 0l10.97-7.313c.28-.188.455-.523.455-.857V8.343c0-.335-.174-.67-.455-.857zM13.03 2.96l8.076 5.384-3.602 2.41-4.474-2.986V2.96zm-2.062 0v4.808l-4.473 2.987-3.603-2.411 8.076-5.384zm-8.906 7.313L4.646 12l-2.585 1.728v-3.455zm8.906 10.768l-8.076-5.385 3.603-2.41 4.473 2.987v4.808zM12 14.438L8.357 12 12 9.563 15.643 12 12 14.438zm1.031 6.603v-4.808l4.473-2.987 3.603 2.41-8.076 5.385zm8.906-7.313L19.354 12l2.584-1.727v3.455z"
                              ></path>
                           </svg>
                           <span className="sr-only">CodePen</span>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </body>
      </html>
   );
};

export default BaseLayout;
