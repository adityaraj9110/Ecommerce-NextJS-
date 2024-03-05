import styles from "./links.module.css";
import Navlinks from "../Navlinks/Navlinks";
import { useSelector } from "react-redux";
import { authSelector } from "@/shared/redux/reducers/AuthReducer";
import { useDispatch } from "react-redux";
import { LOGOUT } from "@/shared/redux/Constant";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { LocalStorageKeys } from "@/shared/utils/DataTypes/ResponsedataType";

type LinksType = {
  title: string;
  link: string;
};

const linksToNavigate: LinksType[] = [{ title: "cart", link: "/cart" }];

const Links = () => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleLogout = () => {
    dispatch({ type: LOGOUT });
    router.push("/login");
    Cookies.remove(LocalStorageKeys.CURRENT_USER);
  };

  

  

  return (
    user.email!==undefined && (
      <div className={styles.links}>
        <h3 onClick={handleLogout} style={{ cursor: "pointer" }}>
          Logout
        </h3>
        <h3>{user?.email?.split("@")[0]}</h3>
        {linksToNavigate.map((item) => (
          <Navlinks key={item.title} item={item} />
        ))}
      </div>
    )
  );
};

export default Links;
