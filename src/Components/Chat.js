import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { CloseSVG, Message } from "./Icons";
import Question from "./Question";

export default function Chat() {
  const [chatBody, setChatBody] = useState(false);
  const handleChatBody = () => {
    setChatBody(!chatBody);
  };
  const handleChatIcon = () => {
    setChatBody(!chatBody);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "4rem",
        right: "4rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      {!chatBody && (
        <Box
          className="button"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            width: "32px",
            height: "32px",
            background:
              "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
            borderRadius: "100px",
            cursor: "pointer",
          }}
          onClick={handleChatBody}
        >
          <Message />
        </Box>
      )}
      {chatBody && (
        <Box
          sx={{
            width: "375px",
            boxShadow: "0 3px 10px 0 rgb(0 0 0 / 20%)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
          className={`${chatBody && `open`} ${!chatBody && `close`}`}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              alignItems: "center",
              pl: 2,
              pr: 2,
              pt: 1,
              pb: 1,
              background:
                "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.08)",
            }}
          >
            <Box>
              <img
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                width="64px"
                height="64px"
                style={{ objectFit: "cover", borderRadius: "100%" }}
                alt="avatar"
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{ fontWeight: 700, fontSize: "16px", color: "white" }}
              >
                ssj_bot
              </Typography>
              <Typography sx={{ fontSize: "14px", color: "white" }}>
                Personal Robot of author
              </Typography>
            </Box>
            <Box onClick={handleChatIcon} sx={{ cursor: "pointer" }}>
              <CloseSVG />
            </Box>
          </Box>
          <Box
            sx={{
              height: "360px",
              p: 2,
              overflowY: "scroll",
              background: "#F9F9F9",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "center",
                color: "#929090",
              }}
            >
              January 24 2023, 7:48 PM
            </Typography>
            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <img src="Logo.png" alt="bot" height="32px" />
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    padding: "8px",
                    background:
                      "linear-gradient(180deg, rgba(20, 20, 20, 0.04) 0%, rgba(20, 20, 20, 0.032) 100%)",
                    border: "1px solid #F4F6F8",
                    borderRadius: "0px 8px 8px 8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#141414",
                    }}
                  >
                    Hi, I'm ssj_bot. I am a personal assistant of Sadman Sakib
                    Jisan. How may i help you?
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "160%",
                    color: "#929090",
                  }}
                >
                  5 minutes ago
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4, display: "flex", gap: 2, width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    padding: "8px",
                    background:
                      "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0.8) 100%)",
                    border: "1px solid #141414",
                    borderRadius: "8px 0px 8px 8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#FFF",
                    }}
                  >
                    Phone number
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "160%",
                    color: "#929090",
                  }}
                >
                  5 minutes ago
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <img src="Logo.png" alt="bot" height="32px" />
              <Box
                sx={{
                  display: "flex",
                  gap: "8px",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    padding: "8px",
                    background:
                      "linear-gradient(180deg, rgba(20, 20, 20, 0.04) 0%, rgba(20, 20, 20, 0.032) 100%)",
                    border: "1px solid #F4F6F8",
                    borderRadius: "0px 8px 8px 8px",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      color: "#141414",
                    }}
                  >
                    +8801675893967
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "160%",
                    color: "#929090",
                  }}
                >
                  5 minutes ago
                </Typography>
              </Box>
            </Box>
            <Question />
          </Box>
          <Box sx={{ p: 1 }}>
            <Typography
              sx={{ textAlign: "center", fontSize: "12px", color: "#CECECE" }}
            >
              This is a widget with predefined data and not a real-time
              communication bot.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
}
