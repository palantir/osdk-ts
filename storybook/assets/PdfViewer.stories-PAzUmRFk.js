import{j as r,M as s}from"./iframe-BAW7vXay.js";import{P as p}from"./pdf-viewer-Dk5u5TRV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CL7iUBi1.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DXS-l6AU.js";import"./index-B8RWdOx-.js";import"./PdfViewer-D_asPN-4.js";import"./PdfViewer.module.css-imoBWATa.js";import"./PdfViewerAnnotationLayer-C_6Mf6nG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DzEPhI-i.js";import"./PdfViewerOutlineSidebar-HjISm8k0.js";import"./PdfViewerSidebarHeader-CJUMGD0m.js";import"./useBaseUiId-C3l-PwSI.js";import"./useControlled-BhxV9zjl.js";import"./CompositeRoot-Bz1NJ5E6.js";import"./CompositeItem-B9VsICI7.js";import"./ToolbarRootContext-C2zkoTCW.js";import"./composite-B7SxjydQ.js";import"./svgIconContainer-BVolSJqG.js";import"./PdfViewerSearchBar-Bm0VDoIy.js";import"./chevron-up-pB13FNss.js";import"./chevron-down-DCiygYyB.js";import"./cross-DHOyAakK.js";import"./PdfViewerSidebar-C4YOwVLH.js";import"./index-rP3vuihS.js";import"./index-Bj-wP-Eo.js";import"./index-Atbj0Gex.js";import"./PdfViewerToolbar-Cy4TGQFi.js";import"./Button-BFKYn7Lz.js";import"./chevron-right-BozzQMPQ.js";import"./Input-C8_-njYr.js";import"./search-C55N5NUt.js";import"./spin-KzsoIuGI.js";import"./error-DpmjAd6Q.js";import"./withOsdkMetrics-CmPPvpfI.js";import"./makeExternalStore-C7FVilaF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
