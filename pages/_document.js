import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="es">
        <Head>
          <link rel="stylesheet" href="/static/font/styles.css" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body className="bg-gradient">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
