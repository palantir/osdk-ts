import{j as r,M as s}from"./iframe-Bfqgfvg5.js";import{P as p}from"./pdf-viewer-CVNhiEPI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BLF8EQxG.js";import"./preload-helper-sbX0EP0E.js";import"./PdfViewer-VHiU0r03.js";import"./index-BmFrK4uE.js";import"./BasePdfViewer-_7F9f139.js";import"./BasePdfViewer.module.css-BJDepHBB.js";import"./PdfViewerAnnotationLayer-XN9SufwG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CdouU_-N.js";import"./PdfViewerOutlineSidebar-BWm33rBB.js";import"./PdfViewerSidebarHeader-CmDywfmA.js";import"./useBaseUiId-BdhQOYo_.js";import"./useControlled-D38Ax3L2.js";import"./CompositeRoot-DfB9TxVL.js";import"./CompositeItem-CWhqikpO.js";import"./ToolbarRootContext-DCYSyhUf.js";import"./composite-DmYhjO8v.js";import"./svgIconContainer-DOVGkrjj.js";import"./PdfViewerSearchBar-B70vComZ.js";import"./chevron-up-BGjQ8QIU.js";import"./chevron-down-Dtvuz0Wc.js";import"./cross-B4_R7rVU.js";import"./PdfViewerSidebar-BSCnYLAA.js";import"./index-BpPUDBTM.js";import"./index-Bl76L6mj.js";import"./index-CS_96wYM.js";import"./PdfViewerToolbar-CsZRKt3D.js";import"./Button-B2JqEm4Y.js";import"./chevron-right-DGfWd577.js";import"./Input-C_7kfxom.js";import"./search-Dn2xqqj5.js";import"./spin-CRWOiMxM.js";import"./error-Bs83EBeR.js";import"./withOsdkMetrics-DMZgHj0E.js";import"./makeExternalStore-BJlkM_Kr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
