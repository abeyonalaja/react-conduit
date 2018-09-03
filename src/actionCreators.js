import { UPDATE_FIELD_AUTH, LOGIN } from "./actions";
import agent from "./agent";

export function onChangeEmail(value) {
  return { type: UPDATE_FIELD_AUTH, key: "email", value };
}

export function onChangePassword(value) {
  return { type: UPDATE_FIELD_AUTH, key: "password", value };
}

export function login(email, password) {
  return { type: LOGIN, payload: agent.Auth.login(email, password) };
}
