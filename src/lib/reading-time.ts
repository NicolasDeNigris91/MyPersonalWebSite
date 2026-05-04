import type { CaseStudy } from '@/types/case-study';

const WORDS_PER_MINUTE = 220;

function wordsIn(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Rough reading time estimate for a case study, computed from the prose
 * fields (intro, decisions, tradeoffs, closing, pull quote). Diagram
 * captions and code-like content are not counted because they are scanned
 * rather than read.
 *
 * Returns whole minutes, never less than 1 - if the case study has any
 * prose at all, the reader spends at least a minute on it.
 */
export function estimateReadingMinutes(study: CaseStudy): number {
  const wordCount =
    wordsIn(study.intro) +
    wordsIn(study.closing) +
    wordsIn(study.pullQuote.body) +
    study.decisions.reduce(
      (sum, d) => sum + wordsIn(d.label) + wordsIn(d.body),
      0,
    ) +
    study.tradeoffs.reduce(
      (sum, t) => sum + wordsIn(t.label) + wordsIn(t.body),
      0,
    );

  const minutes = Math.round(wordCount / WORDS_PER_MINUTE);
  return Math.max(1, minutes);
}
