import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const listener = () => {
    const listen = document.body.addEventListener("click", (e) => {
      console.log(e.target)
    })
  }

  return (
    <Html lang="en">
      <Head />
      <body onClick={() => listener}>
        <Main />
        <div id="portal"></div>
        <NextScript />
      </body>
    </Html>
  )
}