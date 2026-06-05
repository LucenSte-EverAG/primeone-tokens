import type { DataTableDesignTokens } from '@primeuix/themes/types/datatable';

 export default {
    row: {
        color: "{surface.700}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{form.field.background}",
        hoverColor: "{surface.800}",
        selectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{primary.50}"
    },
    root: {
        transitionDuration: "{transition.duration}"
    },
    filter: {
        rule: {
            borderColor: "{content.border.color}"
        },
        inlineGap: "{list.filter.inline.gap}",
        constraint: {
            color: "{surface.700}",
            padding: "{list.option.padding}",
            separator: {
                borderColor: "{content.border.color}"
            },
            focusColor: "{surface.800}",
            borderRadius: "{list.filter.constraint.border.radius}",
            selectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
            focusBackground: "{list.option.focus.background}",
            selectedBackground: "{primary.50}",
            selectedFocusColor: "{primary.800}",
            selectedFocusBackground: "{primary.50}"
        },
        overlaySelect: {
            color: "{surface.700}",
            shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
            background: "{overlay.select.background}",
            borderColor: "{content.border.color}",
            borderRadius: "{list.filter.overlay.select.border.radius}"
        },
        constraintList: {
            gap: "{list.filter.constraint.list.gap}",
            padding: "{list.padding}"
        },
        overlayPopover: {
            gap: "{list.filter.overlay.popover.gap}",
            color: "{surface.700}",
            shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
            padding: "{list.filter.overlay.popover.padding}",
            background: "{overlay.popover.background}",
            borderColor: "{content.border.color}",
            borderRadius: "{list.filter.overlay.popover.border.radius}"
        }
    },
    footer: {
        lg: {
            padding: "{list.footer.lg.padding}"
        },
        sm: {
            padding: "{list.footer.sm.padding}"
        },
        color: "{surface.700}",
        padding: "{list.footer.padding}",
        background: "{surface.0}",
        borderColor: "{content.border.color}",
        borderWidth: "{list.footer.border.width}"
    },
    header: {
        lg: {
            padding: "{list.header.lg.padding}"
        },
        sm: {
            padding: "{list.header.sm.padding}"
        },
        color: "{surface.700}",
        padding: "{list.header.padding}",
        background: "{form.field.background}",
        borderColor: "{content.border.color}",
        borderWidth: "{list.header.border.width}"
    },
    bodyCell: {
        lg: {
            padding: "{list.body.cell.lg.padding}"
        },
        sm: {
            padding: "{list.body.cell.sm.padding}"
        },
        padding: "{list.body.cell.padding}",
        borderColor: "{content.border.color}"
    },
    sortIcon: {
        size: "{list.sort.icon.size}",
        color: "{surface.500}",
        hoverColor: "{surface.600}"
    },
    dropPoint: {
        color: "{primary.500}"
    },
    footerCell: {
        lg: {
            padding: "{list.footer.cell.lg.padding}"
        },
        sm: {
            padding: "{list.footer.cell.sm.padding}"
        },
        color: "{surface.700}",
        padding: "{list.footer.cell.padding}",
        background: "{surface.0}",
        borderColor: "{content.border.color}"
    },
    headerCell: {
        lg: {
            padding: "{list.header.cell.lg.padding}"
        },
        sm: {
            padding: "{list.header.cell.sm.padding}"
        },
        gap: "{list.header.cell.gap}",
        color: "{surface.700}",
        padding: "{list.header.cell.padding}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        background: "{surface.0}",
        hoverColor: "{surface.800}",
        borderColor: "{content.border.color}",
        selectedColor: "{everag.color.blue-blue-70-base-brand-blue}",
        hoverBackground: "{content.hover.background}",
        selectedBackground: "{primary.50}"
    },
    colorScheme: {
        dark: {
            row: {
                stripedBackground: "{surface.950}"
            },
            root: {
                borderColor: "{surface.800}"
            },
            bodyCell: {
                selectedBorderColor: "{primary.active.background}"
            }
        },
        light: {
            row: {
                stripedBackground: "{surface.950}"
            },
            root: {
                borderColor: "{surface.800}"
            },
            bodyCell: {
                selectedBorderColor: "{primary.active.background}"
            }
        }
    },
    columnTitle: {
        fontWeight: "{typography.weight.semibold}"
    },
    loadingIcon: {
        size: "{list.loading.icon.size}"
    },
    columnFooter: {
        fontWeight: "{typography.weight.semibold}"
    },
    paginatorTop: {
        borderColor: "{content.border.color}",
        borderWidth: "{list.paginator.top.border.width}"
    },
    columnResizer: {
        width: "{list.column.resizer.width}"
    },
    paginatorBottom: {
        borderColor: "{content.border.color}",
        borderWidth: "{list.paginator.bottom.border.width}"
    },
    resizeIndicator: {
        color: "{primary.500}",
        width: "{list.resize.indicator.width}"
    },
    rowToggleButton: {
        size: "{list.row.toggle.button.size}",
        color: "{surface.500}",
        focusRing: {
            color: "{primary.500}",
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}",
            shadow: "none"
        },
        hoverColor: "{surface.700}",
        borderRadius: "{list.row.toggle.button.border.radius}",
        hoverBackground: "{content.hover.background}",
        selectedHoverColor: "{primary.500}",
        selectedHoverBackground: "{surface.0}"
    }
} satisfies DataTableDesignTokens;