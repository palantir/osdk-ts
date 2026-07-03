import{j as r,M as s}from"./iframe-D6uAZQ-t.js";import{P as p}from"./pdf-viewer-DaP-D9Qq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0tSw9XJ.js";import"./preload-helper-CdOAka1X.js";import"./PdfRenderer-Cdo3jpBg.js";import"./index-C8tgWidK.js";import"./PdfViewer-BFawkRY6.js";import"./PdfViewer.module.css-COdNvIN5.js";import"./PdfViewerAnnotationLayer-D6-JfHwS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-syk7Q2-9.js";import"./PdfViewerOutlineSidebar-CtILxP8G.js";import"./PdfViewerSidebarHeader-C0v6R0RD.js";import"./useBaseUiId-CHplPgw2.js";import"./useControlled-BsgEThCx.js";import"./CompositeRoot-niu8QXxh.js";import"./CompositeItem-C2tqayvA.js";import"./ToolbarRootContext-EzvTSpsY.js";import"./composite-Cjiz17uD.js";import"./svgIconContainer-YgwrVtGN.js";import"./PdfViewerSearchBar-Boc6zsDC.js";import"./chevron-up-gI5k_0Ge.js";import"./chevron-down-Dg6n9Wzs.js";import"./cross-w5jXLu7z.js";import"./PdfViewerSidebar-Y4hYR_DB.js";import"./index-1fcxd6d8.js";import"./index-CZByGFHJ.js";import"./index-ByAaIBA4.js";import"./PdfViewerToolbar-CiRWoKIz.js";import"./Button-DPQwhogD.js";import"./chevron-right-53xTWil_.js";import"./Input-BnPRqQwh.js";import"./search-BCit2sgz.js";import"./spin-BxnJC_gf.js";import"./error-DTT3LO5u.js";import"./withOsdkMetrics-DVbOuHeQ.js";import"./makeExternalStore-cdyw-GS6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
