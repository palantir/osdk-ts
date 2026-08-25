import{j as r,M as s}from"./iframe-DNmOe6lu.js";import{P as p}from"./pdf-viewer-D2FQ83VY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BU07S-tI.js";import"./preload-helper-CzQBCnx5.js";import"./PdfViewer-lZm123I0.js";import"./index-caWHSjtR.js";import"./BasePdfViewer-D_hRdnij.js";import"./BasePdfViewer.module.css-Zfx7tCvT.js";import"./PdfViewerAnnotationLayer-CD5cwoCQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Du6gc9oA.js";import"./PdfViewerOutlineSidebar-D69cmghU.js";import"./PdfViewerSidebarHeader-D5yryOoK.js";import"./useBaseUiId-DGcVLjQ2.js";import"./useControlled-Csc64VP1.js";import"./CompositeRoot-Bwi5t6HT.js";import"./CompositeItem-D6pRYz6J.js";import"./ToolbarRootContext-CmvtQ4qG.js";import"./composite-B-F9Dc9d.js";import"./svgIconContainer-BE7zSGaJ.js";import"./PdfViewerSearchBar-DSEbD4G4.js";import"./chevron-up-6a1q307q.js";import"./chevron-down-B8h_jYO6.js";import"./cross-Uw_qOqoe.js";import"./PdfViewerSidebar-Cf1cbkxP.js";import"./index-CP4rvvXE.js";import"./index-BWnubV6Z.js";import"./index-CZaZwMdZ.js";import"./PdfViewerToolbar-CjNWhCux.js";import"./Button-CWVQOzz8.js";import"./chevron-right-DOdbqNtu.js";import"./Input-Dp4jVADC.js";import"./search-BEsKwVx4.js";import"./spin-L0-XAmIs.js";import"./error-Wtx85rSt.js";import"./withOsdkMetrics-yeBN-NI8.js";import"./makeExternalStore-CyEm4-2W.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
