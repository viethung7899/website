/**
 * @param {{
 *  background: string,
 *  profile: string,
 * }} props
 */
export function OGMain(props) {
  const { background, profile } = props
  return (
    <div
      tw="flex h-full w-full flex-col justify-between p-16 text-white"
      style={{
        backgroundImage: `url(data:image/png;base64,${background})`
      }}
    >
      <img
        alt="Viet-Hung Nguyen"
        src={`data:image/png;base64,${profile}`}
        tw="h-20 w-20 rounded-full border-4 border-slate-500/50"
      />
      <div tw="flex flex-col">
        <div tw="text-5xl font-semibold">Viet-Hung Nguyen</div>
        <p tw="text-3xl opacity-80">Software developer</p>
      </div>
    </div>
  )
}
