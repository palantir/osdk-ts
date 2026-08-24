import{j as r,M as s}from"./iframe-BHEMD7tl.js";import{P as p}from"./pdf-viewer-BThla2-M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BD73bdDE.js";import"./preload-helper-D9vvsdXl.js";import"./PdfViewer-CcX1V7Kr.js";import"./index-DZ514iDh.js";import"./BasePdfViewer-CHMDjOSW.js";import"./BasePdfViewer.module.css-TsuJGs0K.js";import"./PdfViewerAnnotationLayer-CjUL_A5v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9ex3_Hz.js";import"./PdfViewerOutlineSidebar-Dn3sKLbk.js";import"./PdfViewerSidebarHeader-DuNw5bON.js";import"./useBaseUiId-Bjqi_A68.js";import"./useControlled-AgsGiueD.js";import"./CompositeRoot-D9jGq0ZH.js";import"./CompositeItem-D521EeHU.js";import"./ToolbarRootContext-DbG-Pccc.js";import"./composite-CMjg4bD9.js";import"./svgIconContainer-czks9Ze_.js";import"./PdfViewerSearchBar-DhwG0AuF.js";import"./chevron-up-RdaTRx3c.js";import"./chevron-down-fhI62sWj.js";import"./cross-CnuckHrQ.js";import"./PdfViewerSidebar-DJpjXahK.js";import"./index-DUmTXUBR.js";import"./index-CHTCcjpb.js";import"./index-BOLGOaBy.js";import"./PdfViewerToolbar-bMTA9mc_.js";import"./Button-B8tVf1VG.js";import"./chevron-right-JEcR68bu.js";import"./Input-C6SEChBH.js";import"./search-BnYzLcC3.js";import"./spin-BiARMsnz.js";import"./error-7ZQ1PwUq.js";import"./withOsdkMetrics-DXQf1Gwd.js";import"./makeExternalStore-Bvzg9kOq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
