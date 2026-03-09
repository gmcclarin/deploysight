import { Card, CardContent, Typography, Grid } from "@mui/material";
import { useGetDeploymentStats } from "../api/deployments.api";

export default function DeploymentStats() {
  const { data: stats } = useGetDeploymentStats();

  const statsList = [
    { label: "Total Deployments", value: stats?.total },
    { label: "Successful", value: stats?.success },
    { label: "Failed", value: stats?.failed },
    { label: "Deploying", value: stats?.deploying },
  ];

  return (
    <Grid container spacing={2} sx={{ mb: 3 }}>
      {statsList.map((stat) => (
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