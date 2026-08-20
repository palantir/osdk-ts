import{j as r,M as s}from"./iframe-C7GOuxD1.js";import{P as p}from"./pdf-viewer-BnFlZ9r_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-5C1HuRww.js";import"./preload-helper-cLq0tmXV.js";import"./PdfViewer-B_KlYnCw.js";import"./index-DBBBWmqo.js";import"./BasePdfViewer-Be764361.js";import"./BasePdfViewer.module.css-BgzJtBfx.js";import"./PdfViewerAnnotationLayer-DCZtQ9Pr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-RwET6L-c.js";import"./PdfViewerOutlineSidebar-QNhu-Qau.js";import"./PdfViewerSidebarHeader-CKMq0Ckl.js";import"./useBaseUiId-BenimXYg.js";import"./useControlled-B_f3t71o.js";import"./CompositeRoot-DRO9hhyK.js";import"./CompositeItem-CyvxmxVc.js";import"./ToolbarRootContext-BdzdDLJF.js";import"./composite-Cgb7pd84.js";import"./svgIconContainer-C5oTgJel.js";import"./PdfViewerSearchBar-U2xXwf-3.js";import"./chevron-up-mshVri_A.js";import"./chevron-down-D0zt0lGj.js";import"./cross-CeilH9rC.js";import"./PdfViewerSidebar-BR3SB_rD.js";import"./index-DJdnGM3o.js";import"./index-CQ4MzVYN.js";import"./index-DuOry3-s.js";import"./PdfViewerToolbar-DoJCaAdC.js";import"./Button-BUb3i5ek.js";import"./chevron-right-CvTCh7d_.js";import"./Input-D4NdRTVJ.js";import"./search-B3SFcxMO.js";import"./spin-hRwBvZ0V.js";import"./error-Gwb1RVKo.js";import"./withOsdkMetrics-BaeX4vAH.js";import"./makeExternalStore-Bn6Cuzy6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
