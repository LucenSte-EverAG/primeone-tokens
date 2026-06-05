import type { TreeSelectDesignTokens } from '@primeuix/themes/types/treeselect';

 export default {
    chip: {
        borderRadius: "{chip.border.radius}"
    },
    root: {
        lg: {
            fontSize: "0.9844rem",
            paddingX: "{lg.padding.x}",
            paddingY: "{lg.padding.y}"
        },
        sm: {
            fontSize: "0.7656rem",
            paddingX: "{list.sm.padding.x}",
            paddingY: "{list.sm.padding.y}"
        },
        color: "{form.field.color}",
        shadow: "0 1px 2px 0 #1212170d",
        paddingX: "{footer.padding.x}",
        paddingY: "{footer.padding.y}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{action.border.radius}",
        disabledColor: "{form.field.disabled.color}",
        filledBackground: "{form.field.filled.background}",
        focusBorderColor: "{primary.500}",
        hoverBorderColor: "{form.field.hover.border.color}",
        placeholderColor: "{form.field.placeholder.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{transition.duration}",
        filledFocusBackground: "{form.field.filled.focus.background}",
        filledHoverBackground: "{form.field.filled.hover.background}",
        invalidPlaceholderColor: "{everag.color.error-error-60}"
    },
    tree: {
        padding: "{tree.padding}"
    },
    overlay: {
        color: "{surface.700}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderRadius: "{overlay.border.radius}"
    },
    dropdown: {
        color: "{surface.400}",
        width: "{dropdown.width}"
    },
    clearIcon: {
        color: "{form.field.icon.color}"
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    }
} satisfies TreeSelectDesignTokens;