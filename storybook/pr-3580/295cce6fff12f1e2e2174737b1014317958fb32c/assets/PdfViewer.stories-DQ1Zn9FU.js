import{j as r,M as s}from"./iframe-xXjK4u40.js";import{P as p}from"./pdf-viewer-BgXdlC41.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CoRuQfXz.js";import"./preload-helper-BqE7-R_N.js";import"./PdfRenderer-BgXLV4Ce.js";import"./index-ClEtxyXp.js";import"./PdfViewer-Tt8aLHPN.js";import"./PdfViewer.module.css-CkKaV8q5.js";import"./PdfViewerAnnotationLayer-CgSOn-Sq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpgEoMzV.js";import"./PdfViewerOutlineSidebar-DLbRPTcK.js";import"./PdfViewerSidebarHeader-BhDig0yh.js";import"./useBaseUiId-CYVPPn0B.js";import"./useControlled-2wc3LkSU.js";import"./CompositeRoot-zhew8ibM.js";import"./CompositeItem-CT7o0f18.js";import"./ToolbarRootContext-BnchmzSb.js";import"./composite-DvPYbg5V.js";import"./svgIconContainer-BFEw6mWP.js";import"./PdfViewerSearchBar-D7hoMRP1.js";import"./chevron-up-DG5tJ-rD.js";import"./chevron-down-Bos-P3hL.js";import"./cross-CYYIgRmS.js";import"./PdfViewerSidebar-Hr-Rs419.js";import"./index-C7m05fpg.js";import"./index-CLDg91iN.js";import"./index-_a-wUnXx.js";import"./PdfViewerToolbar-C2S9iiC6.js";import"./Button-DlW9kU4X.js";import"./chevron-right-CgDWTWLc.js";import"./Input-DveW8qZb.js";import"./search-D-e0QOGp.js";import"./spin-Dsr585kd.js";import"./error-BBBAnrZj.js";import"./withOsdkMetrics-DG9fGxL-.js";import"./makeExternalStore-BLknL1Vk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
