import{j as r,M as s}from"./iframe-YvYOR2wq.js";import{P as p}from"./pdf-viewer-gGm-rf-Q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DFGh7Nrn.js";import"./preload-helper-CzbLUeKx.js";import"./PdfRenderer-CukfEHKf.js";import"./index-Dg2Ua59f.js";import"./PdfViewer-D1yh7yoB.js";import"./PdfViewer.module.css-D4o5TFdI.js";import"./PdfViewerAnnotationLayer-CynSVbLO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTY664mu.js";import"./PdfViewerOutlineSidebar-DDwX2aPD.js";import"./PdfViewerSidebarHeader-BhQL15YF.js";import"./useBaseUiId-DIa8CEVr.js";import"./useControlled-BaKiUohk.js";import"./CompositeRoot-CNeGXc_2.js";import"./CompositeItem-Tos5QYfq.js";import"./ToolbarRootContext-DvVNq82_.js";import"./composite-BRTo3g9o.js";import"./svgIconContainer-BkbpeeEh.js";import"./PdfViewerSearchBar-gJ2cpAm0.js";import"./chevron-up-DWKZL-bZ.js";import"./chevron-down-DjeSf-LC.js";import"./cross-DN6PKsRx.js";import"./PdfViewerSidebar-BIsPxJqQ.js";import"./index-tjquBYxZ.js";import"./index-w--EL4PT.js";import"./index-DS0htV8G.js";import"./PdfViewerToolbar-BtOxUYrG.js";import"./Button-yaRm4n4E.js";import"./chevron-right-DccVNm5U.js";import"./Input-Au_NktxX.js";import"./search-C6slhSf_.js";import"./spin-8oubD7SK.js";import"./error-BN9FB_kM.js";import"./withOsdkMetrics-BC7VO-wU.js";import"./makeExternalStore-Bf2AXbqX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
