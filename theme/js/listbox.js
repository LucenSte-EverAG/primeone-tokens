export default {
    list: {
        gap: "{form.field.list.gap}",
        header: {
            padding: "{form.field.list.header.padding}"
        },
        padding: "{form.field.list.padding}"
    },
    root: {
        color: "{surface.800}",
        shadow: "0 1px 2px 0 #1212170d",
        background: "{highlight.background}",
        borderColor: "{form.field.invalid.border.color}",
        borderRadius: "{form.field.border.radius}",
        disabledColor: "{form.field.disabled.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}"
    },
    option: {
        color: "{surface.700}",
        padding: "{form.field.option.padding}",
        focusColor: "{surface.800}",
        borderRadius: "{form.field.option.border.radius}",
        selectedColor: "{surface.800}",
        focusBackground: "{list.option.focus.background}",
        selectedBackground: "{list.option.selected.background}",
        selectedFocusColor: "{primary.800}",
        selectedFocusBackground: "{primary.50}"
    },
    checkmark: {
        color: "{primary.active.background}",
        gutterEnd: "0.3281rem",
        gutterStart: "-0.3281rem"
    },
    colorScheme: {
        dark: {
            option: {
                stripedBackground: "{text.color}"
            }
        },
        light: {
            option: {
                stripedBackground: "{text.color}"
            }
        }
    },
    optionGroup: {
        color: "{surface.500}",
        padding: "{form.field.option.group.padding}",
        background: "{list.option.group.background}",
        fontWeight: "{list.option.group.font.weight}"
    },
    emptyMessage: {
        padding: "{list.option.padding}"
    }
}