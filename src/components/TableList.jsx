import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types';
import Heading from './Heading';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TableList = ({ selected, setSelected, tables }) => {
  return (
    <section className="flex flex-col justify-center items-center p-3 h-fit mb-[6.5rem]">
      <Heading size='3xl' content='Select your table' />

      <div>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Table Numbers</RadioGroup.Label>
          <div className="space-y-2">
            {tables && tables.map(table => (
              <RadioGroup.Option
                key={table.number}
                value={table}
                className={({ checked, active }) =>
                  classNames(
                    checked ? 'border-transparent' : 'border-gray-300',
                    active ? 'border-yellow-500 ring-2 ring-yellow-500' : '',
                    'cursor-pointer text-xl border bg-white px-8 py-6 shadow-sm focus:outline-none w-80 rounded-lg'
                  )
                }
              >
                {({ checked, /* active */ }) => (
                  <>
                    <span className="flex">
                      <span className="flex text-sm justify-between w-screen">
                        <RadioGroup.Label as="span" className="font-bold text-gray-900 text-lg">
                          Table Number: {table.number}
                        </RadioGroup.Label>
                        {selected?.number === table.number ? (
                          <CheckCircleIcon className="h-7 w-7 text-yellow-500" aria-hidden="true" />
                        ) : (
                          checked && <CheckCircleIcon className="h-7 w-7 text-yellow-500 invisible" aria-hidden="true" />
                        )}
                      </span>
                    </span>
                  </>
                )}
              </RadioGroup.Option>
            ))
            }
          </div >
        </RadioGroup >
      </div >
    </section >
  )
}

TableList.propTypes = {
  selected: PropTypes.any,
  setSelected: PropTypes.func,
  tables: PropTypes.array,
};

export default TableList