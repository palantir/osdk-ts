import{j as r,M as s}from"./iframe-CjUdfJYr.js";import{P as p}from"./pdf-viewer-Bfqz2Ema.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DoE9RyGC.js";import"./preload-helper-fppZUlGt.js";import"./PdfRenderer-DVXmiMMu.js";import"./index-D5_XSG7N.js";import"./PdfViewer-C73oVGK8.js";import"./PdfViewer.module.css-Cd5ChIpW.js";import"./PdfViewerAnnotationLayer-DBWZ5-dR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D86534QH.js";import"./PdfViewerOutlineSidebar-Clyb1elP.js";import"./PdfViewerSidebarHeader-CsqJgrQD.js";import"./useBaseUiId-Cl5BRcl7.js";import"./useControlled-DdCiVbr2.js";import"./CompositeRoot-Da1qBmwl.js";import"./CompositeItem-CPH32fpX.js";import"./ToolbarRootContext-DghAl8DN.js";import"./composite-D5c9F9UH.js";import"./svgIconContainer-Bv0ouseb.js";import"./PdfViewerSearchBar-B-MVL72F.js";import"./chevron-up-D7EWkmK4.js";import"./chevron-down-f283P8c6.js";import"./cross-C-2XKRLb.js";import"./PdfViewerSidebar-BDzmOhzu.js";import"./index-lzGUL1BT.js";import"./index-DGq9E2mF.js";import"./index-C7UqLEto.js";import"./PdfViewerToolbar-Bf7gTtD8.js";import"./Button-DA4t73qH.js";import"./chevron-right-BZCon9Bn.js";import"./Input--hS-Bx7-.js";import"./search-S_JNugMy.js";import"./spin-BJW_eXK_.js";import"./error-sJaqfY2O.js";import"./withOsdkMetrics-DK9Pjfpl.js";import"./makeExternalStore-D0Z6Qar9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
