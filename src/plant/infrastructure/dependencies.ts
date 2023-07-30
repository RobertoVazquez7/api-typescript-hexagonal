import PlantCrud from "../aplication/plant-crud";
//import PlantRepository from "../domain/plant-repository";
//import DatabasePlant from "./database-plant-repository";
//import { Database } from "./db-config";
import PlantController from "./controllers/plant-controller";
import DatabasePlant from "./database-plant-repository";

//const database = new Database();
//const pool = database.getPool();

const databasePlant = new DatabasePlant();
export const plantCrud = new PlantCrud(databasePlant);
export const plantController = new PlantController(plantCrud);
