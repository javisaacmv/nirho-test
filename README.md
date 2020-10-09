# nirho-test


# Variables de entorno

server: 

    DB_CONECTION = Conection string de la base de datos mongoDB
    
# Rutas

# server:

  Direccion: http://localhost:3001
  
  comandos:
			
			"scripts": {
			
				"npm prebuild": "rimraf dist",
				
				"npm build": "nest build",
				
				"npm format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
				
				"npm start": "nest start",
				
				"npm start:dev": "nest start --watch",
				
				"npm start:debug": "nest start --debug --watch",
				
				"npm start:prod": "node dist/main",
				
				"npm lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
				
				"npm test": "jest",
				
				"npm test:watch": "jest --watch",
				
				"npm test:cov": "jest --coverage",
				
				"npm test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
				
				"npm test:e2e": "jest --config ./test/jest-e2e.json"
			  },
  
  endpoints:
  
		Crear Producto:
				ruta: /product/create
				method: post
				recibe: 
					"NameProduct":"Producto3",
					"Category":"Limpieza",
					"Description": "descripcion",
					"ProductQuantity": "80",
					"Status":"true"
					
		Obtener Productos:
            	ruta: /product/
				method: post
				recibe: 
					"page":"1",
  					 "limit":"10"
		
		Obtener Producto por id:
				method: get
            	ruta: /product/:id
				
		Borrar producto:
				method: delete
            	ruta: /product/:id 
				
		Actualizar Producto:
				ruta: /product/:id
				method: put
				recibe: 
					"NameProduct":"Producto3",
					"Category":"Limpieza",
					"Description": "descripcion",
					"ProductQuantity": "80",
					"Status":"true"
				
				
# Client
	
		Direccion: http://localhost:3000
		
		comandos: 
				"scripts": {
					"npm dev": "next dev",
					"npm build": "next build",
					"npm start": "next start"
				  },
    	
