import  mongoose from 'mongoose'


const innitializeDatabaseConnection = async function() {

const connectionString =
  "mongodb+srv://okogumelitus:hgwkhgnuflVBFgOS@achoscluster.vcolkdq.mongodb.net/melis"

try {
    const connection = mongoose.createConnection (connectionString);
    connection.on('conected', () => console.info( 'Database connection established '));
    connection.on('error', (error) =>
    {
        throw new Error(error,message)
    })
} catch (error) {
    console.error ( 'Database connection couldnot be established', error);

}
}

export default innitializeDatabaseConnection;