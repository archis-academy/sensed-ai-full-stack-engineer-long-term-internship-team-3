import styles from "./partners.module.scss";

const Partners: React.FC = () => {
  const partners = [
    { name: "Google", image: "google.png", id: 1 },
    { name: "Amazon", image: "amazon.png", id: 2 },
    { name: "Logitech", image: "logitech.png", id: 3 },
    { name: "Spotify", image: "spotify.png", id: 4 },
    { name: "Samsung", image: "samsung.png", id: 5 },
    { name: "Netflix", image: "netflix.png", id: 6 },
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
              src={`/images/${partner.image}`}
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
