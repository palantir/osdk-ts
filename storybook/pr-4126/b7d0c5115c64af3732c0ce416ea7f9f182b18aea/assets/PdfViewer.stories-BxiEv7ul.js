import{j as r,M as s}from"./iframe-ByGhu7Rs.js";import{P as p}from"./pdf-viewer-DXJcwGLd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-iXFZObfq.js";import"./preload-helper-CovqUMwC.js";import"./PdfViewer-DATJl6co.js";import"./index-D9CH1iu6.js";import"./BasePdfViewer-Ct1Euxn2.js";import"./BasePdfViewer.module.css-B6uJvl-M.js";import"./PdfViewerAnnotationLayer-C0XTL3OZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cv3snJPZ.js";import"./PdfViewerOutlineSidebar-C2fkbA6H.js";import"./PdfViewerSidebarHeader-B21Ctoio.js";import"./useBaseUiId-BtV3BRGt.js";import"./useControlled-BMq25ryS.js";import"./CompositeRoot-DnFUjQUd.js";import"./CompositeItem-DOTYC0vy.js";import"./ToolbarRootContext--ybsc-5r.js";import"./composite-5pEQHoFG.js";import"./svgIconContainer-BM73F7-1.js";import"./PdfViewerSearchBar-BFrFUBAK.js";import"./chevron-up-CTnvYEiR.js";import"./chevron-down-CVFp5ZF3.js";import"./cross--Vb8zQ9y.js";import"./PdfViewerSidebar-D_AcWwo8.js";import"./index-BhXiEem_.js";import"./index-CSR_OQNU.js";import"./index-Sa0Sgq1C.js";import"./PdfViewerToolbar-BlgBaM1g.js";import"./Button-FdiR0YBj.js";import"./chevron-right-BszbI75O.js";import"./Input-CPzfsq5Q.js";import"./search-CqZJJM3l.js";import"./spin-t4PN0_mV.js";import"./error-BtdAILjI.js";import"./withOsdkMetrics-Y0bjdApQ.js";import"./makeExternalStore-Bi9EmxuC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
