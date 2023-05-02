import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import QuestionData from "./Assets/question.json";
export default function Question() {
  // eslint-disable-next-line
  const [Questions, setQuestions] = useState(QuestionData);
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
      {Questions.map((data, i) => {
        return (
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
                lineHeight: "14px",
                color: "#171717",
              }}
            >
              {data.question}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
