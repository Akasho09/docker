"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Client } = require('pg'); // Correct import
const cString = "postgresql://postgres:aakash@01234@localhost:5432/postgres"; // Fixed connection string
const client1 = new Client({
    connectionString: cString, // Correct property name
});
function getClient() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client1.connect();
            console.log("Connected to PostgreSQL successfully!");
        }
        catch (error) {
            console.error("Connection error:", error);
        }
    });
}
getClient();
client1.query("SELECT NOW()", (err, res) => {
    if (err) {
        console.log("Query error:", err);
    }
    else {
        console.log("Query result:", res.rows[0]);
    }
    client1.end(); // Close the client connection
});
