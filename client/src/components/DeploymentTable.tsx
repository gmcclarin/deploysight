import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Chip, Box } from "@mui/material";
import { getDeployments, type Deployment } from "../api/deployments.api";

export default function DeploymentTable() {
  const [rows, setRows] = useState<Deployment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeployments = async () => {
      try {
        const data = await getDeployments();
        setRows(data);
      } finally {
        setLoading(false);
      }
    };

    fetchDeployments();
  }, []);

  const columns: GridColDef[] = [
    { field: "service_name", headerName: "Service", flex: 1 },
    { field: "environment", headerName: "Environment", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => {
        const color =
          params.value === "success"
            ? "success"
            : params.value === "failed"
            ? "error"
            : "warning";

        return <Chip label={params.value} color={color} size="small" />;
      },
    },
    {
      field: "commit_sha",
      headerName: "Commit",
      flex: 1,
    },
    {
      field: "deployed_at",
      headerName: "Deployed At",
      flex: 1,
      valueFormatter: (params: any) =>
        new Date(params.value as string).toLocaleString(),
    },
  ];

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
}