import{j as r,M as s}from"./iframe-Cd_V4KpW.js";import{P as p}from"./pdf-viewer-CLew-Y-T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-MT47dqS3.js";import"./preload-helper-BvId2qNX.js";import"./PdfViewer-_AoMvMjf.js";import"./index-CKbN7xoE.js";import"./BasePdfViewer-CSujt7Ig.js";import"./BasePdfViewer.module.css-DjXfHg1Q.js";import"./PdfViewerAnnotationLayer-BQcsox1p.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B329c08l.js";import"./PdfViewerOutlineSidebar-Cb4cuVqY.js";import"./PdfViewerSidebarHeader-CrOyQV7c.js";import"./useBaseUiId-Cg6vBntQ.js";import"./useControlled-CHek0QKa.js";import"./CompositeRoot-nuM-E4dv.js";import"./CompositeItem-DZc7qyRg.js";import"./ToolbarRootContext-BLj_5vvK.js";import"./composite-BRFYp8ys.js";import"./svgIconContainer-OdpcSH6M.js";import"./PdfViewerSearchBar-CnChuzDy.js";import"./chevron-up-BZoWFqA8.js";import"./chevron-down-DksiwaSO.js";import"./cross-8_7TK-gx.js";import"./PdfViewerSidebar-Dn7gVlZH.js";import"./index-Paj9WnhS.js";import"./index-B7pcEyRI.js";import"./index-fbmKYReH.js";import"./PdfViewerToolbar-CbAyEVQr.js";import"./Button-B2mzAnjv.js";import"./chevron-right-DwFwzwqJ.js";import"./Input-BnvXsjz5.js";import"./search-kv1GPHwR.js";import"./spin-BAEe01Z9.js";import"./error-DeuwQWwL.js";import"./withOsdkMetrics-i_JOH502.js";import"./makeExternalStore-iWOM0D5L.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
