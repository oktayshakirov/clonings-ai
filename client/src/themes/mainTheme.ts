import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import fonts from "./fonts";

const mainTheme = extendTheme({
    initialColorMode: "system",
    useSystemColorMode: true,
    semanticTokens: {
        colors: {
            primary: { default: "white", _dark: "brand.gray.700" },
            primaryText: { default: "brand.gray.700", _dark: "white" },

            secondary: { default: "brand.gray.400", _dark: "brand.gray.400" },
            secondaryText: { default: "white", _dark: "white" },

            highlighted: { default: "brand.blue.500", _dark: "brand.blue.500" },
            highlightedText: { default: "brand.blue.50", _dark: "brand.gray.500" },
            highlightedBadge: { default: "brand.blue.50", _dark: "brand.blue.50" },
            highlightedTextCard: { default: "brand.blue.50", _dark: "brand.blue.100" },

            highlightedTextSecondary: { default: "brand.green.500", _dark: "brand.green.500" },

            navLink: { default: "brand.gray.400", _dark: "brand.gray.50" },
            navLinkSelected: { default: "brand.blue.900", _dark: "brand.blue.900" },
            navLinkHovered: { default: "brand.blue.500", _dark: "brand.blue.500" },

            buttonPrimary: { default: "brand.blue.500", _dark: "brand.blue.500" },
            buttonPrimaryMuted: { default: "brand.blue.100", _dark: "brand.gray.600" },
            buttonPrimaryText: { default: "white", _dark: "white" },

            buttonSecondary: { default: "brand.pink.400", _dark: "brand.pink.400" },
            buttonSecondaryMuted: { default: "brand.pink.100", _dark: "brand.pink.100" },
            buttonSecondaryText: { default: "white", _dark: "white" },

            borderLight: { default: "brand.gray.100", _dark: "brand.gray.600" },
            borderLightMuted: { default: "brand.gray.50", _dark: "brand.gray.600" },

            pillLight: { default: "brand.yellow.500", _dark: "brand.yellow.500" },
            pillLightHover: { default: "brand.yellow.400", _dark: "brand.yellow.400" },

            // TODO: The semantic tokens must represent UI elements no colors
            lightGray: { default: "brand.gray.100", _dark: "white" },
            darkGray: { default: "brand.gray.700", _dark: "brand.gray.700" },
            normalGray: { default: "brand.gray.400", _dark: "brand.gray.400" },

            footer: {
                default:
                    "linear-gradient(180deg, var(--chakra-colors-white) 0%, var(--chakra-colors-brand-blue-100) 100%)",
                _dark: "linear-gradient(180deg, var(--chakra-colors-brand-gray-700) 0%, var(--chakra-colors-brand-blue-600) 100%)",
            },
        },
        sizes: {
            headerHeight: "58px",
            bottomBarHeight: "55px",
            chatStaticComponentsHeight: "180px",
            chatSidebarsWidth: "320px",
        },
    },
    fonts: fonts,
    colors: colors,
    components: {},
    styles: {
        global: {
            body: {
                bg: "primary",
                color: "primaryText",
            },
        },
    },
});

export default mainTheme;
