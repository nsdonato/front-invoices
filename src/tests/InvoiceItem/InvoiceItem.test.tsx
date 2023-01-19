import { render, screen } from "@testing-library/react";
import InvoiceItem from "../../components/InvoiceItem/InvoiceItem";

test("renders InvoiceItem component", () => {
  render(
    <InvoiceItem
      id="RT3080"
      date={"Due 19 Aug 2021"}
      name="Jensen Huang"
      amount={1800}
      status={"paid"}
    />
  );
  const invoiceItemElement = screen.getByText("RT3080");
  expect(invoiceItemElement).toBeInTheDocument();
});

// Test if the InvoiceItem component is rendering the correct amount
test("renders correct amount in InvoiceItem component", () => {
  render(
    <InvoiceItem
      id="RT3080"
      date={"Due 19 Aug 2021"}
      name="Jensen Huang"
      amount={1800}
      status={"paid"}
    />
  );
  const invoiceItemElement = screen.getByText("1800.00");
  expect(invoiceItemElement).toBeInTheDocument();
});

// Test if the InvoiceItem component is rendering the correct status
type Status = "paid" | "pending" | "draft";

test("renders correct status in InvoiceItem component", () => {
  const allStatus = ["paid", "pending", "draft"];
  allStatus.forEach((status) => {
    console.log(status);
    render(
      <InvoiceItem
        id="RT3080"
        date={"Due 19 Aug 2021"}
        name="Jensen Huang"
        amount={1800}
        status={status as Status}
      />
    );
    const invoiceItemElement = screen.getByText(
      status.charAt(0).toUpperCase() + status.slice(1)
    );
    expect(invoiceItemElement).toBeInTheDocument();
  });
});
