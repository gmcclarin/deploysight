import { type WebhookParser } from "../ports/webhookParser";

export class ParserRegistry {
    private parsers = new Map<string, WebhookParser>;

    register(parser:WebhookParser) {
        this.parsers.set(parser.source, parser);
    }

    getParser(source:string): WebhookParser {
        const parser = this.parsers.get(source);

        if ( !parser ) {
            throw new Error(`Unsupported webhook source: ${source}`);
        }

        return parser;
    }
}
