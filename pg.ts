const { Client } = require('pg'); // Correct import

const cString = "postgresql://postgres:aakash@01234@localhost:5432/postgres"; // Fixed connection string

const client1 = new Client({
    connectionString: cString, // Correct property name
});

async function getClient() {
    try {
        await client1.connect();
        console.log("Connected to PostgreSQL successfully!");
    } catch (error) {
        console.error("Connection error:", error);
    }
}

getClient();

client1.query("SELECT NOW()", (err : any, res : any) => {
    if (err) {
        console.log("Query error:" , err);
    } else {
        console.log("Query result:", res.rows[0]);
    }
    client1.end(); // Close the client connection
});
