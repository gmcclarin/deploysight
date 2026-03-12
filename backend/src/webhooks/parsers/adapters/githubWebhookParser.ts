import { NormalizedDeployment } from "../../../types/deployment";
import { WebhookParser } from "../ports/webhookParser";

export class GithubParser implements WebhookParser {
  source = "github";

  parse(payload: any): NormalizedDeployment {
    return {
      providerDeployId: payload.workflow_run.id,
      repo: payload.repository.name,
      branch: payload.workflow_run.head_branch,
      commitSha: payload.workflow_run.head_sha,
      environment: "production",
      status: payload.workflow_run.conclusion,
      source: "github",
      deployedAt: new Date(payload.workflow_run.updated_at)
    };
  }
}