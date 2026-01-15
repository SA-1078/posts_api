const { Client } = require('pg');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

async function seedDatabase() {
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

        // Crear categoría
        console.log('📁 Creando categoría...');
        const categoryId = uuidv4();
        await client.query(`
      INSERT INTO categories (id, name)
      VALUES ($1, $2)
      ON CONFLICT DO NOTHING
      RETURNING id
    `, [categoryId, 'Tecnología']);
        console.log(`✓ Categoría "Tecnología" creada (ID: ${categoryId})\n`);

        // Crear posts
        console.log('📝 Creando posts...\n');

        const posts = [
            {
                id: uuidv4(),
                title: 'Bienvenidos a mi Blog',
                content: 'Este es mi primer post en el blog. Aquí compartiré contenido interesante sobre desarrollo web, programación y tecnología. ¡Espero que disfrutes el contenido!',
                categoryId: categoryId
            },
            {
                id: uuidv4(),
                title: 'Introducción a NestJS',
                content: 'NestJS es un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables. Utiliza TypeScript por defecto y está fuertemente inspirado en Angular. En este post exploraremos sus características principales como módulos, controladores, servicios y decoradores.',
                categoryId: categoryId
            },
            {
                id: uuidv4(),
                title: 'TypeScript para principiantes',
                content: 'TypeScript es un superset de JavaScript que añade tipado estático opcional. Te ayuda a detectar errores en tiempo de compilación, mejora el autocompletado en tu IDE y hace que tu código sea más mantenible. Aprende cómo puede mejorar tu flujo de desarrollo.',
                categoryId: categoryId
            },
            {
                id: uuidv4(),
                title: 'Bases de Datos con PostgreSQL',
                content: 'PostgreSQL es uno de los sistemas de bases de datos relacionales más potentes y populares. Es open source, altamente extensible y soporta tanto datos relacionales como JSON. Ideal para aplicaciones modernas que requieren robustez y escalabilidad.',
                categoryId: categoryId
            },
            {
                id: uuidv4(),
                title: 'API REST con NestJS y TypeORM',
                content: 'Aprende a construir una API RESTful completa utilizando NestJS como framework backend y TypeORM como ORM. Veremos cómo estructurar el proyecto, definir entidades, crear controladores y servicios, y realizar operaciones CRUD.',
                categoryId: categoryId
            }
        ];

        for (const post of posts) {
            await client.query(`
        INSERT INTO posts (id, title, content, "categoryId")
        VALUES ($1, $2, $3, $4)
      `, [post.id, post.title, post.content, post.categoryId]);
            console.log(`  ✓ "${post.title}"`);
        }

        console.log(`\n✅ ${posts.length} posts creados exitosamente`);

        // Verificar resultados
        const postsCount = await client.query('SELECT COUNT(*) FROM posts');
        const categoriesCount = await client.query('SELECT COUNT(*) FROM categories');
        console.log(`\n📊 Resumen:`);
        console.log(`  - Total de categorías: ${categoriesCount.rows[0].count}`);
        console.log(`  - Total de posts: ${postsCount.rows[0].count}`);
        console.log('\n🔄 Recarga tu navegador (http://localhost:5173) para ver los cambios\n');

    } catch (error) {
        console.error('❌ Error:', error.message);
        console.error(error);
    } finally {
        await client.end();
    }
}

console.log('══════════════════════════════════════════');
console.log('       SEED DATABASE - Posts API');
console.log('══════════════════════════════════════════\n');

seedDatabase();
