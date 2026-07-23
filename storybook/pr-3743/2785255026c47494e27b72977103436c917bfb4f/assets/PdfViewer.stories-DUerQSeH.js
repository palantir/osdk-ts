import{j as r,M as s}from"./iframe-Ck_GGLOI.js";import{P as p}from"./pdf-viewer-BkiXFsCn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CCa3igv4.js";import"./preload-helper-Ct_SzjwP.js";import"./PdfRenderer-Cdt9DnO7.js";import"./index-B89KqVgP.js";import"./PdfViewer-CPVLFJ1U.js";import"./PdfViewer.module.css-BQU-y2ka.js";import"./PdfViewerAnnotationLayer-hkqqsLh5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-keBjD60B.js";import"./PdfViewerOutlineSidebar-DTZEJ0hg.js";import"./PdfViewerSidebarHeader-BfAaShmU.js";import"./useBaseUiId--oVgeq5T.js";import"./useControlled-DlHXi5tj.js";import"./CompositeRoot-MrYwAUql.js";import"./CompositeItem-Cj_m-_Op.js";import"./ToolbarRootContext-D_d6MWRT.js";import"./composite-C_8Q5Icy.js";import"./svgIconContainer-r8zB-P6B.js";import"./PdfViewerSearchBar-BeitFKgt.js";import"./chevron-up-u6cJPQp1.js";import"./chevron-down-PHjoZosY.js";import"./cross-KWWBZC90.js";import"./PdfViewerSidebar-DrCcQSba.js";import"./index-C7igWU5b.js";import"./index-B_ig_9F1.js";import"./index-B25gAHKW.js";import"./PdfViewerToolbar-D82dSy1L.js";import"./Button-CbHH9XWB.js";import"./chevron-right-DIPIUp-B.js";import"./Input-Dc0pCVB2.js";import"./search-BoCb61rS.js";import"./spin-CTBKbBTf.js";import"./error-B_r0fBp9.js";import"./withOsdkMetrics-B4h9Dq5k.js";import"./makeExternalStore-95duhyix.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
