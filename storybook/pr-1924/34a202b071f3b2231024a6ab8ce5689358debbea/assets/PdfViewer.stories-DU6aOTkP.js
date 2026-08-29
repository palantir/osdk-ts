import{j as r,M as s}from"./iframe-TjZyb1bS.js";import{P as p}from"./pdf-viewer-DSFSKOKp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7piiLO9.js";import"./preload-helper-6vf5keDo.js";import"./PdfViewer-exvVZUzK.js";import"./index-DO-d5Nhw.js";import"./BasePdfViewer-DL9OD5Ee.js";import"./BasePdfViewer.module.css-is9FG73y.js";import"./PdfViewerAnnotationLayer-qEx2BS4L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CQIzMvBf.js";import"./PdfViewerOutlineSidebar-BS-smmCM.js";import"./PdfViewerSidebarHeader-CGRUe6Ak.js";import"./useBaseUiId-Dy5x7CTr.js";import"./useControlled-DPKnbe0H.js";import"./CompositeRoot-BMFr1WtK.js";import"./CompositeItem-BA7lzU2v.js";import"./ToolbarRootContext-DAXEwoS8.js";import"./composite-B6T__7Xq.js";import"./svgIconContainer-g1t1jdQ-.js";import"./PdfViewerSearchBar-CjDKzE-9.js";import"./chevron-up-CuTc__PQ.js";import"./chevron-down-aFaMKH-b.js";import"./cross-CcY2Z_E0.js";import"./PdfViewerSidebar-DutvNWq0.js";import"./index-ntrV61BC.js";import"./index-08ELxWRo.js";import"./index-7MMySw2W.js";import"./PdfViewerToolbar-pkscgIPg.js";import"./Button-D4RUqMFW.js";import"./chevron-right-DfAutDY5.js";import"./Input-JrCXDO00.js";import"./search-EfOYLmyo.js";import"./spin-VmFb4VP_.js";import"./error-Ch19zHJw.js";import"./withOsdkMetrics-C27aqxoK.js";import"./makeExternalStore-C8VFKLfw.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
