import{j as r,M as s}from"./iframe-CGQ3pPyN.js";import{P as p}from"./pdf-viewer-Xada5GG5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bzp6lo8K.js";import"./preload-helper-B0d8w61e.js";import"./PdfRenderer-C7W_1Jp2.js";import"./index-D5ulmSp4.js";import"./PdfViewer-DFYvTXgb.js";import"./PdfViewer.module.css-pNfbgIC2.js";import"./PdfViewerAnnotationLayer-C-xriI7w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7bfNcvW.js";import"./PdfViewerOutlineSidebar-BHaFyMGS.js";import"./PdfViewerSidebarHeader-BwXk5_VJ.js";import"./useBaseUiId-D18qpYhV.js";import"./useControlled-C3Ct7rRf.js";import"./CompositeRoot-b2M6DBmn.js";import"./CompositeItem--3EFQsH0.js";import"./ToolbarRootContext-KxLfRu1W.js";import"./composite-DdxnokEw.js";import"./svgIconContainer-PA2ZuagG.js";import"./PdfViewerSearchBar-BYrigPT1.js";import"./chevron-up-R9LXXcwH.js";import"./chevron-down-psR5H-K5.js";import"./cross-CaCixUkz.js";import"./PdfViewerSidebar-D86-B5qS.js";import"./index-D4-y_jb8.js";import"./index-DCTecv-n.js";import"./index-D6WjugAr.js";import"./PdfViewerToolbar-Dwh4-JbQ.js";import"./Button-BXSTotUw.js";import"./chevron-right-2G1a_Wfc.js";import"./Input-BT1Rp4mr.js";import"./search-CFopY9hG.js";import"./spin-Crz5cZtq.js";import"./error-DEEH7noa.js";import"./withOsdkMetrics-13L2_Pyz.js";import"./makeExternalStore-l1enNhmQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
