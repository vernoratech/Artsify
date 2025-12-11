import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Animation variants for different effects
 */
const animations = {
  fadeUp: {
    hidden: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    hidden: 'opacity-0 -translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  fadeIn: {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  scaleUp: {
    hidden: 'opacity-0 scale-95',
    visible: 'opacity-100 scale-100',
  },
  blur: {
    hidden: 'opacity-0 blur-sm',
    visible: 'opacity-100 blur-0',
  },
};

/**
 * AnimateOnScroll - Wrapper component for scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.animation - Animation type: 'fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 'fadeIn', 'scaleUp', 'blur'
 * @param {number} props.delay - Delay in milliseconds (default: 0)
 * @param {number} props.duration - Duration in milliseconds (default: 700)
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.threshold - Intersection threshold (default: 0.1)
 * @param {string} props.as - HTML element to render (default: 'div')
 */
const AnimateOnScroll = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.1,
  as: Component = 'div',
  ...props
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });
  const anim = animations[animation] || animations.fadeUp;

  return (
    <Component
      ref={ref}
      className={`transition-all ease-out ${isVisible ? anim.visible : anim.hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Stagger container for animating multiple children with staggered delays
 */
export const StaggerContainer = ({
  children,
  animation = 'fadeUp',
  staggerDelay = 100,
  baseDelay = 0,
  duration = 700,
  className = '',
  threshold = 0.1,
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const anim = animations[animation] || animations.fadeUp;
        const delay = baseDelay + index * staggerDelay;

        return React.cloneElement(child, {
          className: `${child.props.className || ''} transition-all ease-out ${isVisible ? anim.visible : anim.hidden}`,
          style: {
            ...child.props.style,
            transitionDuration: `${duration}ms`,
            transitionDelay: `${delay}ms`,
          },
        });
      })}
    </div>
  );
};

export default AnimateOnScroll;
