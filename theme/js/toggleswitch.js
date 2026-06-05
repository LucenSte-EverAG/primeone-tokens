export default {
    root: {
        gap: "{basic.gap}",
        width: "{border.width}",
        height: "{date.height}",
        shadow: "0 1px 2px 0 #1212170d",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        borderColor: "{form.field.disabled.color}",
        borderWidth: "{border.width}",
        borderRadius: "{action.border.radius}",
        slideDuration: "0.2s",
        hoverBorderColor: "{warn.hover.border.color}",
        checkedBorderColor: "{list.option.group.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{transition.duration}",
        checkedHoverBorderColor: "{list.option.group.background}"
    },
    handle: {
        size: "0.875rem",
        borderRadius: "{handle.border.radius}"
    },
    colorScheme: {
        dark: {
            root: {
                background: "{form.field.background}",
                hoverBackground: "{form.field.background}",
                checkedBackground: "{form.field.background}",
                disabledBackground: "{form.field.background}",
                checkedHoverBackground: "{primary.hover.background}"
            },
            handle: {
                color: "{text.color}",
                background: "{mask.color}",
                hoverColor: "{surface.800}",
                checkedColor: "{primary.color}",
                hoverBackground: "{mask.color}",
                checkedBackground: "{text.color}",
                checkedHoverColor: "{info.active.background}",
                disabledBackground: "{text.color}",
                checkedHoverBackground: "{text.color}"
            }
        },
        light: {
            root: {
                background: "{form.field.background}",
                hoverBackground: "{form.field.background}",
                checkedBackground: "{form.field.background}",
                disabledBackground: "{form.field.background}",
                checkedHoverBackground: "{primary.hover.background}"
            },
            handle: {
                color: "{text.color}",
                background: "{mask.color}",
                hoverColor: "{surface.800}",
                checkedColor: "{primary.color}",
                hoverBackground: "{mask.color}",
                checkedBackground: "{text.color}",
                checkedHoverColor: "{info.active.background}",
                disabledBackground: "{text.color}",
                checkedHoverBackground: "{text.color}"
            }
        }
    }
}