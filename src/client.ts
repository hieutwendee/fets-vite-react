import { createClient, type NormalizeOAS } from "fets";
import { spotify } from "./data/openapi-spec";

export const client = createClient<NormalizeOAS<typeof spotify>>({
  endpoint: "https://api.spotify.com/v1",
});
