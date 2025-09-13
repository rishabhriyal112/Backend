const db = require('./utils/databseUtil');

async function setupDatabase() {
    try {
        // Drop existing table if it exists
        await db.execute('DROP TABLE IF EXISTS homes');
        
        // Create table with AUTO_INCREMENT id
        await db.execute(`
            CREATE TABLE homes (
                id INT AUTO_INCREMENT PRIMARY KEY,
                houseName VARCHAR(255) NOT NULL,
                price INT NOT NULL,
                location VARCHAR(255) NOT NULL,
                rating INT NOT NULL,
                image TEXT,
                description TEXT
            )
        `);
        
        console.log('Database table created successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error setting up database:', error);
        process.exit(1);
    }
}

setupDatabase();