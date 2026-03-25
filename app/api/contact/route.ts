import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.()
    
    const { name, email, phone, company, message } = body ?? {}

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Campos requeridos faltantes' },
        { status: 400 }
      )
    }

    const contact = await prisma?.contact?.create?.({
      data: {
        name: name ?? '',
        email: email ?? '',
        phone: phone ?? '',
        company: company ?? '',
        message: message ?? '',
      },
    })

    return NextResponse.json(
      { success: true, contact },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating contact:', error)
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
