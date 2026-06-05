import type { ToggleButtonDesignTokens } from '@primeuix/themes/types/togglebutton';

 export default {
    icon: {
        disabledColor: "{form.field.disabled.color}"
    },
    root: {
        lg: {
            padding: "{form.field.lg.padding}",
            fontSize: "{form.field.lg.font.size}"
        },
        sm: {
            padding: "{form.field.sm.padding}",
            fontSize: "{form.field.sm.font.size}"
        },
        gap: "{form.field.gap}",
        padding: "0.2188rem",
        focusRing: {
            color: "{focus.ring.color}",
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}",
            offset: "{form.field.focus.ring.offset}",
            shadow: "none"
        },
        fontWeight: "{typography.weight.medium}",
        borderRadius: "{form.field.border.radius}",
        disabledColor: "{form.field.disabled.color}",
        disabledBackground: "{form.field.disabled.background}",
        invalidBorderColor: "{form.field.invalid.border.color}",
        transitionDuration: "{form.field.transition.duration}",
        disabledBorderColor: "{content.border.color}"
    },
    content: {
        lg: {
            padding: "0.2188rem {form.field.content.lg.padding.x}"
        },
        sm: {
            padding: "{form.field.content.sm.padding.y} 0.6563rem"
        },
        padding: "0.2188rem {form.field.content.padding.x}",
        borderRadius: "{content.border.radius}",
        checkedShadow: "0 1px 2px 0 #0000000a, 0 1px 2px 0 #00000005"
    },
    colorScheme: {
        dark: {
            icon: {
                color: "{mask.color}",
                hoverColor: "{mask.color}",
                checkedColor: "{surface.0}"
            },
            root: {
                color: "{mask.color}",
                background: "{surface.950}",
                hoverColor: "{mask.color}",
                borderColor: "{surface.950}",
                checkedColor: "{surface.0}",
                hoverBackground: "{surface.950}",
                checkedBackground: "{surface.950}",
                checkedBorderColor: "{surface.950}"
            },
            content: {
                checkedBackground: "{surface.800}"
            }
        },
        light: {
            icon: {
                color: "{mask.color}",
                hoverColor: "{mask.color}",
                checkedColor: "{surface.0}"
            },
            root: {
                color: "{mask.color}",
                background: "{surface.950}",
                hoverColor: "{mask.color}",
                borderColor: "{surface.950}",
                checkedColor: "{surface.0}",
                hoverBackground: "{surface.950}",
                checkedBackground: "{surface.950}",
                checkedBorderColor: "{surface.950}"
            },
            content: {
                checkedBackground: "{surface.800}"
            }
        }
    }
} satisfies ToggleButtonDesignTokens;