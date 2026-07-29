import{j as r,M as s}from"./iframe-CIbSoI7M.js";import{P as p}from"./pdf-viewer--7UOzpat.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DLPlNFpr.js";import"./preload-helper-DmH6FFG8.js";import"./PdfRenderer-Bc-OVYs2.js";import"./index-APCVJEW3.js";import"./PdfViewer-CVTOlNfc.js";import"./PdfViewer.module.css-G7wGYij5.js";import"./PdfViewerAnnotationLayer-CZ7V8qO7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dbv5S_Fe.js";import"./PdfViewerOutlineSidebar-S-2hMqZi.js";import"./PdfViewerSidebarHeader-Dc6rceAr.js";import"./useBaseUiId-Bmq7BhRQ.js";import"./useControlled-B_hgmZPj.js";import"./CompositeRoot-BZBE-KwB.js";import"./CompositeItem-DObahPUf.js";import"./ToolbarRootContext-CxR7GEiJ.js";import"./composite-CpNiXj_M.js";import"./svgIconContainer-DcLu3MTp.js";import"./PdfViewerSearchBar-CSabJ8zr.js";import"./chevron-up-PRwquXiP.js";import"./chevron-down-C9wqxvOA.js";import"./cross-B4Gn6Z-M.js";import"./PdfViewerSidebar-D_yGmrJ2.js";import"./index-CmzWklHf.js";import"./index-CboshYjZ.js";import"./index-B_6MzMjy.js";import"./PdfViewerToolbar-BOzA9g5N.js";import"./Button-B5W8gulZ.js";import"./chevron-right-CEz2XfxK.js";import"./Input-BML0uaTR.js";import"./search-BkI_TfyS.js";import"./spin-BopIZGPP.js";import"./error-BMaUhajR.js";import"./withOsdkMetrics-CgEO4G4q.js";import"./makeExternalStore-Db2RDoef.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
