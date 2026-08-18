import{j as r,M as s}from"./iframe-DNLO30Ww.js";import{P as p}from"./pdf-viewer-D4pUoQJC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-IJFb2fLX.js";import"./preload-helper-DMPS02wq.js";import"./PdfViewer-CV7ij9Th.js";import"./index-BXPwi4ll.js";import"./BasePdfViewer-LDkC98xr.js";import"./BasePdfViewer.module.css-OEwu3WPN.js";import"./PdfViewerAnnotationLayer-VW9T3GQW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcYO3Mmi.js";import"./PdfViewerOutlineSidebar-BMNjzDLx.js";import"./PdfViewerSidebarHeader-BSn0IaFl.js";import"./useBaseUiId-BD76vFJo.js";import"./useControlled-DrtjR5iX.js";import"./CompositeRoot-CQkGDt-3.js";import"./CompositeItem-C2jJgszn.js";import"./ToolbarRootContext-CSBtcNyO.js";import"./composite-Dh6pm8eM.js";import"./svgIconContainer-BhTCIoRp.js";import"./PdfViewerSearchBar-Cm4dHCzl.js";import"./chevron-up-BKuhfsrx.js";import"./chevron-down-DkxMLSoH.js";import"./cross-DyXX2kzu.js";import"./PdfViewerSidebar-Dw1cl_o5.js";import"./index-DAQea2-r.js";import"./index-ByST95mm.js";import"./index-SmrZ48_U.js";import"./PdfViewerToolbar-766v3JuZ.js";import"./Button-G1G-2Ckd.js";import"./chevron-right-B4XtrJF2.js";import"./Input-ChfQp7iv.js";import"./search-BPhsSIu0.js";import"./spin-BYKT-EiG.js";import"./error-DXYf62L2.js";import"./withOsdkMetrics-CAvqvWGd.js";import"./makeExternalStore-DaD-3fW6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
