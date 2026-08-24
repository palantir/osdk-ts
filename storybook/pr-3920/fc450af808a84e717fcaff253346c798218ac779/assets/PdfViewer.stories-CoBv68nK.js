import{j as r,M as s}from"./iframe-DcMbTmRa.js";import{P as p}from"./pdf-viewer-Bd5jUsdO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dul2aVDC.js";import"./preload-helper-C7g9GPtA.js";import"./PdfViewer-Cax6GMTe.js";import"./index-C60lWWNc.js";import"./BasePdfViewer-CozFX7m5.js";import"./BasePdfViewer.module.css-ByQhFIWj.js";import"./PdfViewerAnnotationLayer-Bp-MqMLW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJPrqbG6.js";import"./PdfViewerOutlineSidebar-wjbM4fxE.js";import"./PdfViewerSidebarHeader-C13za5R_.js";import"./useBaseUiId-BoE0CJkX.js";import"./useControlled-DRUQL6h1.js";import"./CompositeRoot-DmEuCs6X.js";import"./CompositeItem-BsY89uKf.js";import"./ToolbarRootContext-D6zdw_WQ.js";import"./composite-D9rv3OCk.js";import"./svgIconContainer-Dtbx0Dqw.js";import"./PdfViewerSearchBar-B36KZZKO.js";import"./chevron-up-DK3DYoah.js";import"./chevron-down-C8iVK9bf.js";import"./cross-CvsAEbe5.js";import"./PdfViewerSidebar-CxE_q3LO.js";import"./index-JAMdWW7E.js";import"./index-8cdMoAmx.js";import"./index-BX5mDqBN.js";import"./PdfViewerToolbar-FhckXr-x.js";import"./Button-DwdrXcb7.js";import"./chevron-right-BrzWfgEE.js";import"./Input-CODDUPe4.js";import"./search-TrEbjpAG.js";import"./spin-DHPdgAfX.js";import"./error-D9-VUnqg.js";import"./withOsdkMetrics-BT35iGvu.js";import"./makeExternalStore-Cd9hU_OQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
