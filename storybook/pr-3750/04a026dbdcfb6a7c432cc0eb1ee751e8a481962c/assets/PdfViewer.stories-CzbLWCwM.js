import{j as r,M as s}from"./iframe-DuxpSVeu.js";import{P as p}from"./pdf-viewer-YzOOEkZd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-mpeGVUWD.js";import"./preload-helper-CVqn3HQv.js";import"./PdfRenderer-CHFo3BYs.js";import"./index-Dbf3XMP5.js";import"./PdfViewer-CLSGLlFe.js";import"./PdfViewer.module.css-BApDAu_T.js";import"./PdfViewerAnnotationLayer-BnzhmjiK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKxgqyh2.js";import"./PdfViewerOutlineSidebar-2jEbZwpZ.js";import"./PdfViewerSidebarHeader-BRZ4MubE.js";import"./useBaseUiId-CFJYUser.js";import"./useControlled-CUzvhz2W.js";import"./CompositeRoot-C6_vAj9O.js";import"./CompositeItem-DVPpXfkZ.js";import"./ToolbarRootContext-D_pMZLcD.js";import"./composite-Bv0d7hMq.js";import"./svgIconContainer-D81CTfk3.js";import"./PdfViewerSearchBar-Cuf1NWXF.js";import"./chevron-up-CpfR3Mqv.js";import"./chevron-down-BLjWGzzL.js";import"./cross-ByskZVKs.js";import"./PdfViewerSidebar-BD8J9Zoq.js";import"./index-DxCyc1SX.js";import"./index-B7GSl1cF.js";import"./index-Db0VOaPK.js";import"./PdfViewerToolbar-BR34TIPG.js";import"./Button-LWb_6Tdn.js";import"./chevron-right-DkvMWe1B.js";import"./Input-BRm5VqU-.js";import"./search-C3puoylr.js";import"./spin-CU3xQByU.js";import"./error-BqVc61FN.js";import"./withOsdkMetrics-uRRxlu8C.js";import"./makeExternalStore-CVmgvRee.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
