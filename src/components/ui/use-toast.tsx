'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { toast as sonnerToast } from 'sonner';

type Toast = {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
};

export function useToast() {
  const router = useRouter();

  const toast = React.useCallback(
    ({ title, description, variant = 'default', duration = 5000, action }: Toast) => {
      const baseOptions = {
        duration,
        position: 'top-right' as const,
        className: 'font-sans',
      };

      const toastOptions = {
        ...baseOptions,
        description,
        action: action
          ? {
              label: action.label,
              onClick: () => {
                action.onClick();
              },
            }
          : undefined,
      };

      switch (variant) {
        case 'destructive':
          sonnerToast.error(title, {
            ...toastOptions,
            className: 'bg-destructive text-destructive-foreground border-destructive/50',
          });
          break;
        case 'success':
          sonnerToast.success(title, {
            ...toastOptions,
            className: 'bg-green-600 text-white border-green-700/50',
          });
          break;
        case 'warning':
          sonnerToast.warning(title, {
            ...toastOptions,
            className: 'bg-yellow-500 text-white border-yellow-600/50',
          });
          break;
        case 'info':
          sonnerToast.info(title, {
            ...toastOptions,
            className: 'bg-blue-500 text-white border-blue-600/50',
          });
          break;
        default:
          sonnerToast(title, toastOptions);
      }
    },
    []
  );

  const dismissAllToasts = React.useCallback(() => {
    sonnerToast.dismiss();
  }, []);

  const promiseToast = React.useCallback(
    <T,>(
      promise: Promise<T>,
      {
        loading,
        success,
        error,
        ...opts
      }: {
        loading: string;
        success: string | ((data: T) => string);
        error: string | ((error: Error) => string);
      } & Omit<Toast, 'title' | 'description'>
    ) => {
      return sonnerToast.promise(promise, {
        loading,
        success: (data) => (typeof success === 'function' ? success(data) : success),
        error: (err) => (typeof error === 'function' ? error(err) : error),
        ...opts,
      });
    },
    []
  );

  return {
    toast,
    dismissAllToasts,
    promise: promiseToast,
  };
}

export type { Toast };
