import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  function listener() {
   document.body.addEventListener("click", (e) => {
      console.log(e.target.tagName)
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