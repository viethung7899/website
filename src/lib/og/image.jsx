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
      tw="w-full h-full flex flex-col justify-between p-16 text-white"
      style={{
        backgroundImage: `url(data:image/png;base64,${background})`
      }}
    >
      <img
        src={`data:image/png;base64,${profile}`}
        tw="w-20 h-20 border-slate-500/50 border-4 rounded-full"
      />
      <div tw="flex flex-col">
        <div tw="text-5xl font-semibold">Viet-Hung Nguyen</div>
        <p tw="text-3xl opacity-80">Software developer</p>
      </div>
    </div>
  )
}
