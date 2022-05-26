import React from "react";
import { Link, useLocation, matchPath } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

// const activeLink = (arr) => {};

const SidebarSmall = (props) => {
  const path = useLocation().pathname;

  // financial report Path
  let financialReportPath = matchPath("/financial-report/*", path);
  if (financialReportPath) {
    financialReportPath = financialReportPath.pathnameBase;
  }

  // loan Path
  let loanPath = matchPath("/loan/*", path);
  if (loanPath) {
    loanPath = loanPath.pathnameBase;
  }

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    }
    if (arr === financialReportPath) {
      return "activeTab";
    }
    if (arr === loanPath) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const dashboardCardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Status Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Collection Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Demographical Summary</span>
            </Link>
          </li>
          {/* <li className={activeLink("/card-operation/active-card")}>
            <Link to="/card-operation/active-card">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Cards</span>
            </Link>
          </li> */}
        </ul>
      </Popover.Body>
    </Popover>
  );

  const adminCardPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Role Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Create User</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const masterPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Product Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Savings Policy</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Branch Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Assets Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Holiday Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Group Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Ledger Master</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Master Report</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const agentApplicationPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Onboard</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Asset Allocation</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const customerApplicationPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Customer Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Customer Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Customer Onboard</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const savingsPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Savings Account</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Deposit</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Withdrawal</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Nominee Details</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Saving Transaction Approval</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transaction Acknowledgement</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const loanPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Request</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Verification</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Approval</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Disbursement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Phase wise Disbursement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Disbursement Approval</span>
            </Link>
          </li>
          <li className={activeLink("/loan/loan-repayment")}>
            <Link to="/loan/loan-repayment">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Repayment</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Prepayment</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Foreclosure</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan writeoff Payments</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Reschedule</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Status</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const accountPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Account</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Customer Account</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const cardManagementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Card Registration</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Card Settings</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const settlementPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Collection</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Agent Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Branch Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Branch Collection</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const transactionPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Saving Ledger</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Statement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">EOD Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">MFI Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Active Loan Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Settlement Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">CTR Beyond The Limit</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Suspicious Transaction Report
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Saving Summary Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Branch Settlement Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">
                Head Office Settlement Report
              </span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Transactions</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Branch wise EOD Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Interest Accured</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const operatingReportingPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Registration Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">CIB Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">NPL Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Individual Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Loan Consolidate Report</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Customer Details</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  const financialReportingPopover = (
    <Popover id="popover-basic" className="sidebarPopover">
      <Popover.Body>
        <ul className="subMenu">
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Voucher Posting</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Balance Sheet</span>
            </Link>
          </li>
          <li className={activeLink("/financial-report/bulk-voucher-posting")}>
            <Link to="/financial-report/bulk-voucher-posting">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Bulk Voucher Posting</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Profit & Loss Statement</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Day Book</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Ledger Summary</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Voucher Approval</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="subMenuLeft">
                <span className="icon-vertical-line"></span>
              </span>
              <span className="subMenuRight">Trial Balance</span>
            </Link>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <div className="sidebarSmall">
      {/* DashBoard Card */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={dashboardCardPopover}
          rootClose
        >
          <div className={activeLink("/card-operation")}>
            <span className="sidebarIconSize icon-Dashboard">
              {/* icon-Dashboard Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* admin */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={adminCardPopover}
          rootClose
        >
          <span className=" sidebarIconSize icon-admin-management">
            {/*  icon-admin-management Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Master */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={masterPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-master">
            {/* icon-master Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* agent application */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={agentApplicationPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-agent-application">
            {/* icon-Reports Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* customer application */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customerApplicationPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-customer-application">
            {/* icon-customer-application Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* savings */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={savingsPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-savings">
            {/* icon-savings Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* loan */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={loanPopover}
          rootClose
        >
          <div className={activeLink("/loan")}>
            <span className="sidebarIconSize icon-loan">
              {/* icon-loan Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      {/* account */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={accountPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-account">
            {/* icon-account Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* card Management */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={cardManagementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-card-management">
            {/* icon-card-management Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* settlement */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={settlementPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Settlement">
            {/* icon-Settlement Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Transaction */}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={transactionPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-transaction">
            {/* icon-transaction Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Operating Report*/}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={operatingReportingPopover}
          rootClose
        >
          <span className="sidebarIconSize icon-Operating-Report">
            {/* icon-transaction Small Icon */}
          </span>
        </OverlayTrigger>
      </div>

      {/* Financial Report*/}
      <div className="sidebarSmallImg">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={financialReportingPopover}
          rootClose
        >
          <div className={activeLink("/financial-report")}>
            <span className="sidebarIconSize icon-Financial-Report">
              {/* icon-Financial-Report Small Icon */}
            </span>
          </div>
        </OverlayTrigger>
      </div>

      <button
        type="button"
        className="sidebarButton d-flex justify-content-center align-items-center"
        onClick={props.buttonCollapse}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78 3.33331C6.8796 3.33297 6.978 3.35496 7.06799 3.39764C7.15797 3.44033 7.23725 3.50263 7.3 3.57998L10.52 7.57998C10.6181 7.69927 10.6717 7.8489 10.6717 8.00331C10.6717 8.15773 10.6181 8.30736 10.52 8.42665L7.18667 12.4266C7.07351 12.5628 6.9109 12.6484 6.73462 12.6647C6.55833 12.6809 6.38281 12.6265 6.24667 12.5133C6.11052 12.4002 6.02491 12.2375 6.00865 12.0613C5.9924 11.885 6.04684 11.7095 6.16 11.5733L9.14 7.99998L6.26 4.42665C6.17848 4.32879 6.12669 4.20963 6.11077 4.08326C6.09485 3.9569 6.11546 3.82861 6.17017 3.7136C6.22487 3.59858 6.31138 3.50164 6.41945 3.43424C6.52753 3.36685 6.65264 3.33182 6.78 3.33331Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SidebarSmall;
