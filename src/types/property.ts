// interface Property {
//   id: string;
//   title: string;
//   location: string;
//   price: number;
//   type: string;
//   status: string;
//   bedrooms: number;
//   bathrooms: number;
//   area: number;
//   featured: boolean;
//   description: string;

//   image: string;
// }
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
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  image: string;
};
