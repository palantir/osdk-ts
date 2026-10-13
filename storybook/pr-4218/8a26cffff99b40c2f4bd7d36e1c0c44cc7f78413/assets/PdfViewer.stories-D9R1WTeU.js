import{j as r,M as s}from"./iframe-qlavKhcC.js";import{P as p}from"./pdf-viewer-CxV8MmJr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPMKGvBF.js";import"./preload-helper-C1Px9yiL.js";import"./PdfViewer-DVQKFD8n.js";import"./index-B67iUNS7.js";import"./BasePdfViewer-BPo81BrS.js";import"./BasePdfViewer.module.css-B9d2_O8c.js";import"./PdfViewerAnnotationLayer-CBDL4JBB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qCTPXjW2.js";import"./PdfViewerOutlineSidebar-DDU3NkDS.js";import"./PdfViewerSidebarHeader-CBZsWubG.js";import"./useBaseUiId-D99Is1tN.js";import"./useControlled-DfaRfuwf.js";import"./CompositeRoot-BYTqPwEC.js";import"./CompositeItem-DQfjGBA0.js";import"./ToolbarRootContext-CciloOLN.js";import"./composite-BRoxV9_z.js";import"./svgIconContainer-B4I2H2FD.js";import"./PdfViewerSearchBar-BRBt9c3e.js";import"./chevron-up-sxwRQlTI.js";import"./chevron-down-CeWg8uEU.js";import"./cross-_jhIc_Zd.js";import"./PdfViewerSidebar-Dl8IIT0U.js";import"./index-8MYCUco8.js";import"./index-Br0Vgd-J.js";import"./index-ZYLeOkr2.js";import"./PdfViewerToolbar-CJq07Wmx.js";import"./Button-r2aYddAL.js";import"./chevron-right-BGDX78vO.js";import"./Input-CtY9R5P4.js";import"./search-UuNwtUH-.js";import"./spin-BDQl5Vxu.js";import"./error-DGVK5Ulu.js";import"./withOsdkMetrics-EXt5SwEJ.js";import"./makeExternalStore-DOTLplCc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
