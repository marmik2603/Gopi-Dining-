import { useEffect, useState } from "react"
import TableList from "../components/TableList"
import { useDispatch, useSelector } from "react-redux"
import { getTable } from "../feature/table/tableSlice"
import Loading from "../components/Loading"
import { Link } from "react-router-dom"
import { selectTable } from "../feature/user/userSlice"

function Table() {
  const tables = useSelector(state => state.table.tables)
  const loading = useSelector(state => state.table.loading)
  const tableNumber = useSelector(state => state.user.table)

  const [selected, setSelected] = useState(tableNumber && tableNumber)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTable())
  }, [dispatch])

  if (loading) return <Loading text="Processing..." />

  return (
    <main className="container mx-auto">
      {tables && (
        <div>
          <TableList tables={tables} selected={selected} setSelected={setSelected} />
          <section className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <Link to='/menu'>
              <button
                onClick={() => dispatch(selectTable(selected))}
                type="button"
                className={`text-xl rounded-md bg-yellow-500 w-80 px-3 py-5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-yellow-400 ${!selected ? 'cursor-not-allowed' : ''}`}
                disabled={!selected}
              >
                Next
              </button>
            </Link>
          </section>
        </div>
      )}
    </main>
  )
}

export default Table