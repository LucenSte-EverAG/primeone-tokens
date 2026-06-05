export default {
    icon: {
        lg: {
            size: "1.0938rem"
        },
        sm: {
            size: "0.875rem"
        },
        size: "{form.field.icon.size}"
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
        borderWidth: "{form.field.border.width}",
        borderRadius: "{form.field.border.radius}",
        transitionDuration: "{transition.duration}"
    },
    text: {
        lg: {
            fontSize: "0.9844rem"
        },
        sm: {
            fontSize: "0.7656rem"
        },
        fontSize: "0.875rem",
        fontWeight: "{typography.weight.medium}"
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
    simple: {
        content: {
            padding: "{form.field.simple.content.padding}"
        }
    },
    content: {
        lg: {
            padding: "0.5469rem {form.field.content.lg.padding.x}"
        },
        sm: {
            padding: "{form.field.content.sm.padding.y} 0.5469rem"
        },
        gap: "{form.field.content.gap}",
        padding: "0.4375rem {form.field.content.padding.x}"
    },
    success: {
        shadow: "0 4px 8px 0 #0108040a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    contrast: {
        shadow: "0 4px 8px 0 #0000010a",
        closeButton: {
            focusRing: {
                shadow: "none"
            }
        }
    },
    outlined: {
        root: {
            borderWidth: "{form.field.outlined.border.width}"
        }
    },
    closeIcon: {
        lg: {
            size: "{form.field.close.icon.lg.size}"
        },
        sm: {
            size: "{form.field.close.icon.sm.size}"
        },
        size: "{form.field.close.icon.size}"
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
        width: "{form.field.close.button.width}",
        height: "{form.field.close.button.height}",
        focusRing: {
            style: "{focus.ring.style}",
            width: "{focus.ring.width}",
            offset: "{focus.ring.offset}"
        },
        borderRadius: "{form.field.close.button.border.radius}"
    },
    colorScheme: {
        dark: {
            info: {
                color: "{info.active.background}",
                simple: {
                    color: "{primary.color}"
                },
                outlined: {
                    color: "{primary.color}",
                    borderColor: "{form.field.focus.border.color}"
                },
                background: "{highlight.color}",
                borderColor: "{info.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{primary.color}"
                    },
                    hoverBackground: "{highlight.color}"
                }
            },
            warn: {
                color: "{warn.color}",
                simple: {
                    color: "{warn.color}"
                },
                outlined: {
                    color: "{warn.color}",
                    borderColor: "{warn.border.color}"
                },
                background: "{warn.soft.background}",
                borderColor: "{warn.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{warn.focus.ring.color}"
                    },
                    hoverBackground: "{warn.soft.background}"
                }
            },
            error: {
                color: "{danger.color}",
                simple: {
                    color: "{danger.color}"
                },
                outlined: {
                    color: "{danger.color}",
                    borderColor: "{danger.border.color}"
                },
                background: "{danger.soft.background}",
                borderColor: "{danger.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{danger.focus.ring.color}"
                    },
                    hoverBackground: "{danger.soft.background}"
                }
            },
            success: {
                color: "{success.color}",
                simple: {
                    color: "{success.color}"
                },
                outlined: {
                    color: "{success.color}",
                    borderColor: "{success.border.color}"
                },
                background: "{success.soft.background}",
                borderColor: "{success.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{success.focus.ring.color}"
                    },
                    hoverBackground: "{success.soft.background}"
                }
            },
            contrast: {
                color: "{surface.950}",
                simple: {
                    color: "{surface.0}"
                },
                outlined: {
                    color: "{surface.0}",
                    borderColor: "{surface.0}"
                },
                background: "{surface.0}",
                borderColor: "{surface.50}",
                closeButton: {
                    focusRing: {
                        color: "{surface.950}"
                    },
                    hoverBackground: "{form.field.filled.hover.background}"
                }
            },
            secondary: {
                color: "{mask.color}",
                simple: {
                    color: "{mask.color}"
                },
                outlined: {
                    color: "{mask.color}",
                    borderColor: "{content.border.color}"
                },
                background: "{surface.800}",
                borderColor: "{primary.active.background}",
                closeButton: {
                    focusRing: {
                        color: "{mask.color}"
                    },
                    hoverBackground: "{primary.active.background}"
                }
            }
        },
        light: {
            info: {
                color: "{info.active.background}",
                simple: {
                    color: "{primary.color}"
                },
                outlined: {
                    color: "{primary.color}",
                    borderColor: "{form.field.focus.border.color}"
                },
                background: "{highlight.color}",
                borderColor: "{info.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{primary.color}"
                    },
                    hoverBackground: "{highlight.color}"
                }
            },
            warn: {
                color: "{warn.color}",
                simple: {
                    color: "{warn.color}"
                },
                outlined: {
                    color: "{warn.color}",
                    borderColor: "{warn.border.color}"
                },
                background: "{warn.soft.background}",
                borderColor: "{warn.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{warn.focus.ring.color}"
                    },
                    hoverBackground: "{warn.soft.background}"
                }
            },
            error: {
                color: "{danger.color}",
                simple: {
                    color: "{danger.color}"
                },
                outlined: {
                    color: "{danger.color}",
                    borderColor: "{danger.border.color}"
                },
                background: "{danger.soft.background}",
                borderColor: "{danger.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{danger.focus.ring.color}"
                    },
                    hoverBackground: "{danger.soft.background}"
                }
            },
            success: {
                color: "{success.color}",
                simple: {
                    color: "{success.color}"
                },
                outlined: {
                    color: "{success.color}",
                    borderColor: "{success.border.color}"
                },
                background: "{success.soft.background}",
                borderColor: "{success.soft.border.color}",
                closeButton: {
                    focusRing: {
                        color: "{success.focus.ring.color}"
                    },
                    hoverBackground: "{success.soft.background}"
                }
            },
            contrast: {
                color: "{surface.950}",
                simple: {
                    color: "{surface.0}"
                },
                outlined: {
                    color: "{surface.0}",
                    borderColor: "{surface.0}"
                },
                background: "{surface.0}",
                borderColor: "{surface.50}",
                closeButton: {
                    focusRing: {
                        color: "{surface.950}"
                    },
                    hoverBackground: "{form.field.filled.hover.background}"
                }
            },
            secondary: {
                color: "{mask.color}",
                simple: {
                    color: "{mask.color}"
                },
                outlined: {
                    color: "{mask.color}",
                    borderColor: "{content.border.color}"
                },
                background: "{surface.800}",
                borderColor: "{primary.active.background}",
                closeButton: {
                    focusRing: {
                        color: "{mask.color}"
                    },
                    hoverBackground: "{primary.active.background}"
                }
            }
        }
    }
}