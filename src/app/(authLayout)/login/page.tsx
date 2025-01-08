"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Cookies from "js-cookie";
import { LoginState } from "@wix/sdk";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

enum MODE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  RESET_PASSWORD = "RESET_PASSWORD",
  EMAIL_VERIFICATION = "EMAIL_VERIFICATION",
}
function Login() {
  const wixClient = useWixClient();
  const pathName = usePathname();
  const router = useRouter();
  const [member, setMember] = useState(null);
  console.log({ member: member });
  const isLoggedIn = wixClient?.auth?.loggedIn();
  if (isLoggedIn) {
    router.push("/");
  }
  console.log(isLoggedIn);

  const [mode, setMode] = useState(MODE.LOGIN);
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailCode, setEmailCode] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const formTitle =
    mode === MODE.LOGIN
      ? "Log In"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset Password"
      : mode === MODE.EMAIL_VERIFICATION
      ? "Verify Your Email"
      : "Log In";
  const buttonTitle =
    mode === MODE.LOGIN
      ? "Login"
      : mode === MODE.REGISTER
      ? "Register"
      : mode === MODE.RESET_PASSWORD
      ? "Reset"
      : mode === MODE.EMAIL_VERIFICATION
      ? "Verify"
      : "Login";

  // custom login with wix headless -------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      let response;
      switch (mode) {
        case MODE.LOGIN:
          response = await wixClient.auth.login({
            email: email,
            password: password,
          });

          break;
        case MODE.REGISTER:
          response = await wixClient.auth.register({
            email: email,
            password: password,
            profile: { nickname: userName },
            // captchaTokens: { recaptchaToken: "<TOKEN>" },
          });
          break;
        case MODE.RESET_PASSWORD:
          response = await wixClient.auth.sendPasswordResetEmail(
            email,
            window.location.href
          );
          setMessage("Password reset email sent, please check your email.");
          break;
        case MODE.EMAIL_VERIFICATION:
          response = await wixClient.auth.processVerification({
            verificationCode: emailCode,
          });
          setMessage("Email verified, you can now log in.");
          break;

        default:
          break;
      }
      switch (response?.loginState) {
        case LoginState?.SUCCESS:
          setMessage("Logged in successfully!");
          const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
            response?.data?.sessionToken
          );
          Cookies.set("refreshToken", JSON.stringify(tokens?.refreshToken), {
            expires: 2,
          });
          wixClient?.auth?.setTokens(tokens);

          break;
        case LoginState?.FAILURE:
          if (
            response?.errorCode === "invalidEmail" ||
            response?.errorCode === "invalidPassword"
          )
            setError("Invalid email or password!");
          else if (response?.errorCode === "emailAlreadyExists") {
            setError("Email already exists!");
          } else if (response?.errorCode === "resetPassword") {
            setError("You need to reset your password!");
          } else {
            setError("Something wet wrong!");
          }

        case LoginState?.EMAIL_VERIFICATION_REQUIRED:
          setMode(MODE.EMAIL_VERIFICATION);

        case LoginState.OWNER_APPROVAL_REQUIRED:
          setError("Your account is pending for approval!");

        default:
          break;
      }
      console.log({ oAuthResponse: response });
    } catch (error) {
      console.error(error);
      setError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-80px)] login_page_container flex items-center justify-center px-4 md:px-8 lg:px-16 xl:px-[100px]">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div className="header">
          <h2 className="title text-2xl font-semibold">{formTitle}</h2>
        </div>
        <div className="for_container">
          {mode === MODE.REGISTER ? (
            <div className="register_form_wrap">
              <div className="from_item flex flex-col gap-[6px]">
                <label className="text-md text-gray-700 font-semibold">
                  User Name<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter User Name"
                  className="w-full px-3 py-2 hover:border-[1px] border-red-400 rounded-sm border-[1px] border-gray-500 duration-300"
                />
              </div>
            </div>
          ) : null}
          {mode !== MODE.EMAIL_VERIFICATION ? (
            <div className="register_form_wrap">
              <div className="from_item flex flex-col gap-[6px]">
                <label className="text-md text-gray-700 font-semibold">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 hover:border-[1px] border-red-400 rounded-sm border-[1px] border-gray-500 duration-300"
                />
              </div>
            </div>
          ) : (
            <div className="register_form_wrap">
              <div className="from_item flex flex-col gap-[6px]">
                <label className="text-md text-gray-700 font-semibold">
                  Verification Code<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="emailCode"
                  value={emailCode}
                  onChange={(e) => setEmailCode(e.target.value)}
                  placeholder="Enter the verification code"
                  className="w-full px-3 py-2 hover:border-[1px] border-red-400 rounded-sm border-[1px] border-gray-500 duration-300"
                />
              </div>
            </div>
          )}
          {mode === MODE.REGISTER || mode === MODE.LOGIN ? (
            <div className="register_form_wrap">
              <div className="from_item flex flex-col gap-[6px]">
                <label className="text-md text-gray-700 font-semibold">
                  Password<span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3 py-2 hover:border-[1px] border-red-400 rounded-sm border-[1px] border-gray-500 duration-300"
                />
              </div>
            </div>
          ) : null}
          {mode === MODE.LOGIN ? (
            <u
              className="cursor-pointer mt-1"
              onClick={() => setMode(MODE.RESET_PASSWORD)}
            >
              Forget Password?
            </u>
          ) : null}
          <button
            type="submit"
            className="p-3 w-full bg-red-400 rounded-md text-white font-semibold text-xl mt-6 disabled:bg-red-200 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : buttonTitle}
          </button>
          {error && <p className="text-sm text-red-500">{error}</p>}
        </div>
        {mode === MODE.REGISTER ? (
          <u
            className="cursor-pointer mt-1"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Have an account?
          </u>
        ) : mode === MODE.LOGIN ? (
          <u
            className="cursor-pointer mt-1"
            onClick={() => setMode(MODE.REGISTER)}
          >
            Don't have an account?
          </u>
        ) : mode === MODE.RESET_PASSWORD ? (
          <u
            className="cursor-pointer mt-1"
            onClick={() => setMode(MODE.LOGIN)}
          >
            Go Back to Login
          </u>
        ) : null}
        {message && <p className="text-sm text-green-500">{message}</p>}
      </form>
    </div>
  );
}

export default Login;
