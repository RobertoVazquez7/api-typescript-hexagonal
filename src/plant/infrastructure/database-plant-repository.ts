//import { json, row } from "body-parser";
//import { Pool } from "pg";
import connection from "../../database/db-config";
import { Plant } from "../domain/plant";
import PlantRepository from "../domain/plant-repository";
//import { connect } from "./db-config";
//import { Request, Response, response } from "express";
//import { connect } from "./db-config";
//import { Connection } from "mysql2";
//import { connect } from "./db-config";
// aqui van todos las funciones de base de datos, extraer, eliminar, agregar, actualizar
class DatabasePlant implements PlantRepository {
  // private pool: Pool;
  // constructor(pool: Pool){
  //     this.pool = pool;
  // }
  // async getById(plantId: string): Promise<Plant | null> {
  //     return null;
  // }
  public async getAllPlants(): Promise<Plant[]> {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM plant", (error: any, results: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(results);
      });
    });
  }
  public async createPlant(plant: Plant): Promise<Plant> {
    return new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO plant SET ?",
        plant,
        (error: any, result: any) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result.insertId);
        }
      );
    });
  }
  public async deletePlant(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      connection.query(
        "DELETE FROM plant WHERE id = ?",
        [id],
        (error: any, result: any) => {
          if (error) {
            reject(error);
            return;
          }
          if (result.affectedRows === 0) {
            resolve(false);
          } else {
            resolve(true);
          }
        }
      );
    });
  }
}

export default DatabasePlant;
