import{j as r,M as s}from"./iframe-aQAIw_3-.js";import{P as p}from"./pdf-viewer-hkrlo5Gu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEyzzQ4t.js";import"./preload-helper-ZDTqDVO_.js";import"./PdfRenderer-BTGvluZ-.js";import"./index-DaWd5O5v.js";import"./PdfViewer-C0SjXUlW.js";import"./PdfViewer.module.css-x7PAu6Kx.js";import"./PdfViewerAnnotationLayer-DC_6HH-m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BtTbUDBz.js";import"./PdfViewerOutlineSidebar-DIxGUNjT.js";import"./PdfViewerSidebarHeader-CGHCpt_W.js";import"./useBaseUiId-CWIhd6Nv.js";import"./useControlled-BlKxZEkk.js";import"./CompositeRoot-B6tIDOCG.js";import"./CompositeItem-Ddo_55VS.js";import"./ToolbarRootContext-Cflj_kFN.js";import"./composite-DbUcyt93.js";import"./svgIconContainer-CePYB0_T.js";import"./PdfViewerSearchBar-ENjBaaX1.js";import"./chevron-up-DQ8Y7CMT.js";import"./chevron-down-CzxinWJb.js";import"./cross-BXTno_VG.js";import"./PdfViewerSidebar-DtfBS9uu.js";import"./index-CWJETYPl.js";import"./index-DdH8CnPR.js";import"./index-ClZezG6o.js";import"./PdfViewerToolbar-CsnLdYjw.js";import"./Button-BtxgosDP.js";import"./chevron-right-BT7M3ygc.js";import"./Input-DEN1u1P9.js";import"./search-CdQNNz22.js";import"./spin-B9iK_ZxZ.js";import"./error-RXslMkWs.js";import"./withOsdkMetrics-DDGPYtIX.js";import"./makeExternalStore-Behu0ErP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
