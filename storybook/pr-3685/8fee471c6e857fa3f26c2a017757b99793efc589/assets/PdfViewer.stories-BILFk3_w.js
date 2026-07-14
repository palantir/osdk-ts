import{j as r,M as s}from"./iframe-BV4cbUlE.js";import{P as p}from"./pdf-viewer-lCLLoZJS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CU-QflSy.js";import"./preload-helper-rc11-G4k.js";import"./PdfRenderer-Cy3Tv2VC.js";import"./index-DXyrG5tp.js";import"./PdfViewer-BoTmMi1z.js";import"./PdfViewer.module.css-DldFJK7f.js";import"./PdfViewerAnnotationLayer-riPm1SVv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D6sRPiOI.js";import"./PdfViewerOutlineSidebar-B8ryVtMN.js";import"./PdfViewerSidebarHeader-BOtZ1GAi.js";import"./useBaseUiId--8KmZa2_.js";import"./useControlled-Geq2FNof.js";import"./CompositeRoot-C5uTTZ0m.js";import"./CompositeItem-Cabmgwfx.js";import"./ToolbarRootContext-DTX7Ze30.js";import"./composite-D3vh-suo.js";import"./svgIconContainer-Dr7oGvpm.js";import"./PdfViewerSearchBar-CG1UQcGG.js";import"./chevron-up-BXGuxXbM.js";import"./chevron-down-B6tzQXyN.js";import"./cross-COlLkHCW.js";import"./PdfViewerSidebar-B8RPOMEQ.js";import"./index-CQRRvGff.js";import"./index-RFLA8vEX.js";import"./index-DM_IWwPy.js";import"./PdfViewerToolbar-xWFF_ihs.js";import"./Button-CjFiJqEg.js";import"./chevron-right-4oJ0ipGp.js";import"./Input-BrSfdZoS.js";import"./search-BJZCsFkW.js";import"./spin-kNmE3j82.js";import"./error-B70U4E8b.js";import"./withOsdkMetrics-hmq2OmN3.js";import"./makeExternalStore-CtIL_ulF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
