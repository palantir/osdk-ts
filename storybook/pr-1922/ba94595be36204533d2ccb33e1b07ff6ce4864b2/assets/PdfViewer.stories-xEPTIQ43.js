import{j as r,M as s}from"./iframe-Jx-ulL5C.js";import{P as p}from"./pdf-viewer-WtUrnAoZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-WP2pip30.js";import"./preload-helper-DQOtA23C.js";import"./PdfRenderer-DNWvGY2V.js";import"./index-DbcvcRjy.js";import"./PdfViewer-xUhWhMVg.js";import"./PdfViewer.module.css-C7TRq1Q9.js";import"./PdfViewerAnnotationLayer-BkgtKlKX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DnSfg4Qi.js";import"./PdfViewerOutlineSidebar-Cm1x1LNv.js";import"./PdfViewerSidebarHeader-BJZ2qPnP.js";import"./useBaseUiId-DlGP4CyH.js";import"./useControlled-DTXqp68j.js";import"./CompositeRoot-Cq1vHCZR.js";import"./CompositeItem-C-U5_30J.js";import"./ToolbarRootContext-DjVkVQIx.js";import"./composite-Ci3x3D-j.js";import"./svgIconContainer-DA5CXbWv.js";import"./PdfViewerSearchBar-CWEjuZ9G.js";import"./chevron-up-CBn-ec-2.js";import"./chevron-down-DmKonuNt.js";import"./cross-BM4LNdzl.js";import"./PdfViewerSidebar-Du5NX19J.js";import"./index-A1POwUcc.js";import"./index-C-0GQm9S.js";import"./index-CGN3jVUK.js";import"./PdfViewerToolbar-CUa-5N8c.js";import"./Button-BgbvTS34.js";import"./chevron-right-BY7YOdBl.js";import"./Input-xfSfvcdJ.js";import"./search-DKR4hHlP.js";import"./spin-DLf4WFH-.js";import"./error-Bqu3bVtd.js";import"./withOsdkMetrics-B-ZB5Rqw.js";import"./makeExternalStore-CrS-QWtj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
