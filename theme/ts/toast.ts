import type { ToastDesignTokens } from '@primeuix/themes/types/toast';

 export default {
    icon: {
        size: "{action.icon.size}"
    },
    info: {
        shadow: "0 4px 8px 0 #02050a0a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    root: {
        width: "{border.width}",
        borderWidth: "{border.width}",
        borderRadius: "{action.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    text: {
        gap: "{text.gap}"
    },
    warn: {
        shadow: "0 4px 8px 0 #0907000a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    error: {
        shadow: "0 4px 8px 0 #0a03030a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    detail: {
        fontSize: "0.7656rem",
        fontWeight: "{typography.weight.medium}"
    },
    content: {
        gap: "{content.gap}",
        padding: "0.6563rem"
    },
    success: {
        shadow: "0 4px 8px 0 #0108040a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    summary: {
        fontSize: "0.875rem",
        fontWeight: "{typography.weight.medium}"
    },
    contrast: {
        shadow: "0 4px 8px 0 #0000010a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    closeIcon: {
        size: "{close.icon.size}"
    },
    secondary: {
        shadow: "0 4px 8px 0 #0405060a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    closeButton: {
        width: "{close.button.width}",
        height: "{close.button.height}",
        focusRing: {
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}"
        },
        borderRadius: "0.7656rem"
    },
    colorScheme: {
        dark: {
            info: {
                color: "{info.active.background}",
                background: "{highlight.color}",
                borderColor: "{info.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{primary.color}"
                    },
                    hoverBackground: "{highlight.color}"
                },
                detailColor: "{primary.color}"
            },
            root: {
                blur: "10px"
            },
            warn: {
                color: "{warn.active.background}",
                background: "{warn.soft.background}",
                borderColor: "{warn.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{warn.focus.ring.color}"
                    },
                    hoverBackground: "{warn.soft.background}"
                },
                detailColor: "{primary.color}"
            },
            error: {
                color: "{danger.color}",
                background: "{danger.soft.background}",
                borderColor: "{danger.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{danger.focus.ring.color}"
                    },
                    hoverBackground: "{danger.soft.background}"
                },
                detailColor: "{primary.color}"
            },
            success: {
                color: "{success.color}",
                background: "{success.soft.background}",
                borderColor: "{success.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{success.focus.ring.color}"
                    },
                    hoverBackground: "{success.soft.background}"
                },
                detailColor: "{primary.color}"
            },
            contrast: {
                color: "{surface.50}",
                background: "{surface.950}",
                borderColor: "{surface.950}",
                closeButton: {
                    focusRing: {
                        color: "{surface.950}"
                    },
                    hoverBackground: "{form.field.filled.hover.background}"
                },
                detailColor: "{surface.0}"
            },
            secondary: {
                color: "{mask.color}",
                background: "{surface.800}",
                borderColor: "{primary.active.background}",
                closeButton: {
                    focusRing: {
                        color: "{mask.color}"
                    },
                    hoverBackground: "{primary.active.background}"
                },
                detailColor: "{surface.0}"
            }
        },
        light: {
            info: {
                color: "{info.active.background}",
                background: "{highlight.color}",
                borderColor: "{info.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{primary.color}"
                    },
                    hoverBackground: "{highlight.color}"
                },
                detailColor: "{primary.color}"
            },
            root: {
                blur: "1.5px"
            },
            warn: {
                color: "{warn.active.background}",
                background: "{warn.soft.background}",
                borderColor: "{warn.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{warn.focus.ring.color}"
                    },
                    hoverBackground: "{warn.soft.background}"
                },
                detailColor: "{primary.color}"
            },
            error: {
                color: "{danger.color}",
                background: "{danger.soft.background}",
                borderColor: "{danger.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{danger.focus.ring.color}"
                    },
                    hoverBackground: "{danger.soft.background}"
                },
                detailColor: "{primary.color}"
            },
            success: {
                color: "{success.color}",
                background: "{success.soft.background}",
                borderColor: "{success.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{success.focus.ring.color}"
                    },
                    hoverBackground: "{success.soft.background}"
                },
                detailColor: "{primary.color}"
            },
            contrast: {
                color: "{surface.50}",
                background: "{surface.950}",
                borderColor: "{surface.950}",
                closeButton: {
                    focusRing: {
                        color: "{surface.950}"
                    },
                    hoverBackground: "{form.field.filled.hover.background}"
                },
                detailColor: "{surface.0}"
            },
            secondary: {
                color: "{mask.color}",
                background: "{surface.800}",
                borderColor: "{primary.active.background}",
                closeButton: {
                    focusRing: {
                        color: "{mask.color}"
                    },
                    hoverBackground: "{primary.active.background}"
                },
                detailColor: "{surface.0}"
            }
        }
    }
} satisfies ToastDesignTokens;