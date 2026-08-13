import{j as r,M as s}from"./iframe-BNOKRHpm.js";import{P as p}from"./pdf-viewer-DMkz4MQ1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-f64Ci1lW.js";import"./preload-helper-CFKbXbX-.js";import"./PdfViewer-WF-mlAoo.js";import"./index-XA3M--in.js";import"./BasePdfViewer-BHxqnH2u.js";import"./BasePdfViewer.module.css-BBgIdbHY.js";import"./PdfViewerAnnotationLayer-DM_PWsJu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8LRitLx.js";import"./PdfViewerOutlineSidebar-D2-jDeWz.js";import"./PdfViewerSidebarHeader-H2EJpGQW.js";import"./useBaseUiId-CUrQf0BS.js";import"./useControlled-CFad5hXR.js";import"./CompositeRoot-BBXVWqGB.js";import"./CompositeItem-BXx4pExx.js";import"./ToolbarRootContext-B2tiH_2Q.js";import"./composite-miZnHh1r.js";import"./svgIconContainer-DfI3Swo4.js";import"./PdfViewerSearchBar-BDwxgcxj.js";import"./chevron-up-B0Odwmt_.js";import"./chevron-down-BEJwekoL.js";import"./cross-C6ouYwXO.js";import"./PdfViewerSidebar-BOz14fdJ.js";import"./index--hzNwQqO.js";import"./index-BRkADXm4.js";import"./index-DRg9zoeK.js";import"./PdfViewerToolbar-BpujQjRL.js";import"./Button-BuIgOk8v.js";import"./chevron-right-BBsT-GpL.js";import"./Input-BgXBkyZH.js";import"./search-Dgaav2uF.js";import"./spin-BeSUrPmz.js";import"./error-BlVam3Jf.js";import"./withOsdkMetrics-Bvubum1o.js";import"./makeExternalStore-DzLhNxCL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
