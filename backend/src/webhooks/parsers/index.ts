import { ParserRegistry } from "./registry/parserRegistry"
import { NetlifyParser } from "./adapters/netlifyWebhookParser";

const parserRegistry = new ParserRegistry();

parserRegistry.register(new NetlifyParser());

export default parserRegistry;