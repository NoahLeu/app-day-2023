-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "emailVerified" DATETIME,
    "password" TEXT,
    "image" TEXT,
    "riskLevel" INTEGER NOT NULL DEFAULT 4,
    "challenge_score" INTEGER NOT NULL DEFAULT 0,
    "activeChallengeId" TEXT,
    "activeChallengeScore" INTEGER DEFAULT 0,
    "userLocationId" TEXT NOT NULL,
    CONSTRAINT "User_activeChallengeId_fkey" FOREIGN KEY ("activeChallengeId") REFERENCES "Challenge" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_userLocationId_fkey" FOREIGN KEY ("userLocationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_User" ("activeChallengeId", "activeChallengeScore", "challenge_score", "email", "emailVerified", "id", "image", "password", "userLocationId", "username") SELECT "activeChallengeId", "activeChallengeScore", "challenge_score", "email", "emailVerified", "id", "image", "password", "userLocationId", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
