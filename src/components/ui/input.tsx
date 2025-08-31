import * as React from 'react';
import { cn } from '@/lib/utils';

/**
 * Tamanhos disponíveis para o input
 */
type InputSize = 'sm' | 'default' | 'lg';

/**
 * Variantes de estilo disponíveis para o input
 */
type InputVariant = 'default' | 'filled' | 'outline' | 'ghost';

/**
 * Propriedades do componente Input
 * 
 * @example
 * ```tsx
 * // Uso básico
 * <Input placeholder="Digite seu nome" />
 * 
 * // Com rótulo e ícone
 * <Input 
 *   label="E-mail" 
 *   type="email" 
 *   startIcon={<Mail className="h-4 w-4" />} 
 *   placeholder="seu@email.com"
 * />
 * 
 * // Com validação de erro
 * <Input 
 *   label="Senha" 
 *   type="password" 
 *   error={true}
 *   errorMessage="A senha deve ter pelo menos 8 caracteres"
 * />
 * ```
 */
// Removemos 'size' e 'prefix' das propriedades estendidas para evitar conflitos
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'> {
  /**
   * Se verdadeiro, exibe um estado de erro no input
   * @default false
   */
  error?: boolean;
  
  /**
   * Mensagem de erro a ser exibida abaixo do input
   */
  errorMessage?: string;
  
  /**
   * Rótulo do input
   */
  label?: string;
  
  /**
   * Ícone a ser exibido no início do input
   */
  startIcon?: React.ReactNode;
  
  /**
   * Ícone a ser exibido no final do input
   */
  endIcon?: React.ReactNode;
  
  /**
   * Elemento a ser exibido como prefixo do input (antes do valor)
   */
  prefix?: React.ReactNode;
  
  /**
   * Elemento a ser exibido como sufixo do input (depois do valor)
   */
  suffix?: React.ReactNode;
  
  /**
   * Texto de ajuda a ser exibido abaixo do input
   */
  helperText?: string;
  
  /**
   * Se verdadeiro, o input ocupa toda a largura disponível
   * @default true
   */
  fullWidth?: boolean;
  
  /**
   * Tamanho do input
   * @default 'default'
   */
  size?: InputSize;
  
  /**
   * Variante de estilo do input
   * @default 'default'
   */
  variant?: InputVariant;
  
  /**
   * Se verdadeiro, adiciona um indicador de carregamento
   * @default false
   */
  loading?: boolean;
  
  /**
   * Se verdadeiro, o input é somente leitura
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * Se verdadeiro, o input é desabilitado
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Classe CSS para o container do input
   */
  containerClassName?: string;
  
  /**
   * Classe CSS para o wrapper do input (inclui o input e os ícones)
   */
  wrapperClassName?: string;
  
  /**
   * Se verdadeiro, adiciona borda ao redor do input
   * @default true
   */
  bordered?: boolean;
  
  /**
   * Se verdadeiro, adiciona sombra ao input
   * @default false
   */
  shadow?: boolean;
  
  /**
   * Nível de arredondamento das bordas
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      error = false,
      errorMessage,
      label,
      startIcon,
      endIcon,
      prefix,
      suffix,
      helperText,
      id: idProp,
      fullWidth = true,
      size = 'default',
      variant = 'default',
      loading = false,
      disabled = false,
      readOnly = false,
      containerClassName,
      wrapperClassName,
      bordered = true,
      shadow = false,
      rounded = 'md',
      ...props
    },
    ref
  ) => {
    // Gerar um ID único se nenhum for fornecido
    const id = React.useId();
    const inputId = idProp || `input-${id}`;
    const hasError = error || !!errorMessage;
    const isDisabled = disabled || loading || readOnly;

    // Mapeamento de tamanhos
    const sizeClasses = {
      sm: 'h-8 text-xs',
      default: 'h-10 text-sm',
      lg: 'h-12 text-base',
    };

    // Mapeamento de variantes
    const variantClasses = {
      default: 'bg-background border-input',
      filled: 'bg-muted/50 border-muted hover:bg-muted/70',
      outline: 'bg-transparent border-input',
      ghost: 'bg-transparent border-transparent hover:bg-muted/50',
    };

    // Classes de arredondamento
    const roundedClasses = {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const inputElement = (
      <div 
        className={cn(
          'relative',
          fullWidth ? 'w-full' : 'w-fit',
          containerClassName
        )}
      >
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'mb-1.5 block text-sm font-medium text-foreground',
              hasError && 'text-destructive',
              isDisabled && 'opacity-70 cursor-not-allowed'
            )}
          >
            {label}
            {props.required && (
              <span className="ml-0.5 text-destructive" aria-hidden="true">*</span>
            )}
          </label>
        )}

        <div 
          className={cn(
            'relative flex items-center',
            bordered && 'border',
            hasError 
              ? 'border-destructive focus-within:ring-2 focus-within:ring-destructive/50' 
              : 'border-input focus-within:ring-2 focus-within:ring-ring/50',
            shadow && 'shadow-sm',
            roundedClasses[rounded],
            variantClasses[variant],
            isDisabled && 'opacity-60 cursor-not-allowed',
            wrapperClassName
          )}
        >
          {/* Prefixo (texto ou ícone) */}
          {prefix && (
            <div className={cn(
              'flex-shrink-0 text-muted-foreground',
              size === 'sm' ? 'pl-2' : 'pl-3'
            )}>
              {prefix}
            </div>
          )}

          {/* Ícone inicial */}
          {startIcon && !prefix && (
            <div className={cn(
              'absolute left-0 flex items-center justify-center text-muted-foreground',
              size === 'sm' ? 'pl-2' : 'pl-3'
            )}>
              {startIcon}
            </div>
          )}

          {/* Input principal */}
          <input
            id={inputId}
            type={type}
            className={cn(
              'w-full bg-transparent border-none focus:outline-none focus:ring-0',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              'placeholder:text-muted-foreground/60',
              'disabled:cursor-not-allowed disabled:opacity-60',
              sizeClasses[size],
              startIcon && !prefix && (size === 'sm' ? 'pl-8' : 'pl-10'),
              endIcon && !suffix && (size === 'sm' ? 'pr-8' : 'pr-10'),
              prefix && (size === 'sm' ? 'pl-2' : 'pl-3'),
              suffix && (size === 'sm' ? 'pr-2' : 'pr-3'),
              !startIcon && !prefix && (size === 'sm' ? 'pl-3' : 'pl-4'),
              !endIcon && !suffix && (size === 'sm' ? 'pr-3' : 'pr-4'),
              className
            )}
            ref={ref}
            disabled={isDisabled}
            readOnly={readOnly}
            aria-invalid={hasError}
            aria-describedby={
              hasError || helperText 
                ? `${inputId}-${hasError ? 'error' : 'help'}` 
                : undefined
            }
            {...props}
          />

          {/* Ícone de carregamento */}
          {loading && (
            <div className={cn(
              'absolute right-0 flex items-center justify-center text-muted-foreground',
              size === 'sm' ? 'pr-8' : 'pr-10'
            )}>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              <span className="sr-only">Carregando...</span>
            </div>
          )}

          {/* Ícone final (se não estiver carregando) */}
          {endIcon && !suffix && !loading && (
            <div className={cn(
              'absolute right-0 flex items-center justify-center text-muted-foreground',
              size === 'sm' ? 'pr-2' : 'pr-3'
            )}>
              {endIcon}
            </div>
          )}

          {/* Sufixo (texto ou ícone) */}
          {suffix && (
            <div className={cn(
              'flex-shrink-0 text-muted-foreground',
              size === 'sm' ? 'pr-2' : 'pr-3'
            )}>
              {suffix}
            </div>
          )}
        </div>

        {/* Mensagem de erro ou ajuda */}
        {(errorMessage || helperText) && (
          <p
            id={
              hasError 
                ? `${inputId}-error` 
                : helperText 
                  ? `${inputId}-help` 
                  : undefined
            }
            className={cn(
              'mt-1.5 text-sm',
              hasError 
                ? 'text-destructive' 
                : 'text-muted-foreground/80',
              isDisabled && 'opacity-70'
            )}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );

    return inputElement;
  }
);

Input.displayName = 'Input';

export { 
  Input, 
  type InputSize, 
  type InputVariant,
  type InputProps 
};

// Exemplo de uso avançado para documentação
/**
 * @example
 * ```tsx
 * // Input com prefixo e sufixo
 * <Input 
 *   label="Valor"
 *   prefix="R$"
 *   suffix=",00"
 *   placeholder="0,00"
 * />
 * 
 * // Input com validação e mensagem de ajuda
 * <Input
 *   label="E-mail"
 *   type="email"
 *   placeholder="seu@email.com"
 *   error={!isValidEmail}
 *   helperText={!isValidEmail ? 'Por favor, insira um e-mail válido' : undefined}
 * />
 * 
 * // Input com ícones e loading
 * <Input
 *   label="Buscar"
 *   startIcon={<Search className="h-4 w-4" />}
 *   endIcon={isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
 *   placeholder="Buscar..."
 *   loading={isSearching}
 * />
 * 
 * // Input com variantes e tamanhos
 * <div className="space-y-4">
 *   <Input variant="outline" size="sm" placeholder="Pequeno" />
 *   <Input variant="filled" placeholder="Padrão" />
 *   <Input variant="ghost" size="lg" placeholder="Grande" />
 * </div>
 * ```
 */
