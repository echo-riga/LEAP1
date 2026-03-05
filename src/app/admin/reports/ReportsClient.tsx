"use client";

import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { AssessmentOutlined, DownloadOutlined } from "@mui/icons-material";

const reports = [
  {
    title: "Monthly Summary",
    description: "Overview of all activity this month",
  },
  {
    title: "User Activity",
    description: "Detailed user login and action logs",
  },
  { title: "System Logs", description: "Server and error logs for the system" },
];

export function AdminReportsClient() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} color="#1b5e20">
          Reports
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          View and export system reports
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {reports.map((report) => (
          <Grid size={{ xs: 12, md: 4 }} key={report.title}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                border: "1px solid #e8f5e9",
                bgcolor: "white",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                "&:hover": { borderColor: "#2e7d32", bgcolor: "#f9fdf9" },
                transition: "all 0.2s",
              }}
            >
              <Box
                sx={{
                  bgcolor: "#e8f5e9",
                  borderRadius: 2,
                  p: 1.5,
                  display: "flex",
                  width: "fit-content",
                  color: "#2e7d32",
                }}
              >
                <AssessmentOutlined />
              </Box>
              <Box>
                <Typography fontWeight={600} sx={{ mb: 0.5 }}>
                  {report.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {report.description}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                size="small"
                startIcon={<DownloadOutlined />}
                sx={{
                  mt: "auto",
                  borderRadius: 2,
                  textTransform: "none",
                  borderColor: "#2e7d32",
                  color: "#2e7d32",
                }}
              >
                Export
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
