import{j as r,M as s}from"./iframe-B3O9T_SG.js";import{P as p}from"./pdf-viewer-Daj28ryv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BmS4YC75.js";import"./preload-helper-CPdbREwC.js";import"./PdfViewer-u1LblsKb.js";import"./index-BwoUB_Qf.js";import"./BasePdfViewer-UbOsY265.js";import"./BasePdfViewer.module.css-CFqBy7jn.js";import"./PdfViewerAnnotationLayer-T-BpBisn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Xz4GHi47.js";import"./PdfViewerOutlineSidebar-BBNU9307.js";import"./PdfViewerSidebarHeader-C_WIBSxJ.js";import"./useBaseUiId-BICM1opj.js";import"./useControlled-n7PhTfzO.js";import"./CompositeRoot-D4cFNQTn.js";import"./CompositeItem-BqJr4Pc-.js";import"./ToolbarRootContext-CmKKFUT-.js";import"./composite-D7y544dA.js";import"./svgIconContainer-BPe5aJfR.js";import"./PdfViewerSearchBar-QJwbuPWR.js";import"./chevron-up-nsDTylPS.js";import"./chevron-down-8HdkIbSK.js";import"./cross-Xt_GMyVs.js";import"./PdfViewerSidebar-CEMEb7ES.js";import"./index-CwDIHAhZ.js";import"./index-CJOOs8zG.js";import"./index-QdBHREHi.js";import"./PdfViewerToolbar-BSwjHNPe.js";import"./Button-DrW0QaFB.js";import"./chevron-right-VwY-1uZ9.js";import"./Input-Dk0bR2r3.js";import"./search-Av7_nbfA.js";import"./spin-Cl216eYq.js";import"./error-B1lEKcyy.js";import"./withOsdkMetrics-DKpBc77k.js";import"./makeExternalStore-DAW5CeGe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
