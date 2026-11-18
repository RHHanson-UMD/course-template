/** Pure numeric practice checker; no DOM, dependencies or instructor content. */
export function checkNumericAnswer(raw, expected, tolerance = 1e-9) {
  if (!Number.isFinite(expected) || !Number.isFinite(tolerance) || tolerance < 0) {
    throw new RangeError('Expected answer and tolerance must be finite; tolerance cannot be negative');
  }
  if (typeof raw !== 'string') return { status: 'invalid' };
  const trimmed = raw.trim();
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(trimmed)) {
    return { status: 'invalid' };
  }
  const value = Number(trimmed);
  if (!Number.isFinite(value)) return { status: 'invalid' };
  return { status: Math.abs(value - expected) <= tolerance ? 'correct' : 'incorrect', value };
}
