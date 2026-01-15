const { Client } = require('pg');
require('dotenv').config();

async function checkDatabase() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    });

    try {
        await client.connect();
        console.log('✓ Conectado a la base de datos\n');

        // Ver qué tablas existen
        const tables = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);

        console.log('📊 Tablas en la base de datos:');
        tables.rows.forEach(row => console.log(`  - ${row.table_name}`));
        console.log('');

        // Verificar si hay posts
        const checkPosts = await client.query('SELECT COUNT(*) FROM posts');
        console.log(`📝 Total de posts: ${checkPosts.rows[0].count}`);

        // Verificar si hay usuarios
        const checkUsers = await client.query('SELECT COUNT(*) FROM users');
        console.log(`👤 Total de usuarios: ${checkUsers.rows[0].count}`);

    } catch (error) {
        console.error('❌ Error:', error.message);
    } finally {
        await client.end();
    }
}

checkDatabase();
