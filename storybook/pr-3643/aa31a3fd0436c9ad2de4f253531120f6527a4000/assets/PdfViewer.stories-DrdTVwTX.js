import{j as r,M as s}from"./iframe-DWEd8R5S.js";import{P as p}from"./pdf-viewer-DZo-7p22.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ba3R4zIS.js";import"./preload-helper-DaUUOo99.js";import"./PdfRenderer-DEtX5v3W.js";import"./index-Bx2-BOWB.js";import"./PdfViewer-DBscgGT7.js";import"./PdfViewer.module.css-BoO7tTdt.js";import"./PdfViewerAnnotationLayer-BMVUJ57G.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cd5rUifd.js";import"./PdfViewerOutlineSidebar-CEpiznfP.js";import"./PdfViewerSidebarHeader-BAmabJ2T.js";import"./useBaseUiId-BT71ztVg.js";import"./useControlled-BsSB664s.js";import"./CompositeRoot-CLHzCAdr.js";import"./CompositeItem-Rxk0y0MX.js";import"./ToolbarRootContext-DdCLIGah.js";import"./composite-CW0CiqnD.js";import"./svgIconContainer-DYa-snY3.js";import"./PdfViewerSearchBar-BFsgh93u.js";import"./chevron-up-BblKSHTt.js";import"./chevron-down-DoQfAY-o.js";import"./cross-CIyh67fQ.js";import"./PdfViewerSidebar-CEXTwSon.js";import"./index-BNwSOPVh.js";import"./index-Bk_7zHvh.js";import"./index-BmArJPg7.js";import"./PdfViewerToolbar-DAhRgZOb.js";import"./Button-CWxV8aT7.js";import"./chevron-right-CxOp2gzr.js";import"./Input-e2BlZYyr.js";import"./search-BatkawE8.js";import"./spin-80IcKf1h.js";import"./error-CqZhAlyz.js";import"./withOsdkMetrics-4IHHHIkN.js";import"./makeExternalStore-C-VusiHF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
