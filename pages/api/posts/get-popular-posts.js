import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const popularPosts = await prisma.post.findMany({
        take: 10,
        orderBy: {
          views: "desc",
        },
      });
      res.status(200).json(popularPosts);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
