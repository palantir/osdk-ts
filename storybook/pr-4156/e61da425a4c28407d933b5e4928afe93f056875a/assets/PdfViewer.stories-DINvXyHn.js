import{j as r,M as s}from"./iframe-BPW75i9n.js";import{P as p}from"./pdf-viewer-BEoqXMyu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BLgnwADs.js";import"./preload-helper-a9fOHNzQ.js";import"./PdfViewer-Bd6fnCRQ.js";import"./index-CvyyfkHF.js";import"./BasePdfViewer-ZAsQRTE4.js";import"./BasePdfViewer.module.css-DYsWm4R7.js";import"./PdfViewerAnnotationLayer-B4JzBLk9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CO87gsQH.js";import"./PdfViewerOutlineSidebar-DJFFzSfu.js";import"./PdfViewerSidebarHeader-D5tudbQu.js";import"./useBaseUiId-BskbZTX7.js";import"./useControlled-DpyeG9JO.js";import"./CompositeRoot-ByHspQR2.js";import"./CompositeItem-CF5_8-vA.js";import"./ToolbarRootContext-DTxcajEt.js";import"./composite-DOgbsbPD.js";import"./svgIconContainer-Dn5PDua5.js";import"./PdfViewerSearchBar-BYsUV7YZ.js";import"./chevron-up-Bo_GdUzh.js";import"./chevron-down-BSmURfPK.js";import"./cross-pajyLa9G.js";import"./PdfViewerSidebar-CNq1Cyxu.js";import"./index-DXJbf77F.js";import"./index-CZgk2iR4.js";import"./index-CpaVcYAE.js";import"./PdfViewerToolbar-CucGymeY.js";import"./Button-BtJ38CWb.js";import"./chevron-right-B9p1y1JI.js";import"./Input-BS3fT59v.js";import"./search-CE2Gzn1t.js";import"./spin-BcDYN68f.js";import"./error-BRhZWJA2.js";import"./withOsdkMetrics-CPmfqFkZ.js";import"./makeExternalStore-DcLh29q-.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
