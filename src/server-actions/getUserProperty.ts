import { prisma } from "@/database/db";
import { getCurrentUser } from "./getCurrentUser";

export const getUserProperty = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser?.id) return [];
    const properties = await prisma.property.findMany({
      where: {
        ownerId: currentUser.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return properties;
  } catch (error) {
    console.log("Failed to fetc properties", error);
    return [];
  }
};
