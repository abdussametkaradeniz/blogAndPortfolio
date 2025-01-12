import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, content, category, status } = req.body;
    console.log(req.body);
    try {
      // Kategori ID'sini bul
      const cat = await prisma.category.findUnique({
        where: { id: parseInt(category) },
      });
      if (!cat) {
        res.status(404).json({ error: "Category not found" });
        return;
      }

      // Başlığı kontrol et
      const existingPost = await prisma.post.findFirst({
        where: { title },
      });

      if (existingPost) {
        // Post varsa güncelle
        const updatedPost = await prisma.post.update({
          where: { id: existingPost.id },
          data: { content, categoryId: cat.id, status },
        });
        res.status(200).json(updatedPost);
      } else {
        // Yeni post oluştur
        const newPost = await prisma.post.create({
          data: { title, content, categoryId: cat.id, status },
        });
        res.status(201).json(newPost);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
