import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "조영대 | Cloud Infrastructure Engineer Portfolio",
  description:
    "운영을 고려한 설계로 안정적인 플랫폼을 만드는 Cloud Infrastructure Engineer / Platform Engineer 포트폴리오",
  openGraph: {
    title: "조영대 | Cloud Infrastructure Engineer Portfolio",
    description: "AWS, Terraform, Kubernetes, Azure OpenAI 기반 프로젝트 포트폴리오",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
