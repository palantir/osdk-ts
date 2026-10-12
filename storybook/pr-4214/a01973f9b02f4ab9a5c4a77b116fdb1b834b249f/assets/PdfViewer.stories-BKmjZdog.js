import{j as r,M as s}from"./iframe-DQ-Ez-qG.js";import{P as p}from"./pdf-viewer-CLz6VbFc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BnI1Tqjc.js";import"./preload-helper-DbSstiuK.js";import"./PdfViewer-Hbuvx4Li.js";import"./index-BXE1O0xs.js";import"./BasePdfViewer-DwHv0WJF.js";import"./BasePdfViewer.module.css-DcLxXamn.js";import"./PdfViewerAnnotationLayer-Dtk6hSMw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-A-n-3esR.js";import"./PdfViewerOutlineSidebar-DP44tidS.js";import"./PdfViewerSidebarHeader-CN_6oqyk.js";import"./useBaseUiId-SgVzRrNW.js";import"./useControlled-CTxFJ2Pw.js";import"./CompositeRoot-DOtWACD6.js";import"./CompositeItem-DdY16ynU.js";import"./ToolbarRootContext-BlHD5nI1.js";import"./composite-BiRiw1GR.js";import"./svgIconContainer-B-U6T-6a.js";import"./PdfViewerSearchBar-CV1HsYsT.js";import"./chevron-up-DL9Ek3XH.js";import"./chevron-down-COv6kIer.js";import"./cross-UZvPpSxI.js";import"./PdfViewerSidebar-EvIsIj2U.js";import"./index-e-PI1xG5.js";import"./index-vFCgFCPf.js";import"./index-CKAmw6bu.js";import"./PdfViewerToolbar-hmVsP_Mq.js";import"./Button-CEhBDWA2.js";import"./chevron-right-DKob33Es.js";import"./Input-DJaKEaOT.js";import"./search-67zYXUAs.js";import"./spin-DvZzk_KE.js";import"./error-BvUwAVRc.js";import"./withOsdkMetrics-CUCSCii1.js";import"./makeExternalStore-JHGUKVEV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var t,m,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
