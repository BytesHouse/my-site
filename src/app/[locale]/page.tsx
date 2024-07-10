"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Header } from "@/components/Header";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <section className="px-4">
          <h3 className="text-center border-b border-black pb-2">
            {t("experiance")}
          </h3>
          <ul>
            <li>
              <a href="tel:+37378587457">
                <b>{t("phone")}</b> +373 78 587457 ({t("moldova")})
              </a>
            </li>
            <li>
              <a href="mailto:a.lihtgolt@gmail.com">
                <b>{t("email")} </b>
                a.lihtgolt@gmail.com
              </a>
            </li>
            <li>
              <b>{t("age")} </b>33
            </li>
            <li>
              <b>{t("lang")} </b>
              {t("ru")}, {t("en")}, {t("ro")}
            </li>
            <li>
              <b>{t("status")}</b> {t("looking")}
            </li>
          </ul>
        </section>
        <section className="px-4">
          <h3 className="text-center border-b border-black pb-2">
            {t("summury")}
          </h3>
          <ul className="list-disc py-2 px-4">
            <li>
              <b>{t("pl")} </b> JavaScript / TypeScript (Advanced)
            </li>
            <li>
              <b>{t("fr")} </b> NextJs / React, NestJs / Node Js, ReduxToolkit /
              Redux, jQuery / AJAX, Tailwind / CSS, Bootstrap .
            </li>
            <li>
              <b>{t("wsp")} </b> REST API.
            </li>
            <li>
              <b>{t("env")} </b> VS Code, Figma, Git / GitHub / GitLab.
            </li>
            <li>
              <b>{t("db")} </b> SQL (Prisma ORM), no-SQL (Firebase, Firestore).
            </li>
          </ul>
        </section>
        <section className="px-4">
          <h3 className="text-center border-b border-black pb-2">{t("exp")}</h3>
        </section>
        <Link
          href="https://t.me/AndrewLightGold"
          className="shadow fixed bottom-4 right-4 animate-bounce border p-6 rounded-full z-10 bg-white"
        >
          <Image
            alt="telegram"
            width={35}
            height={35}
            src="/assets/icons/tg.svg"
          />
        </Link>
      </main>
      <footer className="px-4 pb-28">
        <h3 className="text-center border-b border-black pb-2">
          {t("mentorin")}
        </h3>
        <p>{t("imm")}</p>
      </footer>
    </div>
  );
}
