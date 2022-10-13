import React from "react";
import { useClickOutsideToClose } from "./Hooks/useClickOutsideToClose";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import styles from "./EditName.module.css";

const EditName = React.forwardRef((props, ref) => {
  const { setUserName } = props;

  const {
    open: toEdit,
    setOpen: setToEdit,
    ref: formRef,
  } = useClickOutsideToClose();

  function handleSubmit(e) {
    e.preventDefault();

    if (ref.current.value === "") {
      setUserName("My");
    } else {
      setUserName(ref.current.value);
    }
    ref.current.value = "";
  }

  return (
    <div ref={formRef} className={styles.formcontainer}>
      {toEdit ? (
        <form className={styles.userDetails} onSubmit={handleSubmit}>
          <div className="wrapper">
            <input className="input" id="name" type="text" ref={ref} />
            <label htmlFor="name" className="label">
              @username
            </label>
          </div>
          <button className="btn">Save</button>
        </form>
      ) : (
        <button
          className={`btn ${styles.btnUser}`}
          aria-label="click to change name"
          onClick={() => setToEdit(true)}>
          <UserCircleIcon width={40} height={40} />
        </button>
      )}
    </div>
  );
});

export default EditName;
