import { Container, Grid, Typography } from "@mui/material";
import SystemStatusCard from "../components/StatusCard";

export default function Dashboard() {
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