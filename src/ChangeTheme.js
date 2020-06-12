import React from "react";

export const THEMES = [
  { primaryColor: "deepskyblue", secondaryColor: "coral" },
  { primaryColor: "orchid", secondaryColor: "mediumseagreen" }
];

const ThemItem = ({ theme, active, onClick }) => {
  return (
    <span
      onClick={() => onClick(theme)}
      style={{
        paddingLeft: 8,
        cursor: "pointer",
        fontWeight: active ? "bold" : "normal",
        textTransform: active ? "uppercase" : "capitalize"
      }}
    >
      <span style={{ color: theme.primaryColor }}>Primary</span> /{" "}
      <span style={{ color: theme.secondaryColor }}>Secondary</span>
    </span>
  );
};

const ChangeTheme = ({ setTheme, theme }) => {
  return (
    <div>
      Change the Theme:
      {THEMES.map(t => (
        <ThemItem
          key={t.primaryColor}
          active={
            t.primaryColor === theme.primaryColor &&
            t.secondaryColor === theme.secondaryColor
          }
          onClick={setTheme}
          theme={t}
        />
      ))}
    </div>
  );
};

export default ChangeTheme;
