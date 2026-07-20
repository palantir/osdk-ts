import{j as r,M as s}from"./iframe-B8u7gh3f.js";import{P as p}from"./pdf-viewer-CXlB0PV5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDP7iPXT.js";import"./preload-helper-WafZdqsp.js";import"./PdfRenderer-CFFLmI9v.js";import"./index-B2c1cb03.js";import"./PdfViewer-hSpluNUR.js";import"./PdfViewer.module.css-XX1-cBez.js";import"./PdfViewerAnnotationLayer-SNwXWaZp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BZW27p0z.js";import"./PdfViewerOutlineSidebar-Chd9ZD2N.js";import"./PdfViewerSidebarHeader-vFvcv53n.js";import"./useBaseUiId-ClLZ4ptx.js";import"./useControlled-DbLBYTQb.js";import"./CompositeRoot-BhAMuo5u.js";import"./CompositeItem-_7eOW45r.js";import"./ToolbarRootContext-VxV573kB.js";import"./composite-CR8H6FxL.js";import"./svgIconContainer-B6iifYBg.js";import"./PdfViewerSearchBar-BjVQlz_w.js";import"./chevron-up-CeErf4Bk.js";import"./chevron-down-5MIE9vEU.js";import"./cross-hgHZeAKk.js";import"./PdfViewerSidebar-DJVPPB8G.js";import"./index-sJkcPWg3.js";import"./index-BDYDLka6.js";import"./index-Dl-kCjjB.js";import"./PdfViewerToolbar-bId862kS.js";import"./Button-CPqVQKFs.js";import"./chevron-right-DOl_-u3-.js";import"./Input-BqdHP0PO.js";import"./search-D-7hDAKT.js";import"./spin-pvJO6qS7.js";import"./error-4m3zFcfA.js";import"./withOsdkMetrics-D3TlapU0.js";import"./makeExternalStore-DFAo_Yao.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
