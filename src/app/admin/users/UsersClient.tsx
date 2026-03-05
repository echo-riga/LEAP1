"use client";

import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Chip,
} from "@mui/material";
import { PersonAddOutlined } from "@mui/icons-material";

export function AdminUsersClient() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight={700} color="#1b5e20">
            Users
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            Manage all registered users
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<PersonAddOutlined />}
          sx={{ borderRadius: 2, textTransform: "none", bgcolor: "#2e7d32" }}
        >
          Add User
        </Button>
      </Box>

      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          border: "1px solid #e8f5e9",
          overflow: "hidden",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead sx={{ bgcolor: "#f1f8e9" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* placeholder — replace with real data later */}
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@leaf.com</TableCell>
                <TableCell>
                  <Chip
                    label="user"
                    size="small"
                    color="success"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>Mar 5, 2026</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Admin User</TableCell>
                <TableCell>admin@leaf.com</TableCell>
                <TableCell>
                  <Chip
                    label="admin"
                    size="small"
                    color="warning"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>Mar 5, 2026</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
