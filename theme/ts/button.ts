import type { ButtonDesignTokens } from '@primeuix/themes/types/button';

 export default {
    root: {
        lg: {
            fontSize: "{form.field.lg.font.size}",
            paddingX: "{form.field.lg.padding.x}",
            paddingY: "{form.field.lg.padding.y}",
            iconOnlyWidth: "{form.field.lg.icon.only.width}"
        },
        sm: {
            fontSize: "{form.field.sm.font.size}",
            paddingX: "{form.field.sm.padding.x}",
            paddingY: "{form.field.sm.padding.y}",
            iconOnlyWidth: "{form.field.sm.icon.only.width}"
        },
        gap: "{form.field.gap}",
        help: {
            focusRing: {
                shadow: "none"
            }
        },
        info: {
            focusRing: {
                shadow: "none"
            }
        },
        warn: {
            focusRing: {
                shadow: "none"
            }
        },
        label: {
            fontWeight: "{typography.weight.medium}"
        },
        danger: {
            focusRing: {
                shadow: "none"
            }
        },
        primary: {
            focusRing: {
                shadow: "none"
            }
        },
        success: {
            focusRing: {
                shadow: "none"
            }
        },
        contrast: {
            focusRing: {
                shadow: "none"
            }
        },
        paddingX: "{form.field.padding.x}",
        paddingY: "{form.field.padding.y}",
        badgeSize: "1rem",
        focusRing: {
            style: "{form.field.focus.ring.style}",
            width: "{form.field.focus.ring.width}",
            offset: "{form.field.focus.ring.offset}"
        },
        secondary: {
            focusRing: {
                shadow: "none"
            }
        },
        borderRadius: "{form.field.border.radius}",
        raisedShadow: "0 1px 5px 0 #0000001f, 0 2px 2px 0 #00000024, 0 3px 1px -2px #00000033",
        iconOnlyWidth: "{form.field.icon.only.width}",
        transitionDuration: "{form.field.transition.duration}",
        roundedBorderRadius: "1.75rem"
    },
    colorScheme: {
        dark: {
            link: {
                color: "{primary.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            },
            root: {
                help: {
                    color: "{help.color}",
                    focusRing: {
                        color: "{help.focus.ring.color}"
                    },
                    background: "{help.background}",
                    hoverColor: "{help.color}",
                    activeColor: "{help.color}",
                    borderColor: "{help.border.color}",
                    hoverBackground: "{help.hover.background}",
                    activeBackground: "{help.active.background}",
                    hoverBorderColor: "{help.border.color}",
                    activeBorderColor: "{help.active.border.color}"
                },
                info: {
                    color: "{info.color}",
                    focusRing: {
                        color: "{info.focus.ring.color}"
                    },
                    background: "{info.background}",
                    hoverColor: "{info.color}",
                    activeColor: "{info.color}",
                    borderColor: "{info.border.color}",
                    hoverBackground: "{info.hover.background}",
                    activeBackground: "{info.active.background}",
                    hoverBorderColor: "{info.hover.border.color}",
                    activeBorderColor: "{info.active.border.color}"
                },
                warn: {
                    color: "{warn.color}",
                    focusRing: {
                        color: "{warn.focus.ring.color}"
                    },
                    background: "{warn.background}",
                    hoverColor: "{warn.color}",
                    activeColor: "{warn.color}",
                    borderColor: "{warn.border.color}",
                    hoverBackground: "{warn.hover.background}",
                    activeBackground: "{warn.active.background}",
                    hoverBorderColor: "{warn.hover.border.color}",
                    activeBorderColor: "{warn.active.border.color}"
                },
                danger: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{danger.focus.ring.color}"
                    },
                    background: "{danger.background}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{danger.border.color}",
                    hoverBackground: "{danger.hover.background}",
                    activeBackground: "{danger.active.background}",
                    hoverBorderColor: "{danger.border.color}",
                    activeBorderColor: "{danger.active.border.color}"
                },
                primary: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{primary.color}"
                    },
                    background: "{primary.color}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{form.field.focus.border.color}",
                    hoverBackground: "{primary.hover.background}",
                    activeBackground: "{primary.active.background}",
                    hoverBorderColor: "{info.active.border.color}",
                    activeBorderColor: "{primary.active.background}"
                },
                success: {
                    color: "{success.color}",
                    focusRing: {
                        color: "{success.focus.ring.color}"
                    },
                    background: "{success.background}",
                    hoverColor: "{success.color}",
                    activeColor: "{success.color}",
                    borderColor: "{success.border.color}",
                    hoverBackground: "{success.hover.background}",
                    activeBackground: "{success.active.background}",
                    hoverBorderColor: "{success.border.color}",
                    activeBorderColor: "{success.active.border.color}"
                },
                contrast: {
                    color: "{surface.950}",
                    focusRing: {
                        color: "{surface.0}"
                    },
                    background: "{surface.0}",
                    hoverColor: "{surface.950}",
                    activeColor: "{surface.950}",
                    borderColor: "{surface.0}",
                    hoverBackground: "{form.field.filled.hover.background}",
                    activeBackground: "{navigation.item.active.background}",
                    hoverBorderColor: "{surface.50}",
                    activeBorderColor: "{surface.100}"
                },
                secondary: {
                    color: "{form.field.disabled.color}",
                    focusRing: {
                        color: "{form.field.hover.border.color}"
                    },
                    background: "{form.field.background}",
                    hoverColor: "{form.field.disabled.color}",
                    activeColor: "{form.field.disabled.color}",
                    borderColor: "{form.field.hover.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}",
                    hoverBorderColor: "{form.field.hover.border.color}",
                    activeBorderColor: "{form.field.hover.border.color}"
                }
            },
            text: {
                help: {
                    color: "{help.color}",
                    hoverBackground: "{help.soft.background}",
                    activeBackground: "{help.soft.background}"
                },
                info: {
                    color: "{info.color}",
                    hoverBackground: "{highlight.color}",
                    activeBackground: "{highlight.color}"
                },
                warn: {
                    color: "{warn.color}",
                    hoverBackground: "{warn.soft.background}",
                    activeBackground: "{warn.soft.background}"
                },
                plain: {
                    color: "{form.field.focus.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                },
                danger: {
                    color: "{form.field.invalid.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                },
                primary: {
                    color: "{primary.color}",
                    hoverBackground: "{highlight.color}",
                    activeBackground: "{highlight.color}"
                },
                success: {
                    color: "{success.color}",
                    hoverBackground: "{success.soft.background}",
                    activeBackground: "{success.soft.background}"
                },
                contrast: {
                    color: "{primary.contrast.color}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{primary.active.background}"
                },
                secondary: {
                    color: "{form.field.disabled.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                }
            },
            outlined: {
                help: {
                    color: "{help.color}",
                    borderColor: "{help.soft.border.color}",
                    hoverBackground: "{help.soft.background}",
                    activeBackground: "{help.soft.background}"
                },
                info: {
                    color: "{info.color}",
                    borderColor: "{info.soft.border.color}",
                    hoverBackground: "{highlight.color}",
                    activeBackground: "{highlight.color}"
                },
                warn: {
                    color: "{warn.color}",
                    borderColor: "{warn.soft.border.color}",
                    hoverBackground: "{warn.soft.background}",
                    activeBackground: "{warn.soft.background}"
                },
                plain: {
                    color: "{surface.0}",
                    borderColor: "{surface.600}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{primary.active.background}"
                },
                danger: {
                    color: "{danger.color}",
                    borderColor: "{danger.soft.border.color}",
                    hoverBackground: "{danger.soft.background}",
                    activeBackground: "{danger.soft.background}"
                },
                primary: {
                    color: "{form.field.focus.border.color}",
                    borderColor: "{form.field.focus.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                },
                success: {
                    color: "{success.color}",
                    borderColor: "{success.soft.border.color}",
                    hoverBackground: "{success.soft.background}",
                    activeBackground: "{success.soft.background}"
                },
                contrast: {
                    color: "{primary.contrast.color}",
                    borderColor: "{surface.500}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{primary.active.background}"
                },
                secondary: {
                    color: "{mask.color}",
                    borderColor: "{primary.active.background}",
                    hoverBackground: "{form.field.filled.hover.background}",
                    activeBackground: "{surface.50}"
                }
            }
        },
        light: {
            link: {
                color: "{primary.color}",
                hoverColor: "{primary.color}",
                activeColor: "{primary.color}"
            },
            root: {
                help: {
                    color: "{help.color}",
                    focusRing: {
                        color: "{help.focus.ring.color}"
                    },
                    background: "{help.background}",
                    hoverColor: "{help.color}",
                    activeColor: "{help.color}",
                    borderColor: "{help.border.color}",
                    hoverBackground: "{help.hover.background}",
                    activeBackground: "{help.active.background}",
                    hoverBorderColor: "{help.border.color}",
                    activeBorderColor: "{help.active.border.color}"
                },
                info: {
                    color: "{info.color}",
                    focusRing: {
                        color: "{info.focus.ring.color}"
                    },
                    background: "{info.background}",
                    hoverColor: "{info.color}",
                    activeColor: "{info.color}",
                    borderColor: "{info.border.color}",
                    hoverBackground: "{info.hover.background}",
                    activeBackground: "{info.active.background}",
                    hoverBorderColor: "{info.hover.border.color}",
                    activeBorderColor: "{info.active.border.color}"
                },
                warn: {
                    color: "{warn.color}",
                    focusRing: {
                        color: "{warn.focus.ring.color}"
                    },
                    background: "{warn.background}",
                    hoverColor: "{warn.color}",
                    activeColor: "{warn.color}",
                    borderColor: "{warn.border.color}",
                    hoverBackground: "{warn.hover.background}",
                    activeBackground: "{warn.active.background}",
                    hoverBorderColor: "{warn.hover.border.color}",
                    activeBorderColor: "{warn.active.border.color}"
                },
                danger: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{danger.focus.ring.color}"
                    },
                    background: "{danger.background}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{danger.border.color}",
                    hoverBackground: "{danger.hover.background}",
                    activeBackground: "{danger.active.background}",
                    hoverBorderColor: "{danger.border.color}",
                    activeBorderColor: "{danger.active.border.color}"
                },
                primary: {
                    color: "{primary.contrast.color}",
                    focusRing: {
                        color: "{primary.color}"
                    },
                    background: "{primary.color}",
                    hoverColor: "{primary.contrast.color}",
                    activeColor: "{primary.contrast.color}",
                    borderColor: "{form.field.focus.border.color}",
                    hoverBackground: "{primary.hover.background}",
                    activeBackground: "{primary.active.background}",
                    hoverBorderColor: "{info.active.border.color}",
                    activeBorderColor: "{primary.active.background}"
                },
                success: {
                    color: "{success.color}",
                    focusRing: {
                        color: "{success.focus.ring.color}"
                    },
                    background: "{success.background}",
                    hoverColor: "{success.color}",
                    activeColor: "{success.color}",
                    borderColor: "{success.border.color}",
                    hoverBackground: "{success.hover.background}",
                    activeBackground: "{success.active.background}",
                    hoverBorderColor: "{success.border.color}",
                    activeBorderColor: "{success.active.border.color}"
                },
                contrast: {
                    color: "{surface.950}",
                    focusRing: {
                        color: "{surface.0}"
                    },
                    background: "{surface.0}",
                    hoverColor: "{surface.950}",
                    activeColor: "{surface.950}",
                    borderColor: "{surface.0}",
                    hoverBackground: "{form.field.filled.hover.background}",
                    activeBackground: "{navigation.item.active.background}",
                    hoverBorderColor: "{surface.50}",
                    activeBorderColor: "{surface.100}"
                },
                secondary: {
                    color: "{form.field.disabled.color}",
                    focusRing: {
                        color: "{form.field.hover.border.color}"
                    },
                    background: "{form.field.background}",
                    hoverColor: "{form.field.disabled.color}",
                    activeColor: "{form.field.disabled.color}",
                    borderColor: "{form.field.hover.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}",
                    hoverBorderColor: "{form.field.hover.border.color}",
                    activeBorderColor: "{form.field.hover.border.color}"
                }
            },
            text: {
                help: {
                    color: "{help.color}",
                    hoverBackground: "{help.soft.background}",
                    activeBackground: "{help.soft.background}"
                },
                info: {
                    color: "{info.color}",
                    hoverBackground: "{highlight.color}",
                    activeBackground: "{highlight.color}"
                },
                warn: {
                    color: "{warn.color}",
                    hoverBackground: "{warn.soft.background}",
                    activeBackground: "{warn.soft.background}"
                },
                plain: {
                    color: "{form.field.focus.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                },
                danger: {
                    color: "{form.field.invalid.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                },
                primary: {
                    color: "{primary.color}",
                    hoverBackground: "{highlight.color}",
                    activeBackground: "{highlight.color}"
                },
                success: {
                    color: "{success.color}",
                    hoverBackground: "{success.soft.background}",
                    activeBackground: "{success.soft.background}"
                },
                contrast: {
                    color: "{primary.contrast.color}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{primary.active.background}"
                },
                secondary: {
                    color: "{form.field.disabled.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                }
            },
            outlined: {
                help: {
                    color: "{help.color}",
                    borderColor: "{help.soft.border.color}",
                    hoverBackground: "{help.soft.background}",
                    activeBackground: "{help.soft.background}"
                },
                info: {
                    color: "{info.color}",
                    borderColor: "{info.soft.border.color}",
                    hoverBackground: "{highlight.color}",
                    activeBackground: "{highlight.color}"
                },
                warn: {
                    color: "{warn.color}",
                    borderColor: "{warn.soft.border.color}",
                    hoverBackground: "{warn.soft.background}",
                    activeBackground: "{warn.soft.background}"
                },
                plain: {
                    color: "{surface.0}",
                    borderColor: "{surface.600}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{primary.active.background}"
                },
                danger: {
                    color: "{danger.color}",
                    borderColor: "{danger.soft.border.color}",
                    hoverBackground: "{danger.soft.background}",
                    activeBackground: "{danger.soft.background}"
                },
                primary: {
                    color: "{form.field.focus.border.color}",
                    borderColor: "{form.field.focus.border.color}",
                    hoverBackground: "{form.field.background}",
                    activeBackground: "{form.field.background}"
                },
                success: {
                    color: "{success.color}",
                    borderColor: "{success.soft.border.color}",
                    hoverBackground: "{success.soft.background}",
                    activeBackground: "{success.soft.background}"
                },
                contrast: {
                    color: "{primary.contrast.color}",
                    borderColor: "{surface.500}",
                    hoverBackground: "{surface.800}",
                    activeBackground: "{primary.active.background}"
                },
                secondary: {
                    color: "{mask.color}",
                    borderColor: "{primary.active.background}",
                    hoverBackground: "{form.field.filled.hover.background}",
                    activeBackground: "{surface.50}"
                }
            }
        }
    }
} satisfies ButtonDesignTokens;