import moongose from "mongoose";
const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log("already conneted");
    return;
  }
  if (moongose.connection.length > 0) {
    connection.isConnected = moongose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await moongose.disconnect();
  }
  const db = await moongose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
}
async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await moongose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
}
function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}
const db = { connect, disconnect, convertDocToObj };
export default db;
