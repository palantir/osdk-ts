import{j as r,M as s}from"./iframe-jCChBqpD.js";import{P as p}from"./pdf-viewer-j0SwbEO1.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C-R-ivCn.js";import"./preload-helper-BjtDmjUW.js";import"./PdfViewer-Dnc3YKS_.js";import"./index-BDYSe5T3.js";import"./BasePdfViewer-BJ5PlIvl.js";import"./BasePdfViewer.module.css-D85hXYk8.js";import"./PdfViewerAnnotationLayer-DbAt34hf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DuspGX7z.js";import"./PdfViewerOutlineSidebar-CXZQbYOX.js";import"./PdfViewerSidebarHeader-BeL1m3K1.js";import"./useBaseUiId-BgwIkJaa.js";import"./useControlled-Cy4C8mUF.js";import"./CompositeRoot-CmkN13eL.js";import"./CompositeItem-InY95CWo.js";import"./ToolbarRootContext-BWHl3dWP.js";import"./composite-C4cjwLVl.js";import"./svgIconContainer-V036n2V3.js";import"./PdfViewerSearchBar-Dup4z_Cr.js";import"./chevron-up-BvM5URRs.js";import"./chevron-down-FjlLjWzq.js";import"./cross-BFiMfS60.js";import"./PdfViewerSidebar-BY4ahhb-.js";import"./index-38-6lZvw.js";import"./index-DHVDL356.js";import"./index-CzoHWjtt.js";import"./PdfViewerToolbar-DnjCDHw8.js";import"./Button-DYAz7KKI.js";import"./chevron-right-C-UHxxxE.js";import"./Input-mP6whCaC.js";import"./search-BXUdOqpE.js";import"./spin-C4VFO2nd.js";import"./error-S_2dtwT6.js";import"./withOsdkMetrics-CEFSBq5G.js";import"./makeExternalStore-DZ2_Wte_.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
