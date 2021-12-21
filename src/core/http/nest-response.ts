export class NestResponse {
  status: number;
  headers: Object;
  body: Object;

  constructor(response: NestResponse) {
    // Desta forma ele pega o Object NestResponse e taca tudo nele da response
    Object.assign(this, response);

    // Caso tenha poucos atributos
    // this.status = response.status;
    // this.headers = response.headers;
    // this.body = response.body;
  }
}