import fs from "fs";
import path from "path";

const requestTimes = {};

const deleteOldFile = () => {
  const directoryPath = path.join(process.cwd(), "emails");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Unable to scan directory:", err);
      return;
    }
    if (files.length > 0) {
      const filePath = path.join(directoryPath, files[0]);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          return;
        }
        console.log("File deleted successfully");
      });
    }
  });
};

// Her 20 gün (1728000000 ms) sonra ilk dosyayı sil
setInterval(deleteOldFile, 1728000000);

export default function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, message } = req.body;
    const fileName = `${Date.now()}-email.txt`;
    const content = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`;
    const filePath = path.join(process.cwd(), "emails", fileName);

    const currentTime = Date.now();
    const cooldownPeriod = 300000;

    if (
      requestTimes[email] &&
      currentTime - requestTimes[email] < cooldownPeriod
    ) {
      res
        .status(429)
        .json({ message: "Too many requests. Please wait a while." });
      return;
    }
    requestTimes[email] = currentTime;
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error("Error writing file:", err);
        res.status(500).json({ message: "Error writing file" });
        return;
      }
      res.status(200).json({ message: "File saved successfully" });
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
