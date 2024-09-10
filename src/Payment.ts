import ProductFactory from "./ProductFactory";

export default class Payment {
  execute(productId: number): void {
    const dbProduct = ProductFactory.create();
    const product = dbProduct.getProductById(productId);
    console.log(product);
  }
}
