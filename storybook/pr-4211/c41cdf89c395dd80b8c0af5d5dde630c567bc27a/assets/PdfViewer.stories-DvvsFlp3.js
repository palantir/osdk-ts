import{j as r,M as s}from"./iframe-VyYU4_vz.js";import{P as p}from"./pdf-viewer-Cyr3KDUl.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7bmiyHL.js";import"./preload-helper-BuqLdsok.js";import"./PdfViewer-BDZj__rV.js";import"./index-Ds9RaOEw.js";import"./BasePdfViewer-B-bSTbSC.js";import"./BasePdfViewer.module.css-otvtnaWv.js";import"./PdfViewerAnnotationLayer-D2dQYGs-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sWMxQ1wk.js";import"./PdfViewerOutlineSidebar-BoXOX0OP.js";import"./PdfViewerSidebarHeader-Cz7aTpTK.js";import"./useBaseUiId-oAJGM4T3.js";import"./useControlled-DF-V1JcA.js";import"./CompositeRoot-Bsj6Vv3e.js";import"./CompositeItem-BpcnF50U.js";import"./ToolbarRootContext-DNatahNZ.js";import"./composite-D-GMalcD.js";import"./svgIconContainer-RHuD6B4X.js";import"./PdfViewerSearchBar-BT9Z2dpP.js";import"./chevron-up-x31k7xut.js";import"./chevron-down-C6hF1wmk.js";import"./cross-B8BSPVsW.js";import"./PdfViewerSidebar-D1VxKdps.js";import"./index-D3QHbtaM.js";import"./index-DGfEWUId.js";import"./index-CIaumvnO.js";import"./PdfViewerToolbar-DMaYznPc.js";import"./Button-BO4-XA9w.js";import"./chevron-right-D0MjSRzo.js";import"./Input-Ck1mtXHC.js";import"./search-Cp9T6kDH.js";import"./spin-B8-vckZx.js";import"./error-D4hrAgPV.js";import"./withOsdkMetrics-iTeYpiSH.js";import"./makeExternalStore-fugyGUCm.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
