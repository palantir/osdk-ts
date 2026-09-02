import{j as r,M as s}from"./iframe-D-YVkBdv.js";import{P as p}from"./pdf-viewer-D6rBHvLa.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CaYNql_S.js";import"./preload-helper-_q1ENjXx.js";import"./PdfViewer-BL1dpseM.js";import"./index-D0bxYvtz.js";import"./BasePdfViewer-DoxvOCil.js";import"./BasePdfViewer.module.css-OSNyiwXE.js";import"./PdfViewerAnnotationLayer-BlsFCJOC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-COb6ERsy.js";import"./PdfViewerOutlineSidebar-DobjDHiE.js";import"./PdfViewerSidebarHeader-CO4kYUBr.js";import"./useBaseUiId-3VW8EFPd.js";import"./useControlled-C6k-yuxA.js";import"./CompositeRoot-CfQDLSJ6.js";import"./CompositeItem-B9XOzr5r.js";import"./ToolbarRootContext-C0Zkd7BN.js";import"./composite-OshwPNjT.js";import"./svgIconContainer-DDMXlF2M.js";import"./PdfViewerSearchBar-B5z7qKrX.js";import"./chevron-up-C-9rE0k1.js";import"./chevron-down-DJW-OO5g.js";import"./cross-ClH0_H4w.js";import"./PdfViewerSidebar-57H7oCZT.js";import"./index-hHcESr47.js";import"./index-DL0aWY-I.js";import"./index-Dv4gaO6G.js";import"./PdfViewerToolbar-27s1OxhQ.js";import"./Button-BmynEVTb.js";import"./chevron-right-Lt9v-eph.js";import"./Input-BQVgTzKu.js";import"./search-C5Mg5i_j.js";import"./spin-vCTdLGA3.js";import"./error-DLaKvyDO.js";import"./withOsdkMetrics-BbwSxYIO.js";import"./makeExternalStore-CCIciaKQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
