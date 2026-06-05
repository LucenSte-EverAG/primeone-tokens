import type { SelectDesignTokens } from '@primeuix/themes/types/select';

 export default {
    list: {
        gap: "{list.list.gap}",
        header: {
            padding: "{list.list.header.padding}"
        },
        padding: "{list.list.padding}"
    },
    root: {
        lg: {
            fontSize: "0.9844rem",
            paddingX: "{list.lg.padding.x}",
            paddingY: "{list.lg.padding.y}"
        },
        sm: {
            fontSize: "0.7656rem",
            paddingX: "{list.sm.padding.x}",
            paddingY: "{list.sm.padding.y}"
        },
        color: "{form.field.color}",
        shadow: "0 1px 2px 0 #1212170d",
        paddingX: "{list.padding.x}",
        paddingY: "{list.padding.y}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{list.border.radius}",
        disabledColor: "{form.field.disabled.color}",
        filledBackground: "{form.field.filled.background}",
        focusBorderColor: "{primary.500}",
        hoverBorderColor: "{form.field.hover.border.color}",
        placeholderColor: "{form.field.placeholder.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        filledFocusBackground: "{form.field.filled.focus.background}",
        filledHoverBackground: "{form.field.filled.hover.background}",
        invalidPlaceholderColor: "{everag.color.error-error-60}"
    },
    option: {
        color: "{surface.700}",
        padding: "{list.option.padding}",
        focusColor: "{surface.800}",
        borderRadius: "{list.option.border.radius}",
        selectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
        focusBackground: "{list.option.focus.background}",
        selectedBackground: "{primary.50}",
        selectedFocusColor: "{primary.800}",
        selectedFocusBackground: "{primary.50}"
    },
    overlay: {
        color: "{surface.700}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderRadius: "{list.overlay.border.radius}"
    },
    dropdown: {
        color: "{surface.400}",
        width: "{list.dropdown.width}"
    },
    checkmark: {
        color: "{surface.700}",
        gutterEnd: "0.3281rem",
        gutterStart: "-0.3281rem"
    },
    clearIcon: {
        color: "{form.field.icon.color}"
    },
    optionGroup: {
        color: "{surface.500}",
        padding: "{list.option.group.padding}",
        background: "{list.option.group.background}",
        fontWeight: "{list.option.group.font.weight}"
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    }
} satisfies SelectDesignTokens;