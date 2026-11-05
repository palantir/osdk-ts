import{j as r,M as s}from"./iframe-Cj5xKvLA.js";import{P as p}from"./pdf-viewer-QdV2B0ge.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CfJGpZqg.js";import"./preload-helper-D1DDVoTO.js";import"./PdfViewer-DIQfVldu.js";import"./index-BBh4Z0mE.js";import"./BasePdfViewer-J_p_XhtO.js";import"./BasePdfViewer.module.css-BP_PMIXO.js";import"./PdfViewerAnnotationLayer-Cnq1X997.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9cAUyfmO.js";import"./PdfViewerOutlineSidebar-BA5yQa1S.js";import"./PdfViewerSidebarHeader-Cr5AEY1j.js";import"./useBaseUiId-n2QF9Zar.js";import"./useControlled-D5krREh9.js";import"./CompositeRoot-CgebjbKf.js";import"./CompositeItem-Cu_iWJpi.js";import"./ToolbarRootContext-DFdsIL16.js";import"./composite-925znV2G.js";import"./svgIconContainer-DZYGEA7n.js";import"./PdfViewerSearchBar-D_fWtNOa.js";import"./chevron-up-BLaMXbBL.js";import"./chevron-down-C93yiICa.js";import"./cross-BPLfBPr7.js";import"./PdfViewerSidebar-CcPotWe8.js";import"./index-oe6lplKX.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./PdfViewerToolbar-CxOzPX7g.js";import"./Button-Be388aOs.js";import"./chevron-right-BCRFOobl.js";import"./Input-Bffgvop9.js";import"./search-BmtS1KCs.js";import"./spin-2Tv5W9pX.js";import"./error-Bd1ykK4E.js";import"./withOsdkMetrics-Dl0Rlheu.js";import"./makeExternalStore-BZjXkoXh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
