import{j as r,M as s}from"./iframe-CC_FQYho.js";import{P as p}from"./pdf-viewer-O6rkKrtf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Br02hTAw.js";import"./preload-helper-DiIN_j1k.js";import"./PdfRenderer-oaNiMkqp.js";import"./index-C0RXL92K.js";import"./PdfViewer-BxNvpraL.js";import"./PdfViewer.module.css--OzqOa3o.js";import"./PdfViewerAnnotationLayer-kTsQsOtF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7bxYb8x.js";import"./PdfViewerOutlineSidebar-Cus8Cp02.js";import"./PdfViewerSidebarHeader-BY9D33Yz.js";import"./useBaseUiId-BJp4kyZW.js";import"./useControlled-JgdiNZlV.js";import"./CompositeRoot-BqmCFHDX.js";import"./CompositeItem-DFRdygCM.js";import"./ToolbarRootContext-CzrsBDV_.js";import"./composite-CMNQ5-0t.js";import"./svgIconContainer-BHhva7Vx.js";import"./PdfViewerSearchBar-BlJDoYRc.js";import"./chevron-up-D4e9kzZG.js";import"./chevron-down-C7BZNBxd.js";import"./cross-BZu72TED.js";import"./PdfViewerSidebar-ClXs7v_o.js";import"./index-Cjx3k7Vi.js";import"./index-DgKdSWzb.js";import"./index-CHlIoM3S.js";import"./PdfViewerToolbar-ClvU09HN.js";import"./Button-CK-svcRR.js";import"./chevron-right-DA24WqIG.js";import"./Input-DXqjRZ2w.js";import"./search-oI4OCDZz.js";import"./spin-D5XsEECh.js";import"./error-C55d3W4_.js";import"./withOsdkMetrics-B118lpyL.js";import"./makeExternalStore-VD__KGN8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
