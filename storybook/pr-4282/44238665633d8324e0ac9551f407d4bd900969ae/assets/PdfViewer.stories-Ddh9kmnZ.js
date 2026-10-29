import{j as r,M as s}from"./iframe-I-ljmhXo.js";import{P as p}from"./pdf-viewer-D5xWyP7h.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-LCxe75OT.js";import"./preload-helper-M9MPg2Uh.js";import"./PdfViewer-CAwe4rEr.js";import"./index-DHgdi-G8.js";import"./BasePdfViewer-_Kl2Qftd.js";import"./BasePdfViewer.module.css-D_xP46ZR.js";import"./PdfViewerAnnotationLayer-Ciu34NlU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwEWhxnz.js";import"./PdfViewerOutlineSidebar-CaWKBA9J.js";import"./PdfViewerSidebarHeader-DjhROo6j.js";import"./useBaseUiId-63vNftzH.js";import"./useControlled-D9MNKFMV.js";import"./CompositeRoot-Bp9PQYk4.js";import"./CompositeItem-BNvc3zNV.js";import"./ToolbarRootContext-Bgx3Oosy.js";import"./composite-BpdBkPyX.js";import"./svgIconContainer-DTF9Rr_D.js";import"./PdfViewerSearchBar-_61y6H1N.js";import"./chevron-up-DlHq8p3O.js";import"./chevron-down-C0rEk766.js";import"./cross--08b2Esz.js";import"./PdfViewerSidebar-uBJTcEX9.js";import"./index-BuOpPpDi.js";import"./index-B-RGy6eE.js";import"./index-wV7cEBRP.js";import"./PdfViewerToolbar-Cavk0tCZ.js";import"./Button-BPW8BJKe.js";import"./chevron-right-CDluNe-I.js";import"./Input-DgDEYrB1.js";import"./search-Xmbyz7ae.js";import"./spin-DxdeOJ0V.js";import"./error-Dy0kv_06.js";import"./withOsdkMetrics-COEHBIiY.js";import"./makeExternalStore-BsQQuJAQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
