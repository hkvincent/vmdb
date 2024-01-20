import Image from "next/image"
export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image className="h-96" src="/spinner.svg" alt="loading..." width={360} height={360} />
    </div>
  );
}
