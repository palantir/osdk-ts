import{j as r,M as s}from"./iframe-B8cnvOYh.js";import{P as p}from"./pdf-viewer-MR4pMr77.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RX0zyndc.js";import"./preload-helper-LnHSiiGM.js";import"./PdfViewer-Byelbfkc.js";import"./index-B3ykqjKt.js";import"./BasePdfViewer-DDQEqoB9.js";import"./BasePdfViewer.module.css-uAoggtyV.js";import"./PdfViewerAnnotationLayer-DR68vNhi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_QA6Ln_s.js";import"./PdfViewerOutlineSidebar-BA4uGmBI.js";import"./PdfViewerSidebarHeader-CeesXUb6.js";import"./useBaseUiId-BfhiVoPE.js";import"./useControlled-Bd_oVfJe.js";import"./CompositeRoot-BGdctOya.js";import"./CompositeItem-BZ4KTjXl.js";import"./ToolbarRootContext-GOwsslzm.js";import"./composite-CpLfOjCv.js";import"./svgIconContainer-DXuXKKtJ.js";import"./PdfViewerSearchBar-DV62XDxP.js";import"./chevron-up-6l7dLMhq.js";import"./chevron-down-CKQT8552.js";import"./cross-CRSXtga6.js";import"./PdfViewerSidebar-Cgsk6OAP.js";import"./index-BDYln6VT.js";import"./index-Br3P2ZZs.js";import"./index-Btox6Sl3.js";import"./PdfViewerToolbar-S3KlWb2Q.js";import"./Button-BXcD7GGd.js";import"./chevron-right-ha15VmVM.js";import"./Input-DjBLxYPn.js";import"./search-Dy-VZ8UW.js";import"./spin-CNatU4cd.js";import"./error-Bttrd0IT.js";import"./withOsdkMetrics-Dc0ezLCb.js";import"./makeExternalStore-D8SbLzm4.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
