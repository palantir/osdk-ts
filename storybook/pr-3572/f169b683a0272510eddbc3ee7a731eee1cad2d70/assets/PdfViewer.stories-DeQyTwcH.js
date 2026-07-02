import{j as r,M as s}from"./iframe-BtqArRp_.js";import{P as p}from"./pdf-viewer-D1Vzp0tL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CINqWjz0.js";import"./preload-helper-CCCWJTyF.js";import"./PdfRenderer-BXedxfzs.js";import"./index-BzxWm08t.js";import"./PdfViewer-Dzct3tZj.js";import"./PdfViewer.module.css-B4Qdkpqq.js";import"./PdfViewerAnnotationLayer-C70zE-YE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CUqh6Oj1.js";import"./PdfViewerOutlineSidebar-CabiWBUs.js";import"./PdfViewerSidebarHeader-CPag-WgU.js";import"./useBaseUiId-0Vbapi6A.js";import"./useControlled-Dm2hXrNC.js";import"./CompositeRoot-BEO46OvA.js";import"./CompositeItem-TKwL8ljX.js";import"./ToolbarRootContext-SKC-tSE_.js";import"./composite-oOleH5NB.js";import"./svgIconContainer-3MnKoS_i.js";import"./PdfViewerSearchBar-bkGfquCc.js";import"./chevron-up-BeqwqLOn.js";import"./chevron-down-DM4F0TBT.js";import"./cross-pW8we9AT.js";import"./PdfViewerSidebar-BhmXPlqo.js";import"./index-HfPtYqs5.js";import"./index-CBcCnrRd.js";import"./index-lK7kjT7q.js";import"./PdfViewerToolbar-COl5EzHY.js";import"./Button-Cv-jNafh.js";import"./chevron-right-CsHDwJm3.js";import"./Input-DYV7wbma.js";import"./minus-B3oIwiZs.js";import"./search-C1LRanub.js";import"./spin-G7zIVf0_.js";import"./error-CaLujl_f.js";import"./withOsdkMetrics-BKW2F_xA.js";import"./makeExternalStore-Cl23MqTd.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
