export type Property = {
  id: string;
  title: string;
  description: string;
  propertyType: string;
  listingType: string;
  location: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  area: number | null;
  createdAt: Date;
  updateAt: Date;
  ownerId: string;
  image: string;
};
