// import { createPool } from "mysql2/promise";

// export async function connect(){
//     const connection = await createPool({
//         host: 'localhost',
//         user: 'root',
//         password: '191180',
//         database: 'plant',
//     });
//     return connection;
// }
// -------------------------------------------------------------------------------------------------------
// import { Pool, PoolClient } from "pg";
// class Database{
//     private pool: Pool;
//     constructor(){
//         this.pool = new Pool({
//             user: 'postgres',
//             host: 'localhost',
//             password: '191180',
//             database: 'plant',
//             port: 5432,
//         });
//         this.connect();
//     }
//     private connect(): void{
//         this.pool.connect((err: Error, client: PoolClient, done: () => void) => {
//             if(err){
//                 console.error('Error al conectar a la base de datos', err);
//             } else {
//                 console.log('Conexion exitosa!');
//             }
//         })
//     }
//     public getPool(): Pool{
//         return this.pool;
//     }
// }
// export { Database };
// --------------------------------------------------------------
import mysql from "mysql";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "plant",
});
connection.connect((err: any) => {
  if (err) {
    console.error("Error al conectar", err);
    return;
  }
  console.log("Conexión exitosa!");
});
export default connection;
