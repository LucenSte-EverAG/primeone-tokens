# primeone-tokens
temp primeone-tokens repo (will have to be moved/reopened in Ever.Ag)

# PrimeOne Tokens

A custom sync provider for [Tokens Studio for Figma](https://tokens.studio), enabling seamless synchronization of design tokens between Figma and external storage systems.

## Overview

This repository implements a sync provider that integrates with the Tokens Studio Figma plugin, allowing design teams to store, version, and sync their design tokens outside of Figma files. This creates a shared source of truth for design tokens that can be accessed by both designers and developers.

## Features

- **Remote Token Storage**: Store design tokens externally instead of keeping them only in Figma files
- **Version Control**: Track changes to design tokens over time
- **Team Collaboration**: Enable multiple designers and developers to work with the same token definitions
- **Sync Integration**: Real-time synchronization between Figma and the token storage system

## Integration with Tokens Studio

This sync provider follows the [Tokens Studio remote storage specification](https://docs.tokens.studio/token-storage/remote), supporting:

- Push and pull operations for token synchronization
- Branch switching for version control workflows
- Multi-file sync capabilities
- Real-time change detection

For more information about Tokens Studio and available sync providers, visit [docs.tokens.studio](https://docs.tokens.studio).
