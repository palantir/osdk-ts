import{j as r,M as s}from"./iframe-q7KMYOTO.js";import{P as p}from"./pdf-viewer-COla_rKj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BzlU4g6E.js";import"./preload-helper-6z_lVhDZ.js";import"./PdfViewer-nxZLhdrd.js";import"./index-Bu4qz67A.js";import"./BasePdfViewer-Cl5a6IN3.js";import"./BasePdfViewer.module.css-D2r9Q17J.js";import"./PdfViewerAnnotationLayer-DkRfUq6F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bq6S8E8-.js";import"./PdfViewerOutlineSidebar-C0qfhKsb.js";import"./PdfViewerSidebarHeader-CeFJw6yN.js";import"./useBaseUiId-CDKYXFfl.js";import"./useControlled-wetohDUI.js";import"./CompositeRoot-CHZbYlDd.js";import"./CompositeItem-p-JPFChH.js";import"./ToolbarRootContext-Bn2kB8OQ.js";import"./composite-msqnCEF7.js";import"./svgIconContainer-Lo22dyXX.js";import"./PdfViewerSearchBar-BNqo4Goh.js";import"./chevron-up-gZ1gDCJg.js";import"./chevron-down-CBifMXCi.js";import"./cross-GKTMVUJ_.js";import"./PdfViewerSidebar-Cx22mLot.js";import"./index-CPlC8aoM.js";import"./index-CbNuHbfY.js";import"./index-B07PL0k3.js";import"./PdfViewerToolbar-DLx6TCS7.js";import"./Button-4IQspW2w.js";import"./chevron-right-9dhwL3zc.js";import"./Input-DS3b7656.js";import"./search-BHHQGkAK.js";import"./spin-ByQD6nfF.js";import"./error-BS4T7RXs.js";import"./withOsdkMetrics-B9467pZU.js";import"./makeExternalStore-CrT5GEV3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
