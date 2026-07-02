import{j as r,M as s}from"./iframe-Dd-K4pwY.js";import{P as p}from"./pdf-viewer-Cq4yB194.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B3nJIdLY.js";import"./preload-helper-fhwpa5Ho.js";import"./PdfRenderer-Rz0WQDnr.js";import"./index-BpEnXjPU.js";import"./PdfViewer-BJsiSA2x.js";import"./PdfViewer.module.css-BqVG5HDh.js";import"./PdfViewerAnnotationLayer-BbZrI8T3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DrA60uaA.js";import"./PdfViewerOutlineSidebar-BVtt3-N1.js";import"./PdfViewerSidebarHeader-Bu7SZe7s.js";import"./useBaseUiId-DaQVicju.js";import"./useControlled-C6qH-o74.js";import"./CompositeRoot-BXPdNHQr.js";import"./CompositeItem-DNlDnFzk.js";import"./ToolbarRootContext-Iy7UTqWM.js";import"./composite-BmhWX_Sm.js";import"./svgIconContainer-JffADWRI.js";import"./PdfViewerSearchBar-Cgp4XfmM.js";import"./chevron-up-CVXrKduR.js";import"./chevron-down-Hq26_DTF.js";import"./cross-L46FX1Ei.js";import"./PdfViewerSidebar-BPI7BPD9.js";import"./index-BNhYMObG.js";import"./index-C7MMIJPy.js";import"./index-D1Y6rR7L.js";import"./PdfViewerToolbar-iW1xt1iN.js";import"./Button-B9H9p6U9.js";import"./chevron-right-CEgtXtkT.js";import"./Input-Cbx3IDEJ.js";import"./minus-RYPZaA1m.js";import"./search-CfZxHBL7.js";import"./spin-BKXcqW7t.js";import"./error-D9HAyCVO.js";import"./withOsdkMetrics-CmoSxlM0.js";import"./makeExternalStore-DFSIRYxq.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
