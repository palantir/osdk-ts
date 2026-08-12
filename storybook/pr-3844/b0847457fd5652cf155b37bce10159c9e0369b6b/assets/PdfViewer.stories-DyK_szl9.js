import{j as r,M as s}from"./iframe-V5rE8KDw.js";import{P as p}from"./pdf-viewer-DuA8PWK_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwrExYMa.js";import"./preload-helper-DknuiWi_.js";import"./PdfRenderer-Clx8wlav.js";import"./index-_FCtaiM3.js";import"./PdfViewer-C8YsiZ88.js";import"./PdfViewer.module.css-DaQkZ5Ht.js";import"./PdfViewerAnnotationLayer-Cwt78LQ-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B42hvhEy.js";import"./PdfViewerOutlineSidebar-DYGspbEh.js";import"./PdfViewerSidebarHeader-83xtkZX0.js";import"./useBaseUiId-CH-J5SI4.js";import"./useControlled-DSRawVMq.js";import"./CompositeRoot-BuB9GOzq.js";import"./CompositeItem-BqWlN0Kd.js";import"./ToolbarRootContext-BPNNJjel.js";import"./composite-D5YL1ztv.js";import"./svgIconContainer-AJeYbeFM.js";import"./PdfViewerSearchBar-D9KsEZW-.js";import"./chevron-up-_WQxrDc8.js";import"./chevron-down-C5bbVy-V.js";import"./cross-C2n7IRZQ.js";import"./PdfViewerSidebar-BqqRiCIM.js";import"./index-BPWQliv4.js";import"./index-2F7yM2i8.js";import"./index-CXP_H6_U.js";import"./PdfViewerToolbar-6a32tvsm.js";import"./Button-us1Dbg1o.js";import"./chevron-right-CdjIplbW.js";import"./Input-BHWzg8mQ.js";import"./search-4cA--3cr.js";import"./spin-D-wSuFev.js";import"./error-BkdEf2d-.js";import"./withOsdkMetrics-Fp5zwAOD.js";import"./makeExternalStore-l02CrJa9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
