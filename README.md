[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)](https://www.typescriptlang.org)

# Practice RESTful API

## Installation

1. Download the Repository with:

   - ```
     git clone https://github.com/mcttn22/rest-api.git
     ```
   -  Or by downloading as a ZIP file

2. Enter the project directory with:
   - ```
     cd rest-api
     ```

3. For normal use, install the dependencies with:
   - ```
     npm install
     ```

## Usage

Build javascript files with:
- ```
  npm run build
  ```

Start API with:
- ```
  npm start 
  ```

Interact with API with:
- ```
  curl -X POST http://localhost:3000/api -H "Content-Type: application/json" -d '{"name": "John Doe"}'
  ```

## Development

Run with ts-node-dev with:
- ```
  npm run start:dev
  ```

Run tests with:
- ```
  npm test
  ```

