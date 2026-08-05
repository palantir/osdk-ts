import{j as r,M as s}from"./iframe-CLumNID0.js";import{P as p}from"./pdf-viewer-BoEGv_AM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-i501NWhR.js";import"./preload-helper-Dz-GKNZ3.js";import"./PdfRenderer-BYwYL8rh.js";import"./index-DKU1K2_w.js";import"./PdfViewer-BortwVQP.js";import"./PdfViewer.module.css-DxmeGdzq.js";import"./PdfViewerAnnotationLayer-CwTg5_Bh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcRyvKVf.js";import"./PdfViewerOutlineSidebar-DIxlZbSM.js";import"./PdfViewerSidebarHeader-D0M1m8hs.js";import"./useBaseUiId-Bh-y6B9l.js";import"./useControlled-CAmMAraC.js";import"./CompositeRoot-DkUma-Md.js";import"./CompositeItem-CO8dmy82.js";import"./ToolbarRootContext-ldJ0ppJC.js";import"./composite-BcZGRwv5.js";import"./svgIconContainer-CPoSZbgC.js";import"./PdfViewerSearchBar-DWc9PYDT.js";import"./chevron-up-DIeC04Y9.js";import"./chevron-down-CS76UfJi.js";import"./cross-D2EPxtxs.js";import"./PdfViewerSidebar-DhkioO0V.js";import"./index-cZ7ucSab.js";import"./index-CVKRWWtF.js";import"./index-BZx9EN2X.js";import"./PdfViewerToolbar-CI2W4QDX.js";import"./Button-CBLB_2Qn.js";import"./chevron-right-CStN0qYW.js";import"./Input-B4Ein_ID.js";import"./search-DLeM-Fzk.js";import"./spin-BzI03LmY.js";import"./error-DDoBRt2_.js";import"./withOsdkMetrics-jJjprDjm.js";import"./makeExternalStore-CkYrcdla.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
