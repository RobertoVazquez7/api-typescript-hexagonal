import { Plant } from "../domain/plant";
import PlantRepository from "../domain/plant-repository";

class PlantCrud {
  // async run(plantId: string){
  //     //console.log("Plant", plantId);
  //     const plant = await this.plantRepository.getById(plantId);
  // }
  private plantRepository: PlantRepository;

  constructor(plantRepository: PlantRepository) {
    this.plantRepository = plantRepository;
  }

  //constructor(private readonly plantRepository: PlantRepository){};

  async run(userId: string) {
    console.log("Plant");
  }

  public async getAllPlants(): Promise<Plant[]> {
    return this.plantRepository.getAllPlants();
  }
  // public async getPlantId(id: string): Promise<Plant | null>{
  //     return this.plantRepository.getPlantId(id);
  // }
  public async createPlant(plant: Plant): Promise<Plant> {
    return this.plantRepository.createPlant(plant);
  }
  // public async getPlantById(id: string): Promise<Plant | null> {
  //     return this.plantRepository.getBookById(id);
  // }

  //   public async createPlant(book: Plant): Promise<Plant> {
  //     return this.plantRepository.createBook(book);
  //   }

  //   public async updatePlant(book: Plant): Promise<Plant | null> {
  //     return this.plantRepository.updateBook(book);
  //   }

  public async deletePlant(id: string): Promise<boolean> {
    return this.plantRepository.deletePlant(id);
  }
}

export default PlantCrud;
