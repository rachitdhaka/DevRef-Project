export const Container = ({children , className}:{className?:String , children:React.ReactNode}) => {
  return (
    <div className="relative z-10 max-w-6xl p-2 mx-auto">{children}</div>
  )
}