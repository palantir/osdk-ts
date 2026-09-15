import{j as r,M as s}from"./iframe-oQpn4zur.js";import{P as p}from"./pdf-viewer-BUIqDPGN.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CuroPry8.js";import"./preload-helper-Cmjd7BI4.js";import"./PdfViewer-D1hLGy4d.js";import"./index-D2rifVxK.js";import"./BasePdfViewer-DEszZZ_X.js";import"./BasePdfViewer.module.css-nhM1T9PL.js";import"./PdfViewerAnnotationLayer-DCO2R-Q3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-S4m7MLik.js";import"./PdfViewerOutlineSidebar-BekNqnBu.js";import"./PdfViewerSidebarHeader-Ci_nCqve.js";import"./useBaseUiId-pVATQNHL.js";import"./useControlled-DKwwdhXV.js";import"./CompositeRoot-D5KFrtct.js";import"./CompositeItem-M0o16Fhw.js";import"./ToolbarRootContext-C0a0ALA7.js";import"./composite-C_bfQ-PM.js";import"./svgIconContainer-CsxtAqM7.js";import"./PdfViewerSearchBar-CWbs7l1i.js";import"./chevron-up-BFObjuh_.js";import"./chevron-down-DhcH1mZx.js";import"./cross-xvCB5p22.js";import"./PdfViewerSidebar-CT1ot6Kz.js";import"./index-CP1r_S59.js";import"./index-BgH4UIQM.js";import"./index--_6_irpc.js";import"./PdfViewerToolbar-Ct6Wak7r.js";import"./Button-DcQk0Vz0.js";import"./chevron-right-CLbrwgmd.js";import"./Input-BTa_bWxE.js";import"./search-CwzMMbdj.js";import"./spin-C3Ogg_i0.js";import"./error-G32g_aWE.js";import"./withOsdkMetrics-C1JB2Ffo.js";import"./makeExternalStore-8N_JBzmB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
