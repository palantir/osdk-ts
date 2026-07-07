import{j as r,M as s}from"./iframe-Do3vBBH1.js";import{P as p}from"./pdf-viewer-YErA6KlD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DfoeIxjN.js";import"./preload-helper-WWl6MMjA.js";import"./PdfRenderer-BBSJTX_k.js";import"./index-D4XSOH2U.js";import"./PdfViewer-B4LKvuUv.js";import"./PdfViewer.module.css-DlNuDu0v.js";import"./PdfViewerAnnotationLayer-DsxbyMZ_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gzXiTi1V.js";import"./PdfViewerOutlineSidebar-CEiE0zuG.js";import"./PdfViewerSidebarHeader-B0PwA6QM.js";import"./useBaseUiId-Gwd5OaJr.js";import"./useControlled-BjoBvq9L.js";import"./CompositeRoot-CVS3t__7.js";import"./CompositeItem-BetNSwhz.js";import"./ToolbarRootContext-DTzZzepT.js";import"./composite-BoJByqVd.js";import"./svgIconContainer-zEvzpv1I.js";import"./PdfViewerSearchBar-CYQgQmwA.js";import"./chevron-up-fjKYhYlu.js";import"./chevron-down-DJzCjbbO.js";import"./cross-CzNKFyiK.js";import"./PdfViewerSidebar-CzqYQWvP.js";import"./index-CJOvCuHH.js";import"./index-C51je7XA.js";import"./index-CyAGruiz.js";import"./PdfViewerToolbar--ZKXjqLT.js";import"./Button-Dq2hSSre.js";import"./chevron-right-8Whd0EsM.js";import"./Input-BSAVQiUZ.js";import"./search-D116u91U.js";import"./spin-Ty47lkwT.js";import"./error-C5p6E1hc.js";import"./withOsdkMetrics-CpxgY9zP.js";import"./makeExternalStore-C3Bb7It6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
