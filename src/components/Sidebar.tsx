import { FC } from "react";
import Drawer from "@mui/material/Drawer";

interface ISidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<ISidebarProps> = ({ isOpen, setIsOpen }: ISidebarProps) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      "Drawer"
    </Drawer>
  );
};

export default Sidebar;
