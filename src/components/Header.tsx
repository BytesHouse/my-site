import { useTranslation } from "next-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className="container mx-auto p-2 flex flex-col items-center ">
      <h1 className="font-bold text-2xl text-center">{t("andrew")}</h1>
      <h2 className="font-semibold text-xl text-center">{t("front")}</h2>
    </header>
  );
};
