import{j as r,M as s}from"./iframe-Ct3oxr9I.js";import{P as p}from"./pdf-viewer-YCmUIX_V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSxYSwcP.js";import"./preload-helper-Cpix7I59.js";import"./PdfRenderer-Dk6AYL0S.js";import"./index-BeEk7T1w.js";import"./PdfViewer-BVynAYrp.js";import"./PdfViewer.module.css-BK5EHyiw.js";import"./PdfViewerAnnotationLayer-BlfMWAUN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DfnhZ6cH.js";import"./PdfViewerOutlineSidebar-DBhIVpd7.js";import"./PdfViewerSidebarHeader-Cw0Uza4i.js";import"./useBaseUiId-DrNLrMt2.js";import"./useControlled-B3TsBytj.js";import"./CompositeRoot-DawdbMmo.js";import"./CompositeItem-C4Lg52S-.js";import"./ToolbarRootContext-Cj7czbwT.js";import"./composite-CMfYV8DM.js";import"./svgIconContainer-BPTRZNd7.js";import"./PdfViewerSearchBar-Bkp3eqwj.js";import"./chevron-up-DC2km1hZ.js";import"./chevron-down-BNs-bhsK.js";import"./cross-BMADg6y6.js";import"./PdfViewerSidebar-C0i2aLuT.js";import"./index-DLMrgljF.js";import"./index-1uXXO74H.js";import"./index-CDpKJhZ5.js";import"./PdfViewerToolbar-B7KOhWDk.js";import"./Button-CV4FI36d.js";import"./chevron-right-EfNVjqmO.js";import"./Input-Cjly-w9P.js";import"./search-DVZxNNQh.js";import"./spin-Dk3Mvjk3.js";import"./error-BBSgIsYT.js";import"./withOsdkMetrics-CUO9lnTj.js";import"./makeExternalStore-rhS6SIAC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
