import type { RatingDesignTokens } from '@primeuix/themes/types/rating';

 export default {
    icon: {
        size: "{form.field.icon.size}",
        color: "{surface.500}",
        hoverColor: "{primary.500}",
        activeColor: "{primary.500}"
    },
    root: {
        gap: "{form.field.gap}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}",
            offset: "{form.field.focus.ring.offset}",
            shadow: "none"
        },
        transitionDuration: "{transition.duration}"
    }
} satisfies RatingDesignTokens;