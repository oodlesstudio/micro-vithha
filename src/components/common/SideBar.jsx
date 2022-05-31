import React, { useEffect } from "react";
import { Link, useLocation, matchPath, useNavigate } from "react-router-dom";
// Components

// path match

const SideBar = (props) => {
  let path = useLocation().pathname;
  let navigate = useNavigate();

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

  // route Re-Direct
  useEffect(() => {
    if (path === "/") {
      navigate("/loan/loan-repayment");
    }
  });

  const activeLink = (arr) => {
    if (arr === path) {
      return "activeTab";
    } else {
      return "";
    }
  };

  const activeBtnClass = (arr) => {
    if (arr === path) {
      return "accordion-button";
    }
    if (arr === financialReportPath) {
      return "accordion-button";
    }
    if (arr === loanPath) {
      return "accordion-button";
    } else {
      return "accordion-button collapsed";
    }
  };
  const activeAriaExpand = (arr = []) => {
    if (arr === path) {
      return "true";
    }
    if (arr === financialReportPath) {
      return "true";
    }
    if (arr === loanPath) {
      return "true";
    } else {
      return "false";
    }
  };
  const activeAccordionBodyClass = (arr) => {
    if (arr === path) {
      return "accordion-collapse collapse show";
    }
    if (arr === financialReportPath) {
      return "accordion-collapse collapse show";
    }
    if (arr === loanPath) {
      return "accordion-collapse collapse show";
    } else {
      return "accordion-collapse collapse ";
    }
  };

  return (
    <div className="sideBar">
      <div className="accordion" id="accordionExample">
        {/* Dashboard */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingDashboard">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseDashboard"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseDashboard"
            >
              <span className="sidebarIconSize icon-Dashboard"></span>
              <span className="fontSize14 ms-2">Dashboard</span>
            </button>
          </h2>
          <div
            id="collapseDashboard"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingDashboard"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Status Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Collection Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Demographical Summary</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Admin */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAdmin">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAdmin"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseAdmin"
            >
              <span className="sidebarIconSize icon-admin-management"></span>
              <span className="fontSize14 ms-2">Admin</span>
            </button>
          </h2>
          <div
            id="collapseAdmin"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAdmin"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Role Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Create User</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Master */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingMaster">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseMaster"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseMaster"
            >
              <span className="sidebarIconSize icon-master"></span>
              <span className="fontSize14 ms-2">Master</span>
            </button>
          </h2>
          <div
            id="collapseMaster"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingMaster"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Product Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Savings Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Branch Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Assets Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Holiday Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Group Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Ledger Master</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Master Report</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Agent Application */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAgentApplication">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAgentApplication"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseAgentApplication"
            >
              <span className="sidebarIconSize icon-agent-application"></span>
              <span className="fontSize14 ms-2">Agent Application</span>
            </button>
          </h2>
          <div
            id="collapseAgentApplication"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAgentApplication"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Onboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Asset Allocation</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Customer Application */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCustomerApplication">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCustomerApplication"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseCustomerApplication"
            >
              <span className="sidebarIconSize icon-customer-application"></span>
              <span className="fontSize14 ms-2">Customer Application</span>
            </button>
          </h2>
          <div
            id="collapseCustomerApplication"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingCustomerApplication"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Customer Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Customer Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Customer Onboard</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Savings */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSavings">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSavings"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseSavings"
            >
              <span className="sidebarIconSize icon-savings"></span>
              <span className="fontSize14 ms-2">Savings</span>
            </button>
          </h2>
          <div
            id="collapseSavings"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingSavings"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Savings Account</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Deposit</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Withdrawal</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Nominee Details</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Saving Transaction Approval
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Transaction Acknowledgement
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Loan */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingLoan">
            <button
              className={activeBtnClass("/loan")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLoan"
              aria-expanded={activeAriaExpand("/loan")}
              aria-controls="collapseLoan"
            >
              <span className="sidebarIconSize icon-loan"></span>
              <span className="fontSize14 ms-2">Loan</span>
            </button>
          </h2>
          <div
            id="collapseLoan"
            className={activeAccordionBodyClass("/loan")}
            aria-labelledby="headingLoan"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Request</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Verification</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Approval</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Disbursement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Phase wise Disbursement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Loan Disbursement Approval
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Repayment</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/loan/loan-repayment"
                    className={activeLink("/loan/loan-repayment")}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Prepayment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Foreclosure</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan writeoff Payments</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Reschedule</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Status</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Account */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAccount"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseAccount"
            >
              <span className="sidebarIconSize icon-account"></span>
              <span className="fontSize14 ms-2">Account</span>
            </button>
          </h2>
          <div
            id="collapseAccount"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Account</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Customer Account</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Card Management */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCardManagement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseCardManagement"
            >
              <span className="sidebarIconSize icon-card-management"></span>
              <span className="fontSize14 ms-2">Card Management</span>
            </button>
          </h2>
          <div
            id="collapseCardManagement"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Card Registration</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Card Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Settlement */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSettlement"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseSettlement"
            >
              <span className="sidebarIconSize icon-Settlement"></span>
              <span className="fontSize14 ms-2">Settlement</span>
            </button>
          </h2>
          <div
            id="collapseSettlement"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Collection</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Agent Payment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Branch Payment</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Branch Collection</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Transaction */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTransaction"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseTransaction"
            >
              <span className="sidebarIconSize icon-transaction"></span>
              <span className="fontSize14 ms-2">Transaction</span>
            </button>
          </h2>
          <div
            id="collapseTransaction"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Saving Ledger</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Statement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">EOD Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">MFI Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Active Loan Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Settlement Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">CTR Beyond The Limit</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Suspicious Transaction Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Saving Summary Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Branch Settlement Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Head Office Settlement Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Transactions</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Branch wise EOD Reports
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Interest Accured</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Operating Report */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/dummy-text")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOperatingReport"
              aria-expanded={activeAriaExpand("/dummy-text")}
              aria-controls="collapseOperatingReport"
            >
              <span className="sidebarIconSize icon-Operating-Report"></span>
              <span className="fontSize14 ms-2">Operating Report</span>
            </button>
          </h2>
          <div
            id="collapseOperatingReport"
            className={activeAccordionBodyClass("/dummy-text")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Registration Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">CIB Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">NPL Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Loan Individual Report</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Loan Consolidate Report
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Customer Details</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Financial Report */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingAccount">
            <button
              className={activeBtnClass("/financial-report")}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFinancialReport"
              aria-expanded={activeAriaExpand("/financial-report")}
              aria-controls="collapseFinancialReport"
            >
              <span className="sidebarIconSize icon-Financial-Report"></span>
              <span className="fontSize14 ms-2">Financial Report</span>
            </button>
          </h2>
          <div
            id="collapseFinancialReport"
            className={activeAccordionBodyClass("/financial-report")}
            aria-labelledby="headingAccount"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul className="subMenu">
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Voucher Posting</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Balance Sheet</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/financial-report/bulk-voucher-posting"
                    className={activeLink(
                      "/financial-report/bulk-voucher-posting"
                    )}
                  >
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Bulk Voucher Posting</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">
                      Profit & Loss Statement
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Day Book</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Ledger Summary</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Voucher Approval</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dummy-text">
                    <span className="subMenuLeft">
                      <span className="icon-vertical-line"></span>
                    </span>
                    <span className="subMenuRight">Trial Balance</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
            d="M9.22003 12.6667C9.12043 12.667 9.02202 12.645 8.93204 12.6024C8.84205 12.5597 8.76277 12.4974 8.70003 12.42L5.48003 8.42002C5.38197 8.30073 5.32837 8.1511 5.32837 7.99669C5.32837 7.84227 5.38197 7.69264 5.48003 7.57335L8.81336 3.57335C8.92652 3.43721 9.08913 3.35159 9.26541 3.33534C9.44169 3.31909 9.61722 3.37353 9.75336 3.48669C9.8895 3.59985 9.97512 3.76245 9.99137 3.93874C10.0076 4.11502 9.95319 4.29054 9.84003 4.42669L6.86003 8.00002L9.74003 11.5734C9.82155 11.6712 9.87333 11.7904 9.88925 11.9167C9.90517 12.0431 9.88456 12.1714 9.82986 12.2864C9.77515 12.4014 9.68865 12.4984 9.58057 12.5658C9.4725 12.6332 9.34738 12.6682 9.22003 12.6667Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default SideBar;
