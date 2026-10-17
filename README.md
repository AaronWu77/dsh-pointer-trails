---
kind: package-bundle
description: "Ambient pointer trails for the Harness Web client."
---
# Pointer Trails

English | [中文](README.zh.md)

## Summary

A click-through canvas draws a soft ribbon behind the Web client. It follows the pointer over the layer and drifts when the pointer leaves. It does not intercept input or modify conversations.

## Contents

- [Composition](#composition)
- [Motion and lifecycle](#motion-and-lifecycle)
- [Development](#development)
- [Model Experience](#model-experience)
- [Known Limitations and Deferred Work](#known-limitations-and-deferred-work)

## Composition

The [bundle patch](cordis.patch.yml) mounts the no-op Host entry; the manifest declares the Web client entry. The Host entry is required for this bundle composition and is not dead code. The package exposes no runtime configuration or persistent storage.

## Motion and lifecycle

The client registers the canvas through a Cordis effect. Disposal cancels animation, removes listeners, disconnects the resize observer and removes the layer. A hidden document skips painting. Reduced-motion preference is read at mount: when enabled, the client draws one still frame instead of starting the animation loop.

## Development

The build emits an ESM Host module with declarations and a browser factory for the Harness module loader. The canvas uses no stylesheets; its build does not require a CSS or Tailwind compiler. Shared browser-module checks remain in the build configuration.

## Model Experience

The package registers no tools and adds no model context. It consumes no model tokens and makes no KV-cache claim.

## Known Limitations and Deferred Work

The package targets the local fixed-host integration. There is no cross-version compatibility matrix or automated visual acceptance test. A reduced-motion preference change requires remounting the client entry. Animation parameters are not user-configurable.
