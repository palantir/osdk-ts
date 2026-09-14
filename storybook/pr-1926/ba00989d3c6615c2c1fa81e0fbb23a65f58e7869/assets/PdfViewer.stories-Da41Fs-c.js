import{j as r,M as s}from"./iframe-B0U1IQX4.js";import{P as p}from"./pdf-viewer-Bx4OPDxe.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D0apNYpc.js";import"./preload-helper-DiPVcWmm.js";import"./PdfViewer-C68GtlPG.js";import"./index-D1KZRywE.js";import"./BasePdfViewer-Cg8m9uHL.js";import"./BasePdfViewer.module.css-BlkcQe4z.js";import"./PdfViewerAnnotationLayer-CuU5DXDE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrZ2eJgS.js";import"./PdfViewerOutlineSidebar-C_2_tV7F.js";import"./PdfViewerSidebarHeader-V0MXLsw-.js";import"./useBaseUiId-BYy3PLTZ.js";import"./useControlled-CRRNdgyj.js";import"./CompositeRoot-DsU-M2Ag.js";import"./CompositeItem-DHef4_L4.js";import"./ToolbarRootContext-CcCkr_bi.js";import"./composite-CsiVeWul.js";import"./svgIconContainer-C5UOcoAR.js";import"./PdfViewerSearchBar-BK8eDVSs.js";import"./chevron-up-Bqa7IRCK.js";import"./chevron-down-DeePtBa4.js";import"./cross-DuFcQq4i.js";import"./PdfViewerSidebar-BjblbI0j.js";import"./index-DF7Hoa49.js";import"./index-D9gCwCdH.js";import"./index-BCAnJ-ng.js";import"./PdfViewerToolbar-55s7dii3.js";import"./Button-xPZvVWHf.js";import"./chevron-right-BXUuv9ah.js";import"./Input-DxzIDyUo.js";import"./search-TA6KQkXz.js";import"./spin-DUKqeDJ1.js";import"./error-jOboOslV.js";import"./withOsdkMetrics-CSt3jXAU.js";import"./makeExternalStore-f14_qRGB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
