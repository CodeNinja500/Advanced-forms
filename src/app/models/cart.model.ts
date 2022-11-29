export interface CartModel {
  readonly id: string;
  readonly userId: string;
  readonly date: string;
  readonly products: {
    productId: string;
    quantity: string;
  }[];
}
