import type { ChipDesignTokens } from '@primeuix/themes/types/chip';

 export default {
    icon: {
        size: "{action.icon.size}"
    },
    root: {
        gap: "{basic.gap}",
        paddingX: "{footer.padding.x}",
        paddingY: "{footer.padding.y}",
        borderRadius: "{chip.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    image: {
        width: "{image.width}",
        height: "{image.height}"
    },
    removeIcon: {
        size: "{remove.icon.size}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        }
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{surface.0}"
            },
            root: {
                color: "{surface.0}",
                background: "{surface.800}"
            },
            removeIcon: {
                color: "{surface.0}"
            }
        },
        light: {
            icon: {
                color: "{surface.0}"
            },
            root: {
                color: "{surface.0}",
                background: "{surface.800}"
            },
            removeIcon: {
                color: "{surface.0}"
            }
        }
    }
} satisfies ChipDesignTokens;