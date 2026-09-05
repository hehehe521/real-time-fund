'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MobileBottomNav from './MobileBottomNav';
// 注意：已删除 import PcSideNav

export default function NavLayout({
  children,
  mainTab,
  setMainTab,
  isMobile,
  containerRef,
  containerClassName,
  containerWidth,
  showThemeTransition,
  setShowThemeTransition,
  mobileBottomNavHidden
}) {
  return (
    <>
      {/* 已移除 <PcSideNav /> */}
      <div ref={containerRef} className={containerClassName} style={{ width: isMobile ? '100%' : containerWidth }}>
        <AnimatePresence>
          {showThemeTransition && (
            <motion.div
              className="theme-transition-overlay"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="theme-transition-circle"
                initial={{ scale: 0, opacity: 0.5 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                onAnimationComplete={() => setShowThemeTransition(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {children}

        {isMobile && (
          <MobileBottomNav
            value={mainTab}
            onChange={setMainTab}
            hidden={mobileBottomNavHidden && mainTab === 'home'}
          />
        )}
      </div>
    </>
  );
}
