export const arrowButtonStyles = {
  wrapper: [
    "relative",
    "overflow-hidden",
    "hover:rounded-none",
    "transition-[border-radius]",
    "duration-300"
  ].join(" "),

  label: [
    "relative",
    "transition-transform duration-300",
    "group-hover:translate-x-2",
    "flex items-center"
  ].join(" "),

  icon: [
    "absolute",
    "left-[-28px]",
    "opacity-0",
    "transition-all duration-300",
    "group-hover:opacity-100",
    "group-hover:translate-x-2",
    "flex items-center"
  ].join(" ")
} as const;
