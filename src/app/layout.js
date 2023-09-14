import './globals.css'

export const metadata = {
  title: 'To Doo',
  description: 'To do list',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
