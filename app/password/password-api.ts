"use client";
import { useQuery } from "react-query";
import axios from "axios";

interface Props {
  secret: string;
  password: string;
}

const PasswordApi = ({ secret, password }: Props) => {
  const requestData = {
    secret: secret,
    password: password,
  };

  return axios.post(
    "https://demo1.metanext.biz/api/v1/auth/password",
    requestData
  );
};

export const usePasswordApi = ({ secret, password }: Props) => {
  return useQuery({
    queryKey: ["PasswordApi", secret, password],
    queryFn: () => PasswordApi({ secret, password }),
    retry: 1,
    enabled: false,
  });
};
