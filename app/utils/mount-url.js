const QUIZ_API_DOMAIN = 'opentdb.com/';
const IS_SECURE = true;

function secureProtocol(protocol) {
    return IS_SECURE ? `${protocol}s` : protocol;
}

export default function mountURL({ protocol = 'http', host = QUIZ_API_DOMAIN, context = ''}) {
    return `${secureProtocol(protocol)}://${host}${context}`;
}

export function mountURLForContext(context) {
    return mountURL({ context });
}
