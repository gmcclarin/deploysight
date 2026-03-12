import type { NormalizedDeployment } from "../../../../../client/src/types/deployment";
import { type WebhookParser } from "../ports/webhookParser";

export class NetlifyParser implements WebhookParser {
  source = "netlify";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parse(payload: any):NormalizedDeployment {
    return {
      providerDeployId: payload.id,
      repo: payload.name || "unknown",
      branch: payload.branch || "unknown",
      commitSha: payload.commit_ref || "unknown",
      environment: "production",
      status: payload.state === "ready" ? "success" : "failed",
      source: this.source,
      deployedAt: new Date(payload.created_at ?? Date.now()),
    };
  }
}
