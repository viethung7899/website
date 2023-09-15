/**
 * @param {{
 *  imageBase64: string
 * }} props
 */
export function OGMain(props) {
  const { imageBase64 } = props
  return (
    <div
      tw="w-full h-full flex flex-col justify-between p-16 text-white"
      style={{
        backgroundImage: `url(data:image/png;base64,${imageBase64})`
      }}
    >
      <div tw="text-5xl font-bold text-blue-500">V_</div>
      <div tw="flex flex-col">
        <div tw="text-5xl font-semibold">Viet-Hung Nguyen</div>
        <p tw="text-3xl opacity-80">Software developer</p>
      </div>
    </div>
  )
}
