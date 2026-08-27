import{j as r,M as s}from"./iframe-DbqyfEpT.js";import{P as p}from"./pdf-viewer-DhzfyZA2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Db7r-V4B.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CqkQdprL.js";import"./index-DXCImGV3.js";import"./BasePdfViewer-DV-tqAdz.js";import"./BasePdfViewer.module.css-n6gKj4Zu.js";import"./PdfViewerAnnotationLayer-BLthsWsI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWRh7nLB.js";import"./PdfViewerOutlineSidebar-DMx2Sj54.js";import"./PdfViewerSidebarHeader-Df_bmDwm.js";import"./useBaseUiId-DOBNQZSS.js";import"./useControlled-3R4FDQ1-.js";import"./CompositeRoot-BKSmYGAD.js";import"./CompositeItem-pt-Agyrs.js";import"./ToolbarRootContext-Cz4TE7JJ.js";import"./composite-DLhe-Jn_.js";import"./svgIconContainer-BeMYhW5y.js";import"./PdfViewerSearchBar-D4sOwB5C.js";import"./chevron-up-C0jjttVB.js";import"./chevron-down-BZavjwn-.js";import"./cross-B4u0_v8A.js";import"./PdfViewerSidebar-Bq8ckkn2.js";import"./index-BPz5ga9u.js";import"./index-BKOBkvBW.js";import"./index-CqQVZqBR.js";import"./PdfViewerToolbar-C3bD7hXg.js";import"./Button-D6iKZuwX.js";import"./chevron-right-BOSfkiC6.js";import"./Input-Bb36fr0S.js";import"./search-C4sRLKui.js";import"./spin-BHBHbDaC.js";import"./error-DmLEJ7LA.js";import"./withOsdkMetrics-DIB0jy1n.js";import"./makeExternalStore-Bfg6k2dl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
