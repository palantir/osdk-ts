import{j as r,M as s}from"./iframe-CguRgO1s.js";import{P as p}from"./pdf-viewer-BIefWzjI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xOLtkRAr.js";import"./preload-helper-BMc7U262.js";import"./PdfRenderer-Dfby64NE.js";import"./index-BGS7gDUn.js";import"./PdfViewer-BuXOJH0-.js";import"./PdfViewer.module.css-CbUYxyIh.js";import"./PdfViewerAnnotationLayer-DDFRVfhs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChgEjqDV.js";import"./PdfViewerOutlineSidebar-DXF-YVFA.js";import"./PdfViewerSidebarHeader-hhUQQik3.js";import"./useBaseUiId-B2RjeRps.js";import"./useControlled-QGl_Fogg.js";import"./CompositeRoot-B0szNqka.js";import"./CompositeItem-BagBTlO9.js";import"./ToolbarRootContext-BBXfwh82.js";import"./composite-qTi-RAR_.js";import"./svgIconContainer-CLJzNlfz.js";import"./PdfViewerSearchBar-BLU3oIFE.js";import"./chevron-up-KP5kQBUn.js";import"./chevron-down-BjgaS9xF.js";import"./cross-Br0Qm67p.js";import"./PdfViewerSidebar-BLCBe52Z.js";import"./index-C2kWb54g.js";import"./index-3k5H_e2z.js";import"./index-But1OdyE.js";import"./PdfViewerToolbar-CVbZCcLP.js";import"./Button-BCDQ8FRu.js";import"./chevron-right-DkoNUdop.js";import"./Input-BbJ-H5cZ.js";import"./search-DZWqHIsG.js";import"./spin-BFrnJqei.js";import"./error-CW261XEm.js";import"./withOsdkMetrics-DNdkJlAo.js";import"./makeExternalStore-DjzIXttj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
