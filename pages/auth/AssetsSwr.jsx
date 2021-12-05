 // eslint-disable-next-line react-hooks/rules-of-hooks
import useSWR from "swr";
import { API_URL } from "../../utils/url";

export default function AssetsSwr() {
  const fetcher=url=>fetch(url).then(r => r.json())
  const {data,error}= useSWR (API_URL+'/assets', fetcher)

  if (error) return 'An Error has occured'
  if (!data) return "loading"

return(
  data
)
}
