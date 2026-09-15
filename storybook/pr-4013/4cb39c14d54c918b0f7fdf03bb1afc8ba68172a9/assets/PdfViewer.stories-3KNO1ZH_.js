import{j as r,M as s}from"./iframe-dxrUGHlK.js";import{P as p}from"./pdf-viewer-D0d31-CT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BPPYzab4.js";import"./preload-helper-B9qIDFMl.js";import"./PdfViewer-BZi52D3B.js";import"./index-DPQcu4-a.js";import"./BasePdfViewer-CdXzx5sk.js";import"./BasePdfViewer.module.css-CKngqjT1.js";import"./PdfViewerAnnotationLayer-BsyGd9vf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BB9bMfQN.js";import"./PdfViewerOutlineSidebar-Dh4bNyiZ.js";import"./PdfViewerSidebarHeader-NGiY2S2b.js";import"./useBaseUiId-BsvKb-r1.js";import"./useControlled-D5pah6Ut.js";import"./CompositeRoot-DtrxZkVS.js";import"./CompositeItem-BLdzDdC9.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./composite-Dw-SYZmG.js";import"./svgIconContainer-D-3aEKZU.js";import"./PdfViewerSearchBar-mMlOi6eI.js";import"./chevron-up-BdMarpuW.js";import"./chevron-down-Ci5voemn.js";import"./cross-Dj8MH7yM.js";import"./PdfViewerSidebar-CPQRcbZC.js";import"./index-BZzuVaIM.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./PdfViewerToolbar-BbjQt_3P.js";import"./Button-v2rih8HU.js";import"./chevron-right-BF7wUEUo.js";import"./Input-C2FrKznv.js";import"./search-CVhjqWpu.js";import"./spin-CsbEpitK.js";import"./error-DiHcLZ6r.js";import"./withOsdkMetrics-C48cTPuA.js";import"./makeExternalStore-DsTmi0Ui.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
