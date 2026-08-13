import{j as r,M as s}from"./iframe-Chm34oVN.js";import{P as p}from"./pdf-viewer-DWBFjYCk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7u5-4lI.js";import"./preload-helper-BOK6Dzo-.js";import"./PdfViewer-Hyg491hW.js";import"./index-CypedJkd.js";import"./BasePdfViewer-k8Fg9ZWt.js";import"./BasePdfViewer.module.css-C4ej568w.js";import"./PdfViewerAnnotationLayer-CIfX09PR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dk9mJx18.js";import"./PdfViewerOutlineSidebar-B7hIYKQZ.js";import"./PdfViewerSidebarHeader-epgDCo1U.js";import"./useBaseUiId-BfNds6QM.js";import"./useControlled-ZXPTCd_T.js";import"./CompositeRoot-y_ZkIaDo.js";import"./CompositeItem-DnyMtLMv.js";import"./ToolbarRootContext-OjMSVEL3.js";import"./composite-7460sgXR.js";import"./svgIconContainer-DC37vkSl.js";import"./PdfViewerSearchBar-D7SJdfvb.js";import"./chevron-up-BFErXkJb.js";import"./chevron-down-zW3En9pY.js";import"./cross-DoHdapX8.js";import"./PdfViewerSidebar-BsUBTgQ_.js";import"./index-DxO1uITv.js";import"./index-COQyuwtf.js";import"./index-CUU4KiqC.js";import"./PdfViewerToolbar-DVqMipSu.js";import"./Button-CtcVqQNq.js";import"./chevron-right-By_MNPcY.js";import"./Input-DZjL7Pin.js";import"./search-BHYw-t4y.js";import"./spin-BY6m8qfb.js";import"./error-B18D31eI.js";import"./withOsdkMetrics-866m-zhW.js";import"./makeExternalStore-B83DbUt5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
