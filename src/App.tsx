import Text from "./components/text";

export default function App() {
  return (
    <div className="flex flex-col gap-2">
      <Text variant="heading-lg" className="text-green-200">
        Olá mundo!
      </Text>
      <Text className="heading-lg">Olá mundo!</Text>
      <Text variant="body-md-regular">Olá mundo!</Text>
      <Text variant="text-label">Olá mundo!</Text>
      <Text variant="title-bold">Olá mundo!</Text>
      <Text variant="sub-title">Olá mundo!</Text>
      <Text>Levar o dog pra passear</Text>
    </div>
  );
}
