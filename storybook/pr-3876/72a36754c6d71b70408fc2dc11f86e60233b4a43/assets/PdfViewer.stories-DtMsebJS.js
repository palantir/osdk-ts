import{j as r,M as s}from"./iframe-BKIDvt-K.js";import{P as p}from"./pdf-viewer-B5CMlx3-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJ2i-OC6.js";import"./preload-helper-mI3tBMWP.js";import"./PdfViewer-D6pqIG-O.js";import"./index-CrGl0mKT.js";import"./BasePdfViewer-D_uRtF3i.js";import"./BasePdfViewer.module.css-BTjy91NK.js";import"./PdfViewerAnnotationLayer-BFXYjq29.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZhYrzVM.js";import"./PdfViewerOutlineSidebar-UQHTMGuB.js";import"./PdfViewerSidebarHeader-0Zj84_xM.js";import"./useBaseUiId-C9o0bL4p.js";import"./useControlled-BJ__83MY.js";import"./CompositeRoot-Cb5lehs-.js";import"./CompositeItem-Bk-qRhF5.js";import"./ToolbarRootContext-CbtqnU-s.js";import"./composite-CQudhTJ9.js";import"./svgIconContainer-DPW23OxO.js";import"./PdfViewerSearchBar-BsC5fLwP.js";import"./chevron-up-fBOmtDnV.js";import"./chevron-down-DjDYprbt.js";import"./cross-ZQbGVcUs.js";import"./PdfViewerSidebar-BduG9qJ0.js";import"./index-BmVXlrb-.js";import"./index-CC4pQ_7y.js";import"./index-DDZLkqmq.js";import"./PdfViewerToolbar-Cuz4pqOX.js";import"./Button-DQ9OY2hI.js";import"./chevron-right-k3Bn8R0-.js";import"./Input-CEoxDAhD.js";import"./search-D85PJwgE.js";import"./spin-COv16fso.js";import"./error-venNczME.js";import"./withOsdkMetrics-8E7XigZV.js";import"./makeExternalStore-C22ZFOyU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
