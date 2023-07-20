import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <div className="bg-neutral-900 w-full h-full rounded-lg overflow-hidden overflow-y-auto">
      <Header>
        <h1
          className="text-white
      text-3xl
      font-medium"
        >
          환영합니다
        </h1>
        <div
          className="grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-3
        mt-4"
        >
          <ListItem image="/images/liked.png" name="Liked Songs" />
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-2xl">Newest Songs</h1>
        </div>
        <div className="text-neutral-300">list of songs</div>
      </div>
    </div>
  );
}
