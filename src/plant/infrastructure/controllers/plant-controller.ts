import { Request, Response } from "express";

import PlantCrud from "../../aplication/plant-crud";
import { Plant } from "../../domain/plant";

// aqui se mandan a llamar las funciones CRUD
class PlantController {
  private plantCrud: PlantCrud;

  constructor(plantCrud: PlantCrud) {
    this.plantCrud = plantCrud;
  }
  //constructor(private readonly plantCrud: PlantCrud){}
  async run(req: Request, res: Response) {
    const plantId = req.params.id;
    await this.plantCrud.run(plantId);
    res.status(200).send();
  }
  public getAllPlants = async (req: Request, res: Response): Promise<void> => {
    try {
      const plants: Plant[] = await this.plantCrud.getAllPlants();
      res.status(200).json(plants);
    } catch (error) {
      res.status(500).json({ error: "Error server" });
    }
  };
  public createPlant = async (req: Request, res: Response): Promise<void> => {
    const plant: Plant = req.body;
    try {
      const createPlant = await this.plantCrud.createPlant(plant);
      res.json({ id: createPlant });
    } catch (error) {
      res.status(500).json({ error: "Error al crear el libro" });
    }
  };
  public deletePlant = async (req: Request, res: Response): Promise<void> => {
    const id = req.params.id;
    try {
      const result = await this.plantCrud.deletePlant(id);
      if (result) {
        res.json({ message: "Planta eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "Planta no encontrado" });
      }
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar el planta" });
    }
  };
}

export default PlantController;
