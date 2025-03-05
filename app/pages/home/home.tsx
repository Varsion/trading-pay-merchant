import { Button } from "@/components/ui/button"

export function HomePage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <div className="flex flex-col items-center justify-center min-h-svh">
          <Button>Click me</Button>
        </div>
      </div>
    </main>
  )
}