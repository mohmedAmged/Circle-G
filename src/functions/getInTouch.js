export const handleGetInTouch = () => {
    const phoneNumber = '201014737092';
    const message = 'Hello! I want to get in touch.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappUrl;
};