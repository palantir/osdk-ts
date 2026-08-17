import{j as r,M as s}from"./iframe-CP7QTMjD.js";import{P as p}from"./pdf-viewer-YZCQJa3a.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RGJiBnDx.js";import"./preload-helper-Bd8suxmt.js";import"./PdfViewer-Dx4r1nKk.js";import"./index-BPsbF1qe.js";import"./BasePdfViewer-BySSuhf-.js";import"./BasePdfViewer.module.css-CuBEIFWJ.js";import"./PdfViewerAnnotationLayer-BDdCY2G-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PSkE4vdb.js";import"./PdfViewerOutlineSidebar-DFMpaBmM.js";import"./PdfViewerSidebarHeader-BXfHE0A9.js";import"./useBaseUiId-BaO1Z6ca.js";import"./useControlled-qxdzJ-6o.js";import"./CompositeRoot-Uhk43ANg.js";import"./CompositeItem-CZgkbGHU.js";import"./ToolbarRootContext-DiyEBXMz.js";import"./composite-CVUK9pNM.js";import"./svgIconContainer-BrNHieP3.js";import"./PdfViewerSearchBar-7ZdEq4G-.js";import"./chevron-up-D6mBXQIE.js";import"./chevron-down-BXz7fXPz.js";import"./cross-DFB4dF8m.js";import"./PdfViewerSidebar-DpnJ7oE_.js";import"./index-Dee7JgMQ.js";import"./index-CcGoeXSV.js";import"./index-DJ7K6xAB.js";import"./PdfViewerToolbar-CYfIKbpU.js";import"./Button-COqGdDuO.js";import"./chevron-right-BxErfq0T.js";import"./Input-DJXNsHex.js";import"./search-BhBPvxZt.js";import"./spin-C6n3uHhe.js";import"./error-CB1q8I3x.js";import"./withOsdkMetrics-BE1P-0Lv.js";import"./makeExternalStore-Bl7e9I-a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
