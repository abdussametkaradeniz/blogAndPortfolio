import prisma from "prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const posts = await prisma.post.findMany({
        select: {
          id: true,
          status: true,
          createdAt: true,
          category: {
            select: {
              name: true,
            },
          },
          title: true,
          content: true,
        },
      });
      res.status(200).json(posts);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Veritabanından postlar alınırken bir hata oluştu." });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
