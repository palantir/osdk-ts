import{j as r,M as s}from"./iframe-COsBkwN-.js";import{P as p}from"./pdf-viewer-DO_9S0ng.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CAP9crBf.js";import"./preload-helper-C2KEka4g.js";import"./PdfRenderer-BZyALebh.js";import"./index-Dzyv5lNn.js";import"./PdfViewer-8U-TzwgG.js";import"./PdfViewer.module.css-CMMBtm2U.js";import"./PdfViewerAnnotationLayer-DeE4XRLc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-oVw6gY06.js";import"./PdfViewerOutlineSidebar-D7uvxwwv.js";import"./PdfViewerSidebarHeader-B_bf_IEd.js";import"./useBaseUiId-CrYfkKS-.js";import"./useControlled-OeG3im5l.js";import"./CompositeRoot-BCDumAbj.js";import"./CompositeItem-D8_4YPh_.js";import"./ToolbarRootContext-2lZchj18.js";import"./composite-N-ev52N7.js";import"./svgIconContainer-DESpR6Na.js";import"./PdfViewerSearchBar-L3rz3kYe.js";import"./chevron-up-CvCBqCoS.js";import"./chevron-down-CYND1yfl.js";import"./cross-CWmtKzEJ.js";import"./PdfViewerSidebar-B4hFtr_P.js";import"./index-sBgXa9QS.js";import"./index-Ce8K8IPk.js";import"./index-pi4yE-No.js";import"./PdfViewerToolbar-CWTdenz3.js";import"./Button-9MwOUcQP.js";import"./chevron-right-BjJR6V4s.js";import"./Input-BnxjD1st.js";import"./search-B3yafYcI.js";import"./spin-teLId1bT.js";import"./error-30orUfhG.js";import"./withOsdkMetrics-CkVV9LW6.js";import"./makeExternalStore-BZSr_d3Q.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
