import React, { useContext } from 'react';
import Header from '@/components/Header';
import {
  Container,
  Alert,
  Snackbar,
  IconButton,
  CloseIcon,
} from '@/components/mui';

function Layout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
      {/* <Snackbar
        open={open}
        autoHideDuration={hideDuration}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
          {action}
        </Alert>
      </Snackbar> */}
    </>
  );
}

export default Layout;

// const {
//   isOpen: open,
//   severity,
//   onClose: handleClose,
//   message,
//   hideDuration,
// } = useContext(UIContext);

// const action = (props) => {
//   console.log(props);
//   return (
//     <React.Fragment>
//       <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </React.Fragment>
//   );
// };
