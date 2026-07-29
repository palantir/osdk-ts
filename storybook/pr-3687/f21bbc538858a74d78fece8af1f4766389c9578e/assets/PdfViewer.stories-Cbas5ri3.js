import{j as r,M as s}from"./iframe-WZlHWuAl.js";import{P as p}from"./pdf-viewer-9KlZPXxM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bt2BXKDd.js";import"./preload-helper-BqNO_kYB.js";import"./PdfRenderer-COfyK97F.js";import"./index-0vBrLGcy.js";import"./PdfViewer-Cxqci_6z.js";import"./PdfViewer.module.css-C0PLY1T2.js";import"./PdfViewerAnnotationLayer-CY7m3d3k.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cn0CKTq0.js";import"./PdfViewerOutlineSidebar-BArchGwl.js";import"./PdfViewerSidebarHeader-_G-K5rZ-.js";import"./useBaseUiId-BixrlMbu.js";import"./useControlled-DYsSBYkU.js";import"./CompositeRoot-C2XZW5A8.js";import"./CompositeItem-CezuKAKD.js";import"./ToolbarRootContext-BAoi7Hqr.js";import"./composite-B7hu--yZ.js";import"./svgIconContainer-B-i_bEns.js";import"./PdfViewerSearchBar-OgS4F7gK.js";import"./chevron-up-Bjit4_Mx.js";import"./chevron-down-YKEUt5BK.js";import"./cross-8Hm1XohM.js";import"./PdfViewerSidebar-Bo9_fPco.js";import"./index-D0Os6pCH.js";import"./index-BntjzrUj.js";import"./index-Bdw5YJLj.js";import"./PdfViewerToolbar-C2PFvaOj.js";import"./Button--FVbK81A.js";import"./chevron-right-D5tHDSWs.js";import"./Input-dA6DFlkG.js";import"./search-BgC_pDzB.js";import"./spin-Ezw_6G8_.js";import"./error-Dm7h3fk8.js";import"./withOsdkMetrics-ClykSytW.js";import"./makeExternalStore-otuFfb0r.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
