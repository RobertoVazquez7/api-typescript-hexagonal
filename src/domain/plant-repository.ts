import { Plant } from "./plant";

interface PlantRepository {
  //getById(plantId: string): Promise<Plant | null>;
  getAllPlants(): Promise<Plant[]>;
  // getPlantId(id: string): Promise<Plant | null>;
  createPlant(plant: Plant): Promise<Plant>;
  // getPlantById(id: string): Promise<Plant | null>;
  // createPlant(book: Plant): Promise<Plant>;
  // updatePlant(book: Plant): Promise<Plant | null>;
  deletePlant(id: string): Promise<boolean>;
}

export default PlantRepository;
