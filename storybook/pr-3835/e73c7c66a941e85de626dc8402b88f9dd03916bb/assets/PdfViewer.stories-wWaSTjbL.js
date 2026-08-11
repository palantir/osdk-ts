import{j as r,M as s}from"./iframe-yE_ETOHr.js";import{P as p}from"./pdf-viewer-C1JN6nE9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3utOFkH.js";import"./preload-helper-o6WvwBPl.js";import"./PdfRenderer-LTc1P0Y_.js";import"./index-D1aMrwQT.js";import"./PdfViewer-DJfR9E-Z.js";import"./PdfViewer.module.css-DwqmFtqP.js";import"./PdfViewerAnnotationLayer-DppQf4Sb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Di6G4pJs.js";import"./PdfViewerOutlineSidebar-DK9xCMMm.js";import"./PdfViewerSidebarHeader-6VTeYxKK.js";import"./useBaseUiId-DRDeEW1q.js";import"./useControlled-DKJFXIxk.js";import"./CompositeRoot-D3yLFm6q.js";import"./CompositeItem-B15H_S00.js";import"./ToolbarRootContext-CIeM8gUf.js";import"./composite-DwgnebsF.js";import"./svgIconContainer-DmRPPlT8.js";import"./PdfViewerSearchBar-DXs7tv9t.js";import"./chevron-up-NXM1YeX0.js";import"./chevron-down-CFTHRzae.js";import"./cross-BNS_XELI.js";import"./PdfViewerSidebar-UfBMBD0w.js";import"./index-DFlEw2oQ.js";import"./index-D1PfGPZb.js";import"./index-xOQiG_tn.js";import"./PdfViewerToolbar-DHxDhA8d.js";import"./Button-k0rMWkk9.js";import"./chevron-right-CqzRut0Y.js";import"./Input-CCmIVrO8.js";import"./search-Dmjh9lBr.js";import"./spin-BmEmlCSb.js";import"./error-DWwlREAa.js";import"./withOsdkMetrics-DnRB_DeO.js";import"./makeExternalStore-D8THS2fM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
