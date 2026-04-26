import { NextResponse } from 'next/server'

// In-memory store for demo purposes.
// In production, replace with a real DB (e.g. Supabase, Prisma + PostgreSQL).
const leads = []

export async function POST(request) {
  try {
    const body = await request.json()

    const { name, email, company, phone, size, interest, message } = body

    // Basic server-side validation
    if (!name || !email || !company || !size) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, company, size' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      phone: phone?.trim() || null,
      size,
      interest: interest || null,
      message: message?.trim() || null,
      createdAt: new Date().toISOString(),
      source: 'enterprise-landing',
    }

    leads.push(lead)

    console.log(`✅ New lead captured: ${lead.name} <${lead.email}> from ${lead.company}`)

    // TODO (production): Send to CRM / email notification here
    // e.g. await sendToHubspot(lead)
    // e.g. await sendSlackNotification(lead)

    return NextResponse.json(
      {
        success: true,
        message: 'Lead captured successfully',
        id: lead.id,
      },
      { status: 201 }
    )
  } catch (err) {
    console.error('Lead capture error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET endpoint to view leads (protect this in production with auth!)
export async function GET() {
  return NextResponse.json({
    total: leads.length,
    leads: leads.map((l) => ({
      id: l.id,
      name: l.name,
      email: l.email,
      company: l.company,
      size: l.size,
      interest: l.interest,
      createdAt: l.createdAt,
    })),
  })
}
