import { getDatabase } from "./database.js";

export const moodsOutput = () => {
  const moods = getDatabase();

  let HTMLstring = `<article class="moodsList">`;

  for (const mood of moods) {
    HTMLstring += `<div>${mood.name}</div>`;
  }

  HTMLstring += `</article>`;

  return HTMLstring;
};
