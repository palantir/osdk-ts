import{j as r,M as s}from"./iframe-BWfq1Ita.js";import{P as p}from"./pdf-viewer-B91p7fyR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Bpj4nBOa.js";import"./preload-helper-Cez3EkKO.js";import"./PdfViewer-wJI6n0TR.js";import"./index-CsmCBiFc.js";import"./BasePdfViewer-DPtz1f7_.js";import"./BasePdfViewer.module.css-BuSh83vd.js";import"./PdfViewerAnnotationLayer-ZJ1a8Vek.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ctsok9TN.js";import"./PdfViewerOutlineSidebar-DX9-WQpG.js";import"./PdfViewerSidebarHeader-Byt6dJiL.js";import"./useBaseUiId-AQZerCPK.js";import"./useControlled-zsZ0Gi2e.js";import"./CompositeRoot-DR51mb8G.js";import"./CompositeItem-CT28f8sD.js";import"./ToolbarRootContext-BZs-vXaE.js";import"./composite-BxLIdtja.js";import"./svgIconContainer-3Xe0sM70.js";import"./PdfViewerSearchBar-CcR-tttW.js";import"./chevron-up-y3r_3-hO.js";import"./chevron-down-D-1SOefz.js";import"./cross-B2opFBMX.js";import"./PdfViewerSidebar-khKccWHo.js";import"./index-DKbeeSxy.js";import"./index-Ct2QTZpq.js";import"./index-ZI1bO9GZ.js";import"./PdfViewerToolbar-CDtTXffL.js";import"./Button-CDzVT-19.js";import"./chevron-right-B4CpEYKZ.js";import"./Input-DsXOqmoY.js";import"./search-BJDwKHsZ.js";import"./spin-CqHbE9XG.js";import"./error-D4A2zaxG.js";import"./withOsdkMetrics-CVeraRoA.js";import"./makeExternalStore-ByJ1Qj-8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
