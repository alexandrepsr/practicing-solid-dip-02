import DATABASE from "./database";
import IDatabaseProduct from "./IDatabaseProduct";
import MongoProduct from "./model/MongoProduct";
import MySQLProduct from "./model/MySQLProduct";

export default class ProductFactory {
  private static type: DATABASE = DATABASE.MONGODB;

  public static create(): IDatabaseProduct {
    if (this.type == DATABASE.MYSQL) {
      return new MySQLProduct();
    } else if (this.type == DATABASE.MONGODB) {
      return new MongoProduct();
    } else {
      throw new Error("Database not found");
    }
  }
}
