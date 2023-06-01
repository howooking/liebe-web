export default function Staff({ params }: { params: { staffId: string } }) {
  const { staffId } = params;
  return <div>{staffId}</div>;
}
