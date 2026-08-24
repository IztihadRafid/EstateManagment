import { Property } from "@/types/property";
import axios from "axios";

export interface GetPropertiesProp {
  search?: string;
  propertyType?: string;
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  address?: string;
}

export const getProperties = async (
  params?: GetPropertiesProp,
): Promise<Property[]> => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`,
      {
        params: {
          search: params?.search,
          propertyType: params?.propertyType,
          location: params?.location,
          minPrice: params?.minPrice,
          maxPrice: params?.maxPrice,
          address: params?.address,
        },
      },
    );
    return data.map((p: Property) => ({
      ...p,
      createdAt: new Date(p.createdAt),
      updateAt: new Date(p.updateAt),
    }));
  } catch (error) {
    console.error("Failed to Fetched Properties", error);
    return [];
  }
};
