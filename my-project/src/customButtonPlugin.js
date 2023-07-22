const plugin = require("tailwindcss/plugin");

module.exports = plugin(function ({ addComponents, addUtilities }) {
  const components = {
    ".animated-chevron": {
      "@apply relative": {},
      "&:before": {
        "@apply content-[''] absolute w-0 h-[0.18rem] top-[41%] right-[-0.05rem] mr-[0.5rem] bg-current rounded group-hover:w-[0.55rem] group-hover:md:w-[0.7rem] transition-all duration-medium": {},
      },
    },
  };

  const utilities = {
    ".splash": {
      "@apply relative overflow-hidden": {},
      "&:after": {
        "@apply content-[''] absolute block bg-white w-0 h-0 hover:w-[100%] hover:h-[100%] top-1/2 left-1/2 opacity-[0.15] rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-long": {},
      },
    },
    ".animated-border": {
      "@apply relative": {},
      "&:before, &:after": {
        "-webkit-mask": "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        "-webkit-mask-composite": "xor",
        "mask-composite": "exclude",
        "@apply content-[''] absolute inset-0 rounded-primary border-[1.5px] border-transparent filter contrast-[6] bg-current pointer-events-none transition-all duration-1000": {},
      },
      "&:after": {
        "background": "linear-gradient(var(--angle, 225deg), var(--tw-gradient-stops)) border-box",
        "animation": "rotate 4s linear infinite",
        "opacity": "0",
      },
    },
    ".animated-border-static": {
      "@apply animated-border from-primary-light via-black via-[70%] to-gray-light after:opacity-100": {},
      "&:before": {
        "all": "unset",
      },
    },
  };

  addComponents(components);
  addUtilities(utilities);
});
