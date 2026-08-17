import{j as r,M as s}from"./iframe-B6vHMBGp.js";import{P as p}from"./pdf-viewer-CBPO8s5r.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dxno_mF-.js";import"./preload-helper-Cp58PBL8.js";import"./PdfViewer-OL7Mrm8P.js";import"./index-CJzsmVv3.js";import"./BasePdfViewer-D9ngcFPd.js";import"./BasePdfViewer.module.css-B1UqUYqE.js";import"./PdfViewerAnnotationLayer-BU69dEhh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9pSjmns.js";import"./PdfViewerOutlineSidebar-CJ9MZxer.js";import"./PdfViewerSidebarHeader-CAIzeCuS.js";import"./useBaseUiId-h3pAp7nr.js";import"./useControlled-BVsysqHb.js";import"./CompositeRoot-DcNCt5M3.js";import"./CompositeItem-DDQHWJ0b.js";import"./ToolbarRootContext-7AQ420yY.js";import"./composite-DWtkffoP.js";import"./svgIconContainer-wg0Lc9CR.js";import"./PdfViewerSearchBar-ByIOYfM_.js";import"./chevron-up-C955gvew.js";import"./chevron-down-6pFsTB_r.js";import"./cross-9x5JmZ4A.js";import"./PdfViewerSidebar-Df5zTGr9.js";import"./index-CzbMhBIL.js";import"./index-CujXwWwq.js";import"./index-i--ASWRG.js";import"./PdfViewerToolbar-D4qcxxnG.js";import"./Button-DGAYYgZ-.js";import"./chevron-right-BWd0XBCd.js";import"./Input-B7KllzPA.js";import"./search-DfKXJtDr.js";import"./spin-BZXs7eID.js";import"./error-BqGkptHP.js";import"./withOsdkMetrics-CL6kHg8G.js";import"./makeExternalStore-Blbdey5m.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
