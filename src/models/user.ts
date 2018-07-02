import { model, property, Entity } from "@loopback/repository";
export class User extends Entity {
  @property({
    type: "number",
    id: true
  })
  id: number;

  @property({
    type: "string"
  })
  name: string;

  @property({
    type: "string"
  })
  surname: string;

  @property({
    type: "string"
  })
  email: string;

  @property({
    type: "string"
  })
  password: string;
}
