/*
 * commands.ts
 * Cocython (c) Microsoft Corporation.
 * Licensed under the MIT license.
 * Author: Eric Traut
 *
 * Command identifier strings.
 */

export const enum Commands {
    createTypeStub = 'cython.createtypestub',
    restartServer = 'cython.restartserver',
    orderImports = 'cython.organizeimports',
    addMissingOptionalToParam = 'cython.addoptionalforparam',
    unusedImport = 'cython.unusedImport',
}
