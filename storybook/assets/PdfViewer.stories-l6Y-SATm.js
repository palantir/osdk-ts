import{j as r,M as s}from"./iframe-ZKDPnRYv.js";import{P as p}from"./pdf-viewer-BFRBrjbS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CNMyxlu5.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfViewer-CvVN_1pK.js";import"./index-DNWYE-f1.js";import"./BasePdfViewer-C7WGoMpa.js";import"./BasePdfViewer.module.css-DC6rhCkh.js";import"./PdfViewerAnnotationLayer-GNHiredu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjrkvkYW.js";import"./PdfViewerOutlineSidebar-DM0OJfFw.js";import"./PdfViewerSidebarHeader-Bb_6J6MS.js";import"./useBaseUiId-Ce1gy8Rx.js";import"./useControlled-F5SgWL0g.js";import"./CompositeRoot-ETrBZ8yO.js";import"./CompositeItem-C1cGzStq.js";import"./ToolbarRootContext-4_ztJASm.js";import"./composite-BmiDYLqb.js";import"./svgIconContainer-DrDKA2Lc.js";import"./PdfViewerSearchBar-3VkbrbFE.js";import"./chevron-up-HMzVux31.js";import"./chevron-down-DWL-RGCQ.js";import"./cross-f6oJQcWu.js";import"./PdfViewerSidebar-Bl2yeB41.js";import"./index-CW4IzwL-.js";import"./index-CBLMz6-B.js";import"./index-Cb1Rmdlc.js";import"./PdfViewerToolbar-dfrKJr1W.js";import"./Button-BJSgrwjd.js";import"./chevron-right-BTVZpQJj.js";import"./Input-BVhJywkb.js";import"./search-BicHh123.js";import"./spin-CfJMVGCC.js";import"./error-FVA4fmQK.js";import"./withOsdkMetrics-tBsYI7eh.js";import"./makeExternalStore-CRRSMSB3.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
