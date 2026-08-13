import{j as r,M as s}from"./iframe-Mtgd1DTS.js";import{P as p}from"./pdf-viewer-C6_NDK5j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwC271zi.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-2oBVlp2U.js";import"./index-DGQ1D5ZF.js";import"./BasePdfViewer-UO724rHm.js";import"./BasePdfViewer.module.css-DH_cdiGU.js";import"./PdfViewerAnnotationLayer-Ch2zidDo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7fcQ2w-.js";import"./PdfViewerOutlineSidebar-DncX2y3U.js";import"./PdfViewerSidebarHeader-CXvSYxxx.js";import"./useBaseUiId-gk6HeQ4v.js";import"./useControlled-Bdc-9JPt.js";import"./CompositeRoot-Cgh0_GBC.js";import"./CompositeItem-CvGV1Dn5.js";import"./ToolbarRootContext-C7D-uVC_.js";import"./composite-BOi5r20r.js";import"./svgIconContainer-BTXfnqy-.js";import"./PdfViewerSearchBar-Ca7zVRof.js";import"./chevron-up-Kn6J1Tr1.js";import"./chevron-down-Bvy3Wm81.js";import"./cross-nE9MHaq6.js";import"./PdfViewerSidebar-DY5VTrOQ.js";import"./index-D3rG4xmO.js";import"./index-DWBX8AGA.js";import"./index-DVZkzu80.js";import"./PdfViewerToolbar-mia57Jvg.js";import"./Button-BRDaSx2s.js";import"./chevron-right-iSZ8jSLq.js";import"./Input-BuQB-8kT.js";import"./search-B4_r-kWC.js";import"./spin-C2S0oUD2.js";import"./error-O-ALRXAM.js";import"./withOsdkMetrics-B9hm1gbS.js";import"./makeExternalStore-BPm4QJ00.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
