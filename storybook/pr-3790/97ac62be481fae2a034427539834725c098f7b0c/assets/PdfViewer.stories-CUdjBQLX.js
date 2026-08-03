import{j as r,M as s}from"./iframe-aLJ4vB0x.js";import{P as p}from"./pdf-viewer-BwQf4QPA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-dLxOFkAy.js";import"./preload-helper-B5sUmCwj.js";import"./PdfRenderer-TedDgcw8.js";import"./index-DKvaEXHI.js";import"./PdfViewer-DbkAqZoE.js";import"./PdfViewer.module.css-CZe-8NN4.js";import"./PdfViewerAnnotationLayer-tFwgCvpk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-IGy6Z96z.js";import"./PdfViewerOutlineSidebar-B7lYm27U.js";import"./PdfViewerSidebarHeader-BHqjBqV-.js";import"./useBaseUiId-BuIqAuhc.js";import"./useControlled-C7kgsGsI.js";import"./CompositeRoot-CzcaIKhK.js";import"./CompositeItem-C0_6gg2t.js";import"./ToolbarRootContext-B7yBHeEe.js";import"./composite-D_Mqvp3m.js";import"./svgIconContainer-873Hh3eJ.js";import"./PdfViewerSearchBar-BwW9C4W3.js";import"./chevron-up-M77HFCzA.js";import"./chevron-down-D9U3DaSB.js";import"./cross-BQrUWsOd.js";import"./PdfViewerSidebar-Ck5Mwf2w.js";import"./index-xX1_mGTA.js";import"./index-BkKRshEc.js";import"./index-CUJ1tB6w.js";import"./PdfViewerToolbar-Byh6v3-6.js";import"./Button-lNsDPS4F.js";import"./chevron-right-BMBDjC3r.js";import"./Input-DJfYdaTn.js";import"./search-D07Efajj.js";import"./spin-BoSDkQVr.js";import"./error-BpshgP1A.js";import"./withOsdkMetrics-BqZomkcB.js";import"./makeExternalStore-CvU_QCPk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
