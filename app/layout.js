import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Demos for cprg306-assignments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
