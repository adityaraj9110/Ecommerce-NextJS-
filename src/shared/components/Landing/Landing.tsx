"use client";
import styles from "./landing.module.css";
import Image from "next/image";
import LandingPageImage from "../../../assests/Landing.png";
import { useRouter } from "next/navigation";
import { preLoadProducts } from "@/app/page/[pageNumber]/page";
import useLocalState from "@/shared/hooks/useLocalState";

const Landing = () => {

  const router = useRouter();
  const [offset,_] = useLocalState("TESTING_OFFSET",20);

  const handleRoute = () => {

    router.push(`/page/1&limit=${offset}`);
  };

  // preLoadProducts();

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1>
          Welcome To <span>Product Wallah</span>
        </h1>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolore
          veritatis totam ipsa recusandae quas alias nemo laboriosam aut
          architecto voluptatibus quam, exercitationem id consectetur aliquam
          natus. Quis, incidunt hic.
        </p>

        <button className={styles.btn} onClick={handleRoute}>
          Checkout Products
        </button>
      </div>
      <div className={styles.right}>
        <Image
          src={LandingPageImage}
          alt="Landing Image"
          width={500}
          height={500}
          className={styles.img}
        />
      </div>
    </section>
  );
};

export default Landing;
