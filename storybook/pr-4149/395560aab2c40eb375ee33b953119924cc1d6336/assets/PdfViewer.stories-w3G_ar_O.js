import{j as r,M as s}from"./iframe-BOTLlUE6.js";import{P as p}from"./pdf-viewer-B-BxnSM_.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DSFXnd-T.js";import"./preload-helper-DEIZygRs.js";import"./PdfViewer-BVf20z-F.js";import"./index-Cs-O_idR.js";import"./BasePdfViewer-F4FM_JnG.js";import"./BasePdfViewer.module.css-CEkpcN6I.js";import"./PdfViewerAnnotationLayer-BKHRecB7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1HSItN2.js";import"./PdfViewerOutlineSidebar-CpcP_0s8.js";import"./PdfViewerSidebarHeader-DocGuDe1.js";import"./useBaseUiId-Dd9KpxnA.js";import"./useControlled-2lHvWmOj.js";import"./CompositeRoot-B36qmgKd.js";import"./CompositeItem-CDnQJecr.js";import"./ToolbarRootContext-DuzuLF_7.js";import"./composite-DGujq1fd.js";import"./svgIconContainer-Prc3KqJd.js";import"./PdfViewerSearchBar-C_S605jt.js";import"./chevron-up-BL0wMHux.js";import"./chevron-down-QX4KjP4d.js";import"./cross-Cy8vOx7n.js";import"./PdfViewerSidebar-ClnXqsgw.js";import"./index-CI0V04Qg.js";import"./index-CWHl0m7K.js";import"./index-CcyNoJe8.js";import"./PdfViewerToolbar-DUlJflK-.js";import"./Button-Dvgi56Dm.js";import"./chevron-right-C3Y-JQBP.js";import"./Input-D_iusRO5.js";import"./search-DlkeJy6k.js";import"./spin-CW5P69p6.js";import"./error-DjHdCw0S.js";import"./withOsdkMetrics-VFTM94rP.js";import"./makeExternalStore-5sXqlo0x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
