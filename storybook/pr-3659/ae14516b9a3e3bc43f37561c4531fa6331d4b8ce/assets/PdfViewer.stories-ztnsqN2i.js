import{j as r,M as s}from"./iframe-Cxtcv0d9.js";import{P as p}from"./pdf-viewer-Ci_9mhkl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cn-1Mits.js";import"./preload-helper-D1GuoLdP.js";import"./PdfRenderer-L-vvL3LV.js";import"./index-BlSn1tlK.js";import"./PdfViewer-DnB0KU1H.js";import"./PdfViewer.module.css-Bqvfm3fe.js";import"./PdfViewerAnnotationLayer-aMS3e4ab.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIfSbju2.js";import"./PdfViewerOutlineSidebar-DO35ZvLV.js";import"./PdfViewerSidebarHeader-BBFXsjAc.js";import"./useBaseUiId-DV9TMn4x.js";import"./useControlled-rLvJ-LwX.js";import"./CompositeRoot-BGxpeiNF.js";import"./CompositeItem-D_wRufqr.js";import"./ToolbarRootContext-D13Eg15c.js";import"./composite-BJ7LyHwz.js";import"./svgIconContainer-CKovAZ4c.js";import"./PdfViewerSearchBar-BEolm2kE.js";import"./chevron-up-BvVJyJpL.js";import"./chevron-down-BgXzULso.js";import"./cross-LYIgU31E.js";import"./PdfViewerSidebar-Dk8xz43S.js";import"./index-_Uc7BDeo.js";import"./index-TlU05mVn.js";import"./index-DiaYbqRj.js";import"./PdfViewerToolbar-CbSXVuPT.js";import"./Button-BoD27CJ5.js";import"./chevron-right-DbufgXCF.js";import"./Input-7FEdlFK5.js";import"./search-DTleQUOK.js";import"./spin-C-pTxyAH.js";import"./error-DGu_-bua.js";import"./withOsdkMetrics-TcG52pZd.js";import"./makeExternalStore-C4CJcZ3F.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
