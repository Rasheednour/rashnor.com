import "@styles/globals.css";

import React, { Suspense } from "react";


export const metadata = {
  title: "rashnor.com",
  description: "Full Stack Developer Portfolio",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>
        {children}
        </body>
    </html>
  );
};

export default RootLayout;
