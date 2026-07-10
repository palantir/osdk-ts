import{j as r,M as s}from"./iframe-CoTMVfnL.js";import{P as p}from"./pdf-viewer-D1bCZbOQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ZzLJY_7A.js";import"./preload-helper-DjaNlnbw.js";import"./PdfRenderer-CcPAstvm.js";import"./index-Cg3w6apq.js";import"./PdfViewer-u9EEC1wv.js";import"./PdfViewer.module.css-BlpvW0-I.js";import"./PdfViewerAnnotationLayer-Dtxqof04.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQLBlfxi.js";import"./PdfViewerOutlineSidebar-CO2HYBhq.js";import"./PdfViewerSidebarHeader-D6LMnEjx.js";import"./useBaseUiId-DE_ED7pu.js";import"./useControlled-CauNHWaj.js";import"./CompositeRoot-CPNgibEI.js";import"./CompositeItem-XC20fOJX.js";import"./ToolbarRootContext-HpQfuFqk.js";import"./composite-Doaf3sfV.js";import"./svgIconContainer-BEAlQ9Ta.js";import"./PdfViewerSearchBar-AubqJesH.js";import"./chevron-up-Dd-WnZvx.js";import"./chevron-down-D4ySI5Fm.js";import"./cross-B-VkzZ5p.js";import"./PdfViewerSidebar-vjD8Di8Y.js";import"./index-BLZOyItz.js";import"./index-Cv2u_PUJ.js";import"./index-CtMqyHGQ.js";import"./PdfViewerToolbar-CRAUPy6c.js";import"./Button-DPs9dOYS.js";import"./chevron-right-CPWeC6dt.js";import"./Input-BigwbId-.js";import"./search-m-jhS3a1.js";import"./spin-CCURYpGc.js";import"./error-Cyn8jfJA.js";import"./withOsdkMetrics-DhbHudqv.js";import"./makeExternalStore-C7b-POpQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
