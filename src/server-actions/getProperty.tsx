import { prisma } from "@/database/db";

export const getProperty = async (propertyId: string) => {
  try {
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
      include: {
        owner: {
          select: {
            name: true,
            id: true,
            email: true,
            image: true,
          },
        },
      },
    });

    return property;
  } catch (error) {
    console.error("failed to fetch property", error);
    return null;
  }
};
