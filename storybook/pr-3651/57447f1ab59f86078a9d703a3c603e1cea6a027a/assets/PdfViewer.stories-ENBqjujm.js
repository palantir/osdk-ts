import{j as r,M as s}from"./iframe-CsWLXGze.js";import{P as p}from"./pdf-viewer-C6uEra20.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DF8M21x3.js";import"./preload-helper-CSH4YltX.js";import"./PdfRenderer-DBUD8Yee.js";import"./index-M4a-IfHf.js";import"./PdfViewer-DTqnDGgY.js";import"./PdfViewer.module.css-C3cNKkAb.js";import"./PdfViewerAnnotationLayer-DQE9kBEe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-X-6sbRso.js";import"./PdfViewerOutlineSidebar-B39_el5Q.js";import"./PdfViewerSidebarHeader-CSS_9yDG.js";import"./useBaseUiId-fgChwSGu.js";import"./useControlled-CGa31_jc.js";import"./CompositeRoot-MQFIods-.js";import"./CompositeItem-ZcMj5C8j.js";import"./ToolbarRootContext-By5rr9Ue.js";import"./composite-DhVg6KqB.js";import"./svgIconContainer-1YcTNdfv.js";import"./PdfViewerSearchBar-C_zkXteU.js";import"./chevron-up-DQPEW9TX.js";import"./chevron-down-B_D-AKx7.js";import"./cross-BKDbV3FK.js";import"./PdfViewerSidebar-D4-Hai6_.js";import"./index-cr7KvQ6p.js";import"./index-BIwVsCzG.js";import"./index-sdEV9Iuk.js";import"./PdfViewerToolbar-Bb1BbPSh.js";import"./Button-C4uLPH9T.js";import"./chevron-right-Dbq3VZLF.js";import"./Input-BIXIYg13.js";import"./search-5ko9ULaH.js";import"./spin-Co9jqKty.js";import"./error-i0f4hEhy.js";import"./withOsdkMetrics-BQkvG7az.js";import"./makeExternalStore-C7HN_2a4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
