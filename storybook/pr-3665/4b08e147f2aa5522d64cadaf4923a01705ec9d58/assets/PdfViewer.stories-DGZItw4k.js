import{j as r,M as s}from"./iframe-CMkXY9vq.js";import{P as p}from"./pdf-viewer-DELHB6CF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5bHc2RsX.js";import"./preload-helper-CRC_Gkn6.js";import"./PdfRenderer-BrdxancO.js";import"./index-C89y38Jp.js";import"./PdfViewer-CVNV2j3b.js";import"./PdfViewer.module.css-BDThquos.js";import"./PdfViewerAnnotationLayer-F1LF3NfG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlOvL81x.js";import"./PdfViewerOutlineSidebar-fvj7ygvo.js";import"./PdfViewerSidebarHeader--JZG_gvo.js";import"./useBaseUiId-dEHi8snl.js";import"./useControlled-CrasA_u-.js";import"./CompositeRoot-BxwQ6wTO.js";import"./CompositeItem-CPQyUgzp.js";import"./ToolbarRootContext-DNuP58yv.js";import"./composite-DzQ4L13Q.js";import"./svgIconContainer-_wsKauUL.js";import"./PdfViewerSearchBar-DXb9UZXh.js";import"./chevron-up-BuaBvn4N.js";import"./chevron-down-FOpVA2s6.js";import"./cross-m3IENhwq.js";import"./PdfViewerSidebar-o77snZ10.js";import"./index-DWJXRN0q.js";import"./index-C3-XDJLb.js";import"./index-CZ7_YZIP.js";import"./PdfViewerToolbar-DtnJxIu2.js";import"./Button-ve1uziVE.js";import"./chevron-right-CJRDGSDV.js";import"./Input-p0BLi9h8.js";import"./search-C9uRQAua.js";import"./spin-DyQGFr3S.js";import"./error-B1g86qG0.js";import"./withOsdkMetrics-B_uy_PA8.js";import"./makeExternalStore-A283sC7o.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
