import type { PaginatorDesignTokens } from '@primeuix/themes/types/paginator';

 export default {
    root: {
        gap: "{basic.gap}",
        color: "{warn.color}",
        padding: "{footer.padding}",
        background: "{warn.color}",
        borderRadius: "{action.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    navButton: {
        color: "{surface.500}",
        width: "{nav.button.width}",
        height: "{nav.button.height}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{list.option.group.background}",
        hoverColor: "{surface.600}",
        borderRadius: "{nav.button.border.radius}",
        selectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{primary.50}"
    },
    jumpToPageInput: {
        maxWidth: "{jump.to.page.input.max.width}"
    },
    currentPageReport: {
        color: "{surface.500}"
    }
} satisfies PaginatorDesignTokens;