import type { CarouselDesignTokens } from '@primeuix/themes/types/carousel';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    content: {
        gap: "{content.gap}"
    },
    indicator: {
        width: "{indicator.width}",
        height: "{indicator.height}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        borderRadius: "{indicator.border.radius}",
        activeBackground: "{primary.500}"
    },
    colorScheme: {
        dark: {
            indicator: {
                background: "{primary.active.background}",
                hoverBackground: "{surface.600}"
            }
        },
        light: {
            indicator: {
                background: "{primary.active.background}",
                hoverBackground: "{surface.600}"
            }
        }
    },
    indicatorList: {
        gap: "{indicator.list.gap}",
        padding: "{indicator.list.padding}"
    }
} satisfies CarouselDesignTokens;