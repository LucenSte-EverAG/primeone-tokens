import type { StepperDesignTokens } from '@primeuix/themes/types/stepper';

 export default {
    root: {
        transitionDuration: "{transition.duration}"
    },
    step: {
        gap: "{step.gap}",
        padding: "{step.padding}"
    },
    separator: {
        size: "{separator.size}",
        margin: "{separator.margin}",
        background: "{form.field.disabled.background}",
        activeBackground: "{primary.500}"
    },
    stepTitle: {
        color: "{surface.500}",
        fontWeight: "{typography.weight.medium}",
        activeColor: "{primary.500}"
    },
    steppanel: {
        color: "{surface.700}",
        indent: "1rem",
        padding: "{steppanel.padding}",
        background: "{surface.0}"
    },
    stepHeader: {
        gap: "{step.header.gap}",
        padding: "{step.header.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        borderRadius: "{step.header.border.radius}"
    },
    stepNumber: {
        size: "{step.number.size}",
        color: "{surface.500}",
        shadow: "0 1px 1px 0 #0000001f, 0 1px 0 0 #0000000f",
        fontSize: "1.0rem",
        background: "{surface.0}",
        fontWeight: "{typography.weight.medium}",
        activeColor: "{primary.500}",
        borderColor: "{content.border.color}",
        borderRadius: "{step.number.border.radius}",
        activeBackground: "{surface.0}",
        activeBorderColor: "{content.border.color}"
    },
    steppanels: {
        padding: "{steppanels.padding}"
    }
} satisfies StepperDesignTokens;