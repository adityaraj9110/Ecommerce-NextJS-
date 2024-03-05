"use client";
import "./signup.css";
import { useForm } from "react-hook-form";
import { Provider, useDispatch, useSelector } from "react-redux";
import Input from "@/shared/sharedInput/Input";
import { registerSelector } from "@/shared/redux/reducers/RegisterReducer";
import { REGISTER } from "@/shared/redux/Constant";
import { store } from "@/shared/redux/store";
import Image from "next/image";
import signup from "../../assests/signup.png";
import { useRouter } from "next/navigation";
import { FormValues } from "@/shared/utils/DataTypes/ResponsedataType";



const SignUp = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      contact: "",
      email: "",
      pin: "",
      state: "",
      password: "",
      confirmPassword: "",
    },
    //constent should not be in the current component
    mode: "onTouched",
  });

  const {  formState, handleSubmit, watch , control } = form;
  const { isValid, errors } = formState;
  const password = watch("password");
  const router = useRouter();
  const disPatch = useDispatch();
  const savedRegisterUsers = useSelector(registerSelector);

  const isSameUser = (savedRegisterUsers: FormValues[], data: FormValues) => {
    return savedRegisterUsers.some((user) => {
      return user.email === data.email;
    });
  };

  const handleSignUp = (data: FormValues) => {
    if (isValid) {
      if (savedRegisterUsers) {
        if (!isSameUser(savedRegisterUsers, data)) {
          disPatch({
            type: REGISTER,
            payload: data,
          });
          alert("SignUp Successfully");
          router.push("/login")
        } else {
          alert("user already registered !!!");
        }
      } else {
        disPatch({
          type: REGISTER,
          payload: data,
        });
        router.push("/login")
      }
    }
  };

  return (
    
      <div className="user-info">
        <div className="signup-img">
          <Image src={signup} alt="signup" />
        </div>
        <form className="user-info-form" onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control">
            <Input
              type="text"
              name="username"
              id="username"
              className="username"
              control={control}
              validationOptions={{
                required: {
                  value: true,
                  message: "username is required",
                },
              }}
              error={errors.username?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="number"
              id="contact"
              name="contact"
              className="number"
              control={control}
              //make constent rule and apply here
              validationOptions={{
                minLength: {
                  value: 10,
                  message: "Number is less than 10",
                },
                maxLength: {
                  value: 10,
                  message: "Phone number can't exceed more than 10",
                },
                required: {
                  value: true,
                  message: "Phone number is required",
                },
              }}
              error={errors.contact?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="email"
              id="email"
              className="email"
              name="email"
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
              type="number"
              id="pin"
              className="number"
              name="pin"
              control={control}
              validationOptions={{
                minLength: {
                  value: 6,
                  message: "Pin can't be less than 6",
                },
                maxLength: {
                  value: 6,
                  message: "Pin should be of only 6 digits",
                },
                required: {
                  value: true,
                  message: "Pin is required",
                },
              }}
              error={errors.pin?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="text"
              id="address"
              className="address"
              name="address"
              control={control}
              validationOptions={{
                required: {
                  value: true,
                  message: "Address is required",
                },
              }}
              error={errors.address?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="text"
              id="state"
              className="state"
              name="state"
              control={control}
              validationOptions={{
                required: {
                  value: true,
                  message: "State is required",
                },
              }}
              error={errors.state?.message}
            />
          </div>

          <div className="form-control">
            <Input
              type="password"
              id="password"
              className="password"
              name="password"
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

          <div className="form-control">
            <Input
              type="password"
              id="confirmPassword"
              className="confirmPassword"
              name="confirmPassword"
              control={control}
              validationOptions={{
                required: {
                  value: true,
                  message: "confirm password is required",
                },
                validate: (value: string) =>
                  value === password || "The passwords do not match",
              }}
              error={errors.confirmPassword?.message}
            />
          </div>

          <div className="button-family-1">
            <button type="submit" className="btn">
              SignUp
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    
  );
};

const SignUpWithReduxProvider = () => (
  <Provider store={store}>
    <SignUp />
  </Provider>
);

export default SignUpWithReduxProvider;
