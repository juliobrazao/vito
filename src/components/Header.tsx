import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            {t("main.title")}
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {t("main.language")}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="./?lang=en">
                    {t("main.english")}
                  </a>
                  <a className="dropdown-item" href="./?lang=pt">
                    {t("main.portuguese")}
                  </a>
                </div>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder={t("main.search")}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                {t("main.search")}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
