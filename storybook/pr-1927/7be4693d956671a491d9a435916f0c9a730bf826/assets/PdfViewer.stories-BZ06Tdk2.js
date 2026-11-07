import{j as r,M as s}from"./iframe-DaWek49r.js";import{P as p}from"./pdf-viewer-B8LHazql.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject---g_FcnZ.js";import"./preload-helper-CpWLgODR.js";import"./PdfViewer-DMA27G5G.js";import"./index-7xB0j-h3.js";import"./BasePdfViewer-CBMGlWvc.js";import"./BasePdfViewer.module.css-XtHbImct.js";import"./PdfViewerAnnotationLayer-D128CctS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6QG5PPqr.js";import"./PdfViewerOutlineSidebar-ZGQYMApj.js";import"./PdfViewerSidebarHeader-D13QURmW.js";import"./useBaseUiId-BS0koSYJ.js";import"./useControlled-CPSRk279.js";import"./CompositeRoot-awMPYLK_.js";import"./CompositeItem-C0lAIjsd.js";import"./ToolbarRootContext-B9vHR48n.js";import"./composite-3FCOWJk0.js";import"./svgIconContainer-BLvyKKH5.js";import"./PdfViewerSearchBar-BwZRblcX.js";import"./chevron-up-MZa8miin.js";import"./chevron-down-Cos6kkQA.js";import"./cross-BTg86JZI.js";import"./PdfViewerSidebar-BLOck0l3.js";import"./index-DdMC5lnj.js";import"./index-CmmmgmWL.js";import"./index-B6v8umRH.js";import"./PdfViewerToolbar-D6yjBPGb.js";import"./Button-QRlJPal1.js";import"./chevron-right-CAjiUyzn.js";import"./Input-RkKX3V5Z.js";import"./search-DAzvWU8V.js";import"./spin-DjU-tupp.js";import"./error-AanNsvpp.js";import"./withOsdkMetrics-DPmknckC.js";import"./makeExternalStore-Dui8kxii.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
