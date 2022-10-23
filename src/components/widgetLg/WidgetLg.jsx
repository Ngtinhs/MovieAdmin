import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Giao dịch mới nhất</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Khách hàng</th>
            <th className="widgetLgTh">Ngày tháng</th>
            <th className="widgetLgTh">Số tiền</th>
            <th className="widgetLgTh">Trạng thái</th>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fs_dAdMkYAIAX8TqT6c&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT-AP2J5E4rNb3iLF-9YHWBmwb-VmDi247WEvf84W0VXGA&oe=6359B544"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Nguyễn Tính</span>
            </td>
            <td className="widgetLgDate">10/05/2022</td>
            <td className="widgetLgAmount">49.000đ</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fs_dAdMkYAIAX8TqT6c&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT-AP2J5E4rNb3iLF-9YHWBmwb-VmDi247WEvf84W0VXGA&oe=6359B544"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Nguyễn Tính</span>
            </td>
            <td className="widgetLgDate">10/05/2022</td>
            <td className="widgetLgAmount">49.000đ</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fs_dAdMkYAIAX8TqT6c&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT-AP2J5E4rNb3iLF-9YHWBmwb-VmDi247WEvf84W0VXGA&oe=6359B544"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Nguyễn Tính</span>
            </td>
            <td className="widgetLgDate">10/05/2022</td>
            <td className="widgetLgAmount">49.000đ</td>
            <td className="widgetLgStatus">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/244316460_1680700922321164_2539198379435572250_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fs_dAdMkYAIAX8TqT6c&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT-AP2J5E4rNb3iLF-9YHWBmwb-VmDi247WEvf84W0VXGA&oe=6359B544"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Nguyễn Tính</span>
            </td>
            <td className="widgetLgDate">10/05/2022</td>
            <td className="widgetLgAmount">49.000đ</td>
            <td className="widgetLgStatus">
              <Button type="Approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
