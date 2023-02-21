import { Box, Typography } from "@mui/material";
import React from "react";

export default function Question() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        justifyContent: "flex-end",
        mt: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #171717",
          borderRadius: "3px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "160%",
            color: "#171717",
          }}
        >
          Current Company
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #171717",
          borderRadius: "3px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "160%",
            color: "#171717",
          }}
        >
          Email
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #171717",
          borderRadius: "3px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "160%",
            color: "#171717",
          }}
        >
          Phone
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #171717",
          borderRadius: "3px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "160%",
            color: "#171717",
          }}
        >
          What's App
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "8px",
          border: "1px solid #171717",
          borderRadius: "3px",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "160%",
            color: "#171717",
          }}
        >
          Last Education
        </Typography>
      </Box>
    </Box>
  );
}
