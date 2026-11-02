import{j as r,M as s}from"./iframe-C-gRhmL7.js";import{P as p}from"./pdf-viewer-9NDyn4fK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyIKOHsJ.js";import"./preload-helper-BRnBMuxX.js";import"./PdfViewer-CAaMRfAs.js";import"./index-BomyFAOQ.js";import"./BasePdfViewer-BydY70uX.js";import"./BasePdfViewer.module.css-DAT0f5yx.js";import"./PdfViewerAnnotationLayer-cplmUXNr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3KBD8U3.js";import"./PdfViewerOutlineSidebar-DxqgBSuh.js";import"./PdfViewerSidebarHeader-CR21nHWc.js";import"./useBaseUiId-Dr0jpy2a.js";import"./useControlled-BYigcnNh.js";import"./CompositeRoot-V2nABwQW.js";import"./CompositeItem-Dc0cRnHM.js";import"./ToolbarRootContext-tG5LuvDM.js";import"./composite-abNLhxgk.js";import"./svgIconContainer-D3HKLOfp.js";import"./PdfViewerSearchBar-BthhPqDV.js";import"./chevron-up-DDwoi2Mj.js";import"./chevron-down-Cj7UC7sg.js";import"./cross-BgbLU6cP.js";import"./PdfViewerSidebar-nZSU7H-R.js";import"./index-CYurDmtO.js";import"./index-Cc3D0dS0.js";import"./index-CMgDy_5O.js";import"./PdfViewerToolbar-KM-I_dfW.js";import"./Button-CE8V4pbx.js";import"./chevron-right-CHQMff9l.js";import"./Input-D1XkMJrA.js";import"./search-BQdh6WXo.js";import"./spin-CfoNZAcw.js";import"./error-AkMr3-YU.js";import"./withOsdkMetrics-Dez2mISn.js";import"./makeExternalStore-s0ePZNdW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
