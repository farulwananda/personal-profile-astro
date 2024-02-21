// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Farul Wananda";
export const SITE_DESCRIPTION =
  "Life, Code, Memo";
export const TWITTER_HANDLE = "@farulwananda";
export const MY_NAME = "Farul Wananda";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
