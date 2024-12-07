import Navbar from "@/components/Navbar";
import styles from "../styles/pricing.module.css";





const Pricing = () => {
  const handleClick = () => {
    alert("Redirecting to payment option!");
  };

  return (
    
    <div className={styles["pricing-container"]}>
      <h1 className={styles["pricing-title"]}>Explore Our Exclusive Packages</h1>
      <p className={styles["pricing-subtitle"]}>
        Choose the perfect plan for your next adventure!
      </p>

      <div className={styles["pricing-table"]}>
        {/* 3-Day Package */}
        <div className={styles["pricing-card"]}>
          <h2 className={styles["card-title"]}>3-Day Kashmir Tour</h2>
          <p className={styles["card-price"]}>₹ 3999</p>
          <ul className={styles["card-features"]}>
            <li>✔ Explore Srinagar & Dal Lake</li>
            <li>✔ 2 Nights Stay</li>
            <li>✔ All Meals Included</li>
            <li>✔ 24/7 Tour Assistance</li>
          </ul>
          <button className={styles["buy-now-btn"]} onClick={handleClick}>
            Buy Now
          </button>
        </div>

        {/* 4-Day Package */}
        <div className={`${styles["pricing-card"]} ${styles["popular"]}`}>
          <h2 className={styles["card-title"]}>4-Day Kashmir Tour</h2>
          <p className={styles["card-price"]}>₹ 4999</p>
          <ul className={styles["card-features"]}>
            <li>✔ Srinagar, Gulmarg & Pahalgam</li>
            <li>✔ 3 Nights Stay</li>
            <li>✔ All Meals Included</li>
            <li>✔ Luxury Transport</li>
          </ul>
          <button className={styles["buy-now-btn"]} onClick={handleClick}>
            Buy Now
          </button>
        </div>

        {/* 5-Day Package */}
        <div className={styles["pricing-card"]}>
          <h2 className={styles["card-title"]}>5-Day Kashmir Tour</h2>
          <p className={styles["card-price"]}>₹ 6499</p>
          <ul className={styles["card-features"]}>
            <li>✔ Srinagar, Gulmarg, Pahalgam & Sonmarg</li>
            <li>✔ 4 Nights Stay</li>
            <li>✔ All Meals Included</li>
            <li>✔ Premium Transportation</li>
          </ul>
          <button className={styles["buy-now-btn"]} onClick={handleClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
