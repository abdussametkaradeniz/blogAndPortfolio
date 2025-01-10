import prisma from "prisma/client";
export default async function handler(req, res) {
  if (req.method === "GET") {
    const categories = await prisma.category.findMany();
    res
      .status(200)
      .json({ message: "Kategoriler alındı", content: categories });
  } else {
    res.status(404).json({ message: `Method ${req.method} not found` });
  }
}
