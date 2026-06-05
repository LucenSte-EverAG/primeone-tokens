import type { TooltipDesignTokens } from '@primeuix/themes/types/tooltip';

 export default {
    root: {
        gutter: "0.2188rem",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        padding: "{footer.padding}",
        maxWidth: "10.9375rem",
        borderRadius: "{action.border.radius}"
    },
    colorScheme: {
        dark: {
            root: {
                color: "{primary.contrast.color}",
                background: "{text.color}"
            }
        },
        light: {
            root: {
                color: "{primary.contrast.color}",
                background: "{text.color}"
            }
        }
    }
} satisfies TooltipDesignTokens;