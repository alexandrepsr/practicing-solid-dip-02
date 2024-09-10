import IDatabaseProduct from "../IDatabaseProduct";

export default class MySQLProduct implements IDatabaseProduct {
  getProductById(productId: number): string {
    return `MySQL: info about product id: ${productId}`;
  }
}
