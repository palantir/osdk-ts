import{j as r,M as s}from"./iframe-C_0-Ny_N.js";import{P as p}from"./pdf-viewer-CVXviUt2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CzF__XVY.js";import"./preload-helper-Cs_UzwR6.js";import"./PdfViewer-D-pwBfF0.js";import"./index-BCapEaKB.js";import"./BasePdfViewer-CcGpANBS.js";import"./BasePdfViewer.module.css-lqEp46Bo.js";import"./PdfViewerAnnotationLayer-DPiyftmR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-j0-8WCJm.js";import"./PdfViewerOutlineSidebar-BH3WsmxP.js";import"./PdfViewerSidebarHeader-DoTOA7nA.js";import"./useBaseUiId-B7Keq3x8.js";import"./useControlled-DmQkJsyf.js";import"./CompositeRoot-CF8DINrA.js";import"./CompositeItem-BeOy_iQJ.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./composite-BKxtxXCT.js";import"./svgIconContainer-DAGFJod5.js";import"./PdfViewerSearchBar-CsYQqT7B.js";import"./chevron-up-Bfn8ktxO.js";import"./chevron-down-C0ibfMMv.js";import"./cross-Dhbxwhb2.js";import"./PdfViewerSidebar-DDwPmM0X.js";import"./index-CrSkVWMy.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./PdfViewerToolbar-KlgmohCR.js";import"./Button-g8Y5a3bQ.js";import"./chevron-right-r_7hROM6.js";import"./Input-BF9DmCeg.js";import"./search-BKcV1gVw.js";import"./spin-D8-HP0h6.js";import"./error-DAsTyxDt.js";import"./withOsdkMetrics-rrME1YBQ.js";import"./makeExternalStore-CXzzR7o8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
