export default function RootLayout({ children }) {
  return (
    <html className="html">
      <body>

        <div className="main">
          {children}
        </div>
      
      </body>
  </html>
  )
}
