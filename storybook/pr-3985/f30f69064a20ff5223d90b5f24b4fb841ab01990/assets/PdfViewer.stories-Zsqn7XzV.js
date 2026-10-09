import{j as r,M as s}from"./iframe-DgBlFB-Q.js";import{P as p}from"./pdf-viewer-DwHdw8VH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D23TRXNH.js";import"./preload-helper-Ckmup5sP.js";import"./PdfViewer-BocZ2z7j.js";import"./index-BMtmTjMy.js";import"./BasePdfViewer-DsqbTS71.js";import"./BasePdfViewer.module.css-BRL4Dp6t.js";import"./PdfViewerAnnotationLayer-DLhKs6l-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIvcV-MS.js";import"./PdfViewerOutlineSidebar-D7PSH4Bk.js";import"./PdfViewerSidebarHeader-Bx6aYh6L.js";import"./useBaseUiId-64Qj4RH9.js";import"./useControlled-CHdQNKZn.js";import"./CompositeRoot-TcDwVcp-.js";import"./CompositeItem-i9lnYJRv.js";import"./ToolbarRootContext-qAA2IXiR.js";import"./composite-CMuAYTfG.js";import"./svgIconContainer-D-J2n4Ka.js";import"./PdfViewerSearchBar--ymWi_4o.js";import"./chevron-up-BXK6fdgq.js";import"./chevron-down-DTLIZ0ai.js";import"./cross-BnOVBF-i.js";import"./PdfViewerSidebar-BurUeoDp.js";import"./index-D32ZsVcf.js";import"./index-Cyc1Gn9L.js";import"./index-M-GOHxvS.js";import"./PdfViewerToolbar-DyhCii3R.js";import"./Button-Bq1DJjhz.js";import"./chevron-right-EpcEzA0l.js";import"./Input-MozziWfa.js";import"./search-CH52w7PT.js";import"./spin-DELmZ1z8.js";import"./error-BOa7JtYq.js";import"./withOsdkMetrics-CNTDHmXR.js";import"./makeExternalStore-BAWQH3mc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
