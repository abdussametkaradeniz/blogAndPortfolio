import prisma from "prisma/client";

export default async function handler(req, res) {
  const { id } = req.query;

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      category: true,
      images: true,
    },
  });

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}
