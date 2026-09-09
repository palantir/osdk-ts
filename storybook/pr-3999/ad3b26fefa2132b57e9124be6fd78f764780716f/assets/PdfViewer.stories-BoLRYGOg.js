import{j as r,M as s}from"./iframe-DsCzZXCk.js";import{P as p}from"./pdf-viewer-C3rpeSA6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClhgNufJ.js";import"./preload-helper-CXwWoCmC.js";import"./PdfViewer-Dvztgb7A.js";import"./index-Ci1-NLXL.js";import"./BasePdfViewer-C0psP6te.js";import"./BasePdfViewer.module.css-Be8195QQ.js";import"./PdfViewerAnnotationLayer-DLXuvgmG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BN25hC4A.js";import"./PdfViewerOutlineSidebar-CPVjCO9t.js";import"./PdfViewerSidebarHeader-Dk0L1rSZ.js";import"./useBaseUiId-3kQUveob.js";import"./useControlled-DUHKt09G.js";import"./CompositeRoot-CS8RFkeE.js";import"./CompositeItem-D3-VN1Pw.js";import"./ToolbarRootContext-CrYLTP3H.js";import"./composite-DHYMAbDg.js";import"./svgIconContainer-D37GNyYn.js";import"./PdfViewerSearchBar-wzQ9bB18.js";import"./chevron-up-Du03sFRY.js";import"./chevron-down-Bpd_KI7a.js";import"./cross-nUvl9WFP.js";import"./PdfViewerSidebar-QY352rBW.js";import"./index-ClGHa1nk.js";import"./index-CdAzhd0H.js";import"./index-z1UHak1d.js";import"./PdfViewerToolbar-BmN52b6P.js";import"./Button-BddFDihs.js";import"./chevron-right-B1ipXo-V.js";import"./Input-B3Vnu-1d.js";import"./search-Bol42X7R.js";import"./spin-pNPlWvAj.js";import"./error-BfS-h5nJ.js";import"./withOsdkMetrics-rktOS5NE.js";import"./makeExternalStore-BJqmp2PE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
