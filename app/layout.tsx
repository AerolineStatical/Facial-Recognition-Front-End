import './globals.css'; ;
;  // If you are importing from a directory that's inside `app`
  // This assumes globals.css is in the same folder as the file where it's being imported
 

export const metadata = {
  title: 'Hotel Management System',
  description: 'A modern hotel management system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}