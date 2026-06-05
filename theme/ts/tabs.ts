import type { TabsDesignTokens } from '@primeuix/themes/types/tabs';

 export default {
    tab: {
        gap: "{tab.gap}",
        color: "{surface.500}",
        margin: "0 0 -1px 0",
        padding: "{tab.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{list.option.group.background}",
        fontWeight: "{typography.weight.semibold}",
        hoverColor: "{surface.700}",
        activeColor: "{primary.500}",
        borderColor: "{content.border.color}",
        borderWidth: "{tab.border.width}",
        hoverBackground: "{list.option.group.background}",
        activeBackground: "{list.option.group.background}",
        hoverBorderColor: "{content.border.color}",
        activeBorderColor: "{primary.500}"
    },
    root: {
        transitionDuration: "{transition.duration}"
    },
    tablist: {
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderWidth: "{tablist.border.width}"
    },
    tabpanel: {
        color: "{surface.700}",
        padding: "{tabpanel.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{surface.0}"
    },
    activeBar: {
        bottom: "-0.0625rem",
        height: "{active.bar.height}",
        background: "{primary.500}"
    },
    navButton: {
        color: "{surface.500}",
        width: "{nav.button.width}",
        shadow: "0 0 10px 50px #ffffff99",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{surface.0}",
        hoverColor: "{surface.700}"
    }
} satisfies TabsDesignTokens;