import { ParserRegistry } from "./registry/parserRegistry"
import { NetlifyParser } from "./adapters/netlifyWebhookParser";
import { GithubParser } from "./adapters/githubWebhookParser";

const parserRegistry = new ParserRegistry();

parserRegistry.register(new NetlifyParser());
parserRegistry.register(new GithubParser());

export default parserRegistry;