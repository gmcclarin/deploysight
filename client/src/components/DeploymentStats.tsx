import { Card, CardContent, Typography, Grid } from "@mui/material";
import { type Deployment } from "../types/deployment";

interface Props {
  deployments: Deployment[];
}

export default function DeploymentStats({ deployments }: Props) {
  const total = deployments.length;

  const success = deployments.filter((d) => d.status === "success").length;
  const failed = deployments.filter((d) => d.status === "failed").length;

  const production = deployments.filter(
    (d) => d.environment === "prod"
  ).length;

  const stats = [
    { label: "Total Deployments", value: total },
    { label: "Successful", value: success },
    { label: "Failed", value: failed },
    { label: "Production", value: production },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {stats.map((stat) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {stat.label}
              </Typography>

              <Typography variant="h4">{stat.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}