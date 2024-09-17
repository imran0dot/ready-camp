import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { ThemeProvider } from "@material-tailwind/react";
import router from './router/index.tsx'
import { RouterProvider } from 'react-router-dom'
import {} from "@material-tailwind/react";

type EventCapture = {
  placeholder?: unknown;
  onPointerEnterCapture?: unknown;
  onPointerLeaveCapture?: unknown;
};


declare module "@material-tailwind/react" {
    export interface DialogProps extends EventCapture {
      placeholder?: unknown;
      onPointerEnterCapture?:unknown 
      onPointerLeaveCapture?:unknown 
    }
    export interface CardProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
      }
      export interface CardBodyProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
      }
      export interface TypographyProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
      }
      export interface CardFooterProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
      }
      export interface ButtonProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
      }
      export interface InputProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
        crossOrigin?:unknown 
      }
      export interface CheckboxProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
        crossOrigin?:unknown 
      }
      export interface ListProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
        crossOrigin?:unknown 
      }
      export interface ListItemProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
        crossOrigin?:unknown 
      }
      export interface ListItemPrefixProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
        crossOrigin?:unknown 
      }
      export interface ListItemSuffixProps extends EventCapture {
        placeholder?: unknown;
        onPointerEnterCapture?:unknown 
        onPointerLeaveCapture?:unknown 
        crossOrigin?:unknown 
      }
  }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
