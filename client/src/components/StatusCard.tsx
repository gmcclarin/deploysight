import { Card, CardContent, Typography, CircularProgress, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import { getHealth, type HealthResponse } from "../api/health";

export default function SystemStatusCard() {
  const [data, setData] = useState<HealthResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const result = await getHealth();
        setData(result);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          API Status
        </Typography>

        {loading && <CircularProgress size={24} />}

        {!loading && error && (
          <Chip label="Offline" color="error" />
        )}

        {!loading && data && (
          <>
            <Chip
              label={data.status === "ok" ? "Operational" : "Degraded"}
              color={data.status === "ok" ? "success" : "warning"}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" color="text.secondary">
              Service: {data.service}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Last checked: {new Date(data.timestamp).toLocaleString()}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}