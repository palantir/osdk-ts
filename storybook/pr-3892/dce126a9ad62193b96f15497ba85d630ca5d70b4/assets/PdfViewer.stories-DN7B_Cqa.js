import{j as r,M as s}from"./iframe-Cjl6pIXM.js";import{P as p}from"./pdf-viewer-CYTnhA4G.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dy3Z9X1c.js";import"./preload-helper-ezBh--Yr.js";import"./PdfViewer-BG4jvTiP.js";import"./index-nWF7o5I3.js";import"./BasePdfViewer-7hsnLvji.js";import"./BasePdfViewer.module.css-Ds5_sdOp.js";import"./PdfViewerAnnotationLayer-0qODfikR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2gSKzmZ.js";import"./PdfViewerOutlineSidebar-CbqCHSwY.js";import"./PdfViewerSidebarHeader-lHqzyYfa.js";import"./useBaseUiId-CIUrQjM5.js";import"./useControlled-CLbZj6xc.js";import"./CompositeRoot-ByfgBMJ-.js";import"./CompositeItem-BdjQ3x20.js";import"./ToolbarRootContext-YT_m9B5L.js";import"./composite-CSFuaGEl.js";import"./svgIconContainer-BIGcTem8.js";import"./PdfViewerSearchBar-DoUcS-Al.js";import"./chevron-up-EPw_4ucc.js";import"./chevron-down-z7gQuHi2.js";import"./cross-C6Wnpl4f.js";import"./PdfViewerSidebar-SEcquRHA.js";import"./index-DxUk46hk.js";import"./index-CvQTdrcx.js";import"./index-wBonjv3U.js";import"./PdfViewerToolbar-BtmGhtAB.js";import"./Button-Dq2yQQ1D.js";import"./chevron-right-DWTW1_xy.js";import"./Input-By7ENoXN.js";import"./search-B0QVdf5C.js";import"./spin-DbuJv-cU.js";import"./error-BeMd-CqJ.js";import"./withOsdkMetrics-6LH9jlrw.js";import"./makeExternalStore--4ZQvYdt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
