import{j as r,M as s}from"./iframe-B4tn47ID.js";import{P as p}from"./pdf-viewer-BqUnbTYZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWj7rVLB.js";import"./preload-helper-0Ir0BY1n.js";import"./PdfRenderer-BMoDemGB.js";import"./index-Bq3QvPK9.js";import"./PdfViewer-BcYUCo0w.js";import"./PdfViewer.module.css-C-N_vKCd.js";import"./PdfViewerAnnotationLayer-BWwLj66R.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2gZLvIY6.js";import"./PdfViewerOutlineSidebar-DuSK4na8.js";import"./PdfViewerSidebarHeader-NiFuPKe_.js";import"./useBaseUiId-DXQbbhrE.js";import"./useControlled-5AawpJZ2.js";import"./CompositeRoot-BRI3rYW0.js";import"./CompositeItem-CILprvMU.js";import"./ToolbarRootContext-BfOKpVJp.js";import"./composite-BOgTbrl8.js";import"./svgIconContainer-DAEDeh0J.js";import"./PdfViewerSearchBar-DL6er555.js";import"./chevron-up-C9Tj5RRH.js";import"./chevron-down-CDvkAbox.js";import"./cross-VOXFfNZC.js";import"./PdfViewerSidebar-Hq0k-IoY.js";import"./index-DI0KON9W.js";import"./index-B8JQ71a5.js";import"./index-Br7cLYRR.js";import"./PdfViewerToolbar-DqAvpOcQ.js";import"./Button-C8ZQ3eoQ.js";import"./chevron-right-CVqldZJi.js";import"./Input-DTiNfWIU.js";import"./search-Bo2Y7njn.js";import"./spin-bgTHo8zQ.js";import"./error-BGjtoKT1.js";import"./withOsdkMetrics-BmXr4RkT.js";import"./makeExternalStore-DFjcTOM3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
