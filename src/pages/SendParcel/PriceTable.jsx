const PriceTable = () => {
  return (
    <div className="bg-base-200 p-4 rounded-xl mb-8">
      <h3 className="text-lg font-semibold mb-4 text-center">
        📦 Parcel Delivery Price Chart
      </h3>

      {/* Document */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">📄 Document</h4>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Delivery Area</th>
              <th>Weight</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Within City</td>
              <td>Any</td>
              <td>৳60</td>
            </tr>
            <tr>
              <td>Outside City</td>
              <td>Any</td>
              <td>৳80</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Non Document */}
      <div className="mb-6">
        <h4 className="font-semibold mb-2">📦 Non-Document (Up to 3kg)</h4>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Delivery Area</th>
              <th>Weight</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Within City</td>
              <td>≤ 3kg</td>
              <td>৳110</td>
            </tr>
            <tr>
              <td>Outside City</td>
              <td>≤ 3kg</td>
              <td>৳150</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Extra */}
      <div>
        <h4 className="font-semibold mb-2">⚖️ Extra Charges</h4>
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Condition</th>
              <th>Charge</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Extra Weight (above 3kg)</td>
              <td>৳40 / kg</td>
            </tr>
            <tr>
              <td>Outside City Extra</td>
              <td>৳40 (one time)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable
