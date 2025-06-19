import type { FC } from "react";
import {
  Menu,
  MenuSeparator,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import FlagIcon from "./icons/Flag";
import CopyIcon from "./icons/Copy";
import PencilIcon from "./icons/Pencil";
import DuplicateIcon from "./icons/Duplicate";
import TrashIcon from "./icons/Trash";

import "./PageMenu.css";

export const PageMenu: FC<{ children: any }> = ({ children }) => {
  return (
    <Menu>
      <MenuButton>{children}</MenuButton>

      <MenuItems
        anchor="top"
        className="page-menu focus:ring-0 focus-visible:border-0 border-1 border-gray-200 bg-white"
      >
        <h2 className="heading">Settings</h2>
        <MenuItem>
          <a className="item pt-3 data-focus:bg-blue-100">
            <FlagIcon />
            Set as first page
          </a>
        </MenuItem>
        <MenuItem>
          <a className="item data-focus:bg-blue-100">
            <PencilIcon />
            Rename
          </a>
        </MenuItem>
        <MenuItem>
          <a className="item data-focus:bg-blue-100">
            <CopyIcon />
            Copy
          </a>
        </MenuItem>
        <MenuItem>
          <a className="item data-focus:bg-blue-100">
            <DuplicateIcon />
            Duplicate
          </a>
        </MenuItem>

        <MenuSeparator className="mx-3 h-px bg-gray-100" />

        <MenuItem>
          <a className="item text-[#EF494F] py-2  data-focus:bg-blue-100">
            <TrashIcon />
            Delete
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default PageMenu;
