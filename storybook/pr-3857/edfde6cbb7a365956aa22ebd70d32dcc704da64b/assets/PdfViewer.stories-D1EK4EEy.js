import{j as r,M as s}from"./iframe-Ct8R5TQf.js";import{P as p}from"./pdf-viewer-D-gfce5p.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DQMKLit9.js";import"./preload-helper-CmnAPtah.js";import"./PdfRenderer-CJL38JFu.js";import"./index-BRgsegbN.js";import"./PdfViewer-BaZVaPIp.js";import"./PdfViewer.module.css-H8NmSi7D.js";import"./PdfViewerAnnotationLayer-D1iDQtSb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Czu8orsr.js";import"./PdfViewerOutlineSidebar-ChpwHpSa.js";import"./PdfViewerSidebarHeader-DwSvjxD0.js";import"./useBaseUiId-DoNgXT9k.js";import"./useControlled-CKc1aHxj.js";import"./CompositeRoot-CCuDVRjv.js";import"./CompositeItem-sASbL7Ao.js";import"./ToolbarRootContext-BFoDjrVA.js";import"./composite-Be4Z-niC.js";import"./svgIconContainer-Duqk0EvN.js";import"./PdfViewerSearchBar-CC9nifgg.js";import"./chevron-up-D94dJ-4x.js";import"./chevron-down-hHedeX78.js";import"./cross-D1xZE6uN.js";import"./PdfViewerSidebar-Dz1xCd1q.js";import"./index-B-_jawLE.js";import"./index-BtTgSEhG.js";import"./index-4doTHW3z.js";import"./PdfViewerToolbar-DouidwHq.js";import"./Button-DAFBE6sk.js";import"./chevron-right-BJxivxPb.js";import"./Input-887jmIgI.js";import"./search-CxT81SBo.js";import"./spin-CoWzK2uL.js";import"./error-BzhSLAKe.js";import"./withOsdkMetrics-DgiHV6Et.js";import"./makeExternalStore-D6qxd4Fu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
