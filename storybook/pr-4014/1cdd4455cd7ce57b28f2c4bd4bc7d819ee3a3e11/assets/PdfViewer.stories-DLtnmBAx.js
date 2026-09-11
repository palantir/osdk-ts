import{j as r,M as s}from"./iframe-uT48rLM_.js";import{P as p}from"./pdf-viewer-DdpAO6CZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bjzpb2ok.js";import"./preload-helper-yoQuylqU.js";import"./PdfViewer-BTeDsCHA.js";import"./index-CSvzskdp.js";import"./BasePdfViewer-DJBJhDUU.js";import"./BasePdfViewer.module.css-DoCxRb_d.js";import"./PdfViewerAnnotationLayer-P10RSZEp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CB5vJ18j.js";import"./PdfViewerOutlineSidebar-DKMH7AVX.js";import"./PdfViewerSidebarHeader-C0lvTqCp.js";import"./useBaseUiId-9T64UX1j.js";import"./useControlled-DuOdWxX8.js";import"./CompositeRoot-qzyXS7ra.js";import"./CompositeItem-BxuJPWc4.js";import"./ToolbarRootContext-DjYPc8nU.js";import"./composite-DezEwUvA.js";import"./svgIconContainer-p9hJC-XV.js";import"./PdfViewerSearchBar-B4DP4zmc.js";import"./chevron-up-BRo5l_MN.js";import"./chevron-down-DEgdTzUt.js";import"./cross-Bjaf7ehU.js";import"./PdfViewerSidebar-LYrEOIwE.js";import"./index-BSbxg0rW.js";import"./index-5wHFC5Fm.js";import"./index-BEQpnWE2.js";import"./PdfViewerToolbar-BDbwqAf5.js";import"./Button-C6gEU1e5.js";import"./chevron-right-33A4BPBf.js";import"./Input-CQKdcBRU.js";import"./search-DQlds2Tm.js";import"./spin-53XsNcos.js";import"./error-BQiQ2GDM.js";import"./withOsdkMetrics-zU8fQ91E.js";import"./makeExternalStore-DTuIZdzn.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
