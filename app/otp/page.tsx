"use client";
import { QueryClientProvider, QueryClient } from "react-query";
import Otp from "./ui/Otp";
const queryclient = new QueryClient();
export default function Login() {
  return (
    <QueryClientProvider client={queryclient}>
      <Otp />
    </QueryClientProvider>
  );
}
