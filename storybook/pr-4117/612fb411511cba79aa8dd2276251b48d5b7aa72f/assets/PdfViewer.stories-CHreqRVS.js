import{j as r,M as s}from"./iframe-BarfOKYJ.js";import{P as p}from"./pdf-viewer-sotHscNF.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DJDnHgtQ.js";import"./preload-helper-DhgTfoUj.js";import"./PdfViewer-ClsiDl3C.js";import"./index-DdXQxkq9.js";import"./BasePdfViewer-BnLqVrpl.js";import"./BasePdfViewer.module.css-D8cnO4nK.js";import"./PdfViewerAnnotationLayer-Xtqo0bCI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ck47tpz7.js";import"./PdfViewerOutlineSidebar-CqfpJ8P_.js";import"./PdfViewerSidebarHeader-MHzxKHHV.js";import"./useBaseUiId-DPa9F6U_.js";import"./useControlled-Bj7AFHc7.js";import"./CompositeRoot-Dw00YbZP.js";import"./CompositeItem-DtdptPgn.js";import"./ToolbarRootContext-BuAvit0a.js";import"./composite-C6iH7oZR.js";import"./svgIconContainer-CZ2JLaJP.js";import"./PdfViewerSearchBar-Czc-m27r.js";import"./chevron-up-H5Hyk0Go.js";import"./chevron-down-CDrseuzZ.js";import"./cross-awiM4qkb.js";import"./PdfViewerSidebar-D8l1Hbar.js";import"./index-BYqnSnwI.js";import"./index-CylLJLDi.js";import"./index-BSz4BzcY.js";import"./PdfViewerToolbar-CHzGhixf.js";import"./Button-glJjOdf_.js";import"./chevron-right-CPPQM07z.js";import"./Input-BuDULjbT.js";import"./search-C8DSNwE8.js";import"./spin-EHLECWMU.js";import"./error-D3ss51fq.js";import"./withOsdkMetrics-B8r59qzx.js";import"./makeExternalStore-Ddoj9Y3j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
