import type { DockDesignTokens } from '@primeuix/themes/types/dock';

 export default {
    item: {
        size: "{item.size}",
        padding: "{item.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        borderRadius: "{base.item.border.radius}"
    },
    root: {
        padding: "{body.padding}",
        background: "{warn.color}",
        borderColor: "{warn.border.color}",
        borderRadius: "{action.border.radius}"
    }
} satisfies DockDesignTokens;