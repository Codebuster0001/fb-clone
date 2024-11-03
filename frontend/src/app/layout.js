import localFont from "next/font/local";
import "./globals.css";

// Define local fonts with variables and weights
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",  // Ensure this matches the weight range of the font file
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",  // Same as above
});

// Metadata for the application
export const metadata = {
  title: "Facebook Clone",
  description: "Create a Facebook clone",
};

// Root Layout component
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Set meta title and description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
