export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

export type CartItem = {
  title: string;
  id: number;
  qty: number;
  price: number;
  img: string;
  stock: number;
  brand: string;
};

export type Favourite = {
  title: string;
  id: number;
  price: number;
  img: string;
  stock: number;
  brand: string;
}

export type Dimensions = {
  width: number;
  height: number;
  depth: number;
};

export type ProductResponse = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
};

export type ProductType = {
  products: ProductResponse[];
  total: number;
  skip: number;
  limit: number;
};
