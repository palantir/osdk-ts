import{j as r,M as s}from"./iframe-rd5WAA9r.js";import{P as p}from"./pdf-viewer-CvSbeE8M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bqnxr0iN.js";import"./preload-helper-lrQOG99y.js";import"./PdfViewer-DcPd-z32.js";import"./index-gTgVe7bx.js";import"./BasePdfViewer-CqVpz3dP.js";import"./BasePdfViewer.module.css-DXVtB3Ax.js";import"./PdfViewerAnnotationLayer-bnjrJomE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJn9vnYC.js";import"./PdfViewerOutlineSidebar-CMe1dd07.js";import"./PdfViewerSidebarHeader-pQ_Fy9jI.js";import"./useBaseUiId-CEPsQLHg.js";import"./useControlled-C60801w-.js";import"./CompositeRoot-CnmGaqva.js";import"./CompositeItem-LJvlu5vM.js";import"./ToolbarRootContext-SIV8jQMI.js";import"./composite-DkMWUUkG.js";import"./svgIconContainer-CP_qsPw-.js";import"./PdfViewerSearchBar-Cpxunqx_.js";import"./chevron-up-C4m3pGn6.js";import"./chevron-down-Bd0HHDZf.js";import"./cross-D4_Lw_xT.js";import"./PdfViewerSidebar-C3ivGOPm.js";import"./index-DdtePcPk.js";import"./index-DSVS7Qxc.js";import"./index-DUdz8bct.js";import"./PdfViewerToolbar-D2peTVm8.js";import"./Button-C07SmwTz.js";import"./chevron-right-C_B9JDof.js";import"./Input-DFVDug_7.js";import"./search-C5LSfE4t.js";import"./spin-DalGuzkD.js";import"./error-YfyqzF-q.js";import"./withOsdkMetrics-DzBl_MBp.js";import"./makeExternalStore-DLTAhcmE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
