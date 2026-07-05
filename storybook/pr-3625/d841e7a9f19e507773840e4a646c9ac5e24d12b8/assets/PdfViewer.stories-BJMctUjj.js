import{j as r,M as s}from"./iframe-DI8xhFrw.js";import{P as p}from"./pdf-viewer-IeMEGxrk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-bg_FxWUF.js";import"./preload-helper-pfBTG-5O.js";import"./PdfRenderer-CmqVedkp.js";import"./index-BlwoNqFW.js";import"./PdfViewer-Dfg09Pnt.js";import"./PdfViewer.module.css-DOLvB_Yf.js";import"./PdfViewerAnnotationLayer-BReU13gG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-fV6NHw.js";import"./PdfViewerOutlineSidebar-D64mMfKl.js";import"./PdfViewerSidebarHeader-DxL9Bf-T.js";import"./useBaseUiId-CYDaYSO2.js";import"./useControlled-JdJ-Acsj.js";import"./CompositeRoot-CfHXBJEq.js";import"./CompositeItem-D3tRsSzK.js";import"./ToolbarRootContext-BGS2qhNp.js";import"./composite-B_axicrx.js";import"./svgIconContainer-DWW9_GwS.js";import"./PdfViewerSearchBar-BZhT68mx.js";import"./chevron-up-M_Eemw31.js";import"./chevron-down-CdEihpC_.js";import"./cross-BKLrYLNV.js";import"./PdfViewerSidebar-fhghDeWN.js";import"./index-y9pWUITA.js";import"./index-0sPpJHYZ.js";import"./index-BL6TyxlU.js";import"./PdfViewerToolbar-C7UjgsGs.js";import"./Button-HfWHmORN.js";import"./chevron-right-DdoxwhKo.js";import"./Input-CwxWxH0R.js";import"./search-CUWsefYA.js";import"./spin-WdhcFuMd.js";import"./error-CYTlXn9M.js";import"./withOsdkMetrics-CaL8dOC1.js";import"./makeExternalStore-BMUU3lQI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
