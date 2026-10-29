import{j as r,M as s}from"./iframe-CrKPlwEU.js";import{P as p}from"./pdf-viewer-Bo-IfxpE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8DM_HyU.js";import"./preload-helper-haeFzdUn.js";import"./PdfViewer-DE28aOLr.js";import"./index-CpV23X_V.js";import"./BasePdfViewer-lkLn3LMo.js";import"./BasePdfViewer.module.css-Uu8anAPa.js";import"./PdfViewerAnnotationLayer-vf9zYjGb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbmrJpre.js";import"./PdfViewerOutlineSidebar-UA7DH1m5.js";import"./PdfViewerSidebarHeader-kNKUxDxl.js";import"./useBaseUiId-3D9LSptD.js";import"./useControlled-BeRVPSrG.js";import"./CompositeRoot-YPZh-IR8.js";import"./CompositeItem-CWEcL4Np.js";import"./ToolbarRootContext-CqOU07W6.js";import"./composite-chiYjW3e.js";import"./svgIconContainer-DeM85DcU.js";import"./PdfViewerSearchBar-BfR8HbFV.js";import"./chevron-up-CP5ro0Y0.js";import"./chevron-down-B-Yd5sHs.js";import"./cross-BOaN4EGV.js";import"./PdfViewerSidebar-B7oGX3eQ.js";import"./index-Dr_M4lxK.js";import"./index-CuiFjKJ6.js";import"./index-Tf0Q6mNY.js";import"./PdfViewerToolbar-tnjCi48v.js";import"./Button-C2XUaQth.js";import"./chevron-right-B1lUVZkR.js";import"./Input-D5pWgixZ.js";import"./search-Djn1cGPu.js";import"./spin-MbU2epzv.js";import"./error-DbcL_3Bp.js";import"./withOsdkMetrics-CM1wTx4W.js";import"./makeExternalStore-Drk2huTh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
