export default {
    primitive: {
        borderRadius: {
            lg: "0.5rem",
            md: "0.375rem",
            sm: "0.25rem",
            xl: "0.75rem",
            xs: "0.125rem",
            none: "0.0rem"
        }
    },
    semantic: {
        list: {
            gap: "{gap.none}",
            header: {
                padding: "{padding.lg}"
            },
            option: {
                padding: "{padding.md} {padding.lg}",
                borderRadius: "{border.radius.sm}"
            },
            padding: "{padding.lg}",
            optionGroup: {
                padding: "{padding.md} {padding.lg}",
                fontWeight: "{typography.weight.semibold}"
            }
        },
        mask: {
            transitionDuration: "0.2s"
        },
        content: {
            borderRadius: "{border.radius.sm}"
        },
        overlay: {
            modal: {
                shadow: "0 8px 10px -6px #0000001a, 0 20px 25px -5px #0000001a",
                padding: "{padding.xl}",
                borderRadius: "{border.radius.md}"
            },
            select: {
                shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
                borderRadius: "{border.radius.sm}"
            },
            popover: {
                shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a",
                padding: "{padding.lg}",
                borderRadius: "{border.radius.sm}"
            },
            navigation: {
                shadow: "0 2px 4px -2px #0000001a, 0 4px 6px -1px #0000001a"
            }
        },
        primary: {
            50: "{primary.50}",
            100: "{primary.50}",
            200: "{primary.200}",
            300: "{primary.300}",
            400: "{primary.400}",
            500: "{primary.500}",
            600: "{primary.600}",
            700: "{primary.700}",
            800: "{primary.800}",
            900: "{primary.900}",
            950: "{primary.950}"
        },
        iconSize: "{size.lg}",
        focusRing: {
            color: "{focus.ring.color}",
            style: "solid",
            width: "{width.none}",
            offset: "{offset.xs}",
            shadow: "none"
        },
        formField: {
            lg: {
                fontSize: "{typography.work-sans.body-large.font-size}",
                paddingX: "{padding.lg}",
                paddingY: "{padding.md}"
            },
            sm: {
                fontSize: "{typography.work-sans.body-default.font-size}",
                paddingX: "{padding.md}",
                paddingY: "{padding.sm}"
            },
            shadow: "0 1px 2px 0 #1212170d",
            paddingX: "{padding.md}",
            paddingY: "{padding.md}",
            focusRing: {
                color: "{list.option.group.background}",
                style: "solid",
                width: "{width.none}",
                offset: "{offset.none}",
                shadow: "none"
            },
            borderRadius: "{border.radius.sm}",
            transitionDuration: "{transition.duration}"
        },
        navigation: {
            item: {
                gap: "{gap.md}",
                padding: "{padding.md} {padding.lg}",
                borderRadius: "{border.radius.sm}"
            },
            list: {
                gap: "{gap.xs}",
                padding: "{padding.sm}"
            },
            submenuIcon: {
                size: "{size.lg}"
            },
            submenuLabel: {
                padding: "{padding.md} {padding.lg}",
                fontWeight: "{typography.weight.semibold}"
            }
        },
        colorScheme: {
            dark: {
                list: {
                    option: {
                        icon: {
                            color: "{surface.500}",
                            focusColor: "{surface.400}"
                        },
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        selectedColor: "{highlight.color}",
                        focusBackground: "{surface.800}",
                        selectedBackground: "{highlight.background}",
                        selectedFocusColor: "{highlight.focus.color}",
                        selectedFocusBackground: "{highlight.focus.background}"
                    },
                    optionGroup: {
                        color: "{text.muted.color}",
                        background: "{eads-black.black-00}"
                    }
                },
                mask: {
                    color: "{surface.200}",
                    background: "{eads-black.black-60}"
                },
                text: {
                    color: "{surface.0}",
                    hoverColor: "{surface.0}",
                    mutedColor: "{surface.400}",
                    hoverMutedColor: "{surface.300}"
                },
                content: {
                    color: "{text.color}",
                    background: "{eads-gray.0}",
                    hoverColor: "{text.hover.color}",
                    borderColor: "{surface.700}",
                    hoverBackground: "{surface.800}"
                },
                overlay: {
                    modal: {
                        color: "{text.color}",
                        background: "{surface.900}",
                        borderColor: "{surface.700}"
                    },
                    select: {
                        color: "{text.color}",
                        background: "{surface.900}",
                        borderColor: "{surface.700}"
                    },
                    popover: {
                        color: "{text.color}",
                        background: "{surface.900}",
                        borderColor: "{surface.700}"
                    }
                },
                primary: {
                    color: "{eads-interactive-blue.700}",
                    hoverColor: "{eads-interactive-blue.300}",
                    activeColor: "{eads-interactive-blue.300}",
                    contrastColor: "{surface.900}"
                },
                surface: {
                    0: "{eads-gray.0}",
                    50: "{eads-gray.50}",
                    100: "{eads-gray.100}",
                    200: "{eads-gray.200}",
                    300: "{eads-gray.400}",
                    400: "{eads-gray.500}",
                    500: "{eads-gray.500}",
                    600: "{eads-gray.600}",
                    700: "{eads-gray.700}",
                    800: "{eads-gray.800}",
                    900: "{eads-gray.900}",
                    950: "{eads-gray.950}"
                },
                formField: {
                    color: "{surface.0}",
                    iconColor: "{surface.400}",
                    background: "{surface.950}",
                    borderColor: "{surface.600}",
                    disabledColor: "{surface.400}",
                    floatLabelColor: "{surface.400}",
                    filledBackground: "{surface.800}",
                    focusBorderColor: "{eads-interactive-blue.700}",
                    hoverBorderColor: "{eads-gray.400}",
                    placeholderColor: "{surface.400}",
                    disabledBackground: "{surface.700}",
                    invalidBorderColor: "{eads-error.500}",
                    floatLabelFocusColor: "{surface.400}",
                    filledFocusBackground: "{surface.800}",
                    filledHoverBackground: "{surface.800}",
                    floatLabelActiveColor: "{surface.400}",
                    floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                    invalidPlaceholderColor: "{surface.400}"
                },
                highlight: {
                    color: "{eads-white.whiteF-87}",
                    background: "{eads-interactive-blue.100}",
                    focusColor: "{eads-white.whiteF-87}",
                    focusBackground: "{eads-blue.200}"
                },
                navigation: {
                    item: {
                        icon: {
                            color: "{surface.500}",
                            focusColor: "{surface.400}",
                            activeColor: "{surface.400}"
                        },
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        activeColor: "{text.hover.color}",
                        focusBackground: "{surface.800}",
                        activeBackground: "{surface.800}"
                    },
                    submenuIcon: {
                        color: "{surface.500}",
                        focusColor: "{surface.400}",
                        activeColor: "{surface.400}"
                    },
                    submenuLabel: {
                        color: "{text.muted.color}",
                        background: "{eads-black.black-00}"
                    }
                }
            },
            light: {
                list: {
                    option: {
                        icon: {
                            color: "{surface.400}",
                            focusColor: "{surface.500}"
                        },
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        selectedColor: "{highlight.color}",
                        focusBackground: "{surface.100}",
                        selectedBackground: "{highlight.background}",
                        selectedFocusColor: "{highlight.focus.color}",
                        selectedFocusBackground: "{highlight.focus.background}"
                    },
                    optionGroup: {
                        color: "{text.muted.color}",
                        background: "{eads-black.black-00}"
                    }
                },
                mask: {
                    color: "{surface.200}",
                    background: "{eads-black.black-40}"
                },
                text: {
                    color: "{surface.900}",
                    hoverColor: "{surface.500}",
                    mutedColor: "{surface.700}",
                    hoverMutedColor: "{surface.600}"
                },
                content: {
                    color: "{text.color}",
                    background: "{eads-gray.0}",
                    hoverColor: "{text.hover.color}",
                    borderColor: "{surface.200}",
                    hoverBackground: "{surface.100}"
                },
                overlay: {
                    modal: {
                        color: "{text.color}",
                        background: "{surface.0}",
                        borderColor: "{surface.200}"
                    },
                    select: {
                        color: "{text.color}",
                        background: "{surface.0}",
                        borderColor: "{surface.200}"
                    },
                    popover: {
                        color: "{text.color}",
                        background: "{surface.0}",
                        borderColor: "{surface.200}"
                    }
                },
                primary: {
                    color: "{eads-interactive-blue.700}",
                    hoverColor: "{eads-interactive-blue.500}",
                    activeColor: "{eads-interactive-blue.500}",
                    contrastColor: "{eads-white.white}"
                },
                surface: {
                    0: "{eads-gray.0}",
                    50: "{eads-gray.50}",
                    100: "{eads-gray.100}",
                    200: "{eads-gray.200}",
                    300: "{eads-gray.300}",
                    400: "{eads-gray.400}",
                    500: "{eads-gray.500}",
                    600: "{eads-gray.600}",
                    700: "{eads-gray.700}",
                    800: "{eads-gray.800}",
                    900: "{eads-gray.900}",
                    950: "{eads-gray.950}"
                },
                formField: {
                    color: "{surface.700}",
                    iconColor: "{surface.400}",
                    background: "{surface.0}",
                    borderColor: "{surface.300}",
                    disabledColor: "{surface.500}",
                    floatLabelColor: "{surface.500}",
                    filledBackground: "{surface.50}",
                    focusBorderColor: "{eads-interactive-blue.700}",
                    hoverBorderColor: "{eads-gray.400}",
                    placeholderColor: "{surface.500}",
                    disabledBackground: "{surface.200}",
                    invalidBorderColor: "{eads-error.500}",
                    floatLabelFocusColor: "{surface.500}",
                    filledFocusBackground: "{surface.50}",
                    filledHoverBackground: "{surface.50}",
                    floatLabelActiveColor: "{surface.500}",
                    floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                    invalidPlaceholderColor: "{surface.500}"
                },
                highlight: {
                    color: "{eads-interactive-blue.100}",
                    background: "{eads-interactive-blue.100}",
                    focusColor: "{eads-interactive-blue.700}",
                    focusBackground: "{eads-interactive-blue.100}"
                },
                navigation: {
                    item: {
                        icon: {
                            color: "{surface.400}",
                            focusColor: "{surface.500}",
                            activeColor: "{surface.500}"
                        },
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        activeColor: "{text.hover.color}",
                        focusBackground: "{surface.100}",
                        activeBackground: "{surface.100}"
                    },
                    submenuIcon: {
                        color: "{surface.400}",
                        focusColor: "{surface.500}",
                        activeColor: "{surface.500}"
                    },
                    submenuLabel: {
                        color: "{text.muted.color}",
                        background: "{eads-black.black-00}"
                    }
                }
            }
        },
        anchorGutter: "0.125rem",
        disabledOpacity: "0.6",
        transitionDuration: "0.2s"
    }
}