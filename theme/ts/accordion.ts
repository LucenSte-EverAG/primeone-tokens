import type { AccordionDesignTokens } from '@primeuix/themes/types/accordion';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    panel: {
        borderColor: "{surface.100}",
        borderWidth: "{panel.border.width}"
    },
    header: {
        last: {
            bottomBorderRadius: "{header.last.bottom.border.radius}",
            activeBottomBorderRadius: "{header.last.active.bottom.border.radius}"
        },
        color: "{surface.500}",
        first: {
            borderWidth: "{header.first.border.width}",
            topBorderRadius: "{header.first.top.border.radius}"
        },
        padding: "{header.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        fontWeight: "{typography.weight.semibold}",
        hoverColor: "{surface.800}",
        toggleIcon: {
            color: "{surface.800}",
            hoverColor: "{surface.700}",
            activeColor: "{surface.700}",
            activeHoverColor: "{surface.700}"
        },
        activeColor: "{surface.800}",
        borderColor: "{content.border.color}",
        borderWidth: "{header.border.width}",
        borderRadius: "{header.border.radius}",
        hoverBackground: "{form.field.background}",
        activeBackground: "{form.field.background}",
        activeHoverColor: "{surface.700}",
        activeHoverBackground: "{surface.0}"
    },
    content: {
        color: "{surface.800}",
        padding: "{content.padding}",
        background: "{surface.600}",
        borderColor: "{content.border.color}",
        borderWidth: "{content.border.width}"
    }
} satisfies AccordionDesignTokens;