const quotes = 
[
    {
        quote: "두 번씩이나 이 거지같은 섬에 버려지다니",
        author: "황광희",
    },
    {
        quote: "잘 모르고 무식한 사람이 신념을 가지면 무섭습니다",
        author: "이경규",
    },
    {
        quote: "몸이 나쁘면 머리가 고생한다",
        author: "미상",
    },
    {
        quote: "늦었다고 생각할 때가 진짜 너무 늦었다",
        author: "박명수",
    },
    {
        quote: "고통을 수반하지 않는 교훈에는 의의가 없다.",
        author: "에드워드 엘릭",
    },
];

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}-`;