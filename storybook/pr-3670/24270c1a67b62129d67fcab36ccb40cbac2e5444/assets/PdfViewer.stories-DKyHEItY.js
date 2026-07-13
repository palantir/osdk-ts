import{j as r,M as s}from"./iframe-3qSeowKt.js";import{P as p}from"./pdf-viewer-COB1hg3j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B5MBhbRi.js";import"./preload-helper-ntUbbqbv.js";import"./PdfRenderer-B41mw8ML.js";import"./index-CvXzK1Ze.js";import"./PdfViewer-DlRSYb5i.js";import"./PdfViewer.module.css-jNXNvYmN.js";import"./PdfViewerAnnotationLayer-oLZeZIYd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-KnZRe1Hu.js";import"./PdfViewerOutlineSidebar-Bl83UhJl.js";import"./PdfViewerSidebarHeader-BN4Qhtxf.js";import"./useBaseUiId-DZexMm2d.js";import"./useControlled-DJ0m2Fyu.js";import"./CompositeRoot-l8yyugXn.js";import"./CompositeItem-Fy8Xf1qx.js";import"./ToolbarRootContext-BbwFvlAX.js";import"./composite-BtTVONXM.js";import"./svgIconContainer-DrkH_pK4.js";import"./PdfViewerSearchBar-DPsKxy0c.js";import"./chevron-up-CegRxEVO.js";import"./chevron-down-BwQXiMfc.js";import"./cross-BD2jsSpc.js";import"./PdfViewerSidebar-Cgip1dyh.js";import"./index-FvABRkCD.js";import"./index-DmWAq4WA.js";import"./index-CMYYXOi8.js";import"./PdfViewerToolbar-BdnrCemU.js";import"./Button-CuYgFcjq.js";import"./chevron-right-ByUMDnDl.js";import"./Input-Cba3EN-v.js";import"./search-C55SF0Ui.js";import"./spin-AxILBlDj.js";import"./error-DVqayGTz.js";import"./withOsdkMetrics-EfSZ0pPz.js";import"./makeExternalStore-3JH7QD64.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
