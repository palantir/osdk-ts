import{j as r,M as s}from"./iframe-DMLeRer3.js";import{P as p}from"./pdf-viewer-UPFSVQtC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-8BUmM43O.js";import"./preload-helper-CgrwvKPK.js";import"./PdfViewer-CV5Le-6g.js";import"./index-uCsQBnfO.js";import"./BasePdfViewer-lM2-B1Oq.js";import"./BasePdfViewer.module.css-oEkIZ4Lo.js";import"./PdfViewerAnnotationLayer-NrGnSNB6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCPrnDbw.js";import"./PdfViewerOutlineSidebar-BfLmFbqX.js";import"./PdfViewerSidebarHeader-AtZjeEOX.js";import"./useBaseUiId-C4s8ZVxT.js";import"./useControlled-DG760Vv3.js";import"./CompositeRoot-D2UIQAv4.js";import"./CompositeItem-BKFtY3yw.js";import"./ToolbarRootContext-DJJ5b_fP.js";import"./composite-Cge9zcMx.js";import"./svgIconContainer-COt-rC22.js";import"./PdfViewerSearchBar-BvmWqxWM.js";import"./chevron-up-BFhbhHf5.js";import"./chevron-down-Cn9rULd1.js";import"./cross-BxDqlCZv.js";import"./PdfViewerSidebar-DDV9Wv5d.js";import"./index-C9zE8P46.js";import"./index-XhF3-Ii5.js";import"./index-vxfuwNf-.js";import"./PdfViewerToolbar-QuKUX5Xt.js";import"./Button-DPPusxtK.js";import"./chevron-right-C8-m40Ze.js";import"./Input-LP4KcDLo.js";import"./search-C183X4Rd.js";import"./spin-BQROtAlx.js";import"./error-CtIw9Q7f.js";import"./withOsdkMetrics-DV6FYw-u.js";import"./makeExternalStore-DV-LpRK9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
