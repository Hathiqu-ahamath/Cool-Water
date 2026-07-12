export const WHATSAPP_PHONE = "94752871414"

export const WHATSAPP_ORDER_MESSAGE = encodeURIComponent("Hello, I would like to place an order.")

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}
