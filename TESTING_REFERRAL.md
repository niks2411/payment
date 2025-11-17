# Testing Referral Code Functionality

This guide explains how to test the referral code deep linking functionality for ShigramPay.

## Quick Test URLs

### Local Development
- `http://localhost:5173/register` - No referral code
- `http://localhost:5173/register/XYZ` - With referral code "XYZ"
- `http://localhost:5173/register/ABC123` - With referral code "ABC123"

### Production
- `https://shigrampay.com/register` - No referral code
- `https://shigrampay.com/register/XYZ` - With referral code "XYZ"
- `https://shigrampay.com/register/ABC123` - With referral code "ABC123"

## Testing Methods

### 1. Desktop Browser Testing

**What to expect:**
- Desktop browsers will redirect directly to the app store (Play Store or App Store)
- The referral code will be appended to the store URL

**Steps:**
1. Open browser DevTools (F12)
2. Go to Console tab
3. Visit `http://localhost:5173/register/XYZ` (or production URL)
4. Check console logs:
   - Should see: `🖥️ Desktop detected, redirecting to store`
   - Should see the store URL with referral parameter
5. Verify you're redirected to the correct store

**Expected Console Output:**
```
🔗 Deep Link Info: {
  referralCode: "XYZ",
  deepLinkUrl: "shigrampay://register?referral=XYZ",
  storeUrl: "https://play.google.com/store/apps/details?id=com.vnetix.shigrampay&pcampaignid=web_share&referrer=XYZ",
  platform: "Desktop",
  userAgent: "..."
}
🖥️ Desktop detected, redirecting to store
```

### 2. Mobile Browser Testing (App NOT Installed)

**What to expect:**
- After 2 seconds, redirects to Play Store (Android) or App Store (iOS)
- Referral code is passed to the store URL

**Steps:**
1. Open mobile browser (Chrome on Android, Safari on iOS)
2. Open browser DevTools (if available) or use remote debugging
3. Visit the register URL with referral code
4. Wait 2 seconds
5. Should redirect to app store

**Expected Console Output:**
```
🔗 Deep Link Info: {
  referralCode: "XYZ",
  deepLinkUrl: "shigrampay://register?referral=XYZ",
  storeUrl: "...",
  platform: "Android" or "iOS",
  userAgent: "..."
}
📱 Attempting to open app with deep link: shigrampay://register?referral=XYZ
⏰ Fallback triggered - app not installed, redirecting to store: [store URL]
```

### 3. Mobile Browser Testing (App INSTALLED)

**What to expect:**
- App opens immediately with the deep link
- Referral code is passed via `shigrampay://register?referral=XYZ`
- Page may blur/hide (indicating app opened)

**Steps:**
1. Ensure ShigramPay app is installed on your device
2. Open mobile browser
3. Visit `https://shigrampay.com/register/XYZ` (or localhost if testing locally)
4. App should open immediately
5. Check if referral code is pre-filled in the app's registration form

**Expected Console Output:**
```
🔗 Deep Link Info: {
  referralCode: "XYZ",
  deepLinkUrl: "shigrampay://register?referral=XYZ",
  ...
}
📱 Attempting to open app with deep link: shigrampay://register?referral=XYZ
✅ App opened successfully (pagehide/blur detected)
```

### 4. Testing Different Referral Code Formats

Test with various referral code formats:

```bash
# Alphanumeric
/register/ABC123
/register/XYZ789

# Numbers only
/register/123456
/register/999

# Letters only
/register/ABCDEF
/register/XYZ

# Special characters (should be URL encoded)
/register/ABC-123
/register/ABC_123
```

### 5. Testing Query Parameters

The system also supports referral codes via query parameters:

- `http://localhost:5173/register?referral=XYZ`
- `http://localhost:5173/register?ref=XYZ`
- `http://localhost:5173/register?code=XYZ`

## Debugging Tips

### Enable Console Logging
The code includes console logs with emojis for easy identification:
- 🔗 Deep Link Info - Initial setup
- 🖥️ Desktop detected - Desktop browser
- 📱 Attempting to open app - Deep link attempt
- 🤖 Trying Android Intent - Android Intent URL
- ✅ App opened successfully - App detected
- ⏰ Fallback triggered - Store redirect
- ❌ Error messages

### Check Browser Console
1. Open DevTools (F12 or right-click → Inspect)
2. Go to Console tab
3. Look for the emoji-prefixed messages
4. Verify the deep link URL format: `shigrampay://register?referral=XYZ`

### Verify Deep Link URL Format
The deep link should be in this format:
```
shigrampay://register?referral=XYZ
```

### Test on Real Devices
- **iOS**: Test on iPhone/iPad with Safari
- **Android**: Test on Android device with Chrome
- Use remote debugging to see console logs on mobile

## Common Issues & Solutions

### Issue: App doesn't open on mobile
**Solution:**
- Verify the app is installed
- Check if the deep link scheme `shigrampay://` is registered in the app
- Ensure the app handles the `register` path and `referral` parameter

### Issue: Referral code not appearing in app
**Solution:**
- Verify the app is reading the `referral` query parameter from the deep link
- Check app logs to see what URL was received
- Ensure URL encoding is handled correctly

### Issue: Always redirects to store
**Solution:**
- This is expected if app is not installed
- If app IS installed, check:
  - Deep link scheme registration
  - App's deep link handler implementation
  - Browser permissions (some browsers block custom schemes)

### Issue: Desktop redirects incorrectly
**Solution:**
- Desktop should always go to store (this is correct behavior)
- Verify the store URL includes the referral parameter

## Testing Checklist

- [ ] Desktop browser redirects to store
- [ ] Desktop store URL includes referral code
- [ ] Mobile (app not installed) redirects to store after 2 seconds
- [ ] Mobile (app installed) opens app immediately
- [ ] Referral code appears in app registration form
- [ ] Path-based referral codes work (`/register/XYZ`)
- [ ] Query parameter referral codes work (`?referral=XYZ`)
- [ ] Special characters in referral codes are handled
- [ ] Console logs show correct information
- [ ] Footer register button works

## Running Local Development Server

```bash
# Start dev server
npm run dev

# Server runs on http://localhost:5173
# Test URLs:
# - http://localhost:5173/register
# - http://localhost:5173/register/XYZ
```

## Production Testing

After deploying, test with:
- `https://shigrampay.com/register/XYZ`
- Share the link and test on real devices
- Verify app opens with referral code pre-filled

