export interface ScoreInputs { performance: number; engagementQuality: number; consistency: number; trend: number }
export function computeVWScore(inp: ScoreInputs): number {
  const score = (inp.performance*0.4 + inp.engagementQuality*0.3 + inp.consistency*0.2 + inp.trend*0.1) * 100
  return Math.round(score)
}
