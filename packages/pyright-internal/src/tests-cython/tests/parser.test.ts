/*
 * parser.test.ts
 */

import * as assert from 'assert';

import { DiagnosticSink } from '../../common/diagnosticSink';
import * as TestUtils from '../../tests/testUtils';

function sampleFile(name: string): string {
    return `cython/${name}.pyx`
}

test('Declaration', () => {
    const diagSink = new DiagnosticSink();
    const parseInfo = TestUtils.parseSampleFile(sampleFile("declaration"), diagSink);

    assert.equal(diagSink.fetchAndClear().length, 0);
    assert.equal(parseInfo.parseResults.parseTree.statements.length, 23);
});

test('ChainedDeclaration', () => {
    const diagSink = new DiagnosticSink();
    const parseInfo = TestUtils.parseSampleFile(sampleFile("chainedDeclaration"), diagSink);
    let total = 0;

    assert.equal(diagSink.fetchAndClear().length, 0);
    assert.equal(parseInfo.parseResults.parseTree.statements.length, 8);
});

test('Function', () => {
    const diagSink = new DiagnosticSink();
    const parseInfo = TestUtils.parseSampleFile(sampleFile("function"), diagSink);

    assert.equal(diagSink.fetchAndClear().length, 0);
    assert.equal(parseInfo.parseResults.parseTree.statements.length, 12);
});

test('FunctionViewArrayReturn', () => {
    const diagSink = new DiagnosticSink();
    const parseInfo = TestUtils.parseSampleFile(sampleFile("functionViewArrayReturn"), diagSink);

    assert.equal(diagSink.fetchAndClear().length, 0);
    assert.equal(parseInfo.parseResults.parseTree.statements.length, 5);
});

test('TemplateDeclaration', () => {
    const diagSink = new DiagnosticSink();
    const parseInfo = TestUtils.parseSampleFile(sampleFile("templateDeclaration"), diagSink);

    assert.equal(diagSink.fetchAndClear().length, 0);
    assert.equal(parseInfo.parseResults.parseTree.statements.length, 6);
});

test('SizeofCall', () => {
    const diagSink = new DiagnosticSink();
    const parseInfo = TestUtils.parseSampleFile(sampleFile("sizeofCall"), diagSink);

    assert.equal(diagSink.fetchAndClear().length, 0);
    assert.equal(parseInfo.parseResults.parseTree.statements.length, 2);
});
