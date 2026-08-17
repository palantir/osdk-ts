import{j as r,M as s}from"./iframe-hkjMetp8.js";import{P as p}from"./pdf-viewer-BJ2WuyXj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bc2yk7In.js";import"./preload-helper-BG3PwWgg.js";import"./PdfRenderer-X-Wagti0.js";import"./index-DGAVzjUG.js";import"./PdfViewer-C7-GeD77.js";import"./PdfViewer.module.css-C4R44xtW.js";import"./PdfViewerAnnotationLayer-DYAQ9nzD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DU-kMD7a.js";import"./PdfViewerOutlineSidebar-B276C-A5.js";import"./PdfViewerSidebarHeader-ptcd7fM4.js";import"./useBaseUiId-vPjg87EZ.js";import"./useControlled-BbG65MVX.js";import"./CompositeRoot-Cm_Qu3Zp.js";import"./CompositeItem-DF9NnpkL.js";import"./ToolbarRootContext-Dr07gjpJ.js";import"./composite-CH-gf1yj.js";import"./svgIconContainer-6MVX_yz2.js";import"./PdfViewerSearchBar-CBWs6WHM.js";import"./chevron-up-_0WgdQGn.js";import"./chevron-down-C1qRhGfc.js";import"./cross-BtmO4_tP.js";import"./PdfViewerSidebar-J5FpCXIL.js";import"./index-D9iCbPpq.js";import"./index-DekbtEE0.js";import"./index-Cdw40tlt.js";import"./PdfViewerToolbar-CKWDfbQ6.js";import"./Button-Ca8Yrp0-.js";import"./chevron-right-Con_Svh2.js";import"./Input-5tyvJsuV.js";import"./search-CEBIaEbf.js";import"./spin-CE-cjhpF.js";import"./error-BfCVgfZr.js";import"./withOsdkMetrics-BAFcUBo2.js";import"./makeExternalStore-BByL-sEm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
