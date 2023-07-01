-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "password" TEXT,
    "image" TEXT,
    "challenge_score" INTEGER NOT NULL DEFAULT 0,
    "activeChallengeId" TEXT,
    "userLocationId" TEXT,
    CONSTRAINT "User_activeChallengeId_fkey" FOREIGN KEY ("activeChallengeId") REFERENCES "Challenge" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_userLocationId_fkey" FOREIGN KEY ("userLocationId") REFERENCES "Location" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("activeChallengeId", "challenge_score", "email", "emailVerified", "id", "image", "password", "username") SELECT "activeChallengeId", "challenge_score", "email", "emailVerified", "id", "image", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
