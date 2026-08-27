import{j as r,M as s}from"./iframe-DdqVegxu.js";import{P as p}from"./pdf-viewer-RZrT9EcJ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dll6_9JA.js";import"./preload-helper-D6PJo6GD.js";import"./PdfViewer-CeYCsZle.js";import"./index-pXTincUQ.js";import"./BasePdfViewer-c5HjdfUT.js";import"./BasePdfViewer.module.css-WgkYQVF1.js";import"./PdfViewerAnnotationLayer-B8xOyOKM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CV5crNen.js";import"./PdfViewerOutlineSidebar-BeRkpHFF.js";import"./PdfViewerSidebarHeader-DLZLY5YQ.js";import"./useBaseUiId-nCd4gP0F.js";import"./useControlled-CUMQFHQ2.js";import"./CompositeRoot-5OetEEPb.js";import"./CompositeItem-C9XS2Nyq.js";import"./ToolbarRootContext-EhBdlP5C.js";import"./composite-AP0Q5qKl.js";import"./svgIconContainer-WPgp7GKE.js";import"./PdfViewerSearchBar-CGlCi7Mg.js";import"./chevron-up-CVxXxjPg.js";import"./chevron-down-BaLH6Ox7.js";import"./cross-B_5ujI29.js";import"./PdfViewerSidebar-CLcjXHsM.js";import"./index-BDDtSzfk.js";import"./index-BpvYjPJl.js";import"./index-C7-w2U00.js";import"./PdfViewerToolbar-D3rJx7V3.js";import"./Button-DGqa4Bnz.js";import"./chevron-right-DRgTLTfP.js";import"./Input-D24cu4rP.js";import"./search-BpB8-h7O.js";import"./spin-Bh0JV7kT.js";import"./error-N9h2ra1P.js";import"./withOsdkMetrics-CPLPuXNu.js";import"./makeExternalStore-CP1AfhtS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
