import { client } from "../client";

export const getArtistById = async (id: string) => {
  const response = await client["/artists/{id}"].get({
    params: {
      id,
    },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_API_KEY_SPOTIFY}`,
    },
  });
  const artist = await response.json();
  return artist;
};
