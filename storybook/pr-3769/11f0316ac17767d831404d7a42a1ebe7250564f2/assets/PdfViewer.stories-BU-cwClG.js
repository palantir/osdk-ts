import{j as r,M as s}from"./iframe-BK0RufGl.js";import{P as p}from"./pdf-viewer-inTCHezS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D1CG84xi.js";import"./preload-helper-B1x3XWjh.js";import"./PdfViewer-Be_9-nVT.js";import"./index-BC49ZXOf.js";import"./BasePdfViewer-DTfDRHby.js";import"./BasePdfViewer.module.css-C57a8vLE.js";import"./PdfViewerAnnotationLayer-Nwtk6i_K.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYxp9Pbv.js";import"./PdfViewerOutlineSidebar-EtYQf-pJ.js";import"./PdfViewerSidebarHeader--cAwSOWO.js";import"./useBaseUiId-frLuJhJZ.js";import"./useControlled-unttFX2J.js";import"./CompositeRoot-9YqpxTu9.js";import"./CompositeItem-BbIk1WEG.js";import"./ToolbarRootContext-qtgBfN3j.js";import"./composite-DlFm6szC.js";import"./svgIconContainer-BlFMB5mu.js";import"./PdfViewerSearchBar-CJavoRXk.js";import"./chevron-up-B1FVr8Qv.js";import"./chevron-down-RflKAGzX.js";import"./cross-fqPA6CW1.js";import"./PdfViewerSidebar-C7Xyqmuk.js";import"./index-CHiFjEhv.js";import"./index-zkQRtd-f.js";import"./index-DkQ29aQ-.js";import"./PdfViewerToolbar-BMUm6_hG.js";import"./Button-DvmwcYmH.js";import"./chevron-right-F_Gqxr5d.js";import"./Input-BEeAXmcy.js";import"./search-DuhXtbsI.js";import"./spin-D-NKHYDK.js";import"./error-0TFzhvIK.js";import"./withOsdkMetrics-CflMk9Ld.js";import"./makeExternalStore-h_6mTVKe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
