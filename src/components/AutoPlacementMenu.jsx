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
import React from "react";
import ReactFocusLock from "react-focus-lock";

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

const AutoPlacementMenu = () => {
  const [colorMode] = useColorMode();
  const [colorStyle] = useColorStyle({ colorMode });
  const [menuState, setMenuState] = React.useState("main");

  return (
    <Menu
      onOpen={() => {
        setMenuState("main");
      }}
    >
      <MenuToggle>
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
            <MenuItem>
              <Flex flex="none" mr="3x">
                <Icon icon="settings" />
              </Flex>
              <Flex flex="auto">
                <Text>Settings</Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex flex="none" mr="3x">
                <Icon icon="user-team" />
              </Flex>
              <Flex flex="auto">
                <Text>Accounts</Text>
              </Flex>
            </MenuItem>
            <MenuItem>
              <Flex flex="none" mr="3x">
                <Icon icon="lock" />
              </Flex>
              <Flex flex="auto">
                <Text>Privacy control</Text>
              </Flex>
            </MenuItem>
          </Box>
        </MenuList>
      </ReactFocusLock>
    </Menu>
  );
};

export default AutoPlacementMenu;
