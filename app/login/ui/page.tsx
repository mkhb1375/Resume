"use client";
import { useState, useEffect } from "react";
import { usePhoneNumberApi } from "../phone-number-api";
import { useSetRecoilState } from "recoil";
import { Secret } from "../../recoil/secret";
import { Phone } from "../../recoil/phone-number";
import { useRouter } from "next/navigation";
import Nav from "../../ui/Nav";
import Photo from "../Photo";

import Button from "../button";

export default function PhoneNumber() {
  const router = useRouter();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [enabled, setEnabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const setSecret = useSetRecoilState(Secret);
  const setPhone = useSetRecoilState(Phone);

  const { data, refetch, isLoading, isSuccess, isError } =
    usePhoneNumberApi(phoneNumber);

  useEffect(() => {
    if (isError) {
      setHasError(true);
    }
  }, [isError]);

  useEffect(() => {
    if (phoneNumber?.length >= 10 && phoneNumber?.length < 12) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [phoneNumber]);

  const handleButtonClick = () => {
    if (enabled) {
      refetch();
    }
  };
  useEffect(() => {
    if (isSuccess && data) {
      const myData = data.data.data;
      setSecret(myData.secret);
      setPhone(phoneNumber);

      if (myData.has_password) {
        router.push("/password");
      } else {
        router.push("/otp");
      }
    }
  }, [isSuccess]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const cleanedPhoneNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(cleanedPhoneNumber);
  }
  return (
    <div className="relative">
      <Nav />
      <Photo />
      <h1 className="text-center mt-[1.875rem] font-[800]">
        ورود-ثبت&nbsp;نام
      </h1>
      {!hasError && (
        <p className="text-center mt-[1.875rem] font-[400]">
          لطفا شماره تلفن همراه خود را وارد کنید.
        </p>
      )}
      {hasError && (
        <p className="text-center mt-[1.875rem] font-[400] text-[red]">
          ارسال درخواست نا موفق بود لطفا شماره را بررسی کنید
        </p>
      )}
      <form>
        <input
          className="ltr text-left mx-auto block border-b-4 border-blue-400
    outline-transparent mt-[1.875rem] focus-border-b-4 focus-border-blue-700 "
          placeholder="شماره با اعداد لاتین"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={phoneNumber}
          onChange={handleChange}
          name=""
          id=""
          autoFocus={true}
        />
        <Button
          isLoading={isLoading}
          enabled={enabled}
          callback={handleButtonClick}
        />
      </form>
    </div>
  );
}
