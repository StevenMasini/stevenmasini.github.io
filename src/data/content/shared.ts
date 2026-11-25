/** Site facts identical in every Locale; spread into each Locale's siteMetadata. */
export const baseMetadata = {
  name: 'Steven Masini',
  monogram: 'SM',
  siteUrl: 'https://stevenmasini.com',
  linkedinUrl: 'https://www.linkedin.com/in/stevenmasini',
  linkedinDisplay: 'linkedin.com/in/stevenmasini',
  githubUrl: 'https://github.com/StevenMasini',
  formSubmitToken: 'f87fcc8becf3b1ec96cc073c7f5cf448',
  googleAnalyticsId: 'G-7CND8FWF9R',
  copyrightYear: '2026',
  keywords: [
    'Steven Masini',
    'iOS Developer',
    'Senior iOS Engineer',
    'Swift Developer',
    'Backend Developer',
    'Taipei',
    'Taiwan',
    'Objective-C',
    'SwiftUI',
    'UIKit',
    'Core Data',
    'Node.js',
    'Mobile Architecture',
  ],
};

/**
 * Start of Steven's professional career (first role on the Experience page:
 * May 2011). "Years of experience" figures are computed from it at build time.
 */
export const careerStart = { year: 2011, month: 5 } as const;

/** Whole years of experience at `now`, e.g. 15 between May 2026 and April 2027. */
export function yearsOfExperienceCount(now: Date = new Date()): number {
  const months = (now.getFullYear() - careerStart.year) * 12 + (now.getMonth() + 1 - careerStart.month);
  return Math.floor(months / 12);
}
