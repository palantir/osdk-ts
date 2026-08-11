import{j as r,M as s}from"./iframe-MD_hxJ5J.js";import{P as p}from"./pdf-viewer-Cm3zVDE4.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BP8Wk9Xi.js";import"./preload-helper-CxmPmWZ8.js";import"./PdfRenderer-CkBfnMbP.js";import"./index-64-1SNr_.js";import"./PdfViewer-6FjiFcq6.js";import"./PdfViewer.module.css-DKskkACz.js";import"./PdfViewerAnnotationLayer-BHgZkGvH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeOkFFvZ.js";import"./PdfViewerOutlineSidebar-D-UR9Is-.js";import"./PdfViewerSidebarHeader-Ba0WOej1.js";import"./useBaseUiId-ChxOhtPS.js";import"./useControlled-C8cjmXAr.js";import"./CompositeRoot-CBFoth86.js";import"./CompositeItem-CADo38Yn.js";import"./ToolbarRootContext-BSmt9IfE.js";import"./composite-C2KSVEv8.js";import"./svgIconContainer-BvauezIc.js";import"./PdfViewerSearchBar-Dm_wVHM8.js";import"./chevron-up-DlB24F_0.js";import"./chevron-down-BLw2RaDz.js";import"./cross-D46twNIG.js";import"./PdfViewerSidebar-DpudR-2x.js";import"./index-Bke-1tqH.js";import"./index-BZUy6kD9.js";import"./index-Cg6AvCFD.js";import"./PdfViewerToolbar-C0AAXvLl.js";import"./Button-DTHIbyog.js";import"./chevron-right-CaVhu19R.js";import"./Input-0PB2eg3D.js";import"./search-7pK9Rle0.js";import"./spin-tCijJ9UK.js";import"./error-BL4ywDu6.js";import"./withOsdkMetrics-DoESnEyg.js";import"./makeExternalStore-CQNZO13J.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
