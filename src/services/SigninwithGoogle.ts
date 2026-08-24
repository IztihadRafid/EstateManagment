import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export const signWithGoogle = async () => {
  try {
    await authClient.signIn.social({ provider: "google" });
  } catch (error) {
    toast.error("Something went wrong. Please try again.");
    console.error(error);
  }
};
