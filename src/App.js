import "./App.css";
import DefaultLayout from "./layout/defaultLayout";
// import Dashboard from "./pages/dashboard/dashboard.page";
// import Entry from "./pages/entry/entry.page";
import AddTicket from "./pages/new-ticket/addTicket.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
