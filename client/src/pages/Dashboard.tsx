import { Chip, Container, Typography } from "@mui/material";
import { useGetDeployments } from "../api/deployments.api";
import { DataGrid } from "@mui/x-data-grid";
import type { GridColDef, GridRowParams } from "@mui/x-data-grid";
import type { Deployment } from "../types/deployment";

export default function Dashboard() {
  const  { data: deployments, isLoading } = useGetDeployments();

  const columns: GridColDef<Deployment>[] = [
    { field: "repo", headerName: "Repo", flex: 1 },

    { field: "branch", headerName: "Branch", flex: 1 },

    { field: "environment", headerName: "Environment", flex: 1 },

    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const status = params.value;

        const color =
          status === "success"
            ? "success"
            : status === "failed"
            ? "error"
            : "warning";

        return <Chip label={status} color={color} size="small" />;
      },
    },

    {
      field: "commitSha",
      headerName: "Commit",
      flex: 1,
      valueGetter: (params: GridRowParams<Deployment>) => params.row.commitSha.slice(0, 7),
    },

    {
      field: "deployedAt",
      headerName: "Deployed",
      flex: 1,
      valueGetter: (params:GridRowParams<Deployment>) =>
        new Date(params.row.deployedAt).toLocaleString(),
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        DeploySight Dashboard
      </Typography>

      <DataGrid
        rows={deployments ?? []}
        columns={columns}
        loading={isLoading}
        autoHeight
        pageSizeOptions={[10, 25, 50]}
      />
    </Container>
  );
}