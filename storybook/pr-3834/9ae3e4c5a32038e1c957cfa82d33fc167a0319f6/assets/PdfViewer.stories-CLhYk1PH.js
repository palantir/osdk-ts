import{j as r,M as s}from"./iframe-BQQenncx.js";import{P as p}from"./pdf-viewer-DExrPR_-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Hyadn9DY.js";import"./preload-helper-DE2zdEQ0.js";import"./PdfViewer-D5iOtIuP.js";import"./index-AEra5GjR.js";import"./BasePdfViewer-DiAyHL_w.js";import"./BasePdfViewer.module.css-Dyvo5EKb.js";import"./PdfViewerAnnotationLayer-D3qjtENA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQzSj6bF.js";import"./PdfViewerOutlineSidebar-BKTeYGD5.js";import"./PdfViewerSidebarHeader-iCUsv9Sl.js";import"./useBaseUiId-BgSJ0JuX.js";import"./useControlled-C13sOQuV.js";import"./CompositeRoot-B8p43ryn.js";import"./CompositeItem-vvPbfk0M.js";import"./ToolbarRootContext-Bu_SuW92.js";import"./composite-CU8fvfsg.js";import"./svgIconContainer-DKhBOnYU.js";import"./PdfViewerSearchBar-B6rfsIpW.js";import"./chevron-up-x-ph3TT4.js";import"./chevron-down-Bog31CQQ.js";import"./cross-CU5c5uos.js";import"./PdfViewerSidebar-DP3gVUTk.js";import"./index-CGPUvFpI.js";import"./index-BVUmKt0T.js";import"./index-ly2aBA7A.js";import"./PdfViewerToolbar-C1rjCyON.js";import"./Button-hetyNd0y.js";import"./chevron-right-yfZJKncf.js";import"./Input-70viAAti.js";import"./search-CgjP2Jwy.js";import"./spin-uC5rWdbG.js";import"./error-DmbVq6Jg.js";import"./withOsdkMetrics-At11PAU6.js";import"./makeExternalStore-CkGykhKx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
