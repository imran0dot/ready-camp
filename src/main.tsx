import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { ThemeProvider } from "@material-tailwind/react";
import router from './router/index.tsx'
import { RouterProvider } from 'react-router-dom'
import { } from "@material-tailwind/react";
import { PersistGate } from 'redux-persist/integration/react'

type EventCapture = {
  placeholder?: unknown;
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};


declare module "@material-tailwind/react" {
  export interface DialogProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
  export interface CardProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
  export interface CardBodyProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
  export interface CardFooterProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
  export interface ButtonProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
  export interface InputProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface CheckboxProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface ListProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface ListItemProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface ListItemPrefixProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface ListItemSuffixProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface NavbarProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface AvatarProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }

  export interface AccordionProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }

  export interface AccordionHeaderProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
    crossOrigin?: unknown
  }
  export interface RatingProps extends EventCapture {
    placeholder?: unknown;
    onPointerEnterCapture?: unknown
    onPointerLeaveCapture?: unknown
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
