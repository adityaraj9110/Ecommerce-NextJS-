import Image from "next/image";
import styles from "./productCard.module.css";
import ReactStars from "react-stars";
import { DataType } from "@/shared/utils/DataTypes/ResponsedataType";
import { useDispatch } from "react-redux";
import { cartSelector } from "@/shared/redux/reducers/CartReducers";
import { ADD_TO_CART, REMOVE_TO_CART } from "@/shared/redux/Constant";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

type PropType = {
  data:DataType,
  setData?: (id: number) => void;
}

const ProductCard = ({ data ,setData }:PropType) => {

  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector(cartSelector);

  const itemsSelected = (id: string) => {
    return cartItems.some((item) => {
      return item === id;
    });
  };

  const handleClick = (id: number) => {
    if (cartItems && cartItems.includes(id.toString())) {
      dispatch({
        type: REMOVE_TO_CART,
        payload: id.toString(),
      });
      if(setData){
        setData(id);
      }
    } else {
      dispatch({
        type: ADD_TO_CART,
        payload: id.toString(),
      });
    }
  };

  return (
    <div className={styles["image-container"]}>
      <div className={styles["img-div"]}>
        <Image
          src={data.thumbnail}
          alt="product image"
          width={150}
          height={100}
          priority
          onClick={()=>router.push(`products/${data.id}`)}
        />
      </div>
      <div className={styles.imageInfo}>
        <div className={styles.title}>
          <h3>{data.title}</h3>
        </div>
        <div className={styles.description}>
          <h5>{data.description}</h5>
        </div>
        <div className={styles.price}>$ {data.price}.00</div>
        <div className={styles.rating}>
          <ReactStars count={5} size={24} edit={false} value={data.rating} />
        </div>
        <div className={styles.btn}>
          <h4 onClick={() => handleClick(data.id)}>
            {" "}
            {itemsSelected(data.id.toString())
              ? "Remove To Cart"
              : "Add To Cart"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
