import Scrollbar from 'smooth-scrollbar';
export const SmoothScroll = () => {
    const options = {
        "damping": .05
    }
    Scrollbar.init(document.querySelector('body'), options);
}
