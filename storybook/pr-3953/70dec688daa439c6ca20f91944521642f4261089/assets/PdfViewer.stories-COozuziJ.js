import{j as r,M as s}from"./iframe-A9SMdxTk.js";import{P as p}from"./pdf-viewer-C9xFluzX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DI0-iRtx.js";import"./preload-helper-DQLolCHZ.js";import"./PdfViewer-CrCTeoIf.js";import"./index-CCGgfNub.js";import"./BasePdfViewer-D8h8O-sa.js";import"./BasePdfViewer.module.css-CDnRPiO0.js";import"./PdfViewerAnnotationLayer-BE5wk8m9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cdc8UvLz.js";import"./PdfViewerOutlineSidebar-n245v8pu.js";import"./PdfViewerSidebarHeader-5xnR3Byg.js";import"./useBaseUiId-B4Zg0t3a.js";import"./useControlled-BfWlfukP.js";import"./CompositeRoot-B0Bjqxqj.js";import"./CompositeItem-B_0BvpK8.js";import"./ToolbarRootContext-bZyAVUWu.js";import"./composite-7A3yZ68G.js";import"./svgIconContainer-CNaxbSBM.js";import"./PdfViewerSearchBar-DcCavf9Y.js";import"./chevron-up-F3YCcA48.js";import"./chevron-down-B5VXYyUb.js";import"./cross-2Xnw9coj.js";import"./PdfViewerSidebar-0a30bcj-.js";import"./index-Vl3wc69p.js";import"./index-DVtEeQpM.js";import"./index-u-M_bDzq.js";import"./PdfViewerToolbar-zFS3dC_o.js";import"./Button-BqU3-dcX.js";import"./chevron-right-DdAO_cvv.js";import"./Input-deyBktI2.js";import"./search-Bmlhhw47.js";import"./spin-CwZs-sA5.js";import"./error-Bs_ECeoC.js";import"./withOsdkMetrics-Drgty0Zj.js";import"./makeExternalStore-DS1IY1Cv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
