import{j as r,M as s}from"./iframe-5lzZwYPj.js";import{P as p}from"./pdf-viewer-D7MVuZcW.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BeKhxvkE.js";import"./preload-helper-WKlZEuzV.js";import"./PdfViewer-Y4mlwZsH.js";import"./index-DmpQA2dp.js";import"./BasePdfViewer-B0beJ41b.js";import"./BasePdfViewer.module.css-DoEtOZFl.js";import"./PdfViewerAnnotationLayer-s5Lbu9fq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cm58ahGV.js";import"./PdfViewerOutlineSidebar-1Y6siF3Z.js";import"./PdfViewerSidebarHeader-BdwPWdiT.js";import"./useBaseUiId-DfIUF55c.js";import"./useControlled-DHTN_Qw2.js";import"./CompositeRoot-BOASmM8_.js";import"./CompositeItem-DJOIGuOW.js";import"./ToolbarRootContext-BU433tXf.js";import"./composite-PZIUxoU6.js";import"./svgIconContainer-gxAyVnRe.js";import"./PdfViewerSearchBar-s6wSiYXz.js";import"./chevron-up-DWfPBGf0.js";import"./chevron-down-Djuiqxwk.js";import"./cross-Be5djBeG.js";import"./PdfViewerSidebar-Dtq2QNv5.js";import"./index-Dle2g3lV.js";import"./index-D7xhtA4Z.js";import"./index-CSotxX4i.js";import"./PdfViewerToolbar-BBSmra5v.js";import"./Button-bfW4GHY6.js";import"./chevron-right-LzilNgJA.js";import"./Input-DcJ3J1h2.js";import"./search-XZcqoY-Q.js";import"./spin-CTOSBvDx.js";import"./error-BAoHpMsF.js";import"./withOsdkMetrics-DzXqb59o.js";import"./makeExternalStore-DzXze8D7.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
