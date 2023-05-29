import express from "express";

import { plantController } from "./dependencies";

const plantRouter = express.Router();

plantRouter.post("/:id/home", plantController.run.bind(plantController));
plantRouter.get("/alls", plantController.getAllPlants.bind(plantController)); // extraer todas las plantas
//plantRouter.get('/:id', plantController.getPlantId.bind(plantController)); // extraer planta por id
plantRouter.post("/add", plantController.createPlant.bind(plantController));
plantRouter.delete("/:id", plantController.deletePlant.bind(plantController));

export { plantRouter };
