"use client";
import { QueryClientProvider, QueryClient } from "react-query";
import PasswordInput from "./ui/PasswordInput";
const queryclient = new QueryClient();
export default function Login() {
  return (
    <QueryClientProvider client={queryclient}>
      <PasswordInput />
    </QueryClientProvider>
  );
}
