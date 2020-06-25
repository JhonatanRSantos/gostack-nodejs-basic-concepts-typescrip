<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />

<h3 align="center">
  Challenge 5: NodeJS with TypeScript basic concepts
</h3>

<blockquote align="center">
“This repository was made to solve the fifth challenge of the <a href="https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-fundamentos-nodejs/READMEmd">Rockeatseat GoStack Bootcamp 12</a>”!
</blockquote>

<p align="center">

  <a href="https://www.linkedin.com/in/jhonatanrsantos/">
    <img alt="Made by Jhonatan" src="https://img.shields.io/badge/made%20by-JhonatanRSantos-%2304D361">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

## Running the project
1 - Clone or download the <a href="https://github.com/JhonatanRSantos/gostack-nodejs-basic-concepts-typescrip.git">repository</a>.

2 - Install all dependencies.

3 - Run:

```bash
yarn dev:server
```

## Application routes
- **`POST /transactions`**: This route receives a `title`, `value` and `type` on the request body. The `type` is the "transaction type" and it should be `income` or `outcome`.
Response sample:
```json
{
    "id": "06299a12-1cb5-47dd-9877-0ad36d24c61f",
    "title": "Salary",
    "value": 5025.7,
    "type": "income"
}
```

- **`GET /transactions`**: This route returns all transactions and a balance with the total `income`, `outcome` and the available `amount`. Response sample:

```json
{
  "transactions": [
    {
      "id": "06299a12-1cb5-47dd-9877-0ad36d24c61f",
      "title": "Salary",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "06299a12-1cb5-47dd-9877-0ad36d24c61f",
      "title": "Freelance",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "06299a12-1cb5-47dd-9877-0ad36d24c61f",
      "title": "invoce",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "06299a12-1cb5-47dd-9877-0ad36d24c61f",
      "title":  "Gaming chair",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```
