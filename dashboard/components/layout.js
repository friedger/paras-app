import Head from 'next/head'

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
			<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"></link>
    </Head>
    <style jsx global>
      {
        `
        @import url('/inter.css');
        html { font-family: 'Inter', sans-serif; }
        input, textarea { font-family: 'Inter', sans-serif; }
        `
      }
    </style>
		{ children }
  </div>
)

export default Layout