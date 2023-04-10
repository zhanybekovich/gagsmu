import React from "react";
import "./footer.scss";
import eu from "../../../static/img/eu.png";
import estdev from "../../../static/img/estdev.png";
import leader from "../../../static/img/leader.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logos">
            <img src={eu} alt="Европа Биримдиги" />
            <img src={estdev} alt="Эстониялык эл аралык өнүгүү борбору" />
            <img src={leader} alt="Лидер коомдук бирикмеси" />
          </div>
          <div className="footer-info">
            <p>Вебсайт Европа Биримдигинин колдоосу менен түзүлгөн.</p>
            <p>
              Сайттын мазмуну Европа Биримдигинин жана партнерлордун көз
              карашын, программаларын жана долбоорлорун чагылдырышы зарыл эмес.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
