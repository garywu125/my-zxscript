#!/usr/bin/env dx

try {
    await $`exit 1`
} catch (p) {
    console.log(`Exit code: ${p.exitCode}`)
    console.log(`Error: ${p.stderr}`)
}