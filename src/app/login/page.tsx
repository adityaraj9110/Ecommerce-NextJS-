"use client";
import Input from "@/shared/sharedInput/Input";
import "./login.css";
import { useForm } from "react-hook-form";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/shared/redux/store";
import { registerSelector } from "@/shared/redux/reducers/RegisterReducer";
import { LOGIN } from "@/shared/redux/Constant";
import login from "../../assests/login.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';
import {
  FormValues,
  FormValuesForLogin,
  LocalStorageKeys,
} from "@/shared/utils/DataTypes/ResponsedataType";

const Login = () => {
  const form = useForm<FormValuesForLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });
  const { register, formState, handleSubmit, control } = form;
  const { isValid, errors } = formState;
  const dispatch = useDispatch();
  const router = useRouter();

  const registeredUsers = useSelector(registerSelector);

  const isUserExist = (
    registeredUsers: FormValues[],
    data: FormValuesForLogin
  ) => {
    return registeredUsers.some((user) => {
      return user.email === data.email;
    });
  };

  const isPasswordCorrect = (
    registeredUsers: FormValues[],
    data: FormValuesForLogin
  ) => {
    return registeredUsers.some((user) => {
      return user.password === data.password;
    });
  };

  const handleSubmitBtn = (data: FormValuesForLogin) => {
    if (isValid) {
      if (registeredUsers) {
        if (!isUserExist(registeredUsers, data)) {
          alert("user or email does not exist!!");
        } else if (!isPasswordCorrect(registeredUsers, data)) {
          alert("password do not match");
        } else {
          dispatch({
            type: LOGIN,
            payload: data,
          });
          router.push("/");
          Cookies.set(LocalStorageKeys.CURRENT_USER,"login");
        }
      }
    }
  };

  return (
    <div className="user-info">
      <div className="signup-img">
        <Image src={login} alt="login" />
      </div>
      <form
        className="user-info-form-login"
        onSubmit={handleSubmit(handleSubmitBtn)}
      >
        <div className="form-control">
          <Input
            name="email"
            type="email"
            id="email"
            className="email"
            control={control}
            validationOptions={{
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid Email Formate",
              },
            }}
            error={errors.email?.message}
          />
        </div>

        <div className="form-control">
          <Input
            name="password"
            type="password"
            id="password"
            className="password"
            // register={register}
            control={control}
            validationOptions={{
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            error={errors.password?.message}
          />
        </div>

        <div className="button-family-1">
          <button type="submit" className="btn">
            Login
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => router.push("/signup")}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

const LoginWithReduxProvider = () => (
  <Provider store={store}>
    <Login />
  </Provider>
);

export default LoginWithReduxProvider;
