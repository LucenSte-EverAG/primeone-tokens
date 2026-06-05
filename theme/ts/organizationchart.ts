import type { OrganizationChartDesignTokens } from '@primeuix/themes/types/organizationchart';

 export default {
    node: {
        color: "{surface.700}",
        padding: "0.6563rem 0.875rem",
        background: "{surface.0}",
        hoverColor: "{surface.800}",
        borderColor: "{content.border.color}",
        borderRadius: "{list.node.border.radius}",
        selectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
        hoverBackground: "{content.hover.background}",
        toggleablePadding: "{list.node.toggleable.padding}",
        selectedBackground: "{primary.50}"
    },
    root: {
        gutter: "0.6563rem",
        transitionDuration: "{transition.duration}"
    },
    connector: {
        color: "{mask.color}",
        height: "{list.connector.height}",
        borderRadius: "{list.connector.border.radius}"
    },
    nodeToggleButton: {
        size: "{list.node.toggle.button.size}",
        color: "{surface.500}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{surface.0}",
        hoverColor: "{surface.700}",
        borderColor: "{content.border.color}",
        borderRadius: "{list.node.toggle.button.border.radius}",
        hoverBackground: "{content.hover.background}"
    }
} satisfies OrganizationChartDesignTokens;