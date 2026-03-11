import { type NormalizedDeployment } from "../../types/deployment";

export interface WebhookParser {
  source: string;

  parse(payload: unknown): NormalizedDeployment;
}