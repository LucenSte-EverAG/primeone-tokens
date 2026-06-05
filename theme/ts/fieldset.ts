import type { FieldsetDesignTokens } from '@primeuix/themes/types/fieldset';

 export default {
    root: {
        color: "{warn.color}",
        padding: "{buttonbar.padding}",
        background: "{warn.color}",
        borderColor: "{warn.border.color}",
        borderRadius: "{action.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    legend: {
        gap: "{legend.gap}",
        color: "{surface.700}",
        padding: "{legend.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{surface.0}",
        fontWeight: "{typography.weight.semibold}",
        hoverColor: "{surface.800}",
        borderColor: "{list.option.group.background}",
        borderWidth: "{legend.border.width}",
        borderRadius: "{legend.border.radius}",
        hoverBackground: "{content.hover.background}"
    },
    content: {
        padding: "0.0rem"
    },
    toggleIcon: {
        color: "{surface.500}",
        hoverColor: "{surface.600}"
    }
} satisfies FieldsetDesignTokens;