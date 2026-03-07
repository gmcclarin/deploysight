import { Container, Grid, Typography } from "@mui/material";
import SystemStatusCard from "../components/StatusCard";
import { useGetDeployments } from "../api/deployments.api";
import { GridSkeletonLoadingOverlayInner } from "@mui/x-data-grid/internals";

export default function Dashboard() {
  const  { data: deployments, isLoading } = useGetDeployments();

  if (isLoading) {
    return <GridSkeletonLoadingOverlayInner skeletonRowsCount={5} />;
  }
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        DeploySight Dashboard
      </Typography>

      <Grid container spacing={3}>
        
        <Grid>
          <SystemStatusCard />
        </Grid>
      </Grid>
    </Container>
  );
}