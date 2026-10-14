import{j as r,M as s}from"./iframe-DIE5EIel.js";import{P as p}from"./pdf-viewer-D8YWPl6u.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CiMHrKBo.js";import"./preload-helper-CcEYMKBV.js";import"./PdfViewer-D-Fr5XQM.js";import"./index-gAWb2dR9.js";import"./BasePdfViewer-CF0Qi9EI.js";import"./BasePdfViewer.module.css-u23iHNik.js";import"./PdfViewerAnnotationLayer-DHezf3mE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyIzpI6O.js";import"./PdfViewerOutlineSidebar-DSDj7Zev.js";import"./PdfViewerSidebarHeader-CYBOaMg-.js";import"./useBaseUiId-DU3L5eHE.js";import"./useControlled-ddG6ulVP.js";import"./CompositeRoot-CfmBhVZw.js";import"./CompositeItem-Crvs63Hb.js";import"./ToolbarRootContext-DFNBF5NL.js";import"./composite-DJfb-Teu.js";import"./svgIconContainer-Rj0rqZar.js";import"./PdfViewerSearchBar-CAKjc_D3.js";import"./chevron-up-OaxD1A4Y.js";import"./chevron-down-CUqhLbkD.js";import"./cross-siN9VgW1.js";import"./PdfViewerSidebar-gltL9Uct.js";import"./index-CPNhCNUx.js";import"./index-C3GNYR7s.js";import"./index-DMxLJ88X.js";import"./PdfViewerToolbar-Ck8WfEDG.js";import"./Button-DGriahwu.js";import"./chevron-right-DnDFPkBb.js";import"./Input-Co7zI1L-.js";import"./search-UnQR1AsU.js";import"./spin-BGkyB0nC.js";import"./error-aWHvmhUp.js";import"./withOsdkMetrics-BWchHor7.js";import"./makeExternalStore-DI81UbPt.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
