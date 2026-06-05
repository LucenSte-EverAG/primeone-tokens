import type { CheckboxDesignTokens } from '@primeuix/themes/types/checkbox';

 export default {
    icon: {
        lg: {
            size: "{icon.lg.size}"
        },
        sm: {
            size: "{icon.sm.size}"
        },
        size: "{action.icon.size}",
        color: "{primary.active.background}",
        checkedColor: "{primary.active.background}",
        disabledColor: "{primary.active.background}",
        checkedHoverColor: "{primary.active.background}"
    },
    root: {
        lg: {
            width: "{dropdown.lg.width}",
            height: "1.3125rem"
        },
        sm: {
            width: "{dropdown.sm.width}",
            height: "{sm.height}"
        },
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
        background: "{highlight.background}",
        borderColor: "{primary.active.background}",
        borderRadius: "{action.border.radius}",
        filledBackground: "{highlight.background}",
        focusBorderColor: "{primary.active.background}",
        hoverBorderColor: "{primary.active.background}",
        checkedBackground: "{highlight.background}",
        checkedBorderColor: "{primary.500}",
        disabledBackground: "{highlight.background}",
        invalidBorderColor: "{primary.active.background}",
        transitionDuration: "{form.field.transition.duration}",
        checkedHoverBackground: "{highlight.background}",
        checkedFocusBorderColor: "{primary.active.background}",
        checkedHoverBorderColor: "{primary.active.background}",
        checkedDisabledBorderColor: "{content.border.color}"
    }
} satisfies CheckboxDesignTokens;