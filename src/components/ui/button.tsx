import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Tipos de variantes de botão disponíveis
 */
type ButtonVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'destructive' 
  | 'outline' 
  | 'ghost' 
  | 'link'
  | 'success'
  | 'warning';

/**
 * Tamanhos de botão disponíveis
 */
type ButtonSize = 'sm' | 'default' | 'lg' | 'icon';

/**
 * Configuração das variantes de botão usando class-variance-authority
 * 
 * @example
 * ```tsx
 * // Usando variantes
 * <Button variant="primary">Enviar</Button>
 * <Button variant="outline" size="sm">Cancelar</Button>
 * ```
 */
const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        // Variante padrão - uso geral
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        
        // Variante destrutiva - para ações perigosas como excluir
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        
        // Variante outline - para ações secundárias
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        
        // Variante secundária - para ações menos proeminentes
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        
        // Variante ghost - para botões em fundos escuros
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        
        // Variante link - para ações de navegação
        link: 'text-primary underline-offset-4 hover:underline',
        
        // Variantes personalizadas
        primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700',
        success: 'bg-green-600 text-white hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600 dark:bg-yellow-500 dark:hover:bg-yellow-600',
        
        // Variante para ações de adicionar
        addButton: 'bg-green-600 hover:bg-green-700 text-white',
        
        // Variante para ações de cancelar
        cancel: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
        
        // Variante para ações de confirmação
        confirm: 'bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700',
      },
      size: {
        // Tamanho pequeno - para interfaces mais compactas
        sm: 'h-8 rounded-md px-3 text-xs',
        
        // Tamanho padrão - para a maioria dos casos de uso
        default: 'h-9 px-4 py-2',
        
        // Tamanho grande - para ações principais
        lg: 'h-10 rounded-md px-8 text-base',
        
        // Tamanho ícone - para botões apenas com ícones
        icon: 'h-9 w-9 p-0 flex items-center justify-center',
        
        // Tamanho extra grande - para CTAs importantes
        xl: 'h-12 rounded-lg px-10 text-lg',
      },
      // Variante de largura total
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
      // Variante de borda arredondada
      rounded: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    // Variantes padrão
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
      rounded: 'md',
    },
  }
);

/**
 * Propriedades do componente Button
 */
interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  /**
   * Renderiza o botão como seu filho imediato, mesclando estilos e manipuladores de eventos.
   * Útil para componentes de roteamento como Next.js Link.
   */
  asChild?: boolean;
  
  /**
   * Exibe um indicador de carregamento e desabilita o botão.
   * @default false
   */
  loading?: boolean;
  
  /**
   * Ícone a ser exibido antes do texto do botão.
   */
  startIcon?: React.ReactNode;
  
  /**
   * Ícone a ser exibido após o texto do botão.
   */
  endIcon?: React.ReactNode;
  
  /**
   * Define se o botão deve ocupar toda a largura do container.
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Nível de arredondamento das bordas do botão.
   * @default 'md'
   */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  /**
   * Define o tipo do botão.
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Define a cor de fundo personalizada.
   * Sobrescreve a cor definida na variante.
   */
  color?: string;
  
  /**
   * Define a cor do texto personalizada.
   * Sobrescreve a cor definida na variante.
   */
  textColor?: string;
  
  /**
   * Define se o botão deve ter uma borda.
   * @default false
   */
  bordered?: boolean;
  
  /**
   * Define se o botão deve ter sombra.
   * @default true
   */
  shadow?: boolean;
}

/**
 * Botão altamente personalizável com suporte a ícones, estados de carregamento e muito mais.
 * 
 * @example
 * ```tsx
 * // Uso básico
 * <Button>Clique aqui</Button>
 * 
 * // Com ícones
 * <Button startIcon={<IconMail />} endIcon={<IconArrowRight />}>
 *   Enviar e-mail
 * </Button>
 * 
 * // Estado de carregamento
 * <Button loading>Processando...</Button>
 * 
 * // Botão de formulário
 * <Button type="submit" variant="primary">Salvar</Button>
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  {
    className,
    variant,
    size,
    asChild = false,
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
    children,
    fullWidth,
    rounded,
    type = 'button',
    color,
    textColor,
    bordered = false,
    shadow = true,
    style,
    ...props
  },
  ref
) => {
  const Comp = asChild ? Slot : 'button';
  const isDisabled = disabled || loading;
  
  // Estilos em linha para cores personalizadas
  const inlineStyles = {
    ...(color && { backgroundColor: color }),
    ...(textColor && { color: textColor }),
    ...(bordered && { border: '1px solid currentColor' }),
    ...(!shadow && { boxShadow: 'none' }),
    ...style,
  };

  // Conteúdo do botão
  const buttonContent = (
    <>
      {loading && (
        <span 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          <span className="sr-only">Carregando...</span>
        </span>
      )}
      <span 
        className={cn(
          'flex items-center justify-center gap-2',
          loading && 'invisible',
          fullWidth && 'w-full'
        )}
      >
        {startIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {startIcon}
          </span>
        )}
        {children}
        {endIcon && (
          <span className="flex-shrink-0" aria-hidden="true">
            {endIcon}
          </span>
        )}
      </span>
    </>
  );

  // Se for para usar o Slot (asChild), renderizamos o children diretamente
  if (asChild && React.isValidElement(children)) {
    // Extrai as props do elemento filho de forma segura
    const childElement = children as React.ReactElement<React.ButtonHTMLAttributes<HTMLElement>>;
    const childProps = childElement.props || {};
    
    // Cria um novo objeto de props mesclando as existentes com as novas
    const mergedProps: React.ButtonHTMLAttributes<HTMLButtonElement> & { [key: string]: unknown } = {
      ...childProps,
      className: cn(
        buttonVariants({ variant, size, fullWidth, rounded }),
        'relative transition-all',
        loading && 'cursor-wait',
        isDisabled && 'opacity-70',
        childProps.className,
        className
      ),
      style: { ...(childProps.style || {}), ...inlineStyles },
      disabled: isDisabled,
      'aria-disabled': isDisabled,
      type: (childProps as React.ButtonHTMLAttributes<HTMLButtonElement>).type || type,
      ...props
    };
    
    // Remove a propriedade children para evitar duplicação
    delete mergedProps.children;
    
    // Clona o elemento com as novas props e conteúdo
    return React.cloneElement(childElement, mergedProps, buttonContent);
  }

  // Caso contrário, renderizamos um botão normal
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, fullWidth, rounded }),
        'relative transition-all',
        loading && 'cursor-wait',
        isDisabled && 'opacity-70',
        className
      )}
      style={inlineStyles}
      ref={ref}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      type={type}
      {...props}
    >
      {buttonContent}
    </button>
  );
});

Button.displayName = 'Button';

export { 
  Button, 
  buttonVariants,
  type ButtonVariant,
  type ButtonSize
};

export type { ButtonProps };

// Exemplo de uso avançado para documentação
/**
 * @example
 * ```tsx
 * // Botão com ícone e loading
 * <Button 
 *   variant="primary"
 *   size="lg"
 *   startIcon={<Icons.Mail />}
 *   loading={isSubmitting}
 *   fullWidth
 *   className="my-4"
 * >
 *   Enviar mensagem
 * </Button>
 * 
 * // Botão com cores personalizadas
 * <Button
 *   color="#4f46e5"
 *   textColor="white"
 *   bordered
 *   rounded="full"
 * >
 *   Personalizado
 * </Button>
 * 
 * // Botão como link
 * <Button asChild variant="link">
 *   <Link href="/dashboard">Ir para o painel</Link>
 * </Button>
 * ```
 */
