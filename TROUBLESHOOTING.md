# Troubleshooting Guide

## Next.js Development Issues

### Common Problems and Solutions

#### 1. Turbopack Cache Issues
**Symptoms:**
- `ENOENT: no such file or directory, open '...app-build-manifest.json'`
- Module not found errors after file renames
- Stale build artifacts

**Solutions:**
```bash
# Option 1: Use npm scripts
npm run cache:clear        # Clear all caches
npm run dev:clean         # Clean build and start dev server
npm run dev:no-turbo      # Start without Turbopack

# Option 2: Manual cleanup (Windows PowerShell)
Remove-Item -Path ".next" -Recurse -Force
npm cache clean --force
npm run dev

# Option 3: Full reset
taskkill /F /IM node.exe /T  # Stop all Node processes
Remove-Item -Path ".next" -Recurse -Force
npm install
npm run dev
```

#### 2. File Extension Issues
**Symptoms:**
- TypeScript errors about `.js` files
- Import type errors in JavaScript files

**Solutions:**
- Ensure all service files use `.ts` extension
- Clear TypeScript server cache
- Restart VS Code

#### 3. Supabase Connection Issues
**Symptoms:**
- Database connection errors
- Environment variable warnings

**Solutions:**
1. Check `/status` page for diagnostics
2. Verify environment variables in `.env.local`
3. Test connection manually:
```bash
# Test Supabase connection
curl -H "apikey: YOUR_ANON_KEY" "YOUR_SUPABASE_URL/rest/v1/products?select=count"
```

#### 4. Port Conflicts
**Symptoms:**
- Port 3000 already in use

**Solutions:**
```bash
# Kill processes on port 3000
npx kill-port 3000

# Or use alternative port
next dev -p 3001
```

#### 5. Module Resolution Issues
**Symptoms:**
- Cannot resolve module imports
- Path mapping errors

**Solutions:**
```bash
# Clear node_modules and reinstall
Remove-Item -Path "node_modules" -Recurse -Force
npm install

# Check TypeScript configuration
npx tsc --showConfig
```

## Useful Commands

### Development
```bash
npm run dev              # Start with Turbopack
npm run dev:no-turbo     # Start without Turbopack
npm run dev:clean        # Clean start
```

### Building
```bash
npm run build            # Production build
npm run build:clean      # Clean production build
```

### Debugging
```bash
npm run cache:clear      # Clear all caches
npm run lint            # Check code quality
npx next info           # Show Next.js environment info
```

### Monitoring
- Visit `/status` for real-time system health
- Check browser console for client-side errors
- Monitor terminal output for server-side issues

## When to Use Each Solution

1. **First try**: `npm run cache:clear && npm run dev`
2. **If still issues**: Use `npm run dev:no-turbo`
3. **For persistent problems**: Full reset with taskkill and reinstall
4. **For Supabase issues**: Check `/status` page first

## Prevention Tips

1. **Use consistent file extensions** (`.ts` for TypeScript, `.tsx` for React)
2. **Regularly clear caches** during development
3. **Monitor the `/status` page** for early issue detection
4. **Keep dependencies updated** with `npm update`
5. **Use proper imports** (no file extensions in imports)

## Getting Help

- Check the `/status` page for diagnostics
- Review browser console and terminal output
- Verify Supabase connection and environment variables
- Try development without Turbopack if cache issues persist
