import{j as r,M as s}from"./iframe-C9caj-uS.js";import{P as p}from"./pdf-viewer-CuOCgHJr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlnK6C64.js";import"./preload-helper-Dm7ndjo5.js";import"./PdfRenderer-Cp6bBdvi.js";import"./index-DJDCuZSS.js";import"./PdfViewer-CW-knvc0.js";import"./PdfViewer.module.css-BLMwhrCW.js";import"./PdfViewerAnnotationLayer-CT-48IV9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dz0dEyjT.js";import"./PdfViewerOutlineSidebar-TnSRca2h.js";import"./PdfViewerSidebarHeader-CD04__hy.js";import"./useBaseUiId-BLHAOWKu.js";import"./useControlled-DZFGlnZc.js";import"./CompositeRoot-DU2HT4Su.js";import"./CompositeItem-iG_-J612.js";import"./ToolbarRootContext-WTq_GHpE.js";import"./composite-bXu8NOAH.js";import"./svgIconContainer-B4Ghhqx2.js";import"./PdfViewerSearchBar-BxSlcbMK.js";import"./chevron-up-BxtwkXX2.js";import"./chevron-down-9Qv1QY7O.js";import"./cross-BqWAuO9Q.js";import"./PdfViewerSidebar-URRSqUGh.js";import"./index-CpRmXNxn.js";import"./index-CDWH6ybA.js";import"./index-BdqcR2Fk.js";import"./PdfViewerToolbar-DDBAsNMO.js";import"./Button-C_2J43G-.js";import"./chevron-right-BL7-gvCm.js";import"./Input-BoWXJjuZ.js";import"./search-DJ1CgP8p.js";import"./spin-vk3DPYuQ.js";import"./error-DbcPXbnj.js";import"./withOsdkMetrics-Cy5OKgHc.js";import"./makeExternalStore-BWnBKRDx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
