const { PrismaClient } = require("@prisma/client");

// Create a singleton PrismaClient with connection pooling
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

// Middleware to ensure connections are properly managed
const managePrismaConnections = async (req, res, next) => {
  try {
    // Add prisma to request object
    req.prisma = prisma;

    // Continue to next middleware/route handler
    next();
  } catch (error) {
    console.error("Prisma middleware error:", error);
    return res.status(500).json({ message: "Database connection error" });
  }
};

// Cleanup function to be used in route handlers
const cleanupPrismaConnection = async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    console.error("Error disconnecting from Prisma:", error);
  }
};

module.exports = {
  prisma,
  managePrismaConnections,
  cleanupPrismaConnection,
};
