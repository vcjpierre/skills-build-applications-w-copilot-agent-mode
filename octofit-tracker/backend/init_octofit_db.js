// MongoDB initialization script for octofit_db

// Connect to octofit_db
db = db.getSiblingDB('octofit_db');

// Create users collection with unique email index
db.createCollection('users');
db.users.createIndex({ "email": 1 }, { unique: true });

// Create teams collection
db.createCollection('teams');

// Create activity collection
db.createCollection('activity');

// Create leaderboard collection
db.createCollection('leaderboard');

// Create workouts collection
db.createCollection('workouts');

// Print collections to verify
print('Collections in octofit_db:');
printjson(db.getCollectionNames());
