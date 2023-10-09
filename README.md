# Anylist - Usuarios y Enumeraciones - Admin Roles

Se continua con el `Backend` de Items, ahora con la creación de items y vinculación con los usuarios. Los temas que se ven son: 

- Relaciones user-item.
- Validaciones.
- Consultas por usuario.
- Creación de índices.
- Uso de `LazyRelationships`.

### Pasos para iniciar API

1. Clonar repositorio e instalar los paquetes de `Node`:
```
npm install
```
2. Renombrar el archivo `.env.template` por `.env` e inicializar las variables de entorno.
3. Montar el contenedor de `Postgres` de Docker:
```
docker-compose up -d
```
4. Iniciar proyecto con:
```
npm run start:dev
```
5. Comprobar en la `URL`:
```
http://localhost:3000/graphql
```