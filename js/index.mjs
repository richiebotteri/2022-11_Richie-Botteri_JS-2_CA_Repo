import * as noroffAPI from "./api/api-environment.mjs";
import { getRegisteredUserFromForm } from "./handlers/register-form-handler.mjs";

getRegisteredUserFromForm();

console.log(noroffAPI.SOCIAL_URL);
