import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useSelector, useDispatch } from "react-redux";
import { MoonStarsFill, SunFill } from "react-bootstrap-icons";
import { changeSkin, setSkinModeConfig } from "store/appSlice";
import useLocalStorage from "hooks/useLocalStorage";
import useMounted from "hooks/useMounted";

const DarkLightMode = ({ className }) => {
  const hasMounted = useMounted();
  const isDarkMode =
    hasMounted && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultSkin = useSelector((state) => state.app.skin);
  const dispatch = useDispatch();
  const { storageValue, setStorageValue, getStorageValue } = useLocalStorage(
    "skin",
    defaultSkin
  );

  const [skinMode, setSkinMode] = useState(
    getStorageValue("skinMode", storageValue)
  );
  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute(
        "data-theme",
        getStorageValue(
          "skin",
          skinMode === "auto" ? (isDarkMode ? "dark" : "light") : skinMode
        )
      );
    setStorageValue(
      skinMode === "auto" ? (isDarkMode ? "dark" : "light") : storageValue
    );
    dispatch(
      changeSkin(
        skinMode === "auto" ? (isDarkMode ? "dark" : "light") : skinMode
      )
    );
    dispatch(setSkinModeConfig(skinMode));
    localStorage.setItem("skinMode", skinMode);
  }, [storageValue, skinMode]);

  const toggleSkinMode = () => {
    const newSkinMode = skinMode === "light" ? "dark" : "light";
    setSkinMode(newSkinMode);
    setStorageValue(newSkinMode);
    dispatch(changeSkin(newSkinMode));
    dispatch(setSkinModeConfig(newSkinMode));
  };

  return (
    <Fragment>
      {hasMounted && (
        <button
          className={
            "btn btn-light btn-icon rounded-circle d-flex align-items-center ms-2 " +
            className
          }
          onClick={toggleSkinMode}
          aria-label="Toggle theme"
        >
          {skinMode === "light" ? <MoonStarsFill /> : <SunFill />}
        </button>
      )}
    </Fragment>
  );
};

export default DarkLightMode;
