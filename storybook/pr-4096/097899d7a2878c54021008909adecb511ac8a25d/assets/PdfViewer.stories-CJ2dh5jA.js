import{j as r,M as s}from"./iframe-BDbu9q2A.js";import{P as p}from"./pdf-viewer-B2gKeWIk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-xUtKp7So.js";import"./preload-helper-D6UvTfT_.js";import"./PdfViewer-DSLUtaM8.js";import"./index-DEdyH3XD.js";import"./BasePdfViewer-BH06hB-y.js";import"./BasePdfViewer.module.css-BKuwnxjo.js";import"./PdfViewerAnnotationLayer-B9fAR95w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qSx5bU5J.js";import"./PdfViewerOutlineSidebar-CYVYiXHZ.js";import"./PdfViewerSidebarHeader-DepBrFp-.js";import"./useBaseUiId-CtmE4PNK.js";import"./useControlled-BgF6R6qa.js";import"./CompositeRoot-CD7yt0Kv.js";import"./CompositeItem-C6O1ODqo.js";import"./ToolbarRootContext-BVuL7AT2.js";import"./composite-qafLk_f6.js";import"./svgIconContainer-BgjPZfOH.js";import"./PdfViewerSearchBar-CCqDDgOW.js";import"./chevron-up-BED3RZzI.js";import"./chevron-down-CbFUQfJ_.js";import"./cross-Bo4wpdXT.js";import"./PdfViewerSidebar-Bw-XxYqA.js";import"./index-BlDxMK-s.js";import"./index-pcLxGNcq.js";import"./index-D3cIaVh4.js";import"./PdfViewerToolbar-BRuCPRy_.js";import"./Button-_DMppLDt.js";import"./chevron-right-DpcRnrIn.js";import"./Input-D0XLj4En.js";import"./search-0NZlkEeX.js";import"./spin-ztbn6an1.js";import"./error-fH6ihPoO.js";import"./withOsdkMetrics-B5onp4Cc.js";import"./makeExternalStore-BESDrPLk.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
