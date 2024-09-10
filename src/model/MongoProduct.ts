import IDatabaseProduct from "../IDatabaseProduct";

export default class MongoProduct implements IDatabaseProduct {
  getProductById(productId: number): string {
    return `MongoDB: info about product id: ${productId}`;
  }
}
