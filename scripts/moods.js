import { getDatabase } from "./database.js";

export const moodsOutput = () => {
  const moods = getDatabase();

  let HTMLstring = `<article class="moodsList">`;

  for (const mood of moods) {
    HTMLstring += `<section class="mood_card">
      <div class="mood_name">${mood.name}</div>  
      <div><img class="mood_img" src="${mood.imageUrl}"/></div>
      <section class="textBox">
        <div class="mood_text">${mood.text}</div>
        <section class="quotes">
          <div class="mood_quote1">${mood.quotes[0]}</div>
          <div class="mood_quote2">${mood.quotes[1]}</div></section>
      </section>
     </section>`;
  }

  HTMLstring += `</article>`;
  return HTMLstring;
};
