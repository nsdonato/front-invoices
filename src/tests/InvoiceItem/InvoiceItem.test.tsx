import { render, screen } from "@testing-library/react";
import { BrowserRouter, Link } from "react-router-dom";
import InvoiceItem, { Status } from "../../components/InvoiceItem/InvoiceItem";

const actualDate = new Date().toString();

test("renders InvoiceItem component", () => {
  render(
    <InvoiceItem
      id="RT3080"
      date={"19 Aug 2021"}
      name="Jensen Huang"
      amount={1800}
      status={"paid"}
    />
  );
  const invoiceItemID = screen.getByText("RT3080");
  const invoiceItemDate = screen.getByText(`Due 19 Aug 2021`);
  const invoiceItemName = screen.getByText("Jensen Huang");
  const invoiceItemAmount = screen.getByText("£1,800.00");
  const invoiceItemStatus = screen.getByText("Paid");
  expect(invoiceItemID).toBeInTheDocument();
  expect(invoiceItemDate).toBeInTheDocument();
  expect(invoiceItemName).toBeInTheDocument();
  expect(invoiceItemAmount).toBeInTheDocument();
  expect(invoiceItemStatus).toBeInTheDocument();
});

test("renders correct amount in InvoiceItem component", () => {
  render(
    <InvoiceItem
      id="RT3080"
      date={actualDate}
      name="Jensen Huang"
      amount={1800}
      status={"paid"}
    />
  );
  const invoiceItemElement = screen.getByText("£1,800.00");
  expect(invoiceItemElement).toBeInTheDocument();
});

test("renders correct status in InvoiceItem component", () => {
  const allStatus = ["paid", "pending", "draft"];
  allStatus.forEach((status) => {
    console.log(status);
    render(
      <InvoiceItem
        id="RT3080"
        date={actualDate}
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

test("renders InvoiceItem component without typeOfElement prop", () => {
  render(
    <InvoiceItem
      data-testid="invoice-item"
      id="RT3080"
      date={actualDate}
      name="Jensen Huang"
      amount={1800}
      status={"paid"}
    />
  );
  const invoiceItemElement = screen.getByTestId("invoice-item");
  expect(invoiceItemElement.tagName).toBe("DIV");
});

test("renders InvoiceItem component with a typeOfElement as an anchor", () => {
  render(
    <InvoiceItem
      typeOfElement="a"
      data-testid="invoice-item"
      id="RT3080"
      date={actualDate}
      name="Jensen Huang"
      amount={1800}
      status={"paid"}
    />
  );
  const invoiceItemElement = screen.getByTestId("invoice-item");
  expect(invoiceItemElement.tagName).toBe("A");
});

test("renders InvoiceItem component with a typeOfElement as Link", () => {
  render(
    <BrowserRouter>
      <InvoiceItem
        typeOfElement={Link}
        to="/"
        data-testid="invoice-item"
        id="RT3080"
        date={actualDate}
        name="Jensen Huang"
        amount={1800}
        status={"paid"}
      />
    </BrowserRouter>
  );
  const invoiceItemElement = screen.getByTestId("invoice-item");
  expect(invoiceItemElement.tagName).toBe("A");
});
