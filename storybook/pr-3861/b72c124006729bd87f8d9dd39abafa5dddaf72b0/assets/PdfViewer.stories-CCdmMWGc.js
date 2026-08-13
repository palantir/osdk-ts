import{j as r,M as s}from"./iframe-CrdYfz1j.js";import{P as p}from"./pdf-viewer-Dny2a5xW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9AUQJS3.js";import"./preload-helper-BKATmCzL.js";import"./PdfViewer-ENR6vmQU.js";import"./index-DGf5UtC0.js";import"./BasePdfViewer-CsaYPUQV.js";import"./BasePdfViewer.module.css-BaPVi9Lr.js";import"./PdfViewerAnnotationLayer-XrMHbV5e.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNbNyjMJ.js";import"./PdfViewerOutlineSidebar-BBd8cew0.js";import"./PdfViewerSidebarHeader-CGLu6wWa.js";import"./useBaseUiId-dMQXpX2_.js";import"./useControlled-B-uObzoi.js";import"./CompositeRoot-CfDrzZF9.js";import"./CompositeItem-BBlnE76H.js";import"./ToolbarRootContext-C55ZrIvq.js";import"./composite-BQeUw1C5.js";import"./svgIconContainer-Tyi6-qoG.js";import"./PdfViewerSearchBar-BZFdgVB_.js";import"./chevron-up-DaWUZ_8I.js";import"./chevron-down-BTPbSLrU.js";import"./cross-CNNELhu-.js";import"./PdfViewerSidebar-BP_idFTJ.js";import"./index-CNhI-fgu.js";import"./index-Bo5TPIYo.js";import"./index-2NC_6Tgs.js";import"./PdfViewerToolbar-BXVErk-Y.js";import"./Button-CchJ5cyG.js";import"./chevron-right-BDUK2w76.js";import"./Input-D68UoCnN.js";import"./search-CKLyWx-O.js";import"./spin-znxGPOzS.js";import"./error-d1zfkTvI.js";import"./withOsdkMetrics-DAT7SN5n.js";import"./makeExternalStore-BxvGt8fM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
