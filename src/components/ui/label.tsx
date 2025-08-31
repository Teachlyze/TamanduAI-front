import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Variantes de estilo para o componente Label
 */
const labelVariants = cva(
  'font-medium leading-none transition-colors',
  {
    variants: {
      // Variantes de cor
      variant: {
        default: 'text-foreground',
        primary: 'text-primary',
        destructive: 'text-destructive',
        success: 'text-success-foreground',
        warning: 'text-warning-foreground',
        info: 'text-blue-600 dark:text-blue-400',
        muted: 'text-muted-foreground',
      },
      // Tamanhos disponíveis
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        default: 'text-sm',
        lg: 'text-base',
        xl: 'text-lg',
      },
      // Estilo para campos obrigatórios
      required: {
        true: "after:ml-0.5 after:text-destructive after:content-['*']",
      },
      // Estado desabilitado
      disabled: {
        true: 'cursor-not-allowed opacity-70',
      },
      // Peso da fonte
      weight: {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      },
    },
    // Variantes padrão
    defaultVariants: {
      variant: 'default',
      size: 'default',
      required: false,
      disabled: false,
      weight: 'medium',
    },
  }
);

/**
 * Propriedades do componente Label
 */
interface LabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'color'>,
    VariantProps<typeof labelVariants> {
  /**
   * Texto ou conteúdo do label
   */
  children?: React.ReactNode;
  
  /**
   * Se verdadeiro, exibe um indicador de campo obrigatório
   * @default false
   */
  required?: boolean;
  
  /**
   * ID do input associado ao label para melhor acessibilidade
   */
  htmlFor?: string;
  
  /**
   * Texto de ajuda adicional exibido abaixo do label
   */
  helperText?: React.ReactNode;
  
  /**
   * Se verdadeiro, o label é exibido em linha com o conteúdo
   * @default false
   */
  inline?: boolean;
  
  /**
   * Ícone a ser exibido antes do texto do label
   */
  startIcon?: React.ReactNode;
  
  /**
   * Ícone a ser exibido após o texto do label
   */
  endIcon?: React.ReactNode;
  
  /**
   * Se verdadeiro, o label é exibido como um bloco que ocupa toda a largura
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Classe CSS adicional para o contêiner do label
   */
  containerClassName?: string;
  
  /**
   * Classe CSS adicional para o texto de ajuda
   */
  helperTextClassName?: string;
  
  /**
   * Se verdadeiro, o label é exibido em negrito
   * @deprecated Use `weight` em vez disso
   */
  bold?: boolean;
}

/**
 * Um componente de label reutilizável com suporte a temas, acessibilidade e validação.
 *
 * @example
 * ```tsx
 * // Uso básico
 * <Label htmlFor="email">E-mail</Label>
 * <Input id="email" />
 *
 * // Com campo obrigatório e texto de ajuda
 * <Label 
 *   htmlFor="password" 
 *   required 
 *   helperText="Mínimo de 8 caracteres"
 *   variant="destructive"
 * >
 *   Senha
 * </Label>
 * <Input id="password" type="password" required />
 *
 * // Com ícones
 * <Label 
 *   htmlFor="search" 
 *   startIcon={<SearchIcon className="h-4 w-4" />}
 *   endIcon={<InfoIcon className="h-4 w-4 text-muted-foreground" />}
 *   helperText="Digite sua consulta de pesquisa"
 * >
 *   Pesquisar
 * </Label>
 * <Input id="search" placeholder="Digite para pesquisar..." />
 *
 * // Em linha com o input
 * <div className="flex items-center gap-2">
 *   <Label htmlFor="notifications" inline>Notificações por e-mail</Label>
 *   <Switch id="notifications" />
 * </div>
 * ```
 */
const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className,
      variant,
      size,
      weight,
      required,
      disabled,
      children,
      htmlFor,
      helperText,
      inline = false,
      startIcon,
      endIcon,
      fullWidth = false,
      containerClassName,
      helperTextClassName,
      bold,
      ...props
    },
    ref
  ) => {
    // Se não houver children, não renderiza nada
    if (!children && !startIcon && !endIcon) return null;

    // Determina o peso da fonte com base na prop obsoleta 'bold' se fornecida
    const fontWeight = bold ? 'bold' : weight;

    return (
      <div 
        className={cn(
          'flex',
          inline ? 'flex-row items-center gap-2' : 'flex-col gap-1.5',
          fullWidth && 'w-full',
          containerClassName
        )}
      >
        <div className="flex items-center">
          <label
            ref={ref}
            htmlFor={htmlFor}
            className={cn(
              labelVariants({ variant, size, required, disabled, weight: fontWeight }),
              'flex items-center gap-1.5',
              fullWidth ? 'w-full' : 'w-fit',
              className
            )}
            {...props}
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
          </label>
        </div>
        
        {helperText && (
          <span 
            className={cn(
              'text-xs text-muted-foreground',
              inline && !fullWidth && 'ml-2',
              disabled && 'opacity-70',
              helperTextClassName
            )}
          >
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Label.displayName = 'Label';

// Exporta tudo de uma vez
export { Label, labelVariants, type LabelProps };

// Exemplo de uso avançado para documentação
/**
 * @example
 * ```tsx
 * // Uso avançado com formulário
 * <form className="space-y-4">
 *   <div>
 *     <Label htmlFor="username" required>Nome de usuário</Label>
 *     <Input id="username" placeholder="Digite seu nome de usuário" />
 *   </div>
 *   
 *   <div>
 *     <Label htmlFor="bio">Biografia</Label>
 *     <Textarea 
 *       id="bio" 
 *       placeholder="Conte-nos sobre você..." 
 *       className="min-h-[100px]"
 *     />
 *     <p className="mt-1 text-xs text-muted-foreground">
 *       Este campo suporta formatação Markdown.
 *     </p>
 *   </div>
 *   
 *   <div className="flex items-center space-x-2">
 *     <Checkbox id="terms" />
 *     <Label 
 *       htmlFor="terms" 
 *       className="font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
 *     >
 *       Aceito os termos e condições
 *     </Label>
 *   </div>
 * </form>
 * ```
 */
