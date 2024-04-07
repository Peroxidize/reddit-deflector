"use strict";

const currentURL = window.location.href;
const newURL = "https://new.reddit.com";
const regexToMatch = /^https:\/\/(?:www\.)?reddit\.com/;

const conditions = [
    !currentURL.includes("new.reddit.com"),
    !currentURL.includes("reddit.com/gallery"),
    !currentURL.includes("out.reddit.com"),
    !currentURL.includes("old.reddit.com"),
    !currentURL.includes("reddit.com/media"),
    localStorage.length > 2,
    !/^https:\/\/[a-z]{2}\.reddit\.com\//.test(currentURL),
];

const shouldRedirect = conditions.map(condition => condition).every(Boolean);

if (shouldRedirect) {
    const newRedditURL = currentURL.replace(regexToMatch, newURL);
    window.location.replace(newRedditURL);
}
