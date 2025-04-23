
interface Props {
  label: string;
  children?: React.ReactNode;
}

export default function SearchBarItem({ label, children }: Props) {
  return (
    <div className="flex-1">
      <label htmlFor="searchParam" className="block text-sm font-medium text-gray-300 mb-1">
        { label }
      </label>
      {children}
    </div>
  )
}
