import{j as r,M as s}from"./iframe-CcCf_wKO.js";import{P as p}from"./pdf-viewer-CVqtYPd-.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DnuX2ADo.js";import"./preload-helper-B3Lqtz2W.js";import"./PdfRenderer-DB1oupJl.js";import"./index-CxR8oD69.js";import"./PdfViewer-BWybE_hY.js";import"./PdfViewer.module.css-B-ohCNxD.js";import"./PdfViewerAnnotationLayer-B0i0bDLT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-UG3AaLtC.js";import"./PdfViewerOutlineSidebar-DHOWq7Z_.js";import"./PdfViewerSidebarHeader-BLm1g2vF.js";import"./useBaseUiId-Dgwp8Euj.js";import"./useControlled-2omoOCnz.js";import"./CompositeRoot-CGHePYg9.js";import"./CompositeItem-BMz51-mh.js";import"./ToolbarRootContext-BaxbK6xh.js";import"./composite-BFPvVuIt.js";import"./svgIconContainer-B-gYQYPR.js";import"./PdfViewerSearchBar-8hdjChv_.js";import"./chevron-up-CPlNjTvO.js";import"./chevron-down-34yZBxnl.js";import"./cross-B3pT6_uV.js";import"./PdfViewerSidebar-B2BRnOPQ.js";import"./index-BAjOAchP.js";import"./index-ZU0gYkdk.js";import"./index-DHmwyqoP.js";import"./PdfViewerToolbar-BCP6C_Wv.js";import"./Button-DjvOhLp5.js";import"./chevron-right-DRydjqw-.js";import"./Input-CMcFL7wW.js";import"./search-rcT4YYai.js";import"./spin-yCPUJ53y.js";import"./error-B3ug_ULp.js";import"./withOsdkMetrics-MsbOjnAt.js";import"./makeExternalStore-B8YzKIqE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
