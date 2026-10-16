import{j as r,M as s}from"./iframe-D0LlCScw.js";import{P as p}from"./pdf-viewer-CTletbsJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BdcOS8eZ.js";import"./preload-helper-BPYsHztA.js";import"./PdfViewer-DYZT3SXR.js";import"./index-R-OWCfkC.js";import"./BasePdfViewer-CrcdWCGS.js";import"./BasePdfViewer.module.css-DwEm8DAr.js";import"./PdfViewerAnnotationLayer-Cj1Jn0oi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DMxCe-2z.js";import"./PdfViewerOutlineSidebar-C8EE005-.js";import"./PdfViewerSidebarHeader-B9s5etKs.js";import"./useBaseUiId-Cnf8WH7W.js";import"./useControlled-C-xRoLJo.js";import"./CompositeRoot-D4wknlLT.js";import"./CompositeItem-DSL5KLQJ.js";import"./ToolbarRootContext-DxaGXN87.js";import"./composite-DawpNJ_k.js";import"./svgIconContainer-CPd4FEGO.js";import"./PdfViewerSearchBar-BOIUyWos.js";import"./chevron-up-0z63vdzI.js";import"./chevron-down-D3xB8NyO.js";import"./cross-BIKx7l1B.js";import"./PdfViewerSidebar-j0I_WP0q.js";import"./index-Bynh9I8M.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./PdfViewerToolbar-pqmxAbOf.js";import"./Button-Bfbc-efe.js";import"./chevron-right-CZ2pTDXF.js";import"./Input-DguSmqlF.js";import"./search-Dy9Bh6oJ.js";import"./spin-ChG9fKWo.js";import"./error-g8Wu2PpH.js";import"./withOsdkMetrics-Bwsdr4IU.js";import"./makeExternalStore-G-t7fMHO.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
