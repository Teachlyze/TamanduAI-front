'use client';

import { toast as sonnerToast } from 'sonner';

type ToastType = 'default' | 'success' | 'error' | 'warning' | 'info';

type ToastOptions = {
  /**
   * Tipo do toast
   * @default 'default'
   */
  type?: ToastType;
  /**
   * Descrição adicional do toast
   */
  description?: React.ReactNode;
  /**
   * Duração em milissegundos que o toast deve ser exibido
   * @default 5000
   */
  duration?: number;
  /**
   * Posição do toast na tela
   * @default 'top-right'
   */
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  /**
   * Ação personalizada (botão) no toast
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  /**
   * Se verdadeiro, o toast não será fechado automaticamente
   * @default false
   */
  persistent?: boolean;
  /**
   * Ícone personalizado
   */
  icon?: React.ReactNode;
  /**
   * Classe CSS personalizada para o toast
   */
  className?: string;
  /**
   * Callback chamado quando o toast é fechado
   */
  onDismiss?: () => void;
};

/**
 * Hook personalizado para exibir notificações toast
 * 
 * @example
 * ```tsx
 * const { toast } = useToast();
 * 
 * // Uso básico
 * toast('Mensagem de sucesso', { type: 'success' });
 * 
 * // Com ação personalizada
 * toast('Item movido para a lixeira', {
 *   type: 'success',
 *   action: {
 *     label: 'Desfazer',
 *     onClick: () => handleUndo()
 *   }
 * });
 * ```
 */
export function useToast() {
  /**
   * Exibe uma notificação toast
   */
  const toast = (message: string, options?: ToastOptions) => {
    const {
      type = 'default',
      description,
      duration = 5000,
      position = 'top-right',
      action,
      persistent = false,
      icon,
      className,
      onDismiss,
    } = options || {};
    
    const toastOptions = {
      duration: persistent ? Number.POSITIVE_INFINITY : duration,
      description,
      position,
      action: action ? {
        label: action.label,
        onClick: action.onClick,
      } : undefined,
      icon,
      className,
      onDismiss,
    };

    switch (type) {
      case 'success':
        return sonnerToast.success(message, toastOptions);
      case 'error':
        return sonnerToast.error(message, toastOptions);
      case 'warning':
        return sonnerToast.warning(message, toastOptions);
      case 'info':
        return sonnerToast.info(message, toastOptions);
      default:
        return sonnerToast(message, toastOptions);
    }
  };

  /**
   * Fecha todas as notificações toast abertas
   */
  const dismissAllToasts = () => sonnerToast.dismiss();

  /**
   * Fecha uma notificação toast específica pelo ID
   */
  const dismissToast = (toastId: string | number) => sonnerToast.dismiss(toastId);

  /**
   * Carrega uma promessa e exibe um toast de carregamento que é atualizado com o resultado
   */
  const promise = <T,>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: unknown) => string);
    },
    options?: Omit<ToastOptions, 'type' | 'description'>
  ) => {
    const { loading, success, error } = messages;
    
    return sonnerToast.promise(promise, {
      loading,
      success: (data) => (typeof success === 'function' ? success(data) : success),
      error: (err) => (typeof error === 'function' ? error(err) : error),
    });
  };

  return {
    toast,
    dismissAllToasts,
    dismissToast,
    promise,
  };
}

export { Toaster } from 'sonner';
