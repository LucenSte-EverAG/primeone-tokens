import type { DatePickerDesignTokens } from '@primeuix/themes/types/datepicker';

 export default {
    date: {
        color: "{surface.700}",
        width: "{date.width}",
        height: "{date.height}",
        padding: "{date.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        hoverColor: "{surface.800}",
        borderRadius: "{date.border.radius}",
        selectedColor: "{form.field.disabled.color}",
        hoverBackground: "{content.hover.background}",
        rangeSelectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
        selectedBackground: "{form.field.background}",
        rangeSelectedBackground: "{primary.50}"
    },
    root: {
        transitionDuration: "{form.field.transition.duration}"
    },
    year: {
        padding: "{year.padding}",
        borderRadius: "{select.year.border.radius}"
    },
    group: {
        gap: "{group.gap}",
        borderColor: "{content.border.color}"
    },
    month: {
        padding: "{month.padding}",
        borderRadius: "{month.border.radius}"
    },
    panel: {
        color: "{form.field.disabled.color}",
        shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
        padding: "{panel.padding}",
        background: "{form.field.background}",
        borderColor: "{content.border.color}",
        borderRadius: "{panel.border.radius}"
    },
    title: {
        gap: "{title.gap}",
        fontWeight: "{typography.weight.medium}"
    },
    header: {
        color: "{form.field.disabled.color}",
        padding: "{list.header.padding}",
        background: "{form.field.background}",
        borderColor: "{content.border.color}"
    },
    dayView: {
        margin: "{day.view.margin}"
    },
    weekDay: {
        color: "{surface.700}",
        padding: "{week.day.padding}",
        fontWeight: "{typography.weight.medium}"
    },
    dropdown: {
        lg: {
            width: "{dropdown.lg.width}"
        },
        sm: {
            width: "{dropdown.sm.width}"
        },
        width: "{dropdown.width}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        borderColor: "{content.border.color}",
        borderRadius: "{dropdown.border.radius}",
        hoverBorderColor: "{content.border.color}",
        activeBorderColor: "{content.border.color}"
    },
    yearView: {
        margin: "{year.view.margin}"
    },
    buttonbar: {
        padding: "{buttonbar.padding}",
        borderColor: "{content.border.color}"
    },
    inputIcon: {
        color: "{form.field.icon.color}"
    },
    monthView: {
        margin: "{month.view.margin}"
    },
    selectYear: {
        color: "{surface.700}",
        padding: "{select.year.padding}",
        hoverColor: "{surface.800}",
        borderRadius: "{select.year.border.radius}",
        hoverBackground: "{content.hover.background}"
    },
    timePicker: {
        gap: "{time.picker.gap}",
        padding: "{time.picker.padding}",
        buttonGap: "{time.picker.button.gap}",
        borderColor: "{content.border.color}"
    },
    colorScheme: {
        dark: {
            today: {
                color: "{surface.0}",
                background: "{primary.active.background}"
            },
            dropdown: {
                color: "{form.field.disabled.color}",
                background: "{form.field.background}",
                hoverColor: "{surface.100}",
                activeColor: "{surface.50}",
                hoverBackground: "{primary.active.background}",
                activeBackground: "{surface.600}"
            }
        },
        light: {
            today: {
                color: "{surface.0}",
                background: "{primary.active.background}"
            },
            dropdown: {
                color: "{form.field.disabled.color}",
                background: "{form.field.background}",
                hoverColor: "{surface.100}",
                activeColor: "{surface.50}",
                hoverBackground: "{primary.active.background}",
                activeBackground: "{surface.600}"
            }
        }
    },
    selectMonth: {
        color: "{surface.700}",
        padding: "{select.month.padding}",
        hoverColor: "{surface.800}",
        borderRadius: "{select.month.border.radius}",
        hoverBackground: "{content.hover.background}"
    }
} satisfies DatePickerDesignTokens;