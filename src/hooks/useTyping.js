import { useEffect, useState } from 'react';

// Cycles through words with type → pause → delete → next.
export function useTyping(words, typeSpeed = 70, deleteSpeed = 40, pause = 1600) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0] ?? '');
      return undefined;
    }
    const word = words[wordIndex % words.length] ?? '';
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) {
      delay = pause;
    } else if (deleting && text === '') {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, wordIndex, deleting, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
