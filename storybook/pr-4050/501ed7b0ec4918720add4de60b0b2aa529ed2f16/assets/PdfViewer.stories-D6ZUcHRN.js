import{j as r,M as s}from"./iframe-BxIl83OC.js";import{P as p}from"./pdf-viewer-DyA35cHU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8gGHSk9.js";import"./preload-helper-Yx9ZNNpK.js";import"./PdfViewer-POQA9i_w.js";import"./index-yC7dwiLI.js";import"./BasePdfViewer-D76FYV1K.js";import"./BasePdfViewer.module.css-GHxePSa2.js";import"./PdfViewerAnnotationLayer-Yltuc3T5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJ1C3NPz.js";import"./PdfViewerOutlineSidebar-D8JHKiiC.js";import"./PdfViewerSidebarHeader-BiLa1yji.js";import"./useBaseUiId-CCOPhUcB.js";import"./useControlled-CtfWN5zI.js";import"./CompositeRoot-Devs8rOn.js";import"./CompositeItem-DIHWAmd-.js";import"./ToolbarRootContext-Cmwitb-c.js";import"./composite-DAGYlNi4.js";import"./svgIconContainer-Bt0ZQcKE.js";import"./PdfViewerSearchBar-B3fj7-lr.js";import"./chevron-up-a_1jNvoE.js";import"./chevron-down-DZwG3tYI.js";import"./cross-CxqX2dHR.js";import"./PdfViewerSidebar-DIgvfXT6.js";import"./index-CcNahi7P.js";import"./index-DcRZYv45.js";import"./index-DjiV5TS-.js";import"./PdfViewerToolbar-BHR8-1Ei.js";import"./Button-D5WuY3ON.js";import"./chevron-right-BgAtLp3Y.js";import"./Input-But5XUYJ.js";import"./search-C6ABKevT.js";import"./spin-DSrlfVK6.js";import"./error-DJcTH0_A.js";import"./withOsdkMetrics-BzRb66se.js";import"./makeExternalStore-CLRP1iif.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
