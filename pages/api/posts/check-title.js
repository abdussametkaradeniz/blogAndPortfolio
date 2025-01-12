import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { title, categoryId } = req.query;
    try {
      const post = await prisma.post.findFirst({
        where: {
          AND: [{ title: title }, { categoryId: parseInt(categoryId) }],
        },
      });
      console.log(post);
      if (post) {
        res.status(200).json({ isUnique: false });
      } else {
        res.status(200).json({ isUnique: true });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
