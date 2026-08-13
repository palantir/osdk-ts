import{j as r,M as s}from"./iframe-B3GwK4s3.js";import{P as p}from"./pdf-viewer-DPb4Xm9H.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BMrv5fZr.js";import"./preload-helper-DJ-YN-iG.js";import"./PdfViewer-Dv0P6jMk.js";import"./index-Cz6EBUKe.js";import"./BasePdfViewer-D-i0OkWd.js";import"./BasePdfViewer.module.css-VX6DCvid.js";import"./PdfViewerAnnotationLayer-iatymucY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-geaWPrR7.js";import"./PdfViewerOutlineSidebar-BC0fEdYL.js";import"./PdfViewerSidebarHeader-CHuD2B_Y.js";import"./useBaseUiId-Boj-QUxa.js";import"./useControlled-DDUO_V7t.js";import"./CompositeRoot-DIdmYPtD.js";import"./CompositeItem-Cht7Ot0q.js";import"./ToolbarRootContext-CbqesPbi.js";import"./composite-PxQPegKz.js";import"./svgIconContainer-11sW1-xS.js";import"./PdfViewerSearchBar-4P95qS1S.js";import"./chevron-up-CE0DzthH.js";import"./chevron-down-D1x0iG-D.js";import"./cross-DaQTNtqn.js";import"./PdfViewerSidebar-BDBfcsOi.js";import"./index-BCQ5Sf7j.js";import"./index-CliIsbDx.js";import"./index-B1tSWc_A.js";import"./PdfViewerToolbar-8jXPkEbb.js";import"./Button-jfTE2vPB.js";import"./chevron-right-IDGdnbu-.js";import"./Input-pJTRV29h.js";import"./search-k6RbeZC_.js";import"./spin-vxJUgpr9.js";import"./error-CaJ_TOjb.js";import"./withOsdkMetrics-Dzvz1nJj.js";import"./makeExternalStore-DvtS8XD8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
