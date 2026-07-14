import{j as r,M as s}from"./iframe-DNRcMBZD.js";import{P as p}from"./pdf-viewer-CTbM3bCc.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7jar_o1.js";import"./preload-helper-oKXGpHch.js";import"./PdfRenderer-DyaKeIXi.js";import"./index-BPvPtxPo.js";import"./PdfViewer-BXUQG1_9.js";import"./PdfViewer.module.css-CnwK2xVa.js";import"./PdfViewerAnnotationLayer-B2uspuZv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAVj8CN7.js";import"./PdfViewerOutlineSidebar-DSKJUfKd.js";import"./PdfViewerSidebarHeader-B-0EtrWD.js";import"./useBaseUiId-CMaG5Z45.js";import"./useControlled-BzPgC_LT.js";import"./CompositeRoot-Dqv3w4BJ.js";import"./CompositeItem-DwWbMrCR.js";import"./ToolbarRootContext-6W3FX-E6.js";import"./composite-vXuHsZnZ.js";import"./svgIconContainer-DDF2oHmG.js";import"./PdfViewerSearchBar-jhe18YEf.js";import"./chevron-up-5HWOZCzz.js";import"./chevron-down-eEDxuWgs.js";import"./cross-CrdAzGMb.js";import"./PdfViewerSidebar-apg_nyUZ.js";import"./index-BJkgBzMX.js";import"./index-CS1bPxeW.js";import"./index-BZztfqY_.js";import"./PdfViewerToolbar-Dj5M5ftM.js";import"./Button-CgEwxHBt.js";import"./chevron-right-CEh3WPLR.js";import"./Input-3LKNZXCU.js";import"./search-UZlhYXJb.js";import"./spin-CU1_yI5B.js";import"./error-xzz4-F0w.js";import"./withOsdkMetrics-D-DbaOzw.js";import"./makeExternalStore-Byn9118x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
