export default {
    chip: {
        borderRadius: "{form.field.chip.border.radius}"
    },
    list: {
        gap: "{form.field.list.gap}",
        padding: "{form.field.list.padding}"
    },
    root: {
        color: "{form.field.color}",
        shadow: "0 1px 2px 0 #1212170d",
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}",
            offset: "{form.field.focus.ring.offset}",
            shadow: "none"
        },
        background: "{form.field.background}",
        borderColor: "{form.field.border.color}",
        borderRadius: "{form.field.border.radius}",
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
        padding: "{form.field.option.padding}",
        focusColor: "{surface.800}",
        borderRadius: "{form.field.option.border.radius}",
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
        borderRadius: "{form.field.overlay.border.radius}"
    },
    dropdown: {
        lg: {
            width: "{form.field.dropdown.lg.width}"
        },
        sm: {
            width: "{form.field.dropdown.sm.width}"
        },
        width: "{form.field.dropdown.width}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        borderColor: "{content.border.color}",
        borderRadius: "{form.field.dropdown.border.radius}",
        hoverBorderColor: "{content.border.color}",
        activeBorderColor: "{content.border.color}"
    },
    colorScheme: {
        dark: {
            chip: {
                focusColor: "{surface.0}",
                focusBackground: "{primary.active.background}"
            },
            dropdown: {
                color: "{mask.color}",
                background: "{surface.800}",
                hoverColor: "{surface.100}",
                activeColor: "{surface.50}",
                hoverBackground: "{primary.active.background}",
                activeBackground: "{surface.600}"
            }
        },
        light: {
            chip: {
                focusColor: "{surface.0}",
                focusBackground: "{primary.active.background}"
            },
            dropdown: {
                color: "{mask.color}",
                background: "{surface.800}",
                hoverColor: "{surface.100}",
                activeColor: "{surface.50}",
                hoverBackground: "{primary.active.background}",
                activeBackground: "{surface.600}"
            }
        }
    },
    optionGroup: {
        color: "{surface.500}",
        padding: "{form.field.option.group.padding}",
        background: "{list.option.group.background}",
        fontWeight: "{typography.weight.semibold}"
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    }
}