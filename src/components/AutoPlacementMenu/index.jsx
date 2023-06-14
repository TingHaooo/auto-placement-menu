import React from "react";
import { useState } from "react";
import { Box, MenuList, Text } from "@tonic-ui/react";
import {
  Flex,
  Icon,
  Menu,
  MenuItem,
  MenuToggle,
  useColorMode,
  useColorStyle,
} from "@tonic-ui/react";
import ReactFocusLock from "react-focus-lock";
import useCalcMenuPlacement from "./useCalcMenuPlacement";
import useCalcMenuMaxHeight from "./useCalcMenuMaxHeight";

const Avatar = (props) => (
  <Flex
    p="1x"
    borderRadius="50%"
    alignItems="center"
    justifyContent="center"
    fontSize="xs"
    lineHeight="1"
    {...props}
  />
);

let shouldPreventDefaultOnNextBlur = false;

const AutoPlacementMenu = (props) => {
  const { items } = props;

  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  const [menuState, setMenuState] = useState("main");

  const { placement, calcMenuPlacementRefCallback } = useCalcMenuPlacement();
  const { maxHeight, calcMenuMaxHeightRefCallback } = useCalcMenuMaxHeight();

  return (
    <Menu
      onOpen={() => {
        setMenuState("main");
      }}
      placement={placement}
    >
      <MenuToggle ref={calcMenuPlacementRefCallback}>
        <Avatar
          backgroundColor={colorStyle.background.secondary}
          color={colorStyle.color.secondary}
          _hover={{
            color: colorStyle.color.primary,
          }}
        >
          <Icon icon="user-team" size="5x" />
        </Avatar>
      </MenuToggle>
      <ReactFocusLock persistentFocus={true}>
        <MenuList
          ref={calcMenuMaxHeightRefCallback}
          style={{ maxHeight: `${maxHeight}px`, overflow: "scroll" }}
          width="max-content"
          onBlur={(event) => {
            if (shouldPreventDefaultOnNextBlur) {
              event.preventDefault();

              // Restore the flag to its initial state
              shouldPreventDefaultOnNextBlur = false;
            }
          }}
        >
          <Box display={menuState === "main" ? "block" : "none"}>
            {items.map((item) => {
              const { name } = item;
              return (
                <MenuItem key={name}>
                  <Text>{name}</Text>
                </MenuItem>
              );
            })}
          </Box>
        </MenuList>
      </ReactFocusLock>
    </Menu>
  );
};

export default AutoPlacementMenu;
