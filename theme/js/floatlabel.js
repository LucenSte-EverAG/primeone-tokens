export default {
    in: {
        input: {
            paddingTop: "{form.field.in.input.padding.top}",
            paddingBottom: "{form.field.in.input.padding.bottom}"
        },
        active: {
            top: "0.4375rem"
        }
    },
    on: {
        active: {
            padding: "{form.field.on.active.padding}",
            background: "{surface.0}"
        },
        borderRadius: "{form.field.on.border.radius}"
    },
    over: {
        active: {
            top: "-1.0938rem"
        }
    },
    root: {
        color: "{warn.color}",
        active: {
            fontSize: "0.6563rem",
            fontWeight: "{typography.weight.regular}"
        },
        positionX: "0.6563rem",
        positionY: "0.4375rem",
        focusColor: "{list.option.focus.color}",
        fontWeight: "{typography.weight.medium}",
        activeColor: "{navigation.item.active.color}",
        invalidColor: "{everag.color.error-error-60}",
        transitionDuration: "{form.field.transition.duration}"
    }
}