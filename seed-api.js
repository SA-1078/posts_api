const axios = require('axios');

const API_URL = 'http://localhost:3000';

async function seedData() {
    try {
        console.log('🚀 Poblando la base de datos con datos de prueba...\n');

        // 1. Crear categorías primero
        console.log('📁 Creando categorías...');
        const categories = ['Tecnología', 'Programación', 'Desarrollo Web'];
        const createdCategories = [];

        for (const catName of categories) {
            try {
                const response = await axios.post(`${API_URL}/categories`, { name: catName });
                createdCategories.push(response.data);
                console.log(`  ✓ ${response.data.name} (ID: ${response.data.id})`);
            } catch (error) {
                console.log(`  ⚠️  Categoría "${catName}" probablemente ya existe`);
            }
        }

        // Si no se crearon categorías, intentar obtener las existentes
        if (createdCategories.length === 0) {
            console.log('\n📋 Obteniendo categorías existentes...');
            try {
                const response = await axios.get(`${API_URL}/categories`);
                createdCategories.push(...response.data);
                console.log(`  ✓ ${createdCategories.length} categorías encontradas`);
            } catch (error) {
                console.error('  ✗ Error obteniendo categorías');
            }
        }

        const categoryId = createdCategories.length > 0 ? createdCategories[0].id : null;

        if (!categoryId) {
            console.error('\n❌ No se pudo obtener una categoría válida. Abortando...');
            return;
        }

        console.log(`\n✓ Usando categoría: ${createdCategories[0].name}\n`);

        // 2. Crear posts
        console.log('📝 Creando posts...\n');
        const posts = [
            {
                title: 'Bienvenidos a mi Blog',
                content: 'Este es mi primer post en el blog. Aquí compartiré contenido interesante sobre desarrollo web, programación y tecnología. ¡Espero que disfrutes el contenido!',
                categoryId: categoryId
            },
            {
                title: 'Introducción a NestJS',
                content: 'NestJS es un framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables. Utiliza TypeScript por defecto y está fuertemente inspirado en Angular. En este post exploraremos sus características principales como módulos, controladores, servicios y decoradores.',
                categoryId: categoryId
            },
            {
                title: 'TypeScript para principiantes',
                content: 'TypeScript es un superset de JavaScript que añade tipado estático opcional. Te ayuda a detectar errores en tiempo de compilación, mejora el autocompletado en tu IDE y hace que tu código sea más mantenible. Aprende cómo puede mejorar tu flujo de desarrollo.',
                categoryId: categoryId
            },
            {
                title: 'Bases de Datos con PostgreSQL',
                content: 'PostgreSQL es uno de los sistemas de bases de datos relacionales más potentes y populares. Es open source, altamente extensible y soporta tanto datos relacionales como JSON. Ideal para aplicaciones modernas que requieren robustez y escalabilidad.',
                categoryId: categoryId
            }
        ];

        let createdCount = 0;
        for (const post of posts) {
            try {
                const response = await axios.post(`${API_URL}/posts`, post);
                console.log(`  ✓ "${response.data.title}"`);
                createdCount++;
            } catch (error) {
                console.error(`  ✗ Error creando "${post.title}":`,
                    error.response?.data?.message || error.message);
            }
        }

        console.log(`\n✅ ${createdCount}/${posts.length} posts creados exitosamente`);
        console.log('\n🔄 Recarga tu navegador (http://localhost:5173) para ver los cambios\n');

    } catch (error) {
        console.error('\n❌ Error general:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.error('⚠️  Asegúrate de que tu servidor esté corriendo en http://localhost:3000');
            console.error('   Ejecuta: npm run start:dev');
        }
    }
}

console.log('═══════════════════════════════════════════════════');
console.log('       SEED DATABASE - Posts API');
console.log('═══════════════════════════════════════════════════\n');

seedData();
