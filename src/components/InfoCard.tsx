import type { IPData } from "../types";

interface Props {
  data: IPData | null;
}

export default function InfoCard({ data }: Props) {
  return (
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10 text-center -mb-11">
      <div>
        <h4 className="text-gray-400 text-xs tracking-widest mb-1">
          IP ADDRESS
        </h4>
        <p className="text-lg font-medium">{data?.ip ?? "---"}</p>
      </div>

      <div>
        <h4 className="text-gray-400 text-xs tracking-widest mb-1">
          LOCATION
        </h4>
        <p className="text-lg font-medium">
          {data
            ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
            : "---"}
        </p>
      </div>

      <div>
        <h4 className="text-gray-400 text-xs tracking-widest mb-1">
          TIMEZONE
        </h4>
        <p className="text-lg font-medium">
          {data ? `UTC ${data.location.timezone}` : "---"}
        </p>
      </div>

      <div>
        <h4 className="text-gray-400 text-xs tracking-widest mb-1">ISP</h4>
        <p className="text-lg font-medium">{data?.isp ?? "---"}</p>
      </div>
    </section>
  );
}
