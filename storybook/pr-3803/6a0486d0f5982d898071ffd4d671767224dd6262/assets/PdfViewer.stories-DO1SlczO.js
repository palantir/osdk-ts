import{j as r,M as s}from"./iframe-DD9cnFys.js";import{P as p}from"./pdf-viewer-jXZ7hUMc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CuyTgTXQ.js";import"./preload-helper-Bu1CQnKL.js";import"./PdfRenderer-B9I1lAsQ.js";import"./index-CnfMn84N.js";import"./PdfViewer-BShtm5JZ.js";import"./PdfViewer.module.css-CVn8CjVb.js";import"./PdfViewerAnnotationLayer-qe2RbRo8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cs18sA_1.js";import"./PdfViewerOutlineSidebar-B-oVgkFt.js";import"./PdfViewerSidebarHeader-BNvhjzcz.js";import"./useBaseUiId-BPJNe1N9.js";import"./useControlled-AJxb8xEE.js";import"./CompositeRoot-Dmodz9C1.js";import"./CompositeItem-D6ac5Q0X.js";import"./ToolbarRootContext-B4yKvb37.js";import"./composite-CS4z5jOQ.js";import"./svgIconContainer-BxaZ4skB.js";import"./PdfViewerSearchBar-BuvKcepd.js";import"./chevron-up-JDhXFP3D.js";import"./chevron-down-BN0W8txx.js";import"./cross-_7zlGwns.js";import"./PdfViewerSidebar-BpCe_kJp.js";import"./index-CUTzcWww.js";import"./index-D-Nkh_eJ.js";import"./index-BSqqb3Ab.js";import"./PdfViewerToolbar-CcAIp-Nf.js";import"./Button-CIpm3hgo.js";import"./chevron-right-CmM_GFwY.js";import"./Input-BTKsKM7k.js";import"./search-Bw9u37nA.js";import"./spin-C-GHXEFv.js";import"./error-CbN-SPes.js";import"./withOsdkMetrics-BVsGKhhQ.js";import"./makeExternalStore-DYPfwRWT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
