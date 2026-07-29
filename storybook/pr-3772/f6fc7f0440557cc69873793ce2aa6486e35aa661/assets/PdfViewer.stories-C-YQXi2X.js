import{j as r,M as s}from"./iframe-BTIka0mU.js";import{P as p}from"./pdf-viewer-cb52etHF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Clc6LERx.js";import"./preload-helper-px61uG1k.js";import"./PdfRenderer-Ds6aKr2Z.js";import"./index-BSUZmBMj.js";import"./PdfViewer-CQw2q2Wd.js";import"./PdfViewer.module.css-yFrO6Fa8.js";import"./PdfViewerAnnotationLayer-o17OCJdv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPqNHawt.js";import"./PdfViewerOutlineSidebar-Br39xIwN.js";import"./PdfViewerSidebarHeader-Bhbejaa8.js";import"./useBaseUiId-C1-4UPjr.js";import"./useControlled-CL1DBA2V.js";import"./CompositeRoot-SFjS-pob.js";import"./CompositeItem-H6HgtU07.js";import"./ToolbarRootContext-DPmgZ9H3.js";import"./composite-_RYTITLD.js";import"./svgIconContainer-_rcFoVfV.js";import"./PdfViewerSearchBar-Ds-8fJtZ.js";import"./chevron-up-ByUW6Zkg.js";import"./chevron-down-CYoX06Sv.js";import"./cross-Y1xE6j58.js";import"./PdfViewerSidebar-QaN7CZgd.js";import"./index-Cz1dZR80.js";import"./index-DJWApIIr.js";import"./index-BZqP7QHW.js";import"./PdfViewerToolbar-Dtoq0mXF.js";import"./Button-C_wYQPHZ.js";import"./chevron-right-BPhkUfBY.js";import"./Input-CHu4cTHa.js";import"./search-klzOiLLV.js";import"./spin-CE4-HVHI.js";import"./error-GBqEqKOX.js";import"./withOsdkMetrics-BCXnSjLq.js";import"./makeExternalStore-1GNwblPW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
