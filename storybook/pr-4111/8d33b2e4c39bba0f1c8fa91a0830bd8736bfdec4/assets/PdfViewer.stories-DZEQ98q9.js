import{j as r,M as s}from"./iframe-DKYmESdc.js";import{P as p}from"./pdf-viewer-Cvli411n.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CtQPKe6S.js";import"./preload-helper-D5LE5Idy.js";import"./PdfViewer-EsHRH4B9.js";import"./index-DiIAgi_U.js";import"./BasePdfViewer-uq3CwJ3U.js";import"./BasePdfViewer.module.css-DxfynlAF.js";import"./PdfViewerAnnotationLayer-L0wt40Fu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWxC9JdA.js";import"./PdfViewerOutlineSidebar-tUj6B0d8.js";import"./PdfViewerSidebarHeader-wtgERN1h.js";import"./useBaseUiId-CdKuMMMb.js";import"./useControlled-B4q39qZO.js";import"./CompositeRoot-DH-62Ccm.js";import"./CompositeItem-DhBadV4y.js";import"./ToolbarRootContext-CrwTeoix.js";import"./composite-DHljAWKo.js";import"./svgIconContainer-D8ijfEF1.js";import"./PdfViewerSearchBar-_UBQiXn4.js";import"./chevron-up-BmWTrK3U.js";import"./chevron-down-D1R0n3KO.js";import"./cross-yKYTlWK6.js";import"./PdfViewerSidebar-B9y_jjI4.js";import"./index-CC7Zqv6C.js";import"./index-Dh-P4ImN.js";import"./index-BEPjmphW.js";import"./PdfViewerToolbar-CcAD_5Jr.js";import"./Button-DgkmSaF3.js";import"./chevron-right-BrBBJJsR.js";import"./Input-BxCkIabd.js";import"./search-B7mMrQlf.js";import"./spin-BHEzC4mP.js";import"./error-DPhIreuO.js";import"./withOsdkMetrics-WG4CGMhx.js";import"./makeExternalStore-DpXPZl7r.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
