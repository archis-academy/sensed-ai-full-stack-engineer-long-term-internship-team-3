import React from "react";
import styles from "./partners.module.scss";
import google from "@/assets/google.png";
import amazon from "@/assets/amazon.png";
import logitech from "@/assets/logitech.png";
import spotify from "@/assets/spotify.png";
import samsung from "@/assets/samsung.png";
import netflix from "@/assets/netflix.png";
const Partners: React.FC = () => {
  const partners = [
    { name: "Google", image: google, id: 1 },
    { name: "Amazon", image: amazon, id: 2 },
    { name: "Logitech", image: logitech, id: 3 },
    { name: "Spotify", image: spotify, id: 4 },
    { name: "Samsung", image: samsung, id: 5 },
    { name: "Netflix", image: netflix, id: 6 },
  ];

  return (
    <section className={styles.partners}>
      <div className={styles.bigBlueBlob}>
        <img src="/images/Ellipse.png" alt="Ellipse" />
      </div>

      <h6>Trusted by 100+ Companies across the globe!</h6>

      <ul className={styles.logos}>
        {partners.map((partner) => (
          <li key={partner.id} className={styles.logo}>
            <img
              src={partner.image}
              alt={`${partner.name} logo`}
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
