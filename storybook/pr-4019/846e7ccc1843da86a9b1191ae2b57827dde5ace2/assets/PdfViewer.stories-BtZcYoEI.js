import{j as r,M as s}from"./iframe-D3RGMnav.js";import{P as p}from"./pdf-viewer-Bf7eOv-s.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwoBF1LF.js";import"./preload-helper-BklmKIr_.js";import"./PdfViewer-Cp2YlsGl.js";import"./index-nSo8ObpB.js";import"./BasePdfViewer-Dr8oVXta.js";import"./BasePdfViewer.module.css-COmFybzM.js";import"./PdfViewerAnnotationLayer-zwEUYNwX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E0xCmu-U.js";import"./PdfViewerOutlineSidebar-BjjYeLuq.js";import"./PdfViewerSidebarHeader-DgYzs3UJ.js";import"./useBaseUiId-BhJo7SoD.js";import"./useControlled-TK_e7a_Y.js";import"./CompositeRoot-BTjrXehH.js";import"./CompositeItem-Bs8xPD2u.js";import"./ToolbarRootContext-DVajx3A6.js";import"./composite-DtZsoZnS.js";import"./svgIconContainer-nHtSwbNR.js";import"./PdfViewerSearchBar-J2_h0SwC.js";import"./chevron-up-ghPT0Arp.js";import"./chevron-down-Cq6RCzUz.js";import"./cross-DJMZ2_VJ.js";import"./PdfViewerSidebar-5U7lKVXw.js";import"./index-DDdvHcPj.js";import"./index-B1m7fBwG.js";import"./index-BCGsGoWh.js";import"./PdfViewerToolbar-1qAF7MuN.js";import"./Button-DybLmK6C.js";import"./chevron-right-Cg8e44Nl.js";import"./Input-BD3DYMGR.js";import"./search-DhStDycO.js";import"./spin-CTYrUcVi.js";import"./error-BtBmESuY.js";import"./withOsdkMetrics-q9Ci7M-s.js";import"./makeExternalStore-DkQFuTyA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
