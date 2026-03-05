"use client";

import { Box, Typography, Paper, Grid } from "@mui/material";
import {
  PeopleOutlined,
  AssessmentOutlined,
  TrendingUpOutlined,
  CheckCircleOutlined,
} from "@mui/icons-material";

const stats = [
  {
    label: "Total Users",
    value: "0",
    icon: <PeopleOutlined />,
    color: "#2e7d32",
  },
  {
    label: "Reports",
    value: "0",
    icon: <AssessmentOutlined />,
    color: "#1565c0",
  },
  {
    label: "Growth",
    value: "0%",
    icon: <TrendingUpOutlined />,
    color: "#e65100",
  },
  {
    label: "Active Sessions",
    value: "0",
    icon: <CheckCircleOutlined />,
    color: "#6a1b9a",
  },
];

export function AdminDashboardClient() {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} color="#1b5e20">
          Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          Welcome back, Admin. Here's what's happening.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                border: "1px solid #e8f5e9",
                bgcolor: "white",
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  bgcolor: `${stat.color}15`,
                  borderRadius: 2,
                  p: 1.5,
                  display: "flex",
                  color: stat.color,
                }}
              >
                {stat.icon}
              </Box>
              <Box>
                <Typography variant="h5" fontWeight={700}>
                  {stat.value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 3,
          border: "1px solid #e8f5e9",
          bgcolor: "white",
        }}
      >
        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
          Recent Activity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No recent activity yet.
        </Typography>
      </Paper>
    </Box>
  );
}
