import{j as r,M as s}from"./iframe-BGXQayXc.js";import{P as p}from"./pdf-viewer-CKVH6o-P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-P2rISAGV.js";import"./preload-helper-NRrpjeI0.js";import"./PdfRenderer-SRWdnJF2.js";import"./index-BbGsyqOi.js";import"./PdfViewer-DR2q6Gc5.js";import"./PdfViewer.module.css-DI1bRsut.js";import"./PdfViewerAnnotationLayer-DW5Ny-8h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1Fl1vMIC.js";import"./PdfViewerOutlineSidebar-FzZLIXNt.js";import"./PdfViewerSidebarHeader-BCIsjWP9.js";import"./useBaseUiId-CiIILwi-.js";import"./useControlled-Cx0doQf6.js";import"./CompositeRoot-CYmC-nQX.js";import"./CompositeItem-8ppYONab.js";import"./ToolbarRootContext-CVRCxt6k.js";import"./composite-CxwljJm3.js";import"./svgIconContainer-GwtppRLN.js";import"./PdfViewerSearchBar-DkZVXt3E.js";import"./chevron-up-DrUh9zse.js";import"./chevron-down-BkFumYFe.js";import"./cross-DC2Z1Ioq.js";import"./PdfViewerSidebar-A-2F0NGC.js";import"./index-62-q8zEu.js";import"./index-DVnvFKQ9.js";import"./index-Q_IDGxPs.js";import"./PdfViewerToolbar-04jf2tN8.js";import"./Button-0zluTTNn.js";import"./chevron-right-CnD5mnaE.js";import"./Input-CJ9L1nB_.js";import"./search-CG2X3jdC.js";import"./spin-rreSElh_.js";import"./error-D2AB_uHu.js";import"./withOsdkMetrics-DBduly0k.js";import"./makeExternalStore-bGGx7Jm8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
