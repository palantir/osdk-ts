import{j as r,M as s}from"./iframe-C2hD-Cdm.js";import{P as p}from"./pdf-viewer-D236bi5W.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFwp84BQ.js";import"./preload-helper-c63MAXTS.js";import"./PdfRenderer-Cn5tS283.js";import"./index-B4cXpWuA.js";import"./PdfViewer-BLnFOzrq.js";import"./PdfViewer.module.css-L6mRrdAK.js";import"./PdfViewerAnnotationLayer-DNEeMv3_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BEVibdDN.js";import"./PdfViewerOutlineSidebar-BRHu53v0.js";import"./PdfViewerSidebarHeader-Dj3lZjYC.js";import"./useBaseUiId-BKwwY7GA.js";import"./useControlled-C4rMef_j.js";import"./CompositeRoot-d-vQBWrT.js";import"./CompositeItem-D2ftems9.js";import"./ToolbarRootContext-CfOk5N7L.js";import"./composite-DhQe9Wzn.js";import"./svgIconContainer-CGPRmzrk.js";import"./PdfViewerSearchBar-64VzMdoZ.js";import"./chevron-up-DyGozKDM.js";import"./chevron-down-Bt_3durr.js";import"./cross-Cqxwy79y.js";import"./PdfViewerSidebar-L8-3ocNa.js";import"./index-CsE8gr5m.js";import"./index-BdNL6hIt.js";import"./index-B_Qazd4e.js";import"./PdfViewerToolbar-Dcv9TcO7.js";import"./Button-B5zT1wAH.js";import"./chevron-right-0w3CIuma.js";import"./Input-hzcxFTOb.js";import"./search-Dv0CkM8a.js";import"./spin-BgYv5Nxu.js";import"./error--JCK9y5k.js";import"./withOsdkMetrics-BafAupQO.js";import"./makeExternalStore-DDCCzAGe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
