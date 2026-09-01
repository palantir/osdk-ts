import{j as r,M as s}from"./iframe-BmXghCn6.js";import{P as p}from"./pdf-viewer-EIirG5o3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CyM2VROq.js";import"./preload-helper-DyEb50hU.js";import"./PdfViewer-DAPq3M6V.js";import"./index-CkP1S794.js";import"./BasePdfViewer-DrnAaqPT.js";import"./BasePdfViewer.module.css-5W_uqkiD.js";import"./PdfViewerAnnotationLayer-DQKBDVmN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C655NWcz.js";import"./PdfViewerOutlineSidebar-a0KzmZ1T.js";import"./PdfViewerSidebarHeader-DEOo1z-6.js";import"./useBaseUiId-BFdWkSa3.js";import"./useControlled-BKLzfLUK.js";import"./CompositeRoot-DT_iDvA4.js";import"./CompositeItem-Kpz015F9.js";import"./ToolbarRootContext-Bv4KJP5T.js";import"./composite-skjDbJuY.js";import"./svgIconContainer-CEabMecg.js";import"./PdfViewerSearchBar-Pdy7GUk6.js";import"./chevron-up-C0KlA9Hm.js";import"./chevron-down-BKWNxeex.js";import"./cross-1G28DJ34.js";import"./PdfViewerSidebar-BTJCbnXx.js";import"./index-Bl1gUBDd.js";import"./index-XWjp_9x9.js";import"./index-C8vp91fy.js";import"./PdfViewerToolbar-B28PTkt2.js";import"./Button-Cs6CA2sl.js";import"./chevron-right-8Xqw2334.js";import"./Input-D8XP268p.js";import"./search-DYe5GpMI.js";import"./spin-NUgJ8IoR.js";import"./error-8I9DfYjI.js";import"./withOsdkMetrics-BALE--sz.js";import"./makeExternalStore-D8WVbSgH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
