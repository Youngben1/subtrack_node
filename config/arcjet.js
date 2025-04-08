import arcjet, { tokenBucket, shield, detectBot } from "@arcjet/node";
import {ARCJET_KEY} from "./env.js";

const aj = arcjet({
    key: ARCJET_KEY,
    characteristics: ['ip.src'],
    rules: [
        shield({mode: 'LIVE'}),
        detectBot({mode: 'LIVE',
        allow: [
            "CATEGORY: SEARCH_ENGINE",
        ]}),
    tokenBucket({
        mode: 'LIVE',
        capacity: 10,
        refillRate: 5,
        interval: 10
    })
    ]
});

export default aj;