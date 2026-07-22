import{j as r,M as s}from"./iframe-BawfCu5f.js";import{P as p}from"./pdf-viewer-JOSnEqTB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DVmTt24d.js";import"./preload-helper-Dl7iHKQQ.js";import"./PdfRenderer-CsBspVW2.js";import"./index-EoQmSMlv.js";import"./PdfViewer-BD90JgRg.js";import"./PdfViewer.module.css-i-13IXVd.js";import"./PdfViewerAnnotationLayer-Dxi5L57H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9RMn_zs.js";import"./PdfViewerOutlineSidebar-BIIeAweh.js";import"./PdfViewerSidebarHeader-Ca2KvPRs.js";import"./useBaseUiId-C6crYWZv.js";import"./useControlled-CoTq0u9Z.js";import"./CompositeRoot-DyKz5p7I.js";import"./CompositeItem-DzHI6BV-.js";import"./ToolbarRootContext-LEvK7epa.js";import"./composite-DJaR8rxc.js";import"./svgIconContainer-C2ipol2u.js";import"./PdfViewerSearchBar-1pn1s16O.js";import"./chevron-up-BwNzJkHc.js";import"./chevron-down-DnS9ARE_.js";import"./cross-S96n59YZ.js";import"./PdfViewerSidebar-B7jZbbiW.js";import"./index-tIdgjXf4.js";import"./index-BsRqisJt.js";import"./index-BznzXb1r.js";import"./PdfViewerToolbar-CdAfvhoB.js";import"./Button-BjO8QNhj.js";import"./chevron-right-BU_Ljjbb.js";import"./Input-B29VtwUA.js";import"./search-LrmIhryk.js";import"./spin-QvuMMFST.js";import"./error-DJqTF5Ik.js";import"./withOsdkMetrics-CDiwqGfJ.js";import"./makeExternalStore-DEJ3bQls.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
