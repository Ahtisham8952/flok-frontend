import { Box, Image, Img, Input } from "@chakra-ui/react";
import React from "react";

export const Upload = () => {
  return (
    <Box display="flex">
      <label for="file-input">
        <Image src="upload.svg" />
      </label>
      <Input display="none" id="file-input" type="file" />
    </Box>
  );
};
