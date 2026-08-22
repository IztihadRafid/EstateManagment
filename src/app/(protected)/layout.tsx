import { getCurrentUser } from "@/server-actions/getCurrentUser";
import { redirect } from "next/navigation";

const ProtectedLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/");
  }
  return <div>{children}</div>;
};

export default ProtectedLayout;
