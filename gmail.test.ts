import { corsair } from "./src/server/corsair";

const emails = await corsair.gmail.api.messages.list({})
console.log(emails)