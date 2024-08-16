import React, { useState, useEffect } from "react";

export default function FadeTransition({ children }) {
    const [visible, setVisible] = useState(true);
    const [currentText, setCurrentText] = useState(children);

    useEffect(() => {
        if (children !== currentText) {
            setVisible(false);
        }
    }, [children, currentText]);

    const onAnimationEnd = () => {
        if (!visible) {
            setCurrentText(children);
            setVisible(true);
        }
    };

    return (
        <div
            style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onTransitionEnd={onAnimationEnd}
        >
            {currentText}
        </div>
    );
}
