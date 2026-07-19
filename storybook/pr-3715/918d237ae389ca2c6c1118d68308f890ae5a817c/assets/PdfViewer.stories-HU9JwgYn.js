import{j as r,M as s}from"./iframe-DTeHu6hN.js";import{P as p}from"./pdf-viewer-jS89Djkt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DDPIQHVB.js";import"./preload-helper-CJczF-mP.js";import"./PdfRenderer-Bs4o0x23.js";import"./index-GlGN6f0J.js";import"./PdfViewer-BPA-IN11.js";import"./PdfViewer.module.css-B2wHDyjF.js";import"./PdfViewerAnnotationLayer-BZeYZrkX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZME38Ua.js";import"./PdfViewerOutlineSidebar-DZV-gQxf.js";import"./PdfViewerSidebarHeader-BNAK3RS-.js";import"./useBaseUiId-B6SeHPK4.js";import"./useControlled-hZDpOyJh.js";import"./CompositeRoot-UEAj6nP3.js";import"./CompositeItem-Ci805EOV.js";import"./ToolbarRootContext-DTRaSwpU.js";import"./composite-DPUdrTzN.js";import"./svgIconContainer-BK0RrMLF.js";import"./PdfViewerSearchBar-BzIbAGnO.js";import"./chevron-up-DE4CSFCV.js";import"./chevron-down-D59gcI1r.js";import"./cross-D9lLXQ9E.js";import"./PdfViewerSidebar-McF8-0lX.js";import"./index-CIRwu5si.js";import"./index-oDiTKYqb.js";import"./index-D41-ZHpX.js";import"./PdfViewerToolbar-DxQxBaGG.js";import"./Button-CLs8AEax.js";import"./chevron-right-i-V0PqRs.js";import"./Input-DdoqLgIV.js";import"./search-DAVjXXcT.js";import"./spin-BXNBQKI7.js";import"./error-JVP3oq4B.js";import"./withOsdkMetrics-D89cB6fV.js";import"./makeExternalStore-CID1p47X.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
