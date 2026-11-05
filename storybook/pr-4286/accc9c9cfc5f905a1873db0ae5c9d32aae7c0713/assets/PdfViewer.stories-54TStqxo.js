import{j as r,M as s}from"./iframe-BH1__lyA.js";import{P as p}from"./pdf-viewer-w2vZ4D0l.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CrFANYXd.js";import"./preload-helper-CcoKPVmD.js";import"./PdfViewer-BW8kx2tW.js";import"./index-COEeIEse.js";import"./BasePdfViewer-BDGrOIPO.js";import"./BasePdfViewer.module.css-pxRzaKCf.js";import"./PdfViewerAnnotationLayer-CYpf4omD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-5tN_OUZv.js";import"./PdfViewerOutlineSidebar-CypNDgZE.js";import"./PdfViewerSidebarHeader-BSiUzgOX.js";import"./useBaseUiId-CocyTtNa.js";import"./useControlled-DOGwcjPy.js";import"./CompositeRoot-Cj5jsPa1.js";import"./CompositeItem-D0FQTfbI.js";import"./ToolbarRootContext-CtjitZ_O.js";import"./composite-C3W7I4o1.js";import"./svgIconContainer-wKAlV-si.js";import"./PdfViewerSearchBar-m5H5Bqg1.js";import"./chevron-up-DsszAedP.js";import"./chevron-down-PjTLl0ZH.js";import"./cross-BG9CU_85.js";import"./PdfViewerSidebar-BTeKCEgN.js";import"./index-CGXKdUZr.js";import"./index-Bb8BpDdy.js";import"./index-C3iKmC6u.js";import"./PdfViewerToolbar-mByFcPJ7.js";import"./Button-DfUwNhvG.js";import"./chevron-right-DHiXpP5S.js";import"./Input-hpLjYkh3.js";import"./search-XcMkpgCF.js";import"./spin-BdLmc7b8.js";import"./error-Dg7pD9uX.js";import"./withOsdkMetrics-B_AmLLOG.js";import"./makeExternalStore-CyAT35zT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
