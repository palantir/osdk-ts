import{j as r,M as s}from"./iframe-CO2vUFJD.js";import{P as p}from"./pdf-viewer-C38mY8a_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BSDoLKwJ.js";import"./preload-helper-DpsnsEBy.js";import"./PdfRenderer-9SctMZTG.js";import"./index-D4apVlTJ.js";import"./PdfViewer-DUBgGxST.js";import"./PdfViewer.module.css-CaxEV8ZI.js";import"./PdfViewerAnnotationLayer-D-HF-2qc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlL3QSKU.js";import"./PdfViewerOutlineSidebar-BoNmEuCG.js";import"./PdfViewerSidebarHeader-PROn22x2.js";import"./useBaseUiId-DznybjsG.js";import"./useControlled-C1K7tXFP.js";import"./CompositeRoot-BxT7pHs9.js";import"./CompositeItem-DbfOLwvO.js";import"./ToolbarRootContext-BkyJSAiT.js";import"./composite-B8pYOTPV.js";import"./svgIconContainer-DxakRBie.js";import"./PdfViewerSearchBar-CJAvdefF.js";import"./chevron-up-C4cIzBYl.js";import"./chevron-down-Du10suNj.js";import"./cross-CUeY1CjO.js";import"./PdfViewerSidebar-aZbHUXSI.js";import"./index-CpfOOGos.js";import"./index-BgWdqboy.js";import"./index-BU4qgIJ_.js";import"./PdfViewerToolbar-BNunDZX9.js";import"./Button-DG5H8nKs.js";import"./chevron-right-mtDYPgVd.js";import"./Input-CuNl26f2.js";import"./search-Drn2Bd1c.js";import"./spin-BGoPpoWK.js";import"./error-Ce2q8rJl.js";import"./withOsdkMetrics-D4cF1XVz.js";import"./makeExternalStore-ChIGs1GC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
