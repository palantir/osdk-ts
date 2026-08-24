import{j as r,M as s}from"./iframe-Dux2Qj3g.js";import{P as p}from"./pdf-viewer-D6dUcEe1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ByeDeJMp.js";import"./preload-helper-Bmm2hojr.js";import"./PdfViewer-D3hWZomw.js";import"./index-DYXOz2KI.js";import"./BasePdfViewer-DUxoy0Kn.js";import"./BasePdfViewer.module.css-BCXNOLuh.js";import"./PdfViewerAnnotationLayer-D02jDDKG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-45MCbqtR.js";import"./PdfViewerOutlineSidebar-BiKWSroa.js";import"./PdfViewerSidebarHeader-DmpsvEMB.js";import"./useBaseUiId-D_xWZtaR.js";import"./useControlled-v5c73Hs6.js";import"./CompositeRoot-BKUybAXp.js";import"./CompositeItem-0lWnRnJ1.js";import"./ToolbarRootContext-BLtnGACK.js";import"./composite-ExUcYNpU.js";import"./svgIconContainer-BifzH97M.js";import"./PdfViewerSearchBar-B1MomVbR.js";import"./chevron-up-BZ2AroDL.js";import"./chevron-down-MKh3Y1PC.js";import"./cross-BN8ne7bQ.js";import"./PdfViewerSidebar-0sxLAtZn.js";import"./index-CTN-iZVf.js";import"./index-8ZfSX0Ah.js";import"./index-ChzWjjSE.js";import"./PdfViewerToolbar-CtIEy8Ij.js";import"./Button-DqQZXePg.js";import"./chevron-right-CaSlXxQ3.js";import"./Input-CmbycQCS.js";import"./search-CZ5yXAIw.js";import"./spin-Q5B2e8Zf.js";import"./error-Dn9sEgKj.js";import"./withOsdkMetrics-BlPb20x4.js";import"./makeExternalStore-BDAriLIM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
