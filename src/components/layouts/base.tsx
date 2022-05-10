import React from "react";
import "../../assets/css/app.css";

interface IBaseProps {
   children: React.ReactChild;
   title?: string;
}

const BaseLayout = ({ children, title = "Logan Blangenois" }: IBaseProps) => {
   return (
      <html lang="en">
         <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>{title}</title>
         </head>
         <body>{children}</body>
      </html>
   );
};

export default BaseLayout;
