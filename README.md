# Models

Un submódulo para centralizar todos los modelos (TS) y bases de datos (ORM sequalize), 
este se encuentra como libreria de NPM y puede ser utilizado en todas las API a crear.

## Como se usa?

### Instalar dependencias

["Paquete npm"](https://www.npmjs.com/package/models-ts)

use el comando yarn

`yarn add models-ts`

o el comando npm

`npm i models-ts`

# Clean Code
Clean Code va a referirse a la forma en cómo hacemos que el código sea lo más limpio posible, 
para ello hay muchas buenas prácticas que van desde el cómo se nombran las variables, 
la forma en cómo construimos funciones, cómo comentamos el código, la alineación, 
la abstracción de objetos y estructuras, etc. todo esto con el fin de hacer el código 
mucho más entendible en el presente y futuro, testeable y fácil de integrar.
##db
> querys (.sql)  de el modelo de las tablas de la BD,
> NO se utiliza en este proyecto directamente,
> pero mejor tenerla a mano para tene un orden de los datos que tenemos.
##entities 
las entidades estan ordenadas por capetas (👁 cada entidad tiene su propia carpeta)
>index.ts: archivo que expone nuestro modelo de datos, en primer lugar con una validacion (joi), 
> para luego obtener los esquemas de datos correspondientes para la obtencion de datos.

>type.ts: archivo con el modelo de datos de nuestra entidad.

> repositories: archivo "Index.ts" que hace la conexion a la carpeta "PostgrestDB" 
> se encuentran las funciones relacionadas con la entidad, 
> estas fienen un archivo "IRepository.ts" que contiene modelo de datos.

>shemas: la definicion de las estructuras con la cual trabajaremos en el caso de 
["Joi"](https://joi.dev/api/?v=17.5.0) que es nuestro validador de esquemas y 
"sequalizeModel" es nuestro esquema de BD de nuestro ORM 

##orm
Un ORM es un modelo de programación que permite mapear las estructuras de una base
de datos relacional (Mongo, Postgres, MySQL, etc.), en adelante RDBMS 
(Relational Database Management System), sobre una estructura lógica de entidades 
con el objeto de simplificar y acelerar el desarrollo de nuestras aplicaciones.

> index.ts: archivo que expone nuestra instancia a la BD, en este caso postgrest

> config.ts: archivo de configuracion de nuestra BD, 
> (👀 "en este archivo colocamos nuestras credenciales de pruebas)
> esto es por si no sale un connect ECONNREFUSED > base de datos no conectada

> PostgresDB: archivo "Index.ts" configuracion de nuestra BD con Sequelize.

##shared

> interfaces: archivos de modelos de datos globales que utilizamos dentro de nuestro proyecto
> que son fundamentales y que no queremos declarar contantemente en los archivos del proyecto.

