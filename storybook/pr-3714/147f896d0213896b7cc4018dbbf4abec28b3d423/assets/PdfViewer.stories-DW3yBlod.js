import{j as r,M as s}from"./iframe-BSifmcVk.js";import{P as p}from"./pdf-viewer-BLL96nzA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CQhJAd66.js";import"./preload-helper-CVMAG18C.js";import"./PdfRenderer-DjIz2yqF.js";import"./index-st0q4RoU.js";import"./PdfViewer-s-DrD7fj.js";import"./PdfViewer.module.css-D8llBzwj.js";import"./PdfViewerAnnotationLayer-DzHCUsRm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-g0340S7B.js";import"./PdfViewerOutlineSidebar-UlSri751.js";import"./PdfViewerSidebarHeader-CTo5Shru.js";import"./useBaseUiId-CpWLPULh.js";import"./useControlled-DF0sXW0s.js";import"./CompositeRoot-BHMw6Cdc.js";import"./CompositeItem-Xoq0cONq.js";import"./ToolbarRootContext-BJ4u2SIV.js";import"./composite-IeMIDoM7.js";import"./svgIconContainer-CxUaEimp.js";import"./PdfViewerSearchBar-CYpFk8F8.js";import"./chevron-up-ZCP5xjb8.js";import"./chevron-down-4OBhYoLd.js";import"./cross-DtUxBPT6.js";import"./PdfViewerSidebar-DjUoHMVj.js";import"./index-szwaSOAB.js";import"./index-DeMvH6kN.js";import"./index-xZryAjRG.js";import"./PdfViewerToolbar-CLOG-gfp.js";import"./Button-DXGQ07LV.js";import"./chevron-right-B5idg4ID.js";import"./Input-Cq8S2xQC.js";import"./search-Dj6xnLC7.js";import"./spin-CujraWYX.js";import"./error-CL7low_w.js";import"./withOsdkMetrics-BmxutiwK.js";import"./makeExternalStore-B_REPPMn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
