import type { InputNumberDesignTokens } from '@primeuix/themes/types/inputnumber';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    button: {
        width: "{form.field.button.width}",
        borderRadius: "{form.field.button.border.radius}",
        verticalPadding: "{form.field.button.vertical.padding}"
    },
    colorScheme: {
        dark: {
            button: {
                color: "{mask.color}",
                background: "{list.option.group.background}",
                hoverColor: "{mask.color}",
                activeColor: "{surface.100}",
                borderColor: "{content.border.color}",
                hoverBackground: "{surface.800}",
                activeBackground: "{primary.active.background}",
                hoverBorderColor: "{content.border.color}",
                activeBorderColor: "{content.border.color}"
            }
        },
        light: {
            button: {
                color: "{mask.color}",
                background: "{list.option.group.background}",
                hoverColor: "{mask.color}",
                activeColor: "{surface.100}",
                borderColor: "{content.border.color}",
                hoverBackground: "{surface.800}",
                activeBackground: "{primary.active.background}",
                hoverBorderColor: "{content.border.color}",
                activeBorderColor: "{content.border.color}"
            }
        }
    }
} satisfies InputNumberDesignTokens;