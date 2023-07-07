import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input!" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://slavendownload:hc3nCEwUiGiMHLL6@cluster0.setquzi.mongodb.net/my-site?retryWrites=true&w=majority"
      );
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const db = client.db()
    try{
        const result = await db.collection('messages').insertOne(newMessage)
        newMessage.id = result.insertedId
    }catch(err){
        client.close()
        res.status(500).json({message: 'Storing data failed'})
        return
    }

    client.close()
    console.log(newMessage);
    res
      .status(201)
      .json({ message: "Successfully stored message", data: newMessage });
  }
}