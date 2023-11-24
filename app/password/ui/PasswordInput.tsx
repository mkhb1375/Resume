import { useRouter } from "next/navigation";
import { usePasswordApi } from "../password-api";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Phone } from "../../recoil/phone-number";
import { Secret } from "../../recoil/secret";
import Cookies from "js-cookie";
import Button from "@/app/login/button";
import Nav from "@/app/ui/Nav";
import Photo from "@/app/login/Photo";

export default function PasswordInput() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const secret = useRecoilValue(Secret);
  const phone = useRecoilValue(Phone);
  const { data, refetch, isSuccess, isLoading, isError } = usePasswordApi({
    secret,
    password,
  });

  function handleClick() {
    refetch();
  }

  useEffect(() => {
    if (isSuccess && data) {
      Cookies.set("secret", data.data.data.token.access_token);
      router.push("/");
    }
  }, [isSuccess]);

  return (
    <div className="">
      <Nav />
      <Photo />
      <h1 className="text-center mt-[1.875rem] font-[800]">
        ورود-ثبت&nbsp;نام
      </h1>
      <p className="text-center mt-[1.875rem] font-[400]">
        رمز عبور شماره <span className="mx-[5px] font-[600]">{phone}</span> را
        وارد کنید
      </p>
      {isError && (
        <p className="text-center mt-[1.25rem] font-[400] text-[red]">
          رمز را مجدد بررسی کنید
        </p>
      )}
      <form>
        <input
          className="ltr text-left mx-auto block border-b-4 border-blue-400
          outline-transparent mt-[1.875rem] focus:border-b-4 focus:border-blue-700"
          type="password"
          name=""
          id=""
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          autoFocus={true}
        />
        <Button
          isLoading={isLoading}
          enabled={password.length >= 6}
          callback={handleClick}
        />
      </form>
    </div>
  );
}
