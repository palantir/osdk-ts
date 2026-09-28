import{j as r,M as s}from"./iframe-vWRqqmX-.js";import{P as p}from"./pdf-viewer-DDsCe17A.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DpFl4KJB.js";import"./preload-helper-rcEVmD-8.js";import"./PdfViewer-Ba7xIa2T.js";import"./index-CHsUa7_U.js";import"./BasePdfViewer-BP22GS2e.js";import"./BasePdfViewer.module.css-ENs6lbLM.js";import"./PdfViewerAnnotationLayer-CwJ0Wozm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DF-gbzFn.js";import"./PdfViewerOutlineSidebar-m-6sgHn1.js";import"./PdfViewerSidebarHeader-DLo5QLRb.js";import"./useBaseUiId-DqVebmsP.js";import"./useControlled-C4H7EWzs.js";import"./CompositeRoot-N_brukBH.js";import"./CompositeItem-C9y1P_Q2.js";import"./ToolbarRootContext-DpnDbVh3.js";import"./composite-D97u5UoY.js";import"./svgIconContainer-B_rEL3k8.js";import"./PdfViewerSearchBar-B7EngmiD.js";import"./chevron-up-CHiC9sgH.js";import"./chevron-down-CgEqRVri.js";import"./cross-BIItHWLB.js";import"./PdfViewerSidebar-DY15xsIW.js";import"./index-DzR_Swb2.js";import"./index-CoSoVngB.js";import"./index-B1eqFRL5.js";import"./PdfViewerToolbar-Ck0JngeL.js";import"./Button-C6bK3SUF.js";import"./chevron-right-BIegTtRy.js";import"./Input-CDZCyUSS.js";import"./search-C9O70xSJ.js";import"./spin-CELBkeEh.js";import"./error-C1w4OL1G.js";import"./withOsdkMetrics-CfKbJ4sV.js";import"./makeExternalStore-D3utWwkK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
