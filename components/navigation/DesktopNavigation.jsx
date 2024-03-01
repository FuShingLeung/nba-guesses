import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Box,
  IconButton,
  MenuIcon,
  Toolbar,
  Typography,
  Button,
} from '@/components/mui';
import { useTheme } from '@mui/material/styles';
import { useUser } from '@auth0/nextjs-auth0/client';

function DesktopNavigation({
  handleDrawerToggle = () =>
    console.log('no handleDrawerToggle function provided'),
}) {
  const theme = useTheme();
  const lightTextColor = theme.palette.common.white;

  const { user, error, isLoading } = useUser();

  const itemLinkStyles = {
    display: 'block',
    textDecoration: 'none',
    flexGrow: '1',
  };

  return (
    <>
      <AppBar component="nav" position="sticky" sx={{ mb: 2 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            href={`/`}
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              textDecoration: 'none',
              color: lightTextColor,
            }}
          >
            NBA Guesses
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              sx={{ color: lightTextColor }}
              component={Link}
              href="/games"
            >
              Games
            </Button>
            {user ? (
              <>
                <Button
                  sx={{ color: lightTextColor }}
                  component={Link}
                  href="/profile"
                >
                  Profile
                </Button>
                <Button
                  sx={{ color: lightTextColor }}
                  component={Link}
                  href="/api/auth/logout"
                >
                  Log out
                </Button>
              </>
            ) : (
              <Button
                sx={{ color: lightTextColor }}
                component={Link}
                href="/api/auth/login"
              >
                Log in
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default DesktopNavigation;
