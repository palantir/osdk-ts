import{j as r,M as s}from"./iframe-CQ8GnM4F.js";import{P as p}from"./pdf-viewer-B3ad4-x9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bb4bX9cM.js";import"./preload-helper-DTHymVTT.js";import"./PdfViewer-bzWmnRQp.js";import"./index-D-qb5elk.js";import"./BasePdfViewer-D4X-RQdg.js";import"./BasePdfViewer.module.css-BfXK7nea.js";import"./PdfViewerAnnotationLayer-D76SlesD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BeiNDCAo.js";import"./PdfViewerOutlineSidebar-DMkCTq5o.js";import"./PdfViewerSidebarHeader-C0Mli58D.js";import"./useBaseUiId-DNylri0h.js";import"./useControlled-Nzu8rvWU.js";import"./CompositeRoot-CwJrsJ6-.js";import"./CompositeItem-DUQ-QWk-.js";import"./ToolbarRootContext-Cuym0TD9.js";import"./composite-D8Op5omk.js";import"./svgIconContainer-CFj_QVpE.js";import"./PdfViewerSearchBar-0xMe8CPa.js";import"./chevron-up-4Ry-a50X.js";import"./chevron-down-ELLpGOmV.js";import"./cross-B-B76LsO.js";import"./PdfViewerSidebar-BOPR6vif.js";import"./index-Il0eZ9cQ.js";import"./index-CBfM1eTV.js";import"./index-vRbi-hPZ.js";import"./PdfViewerToolbar-CC0dDF4B.js";import"./Button-D03uZiM4.js";import"./chevron-right-BSR0e-N5.js";import"./Input-DxXc3FHJ.js";import"./search-BD7N_Px9.js";import"./spin-DgKqo8Mh.js";import"./error-BTrU7oox.js";import"./withOsdkMetrics-D2yFydsJ.js";import"./makeExternalStore-DtmpZgSb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
