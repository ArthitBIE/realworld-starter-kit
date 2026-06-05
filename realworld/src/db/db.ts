// src/db/db.ts
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema";

// Initialize the standard Node.js SQLite driver
const sqlite = new Database("local.db");

// Export the Drizzle client
export const db = drizzle(sqlite, { schema });
