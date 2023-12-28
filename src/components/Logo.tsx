export function Logo(props: React.ComponentPropsWithoutRef<any>) {
  return (
    <div className="group flex flex-row justify-center items-center">
      <img className={`${props.className}`} src="/logo.svg"/>
      <div className="ml-2 text-lg font-bold text-slate-900">费控王</div>
    </div>
  )
}
