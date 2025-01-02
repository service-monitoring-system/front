/**
 * 다양한 스크롤 이벤트를 사용할 수 있는 hook입니다.
 *
 * @returns {{ disableScroll: () => void; enableScroll: () => void }}
 */
export function useScroll(): { disableScroll: () => void; enableScroll: () => void } {
  let scrollPosition = 0;

  /**
   * 스크롤을 비활성화합니다.
   *
   * @returns {void}
   */
  const disableScroll = (): void => {
    scrollPosition = window.scrollY;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
  };

  /**
   * 스크롤을 활성화합니다.
   *
   * @returns {void}
   */
  const enableScroll = (): void => {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollPosition);
  };

  return { disableScroll, enableScroll };
}
