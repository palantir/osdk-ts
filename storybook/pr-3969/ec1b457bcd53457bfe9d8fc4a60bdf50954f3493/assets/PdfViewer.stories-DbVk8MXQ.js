import{j as r,M as s}from"./iframe-DT3Pq7Dk.js";import{P as p}from"./pdf-viewer-KbbNGR1j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjetXjD1.js";import"./preload-helper-D2GrK1CJ.js";import"./PdfViewer-Dw2OhtnT.js";import"./index-AT_VLJBX.js";import"./BasePdfViewer-COUYCGim.js";import"./BasePdfViewer.module.css-CRQnJibY.js";import"./PdfViewerAnnotationLayer-BgHPBEGR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYlNtTYT.js";import"./PdfViewerOutlineSidebar-CDxy3RDd.js";import"./PdfViewerSidebarHeader-DvbNwGZC.js";import"./useBaseUiId-Laeorjq3.js";import"./useControlled-CytQjpOe.js";import"./CompositeRoot-rhHYzzXt.js";import"./CompositeItem-DwUvkpMk.js";import"./ToolbarRootContext-BXZtSj06.js";import"./composite-BLTBB5ty.js";import"./svgIconContainer-TdCO8fzr.js";import"./PdfViewerSearchBar-CFyGW-Nw.js";import"./chevron-up-D7gv_6n3.js";import"./chevron-down-puCe9vK2.js";import"./cross-CW5vZ7KQ.js";import"./PdfViewerSidebar-BcSJ17fO.js";import"./index-Cm0FOdoZ.js";import"./index-DzCFWbuW.js";import"./index-fPrU9AoD.js";import"./PdfViewerToolbar-Bnx6syS2.js";import"./Button-DyNME9ua.js";import"./chevron-right-5dZ6MxJm.js";import"./Input-Bb6sqNmB.js";import"./search-riKbdAfC.js";import"./spin-B04rRzu4.js";import"./error-CJNV9pQn.js";import"./withOsdkMetrics-Bxhj5aXe.js";import"./makeExternalStore-Do_G056M.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
