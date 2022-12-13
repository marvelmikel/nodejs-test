import Image from "next/image";
export default function NoItem() {
  return (
    <div className="flex w-full justify-center">
      <Image src="/notfound.webp" width={300} height={300} />
    </div>
  );
}
