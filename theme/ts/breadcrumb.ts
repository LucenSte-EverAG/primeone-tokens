import type { BreadcrumbDesignTokens } from '@primeuix/themes/types/breadcrumb';

 export default {
    item: {
        gap: "{navigation.item.gap}",
        icon: {
            color: "{form.field.focus.border.color}",
            hoverColor: "{text.hover.color}"
        },
        color: "{form.field.focus.border.color}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        hoverColor: "{form.field.focus.border.color}",
        borderRadius: "{navigation.item.border.radius}"
    },
    root: {
        gap: "{form.field.gap}",
        padding: "0.875rem",
        background: "{warn.color}",
        transitionDuration: "{transition.duration}"
    },
    separator: {
        color: "{surface.400}"
    }
} satisfies BreadcrumbDesignTokens;