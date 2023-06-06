import { appLogo } from "../../utils/images";

export default function AppLayout({
  logo = appLogo,
  logoClass,
  contentClass,
  children,
}) {
  return (
    <section className="main-wrapper">
      <div>
        <div className={`main-logo ${logoClass}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`main-content ${contentClass}`}>{children}</div>
      </div>
    </section>
  );
}
