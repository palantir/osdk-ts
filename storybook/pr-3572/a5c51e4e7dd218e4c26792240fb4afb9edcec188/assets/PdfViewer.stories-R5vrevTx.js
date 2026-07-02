import{j as r,M as s}from"./iframe-CkYkhnUO.js";import{P as p}from"./pdf-viewer-DqYRCyHI.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CBQF3vXP.js";import"./preload-helper-5bVl3pR5.js";import"./PdfRenderer-CFguDgTT.js";import"./index-DBMthAic.js";import"./PdfViewer-C1nXvlRu.js";import"./PdfViewer.module.css-CcI83oGT.js";import"./PdfViewerAnnotationLayer-CJykxd9E.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BcLqnsxE.js";import"./PdfViewerOutlineSidebar-BkGI_xR2.js";import"./PdfViewerSidebarHeader-exPZxywV.js";import"./useBaseUiId-D7Fmfn3S.js";import"./useControlled-CbXaJr7B.js";import"./CompositeRoot-8vqwyQG8.js";import"./CompositeItem-BfoIkqzQ.js";import"./ToolbarRootContext-msZgpn0v.js";import"./composite-C_MwASkq.js";import"./svgIconContainer-DcgYw830.js";import"./PdfViewerSearchBar-BGj7EtBg.js";import"./chevron-up-DDV7Q89A.js";import"./chevron-down-CiZvCI1x.js";import"./cross-_AQ0EykC.js";import"./PdfViewerSidebar-CJbb-ChI.js";import"./index-Bi8vhfCA.js";import"./index-B28k0r7n.js";import"./index--kthvSpz.js";import"./PdfViewerToolbar-BhSqA6bw.js";import"./Button-Dx3FpDnS.js";import"./chevron-right-RR2bM_g6.js";import"./Input-D00RBv5_.js";import"./minus-CfbDzYng.js";import"./search-g7eaTWrQ.js";import"./spin-CNXmBYZh.js";import"./error-DIvhNdA5.js";import"./withOsdkMetrics-xePCT_7C.js";import"./makeExternalStore-D4dfw71_.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
