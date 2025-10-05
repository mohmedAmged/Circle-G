export const handleGetInTouch = () => {
    const phoneNumber = '201005322028';
    const message = 'Hello! I want to get in touch.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
};