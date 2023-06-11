import Provider from "@/components/Provider";
import "styles/globals.css";

export const metadata = {
  title: "M and B",
  description: "Based on the Order By the User Makers will work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className="w-full h-[100vh] flex flex-col items-center rotationAnimation">
          {children}
        </body>
      </Provider>
    </html>
  );
}
