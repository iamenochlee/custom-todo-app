import React from "react";

export const useClickOutsideToClose = () => {
  const [open, setOpen] = React.useState(false);

  const ref = React.createRef();

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return { ref, open, setOpen };
};
