import { DotGothic16, Noto_Color_Emoji } from 'next/font/google';

export const dotGothic16 = DotGothic16({
  weight: '400',
  subsets: ['latin'],
});

// Noto Color Emoji は COLRv1 で配信されており Safari(iOS/macOS) が描画できないため、
// className を直接使わず CSS 変数として読み込み、globals.css の .emoji で
// OS 標準の絵文字フォントの後ろにフォールバックとして並べる。
export const notoColorEmoji = Noto_Color_Emoji({
  weight: '400',
  subsets: ['emoji'],
  variable: '--font-noto-color-emoji',
});
