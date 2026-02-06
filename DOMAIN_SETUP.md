# Domain Setup: redpillapps.com (Namecheap → Vercel)

## Steps to connect your Namecheap domain to Vercel

### 1. Add the domain in Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Domains**
3. Add `redpillapps.com`
4. Vercel will show you the required DNS records

### 2. Configure DNS in Namecheap

1. Log in to [Namecheap](https://www.namecheap.com/)
2. Go to **Domain List → redpillapps.com → Manage → Advanced DNS**
3. Remove any existing A records or CNAME records for `@` and `www`
4. Add the following records:

| Type  | Host | Value              | TTL       |
| ----- | ---- | ------------------ | --------- |
| A     | @    | `76.76.21.21`      | Automatic |
| CNAME | www  | `cname.vercel-dns.com.` | Automatic |

> **Note:** Vercel's IP address may change. Always check the Vercel dashboard for the latest values when setting this up.

### 3. Verify in Vercel

1. Go back to **Settings → Domains** in your Vercel project
2. Vercel will automatically check DNS propagation
3. It may take up to 48 hours for DNS to fully propagate, but usually it's within minutes

### 4. SSL Certificate

Vercel automatically provisions a free SSL certificate once DNS is verified. No action needed.

## Troubleshooting

- **DNS not propagating:** Wait up to 48 hours. Use [dnschecker.org](https://dnschecker.org) to verify.
- **SSL errors:** Ensure there are no conflicting DNS records. Remove any old A/CNAME records.
- **Namecheap parking page showing:** Make sure you've removed the default parking page records from Advanced DNS.
