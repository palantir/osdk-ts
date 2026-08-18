import{j as r,M as s}from"./iframe-D5CWdNdp.js";import{P as p}from"./pdf-viewer-DRu-RNKB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-u9D3GbLT.js";import"./preload-helper-Cs2ER-7-.js";import"./PdfViewer-C-JRrKkC.js";import"./index-DmRKQ5gu.js";import"./BasePdfViewer-BBxBvSeD.js";import"./BasePdfViewer.module.css-DThs3wpa.js";import"./PdfViewerAnnotationLayer-LaZs_E4X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B715HySO.js";import"./PdfViewerOutlineSidebar-BUFLaqxd.js";import"./PdfViewerSidebarHeader-DWreXOrI.js";import"./useBaseUiId-ByIiMOew.js";import"./useControlled-Dp3YziLR.js";import"./CompositeRoot-W7ZddDTW.js";import"./CompositeItem-BKjFMUh6.js";import"./ToolbarRootContext-CEpyHN5v.js";import"./composite-u6E42LXc.js";import"./svgIconContainer-B6KxKnjw.js";import"./PdfViewerSearchBar-QYprP3oa.js";import"./chevron-up-CIbezp3s.js";import"./chevron-down-BWXHwUsU.js";import"./cross-YX9QXa6Y.js";import"./PdfViewerSidebar-L0llFaCU.js";import"./index-vLNFJNsx.js";import"./index-DQTlocgX.js";import"./index-DJSWcjtY.js";import"./PdfViewerToolbar-BydFPVkV.js";import"./Button-CX2uzNBF.js";import"./chevron-right-BVlJhbmW.js";import"./Input-Dk6BTnFd.js";import"./search-YJzut-LN.js";import"./spin-CiRyl2OW.js";import"./error-BnTb_JyD.js";import"./withOsdkMetrics-Csrf-Npu.js";import"./makeExternalStore-MWPsIyHx.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
