import{j as r,M as s}from"./iframe-B441qIYR.js";import{P as p}from"./pdf-viewer-Cbwx8BpX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Br8zPrwJ.js";import"./preload-helper-BQxy24fI.js";import"./PdfViewer-BWZCGyrS.js";import"./index-CqjhHzve.js";import"./BasePdfViewer-Sr9M56jJ.js";import"./BasePdfViewer.module.css-dfDOYoh-.js";import"./PdfViewerAnnotationLayer-DbZ3u9bW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BAOjFWGq.js";import"./PdfViewerOutlineSidebar-D_S0Vafj.js";import"./PdfViewerSidebarHeader--ywa6VOV.js";import"./useBaseUiId-CAzOpzCv.js";import"./useControlled-CWP741nv.js";import"./CompositeRoot-CD6Rf4h6.js";import"./CompositeItem-C8CTVhA-.js";import"./ToolbarRootContext-CYvhcckZ.js";import"./composite-CzbYCu9o.js";import"./svgIconContainer-BSmiGxdz.js";import"./PdfViewerSearchBar-DnAIOK64.js";import"./chevron-up-CPD49t63.js";import"./chevron-down-DNBdHWh5.js";import"./cross-BNrt0aH1.js";import"./PdfViewerSidebar-C9QroUzg.js";import"./index-UGmLGzC-.js";import"./index-TqQ_ZGFy.js";import"./index-B-mP9lvr.js";import"./PdfViewerToolbar-BPuJ9sfu.js";import"./Button-DzRMTkim.js";import"./chevron-right-CY4rbJE-.js";import"./Input-QLiOOLjz.js";import"./search-DUz8ofCX.js";import"./spin-qzDhLvuv.js";import"./error-bNXgEpmP.js";import"./withOsdkMetrics-BIArtGAT.js";import"./makeExternalStore-D5BQihPb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
