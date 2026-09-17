import{j as r,M as s}from"./iframe-CMm4N1y0.js";import{P as p}from"./pdf-viewer-C1sxHtDY.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-p3YRGsRY.js";import"./preload-helper-DPdS5gYT.js";import"./PdfViewer-Bk2_Q7KW.js";import"./index-mc6WZDuQ.js";import"./BasePdfViewer-CPTrz6fG.js";import"./BasePdfViewer.module.css-cazuI9Kg.js";import"./PdfViewerAnnotationLayer-41DLCN8z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--mC3Q67L.js";import"./PdfViewerOutlineSidebar-BB0mvKyV.js";import"./PdfViewerSidebarHeader-Bwt76Ajd.js";import"./useBaseUiId-DSNrt-U2.js";import"./useControlled-BNALToTQ.js";import"./CompositeRoot-D5NknQ_q.js";import"./CompositeItem-BwL5uNEu.js";import"./ToolbarRootContext-Dy9xQ5C5.js";import"./composite-BoQ1iNnl.js";import"./svgIconContainer-zPF7HvxF.js";import"./PdfViewerSearchBar-D5_trtYS.js";import"./chevron-up-bl1UBo05.js";import"./chevron-down-BWoDSlPa.js";import"./cross-w0K8LNSt.js";import"./PdfViewerSidebar-f_CHYFOj.js";import"./index-DdpoA6j8.js";import"./index-DgJDHTvw.js";import"./index-ULPzqRga.js";import"./PdfViewerToolbar-EmB7ubcv.js";import"./Button-RJLOnGs4.js";import"./chevron-right-Dc8Sh-7n.js";import"./Input-WLnnNcib.js";import"./search-CiZI6CH-.js";import"./spin-CAfY-FP2.js";import"./error-BNe6vl6a.js";import"./withOsdkMetrics-CWiHOjas.js";import"./makeExternalStore-C-_FdC6k.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
