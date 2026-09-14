import{j as r,M as s}from"./iframe-DWUqeI24.js";import{P as p}from"./pdf-viewer-8CY1HdAC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DS6iYaKz.js";import"./preload-helper-CmhaJZKB.js";import"./PdfViewer-BUPAXvPB.js";import"./index-BTzXT2fz.js";import"./BasePdfViewer-DMYgsbr3.js";import"./BasePdfViewer.module.css-aw8dIFYL.js";import"./PdfViewerAnnotationLayer-D9kSw2O6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTnhftcE.js";import"./PdfViewerOutlineSidebar-B3Hs37a1.js";import"./PdfViewerSidebarHeader-dctHwRby.js";import"./useBaseUiId-doo5xxPr.js";import"./useControlled-DQPmnWCX.js";import"./CompositeRoot-BcSWpx-_.js";import"./CompositeItem-Dli-qKbZ.js";import"./ToolbarRootContext-CY7Utxgx.js";import"./composite-ZAPDDfKz.js";import"./svgIconContainer-CMAH9PXj.js";import"./PdfViewerSearchBar-CjwT0J89.js";import"./chevron-up-JPdE7S9p.js";import"./chevron-down-B3eOykDC.js";import"./cross-BB5wWstC.js";import"./PdfViewerSidebar-BLBWa305.js";import"./index-yBL9LV9H.js";import"./index-Dx1vPjnd.js";import"./index-DMdejw5x.js";import"./PdfViewerToolbar-c7YksEU5.js";import"./Button-2G_MsyZd.js";import"./chevron-right-C4G87T9z.js";import"./Input-Bgk_NfQE.js";import"./search-D4gR5Cv7.js";import"./spin-clsqoLZu.js";import"./error-Zui98JXp.js";import"./withOsdkMetrics-cXHP5nhH.js";import"./makeExternalStore-rBHUiwcS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
