import{j as r,M as s}from"./iframe-ChzRP_PG.js";import{P as p}from"./pdf-viewer-CAme5tL3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BgCrAfg-.js";import"./preload-helper-BY8T86v_.js";import"./PdfRenderer-DSb9RHkx.js";import"./index-B47von1n.js";import"./PdfViewer-C0HO49kk.js";import"./PdfViewer.module.css-8UmN1kym.js";import"./PdfViewerAnnotationLayer-BgDl6PeB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKhLBGDy.js";import"./PdfViewerOutlineSidebar-CNqyzqqN.js";import"./PdfViewerSidebarHeader-Cxqxz_KB.js";import"./useBaseUiId-CfZ4GhDt.js";import"./useControlled-BsSki-l6.js";import"./CompositeRoot-DaxOQcr-.js";import"./CompositeItem-DnUU1iS-.js";import"./ToolbarRootContext-Bt3g8dZ6.js";import"./composite-BnmWIAYG.js";import"./svgIconContainer-COgTYdBs.js";import"./PdfViewerSearchBar-D0Bc8Mc2.js";import"./chevron-up-BbBceFxt.js";import"./chevron-down-CTRK-m5O.js";import"./cross-BRhKDmms.js";import"./PdfViewerSidebar-B76xnK4A.js";import"./index-DBwXrdpF.js";import"./index-Ccn-hEdM.js";import"./index-C2zHuJ2V.js";import"./PdfViewerToolbar-BQv0dbm4.js";import"./Button-iJkQhw47.js";import"./chevron-right-D6XCs4s6.js";import"./Input-DJIKe_uT.js";import"./search-eGelwxV8.js";import"./spin-BHJ0xA6Z.js";import"./error-CUVOC1L9.js";import"./withOsdkMetrics-D9h9tKkS.js";import"./makeExternalStore-DxtNI3-p.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
