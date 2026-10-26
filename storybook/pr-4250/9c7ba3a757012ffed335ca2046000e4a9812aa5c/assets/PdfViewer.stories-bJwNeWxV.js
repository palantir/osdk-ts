import{j as r,M as s}from"./iframe-DPxX1jR-.js";import{P as p}from"./pdf-viewer-BVPTfmtd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DzNT52LU.js";import"./preload-helper-Bl3woUlG.js";import"./PdfViewer-BnjnttAx.js";import"./index-D6OGPiBG.js";import"./BasePdfViewer-lAhyRsEa.js";import"./BasePdfViewer.module.css-Ckrfj7-b.js";import"./PdfViewerAnnotationLayer-MwZbE_kB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1c3xIu8.js";import"./PdfViewerOutlineSidebar-DHbfzi5m.js";import"./PdfViewerSidebarHeader-BNXPd3zC.js";import"./useBaseUiId-BKCJofKJ.js";import"./useControlled-C7cllYbm.js";import"./CompositeRoot-CRhqbX45.js";import"./CompositeItem-rTVyKIYC.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./composite-BcAnYQh9.js";import"./svgIconContainer-DQ5sgBjC.js";import"./PdfViewerSearchBar-CCnEVs1t.js";import"./chevron-up-Cbm2znj3.js";import"./chevron-down-DxRPC7K7.js";import"./cross-BO6SlDqo.js";import"./PdfViewerSidebar-D1P7_hSv.js";import"./index-CmhRQ5VM.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./PdfViewerToolbar-CztiW1bk.js";import"./Button-DQXd7O9l.js";import"./chevron-right-_JoH9_G1.js";import"./Input-DFF83YG7.js";import"./search-B5aBIEi3.js";import"./spin-Cbo7M_Se.js";import"./error-ChO0zkiL.js";import"./withOsdkMetrics-NcqisCon.js";import"./makeExternalStore-64rcfTGa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
