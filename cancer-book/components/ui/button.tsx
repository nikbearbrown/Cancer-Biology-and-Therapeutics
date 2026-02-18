import { cva, type VariantProps } from "class-variance-authority";

// Define button variants using cva
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-background bg-gradient-to-b from-primary to-primary/60 text-primary-foreground shadow-inner shadow-background/20 hover:bg-primary/90",
        outline:
          "border bg-gradient-to-t from-primary/10 shadow-inner shadow-primary/10 hover:bg-accent/50 hover:text-accent-foreground",
        secondary:
          "border bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 px-6",
        xs: "px-1.5 py-0.5 text-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define TypeScript type for button variants
type ButtonVariantsType = VariantProps<typeof buttonVariants>;

export { buttonVariants, type ButtonVariantsType };
