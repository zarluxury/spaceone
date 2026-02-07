import localFont from "next/font/local";

export const gramatika = localFont({
  src: [
    {
      path: "../fonts/GramatikaTrial-ExtraLight-BF65dea4c5b0dc5.otf",
      weight: "100",
    },
    {
      path: "../fonts/GramatikaTrial-Light-BF65dea4c59cf23.otf",
      weight: "300",
    },
    
  ],
  variable: "--font-gramatika",
  display: "swap",
});
