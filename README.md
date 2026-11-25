# One Line, No Deadline Met

![Competition](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce.svg)
![Rank](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/veneraxyz/u-markk-st-one-line-no-deadline-met-6adc00ce-entry-v1/rank.svg)
![Reward](https://make.fun/badge/u-markk-st-one-line-no-deadline-met-6adc00ce/veneraxyz/u-markk-st-one-line-no-deadline-met-6adc00ce-entry-v1/reward.svg)

Entry for the [One Line, No Deadline Met](https://make.fun/competitions/u-markk-st-one-line-no-deadline-met-6adc00ce) competition on make.fun.

## What it does

`main.ts` writes a single-line joke — an excuse for a missed deadline — to `entry.txt` in the output directory (from the `MAKEFUN_OUTPUT_DIR` environment variable, falling back to `/output`).

## Run

```sh
npx tsx main.ts
```

The output is one line, at most 200 characters, with a validation guard that throws unless the entry is exactly one non-blank line of 1–200 characters.
