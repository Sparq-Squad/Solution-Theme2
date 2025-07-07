import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const options = [
  { name: '32" Smart TVs', value: 'tv-products' },
  { name: 'Wireless Headphones', value: 'wireless-headphones' },
  { name: 'Bluetooth Speakers', value: 'bluetooth-speakers' },
  { name: 'Smart Watches', value: 'smart-watches' },
  { name: 'Phone Cases', value: 'phone-cases' }
];

export default function CustomDropdown({ selected, setSelected }) {
  const selectedOption = options.find(opt => opt.value === selected) || options[0];

  return (
    <div className="relative w-full md:w-64">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          {/* Dropdown Button */}
          <Listbox.Button className="w-full cursor-pointer rounded-md bg-[#0f1117] border border-yellow-500 py-2 pl-4 pr-10 text-left text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200">
            {selectedOption.name}
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <ChevronDownIcon className="h-5 w-5 text-yellow-300" aria-hidden="true" />
            </span>
          </Listbox.Button>

          {/* Dropdown Options */}
          <Listbox.Options className="absolute z-50 mt-1 w-full max-h-60 overflow-auto rounded-md bg-[#0f1117] border border-yellow-500 text-yellow-300 shadow-lg focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  `cursor-pointer select-none py-2 px-4 rounded-md ${
                    active ? 'bg-yellow-100 text-black' : 'text-yellow-300'
                  } transition`
                }
              >
                {option.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
