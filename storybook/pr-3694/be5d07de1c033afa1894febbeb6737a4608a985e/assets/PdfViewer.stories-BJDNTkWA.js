import{j as r,M as s}from"./iframe-DsVuvwqd.js";import{P as p}from"./pdf-viewer-ZDwxegra.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CygV569h.js";import"./preload-helper-BHSAR2MW.js";import"./PdfRenderer-BJdB1LlU.js";import"./index-BUqqlNCM.js";import"./PdfViewer-FjK40ne7.js";import"./PdfViewer.module.css-CyfuYuqN.js";import"./PdfViewerAnnotationLayer-hHUXMnwS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B2APzMXg.js";import"./PdfViewerOutlineSidebar-Cw4qMGIa.js";import"./PdfViewerSidebarHeader-C2S_7d_b.js";import"./useBaseUiId-C9Lo_DER.js";import"./useControlled-FyZnIhZe.js";import"./CompositeRoot-CDClHkv0.js";import"./CompositeItem-CMLGtrcw.js";import"./ToolbarRootContext-Bok94z7p.js";import"./composite-DwH3i386.js";import"./svgIconContainer-RszyBwzo.js";import"./PdfViewerSearchBar-Buk7Ul9F.js";import"./chevron-up-Dyj5d_sB.js";import"./chevron-down-DlfDLF9f.js";import"./cross-r6u1wEvG.js";import"./PdfViewerSidebar-FwzWuHjP.js";import"./index-DWb1E976.js";import"./index-BuXURnPF.js";import"./index-nR84ykS2.js";import"./PdfViewerToolbar-9Vv24GqY.js";import"./Button-CsBAS9KM.js";import"./chevron-right-B1BzgO9G.js";import"./Input-CPg1LhGG.js";import"./search-Bg1IdvaZ.js";import"./spin-7IljedEW.js";import"./error-DgTcku-S.js";import"./withOsdkMetrics-BqQHJvun.js";import"./makeExternalStore-UHZ7KJm2.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
