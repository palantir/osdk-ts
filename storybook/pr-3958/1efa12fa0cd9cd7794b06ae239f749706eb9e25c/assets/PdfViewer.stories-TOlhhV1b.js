import{j as r,M as s}from"./iframe-B26-UX9b.js";import{P as p}from"./pdf-viewer-CK4EHKKC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnsU-66E.js";import"./preload-helper-qgH9prhH.js";import"./PdfViewer-CFD4LVKC.js";import"./index-gSzx-VKs.js";import"./BasePdfViewer-TjqFWAXU.js";import"./BasePdfViewer.module.css-D-Fkb6x5.js";import"./PdfViewerAnnotationLayer-0KS2BEBD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ByHka5bI.js";import"./PdfViewerOutlineSidebar-5ukF8S19.js";import"./PdfViewerSidebarHeader-Clho_UVR.js";import"./useBaseUiId-BNFolbRL.js";import"./useControlled-BHqUi1Rr.js";import"./CompositeRoot-D3rXkOXn.js";import"./CompositeItem-CL1dJO-b.js";import"./ToolbarRootContext-Dav0NKZT.js";import"./composite-B5QPNFwO.js";import"./svgIconContainer-CNIysoPo.js";import"./PdfViewerSearchBar-CbDxW8aI.js";import"./chevron-up-DE8GGnRE.js";import"./chevron-down-CCwBQ-Op.js";import"./cross-4Wy1lzRG.js";import"./PdfViewerSidebar-D0Ej-7ry.js";import"./index-DrBipA26.js";import"./index-CvJGlMcY.js";import"./index-BdbeSUQe.js";import"./PdfViewerToolbar-DYDOqA9C.js";import"./Button-BAa0NYG4.js";import"./chevron-right-BqMvq7h0.js";import"./Input-SuAL17yL.js";import"./search-fQO_n2xV.js";import"./spin-CAGfURrQ.js";import"./error-BBoH6WG4.js";import"./withOsdkMetrics-uTMtOsB_.js";import"./makeExternalStore-B7jmTiXs.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
