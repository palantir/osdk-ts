import{j as r,M as s}from"./iframe-C-P2XTps.js";import{P as p}from"./pdf-viewer-5BErCyBZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CjzYy8uB.js";import"./preload-helper-B2ciRt_1.js";import"./PdfRenderer-BP13nl-h.js";import"./index-TAkEmTOr.js";import"./PdfViewer-Cx3sFd4t.js";import"./PdfViewer.module.css-WtQeF9ie.js";import"./PdfViewerAnnotationLayer-D6rKSkte.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be6nCGgA.js";import"./PdfViewerOutlineSidebar-CdkjjXY2.js";import"./PdfViewerSidebarHeader-Cj7WyPP2.js";import"./useBaseUiId-CWFhVJhL.js";import"./useControlled-DNAq-ux-.js";import"./CompositeRoot-B_eh6CCs.js";import"./CompositeItem-Ej9oQnQL.js";import"./ToolbarRootContext-1n5Nj85T.js";import"./composite-BK1c30lA.js";import"./svgIconContainer-CrU3EDkF.js";import"./PdfViewerSearchBar-hPwDNBsv.js";import"./chevron-up-COeR1ESL.js";import"./chevron-down-Dx0BgYzW.js";import"./cross-C-FokI4v.js";import"./PdfViewerSidebar-14FHkQvI.js";import"./index-DTSw3ggz.js";import"./index-CpJX8S-W.js";import"./index-DBmKylag.js";import"./PdfViewerToolbar-CWAV1tLM.js";import"./Button-BZmN5Brq.js";import"./chevron-right-CfbyodIX.js";import"./Input-0Zox7t1W.js";import"./search-l1NECfxN.js";import"./spin-DZ89i3fn.js";import"./error-ClI8SWaI.js";import"./withOsdkMetrics-DehsSUGO.js";import"./makeExternalStore-D0f_pEt1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
