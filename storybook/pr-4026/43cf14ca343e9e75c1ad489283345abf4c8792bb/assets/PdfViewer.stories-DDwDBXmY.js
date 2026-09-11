import{j as r,M as s}from"./iframe-BOlAF3V1.js";import{P as p}from"./pdf-viewer-CzKDzTuW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DyCzdA9G.js";import"./preload-helper-B8-M1e1R.js";import"./PdfViewer-CV8YxfgZ.js";import"./index-DHGHpbde.js";import"./BasePdfViewer-ujjL7So8.js";import"./BasePdfViewer.module.css-01I21Aod.js";import"./PdfViewerAnnotationLayer-CNGsB36F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEFNEQGl.js";import"./PdfViewerOutlineSidebar-Dr6hDPBR.js";import"./PdfViewerSidebarHeader-CbRqVrQX.js";import"./useBaseUiId-DKEtUdQs.js";import"./useControlled-XB4dOcfe.js";import"./CompositeRoot-BwIZsC1Y.js";import"./CompositeItem-DUqi3n0Z.js";import"./ToolbarRootContext-CrA83z4-.js";import"./composite-uQCx7Ami.js";import"./svgIconContainer-BI7oIE-s.js";import"./PdfViewerSearchBar-DbTaaXsf.js";import"./chevron-up-CZxdzJsY.js";import"./chevron-down-1Vj4zZ-s.js";import"./cross-4uTXI33L.js";import"./PdfViewerSidebar-ClkNV3Zt.js";import"./index-8QnQJeqI.js";import"./index-D0SLMQsQ.js";import"./index-Ckc7ROJV.js";import"./PdfViewerToolbar-C6Y8dYKV.js";import"./Button-C_Kq6X6A.js";import"./chevron-right-Dg1r6o8M.js";import"./Input-DPiHLqc9.js";import"./search-dtRuG4ZW.js";import"./spin-gKLyPwTn.js";import"./error-mE4pvPha.js";import"./withOsdkMetrics-BCE-Yi3C.js";import"./makeExternalStore-WrNjm8L9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
