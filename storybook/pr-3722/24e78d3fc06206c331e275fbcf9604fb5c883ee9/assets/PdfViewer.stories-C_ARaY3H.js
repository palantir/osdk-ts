import{j as r,M as s}from"./iframe-BBQqV7U9.js";import{P as p}from"./pdf-viewer-Ced7gTie.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_xM4cMN.js";import"./preload-helper-CVQ1baRe.js";import"./PdfRenderer-Dl5RLE90.js";import"./index-Ccu1K6sd.js";import"./PdfViewer-74hGcLFX.js";import"./PdfViewer.module.css-B1haefj3.js";import"./PdfViewerAnnotationLayer-CyPpp0iW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DvKN_R8q.js";import"./PdfViewerOutlineSidebar-Cr5_1fpv.js";import"./PdfViewerSidebarHeader-CWTZfJWA.js";import"./useBaseUiId-Dsfw9F53.js";import"./useControlled-DUvtrOZ4.js";import"./CompositeRoot-DuSTXcGc.js";import"./CompositeItem-CLHj5IXS.js";import"./ToolbarRootContext-DYDg93Tz.js";import"./composite-DPcfFrpY.js";import"./svgIconContainer-CRTQuoXb.js";import"./PdfViewerSearchBar-7CR23PaB.js";import"./chevron-up-bM5Sqfkd.js";import"./chevron-down-BJIBE26H.js";import"./cross-CLzE3-U3.js";import"./PdfViewerSidebar-mPV98Eur.js";import"./index-DMl_Vf4z.js";import"./index-ZnEAsqFI.js";import"./index-ClxSTfiH.js";import"./PdfViewerToolbar-DXTWR3Gy.js";import"./Button-B4yyWPOD.js";import"./chevron-right-83rxkpsx.js";import"./Input-CA-eUSvn.js";import"./search-BdhLBc1_.js";import"./spin-BpSxuK5w.js";import"./error-DEwCksyH.js";import"./withOsdkMetrics-C6vhPq3k.js";import"./makeExternalStore-bluMvUON.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
