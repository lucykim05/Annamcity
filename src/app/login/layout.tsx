export default function FieldsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto flex px-6 py-8 space-x-8">
      <div className="flex-1">{children}</div>
    </div>
  );
}
