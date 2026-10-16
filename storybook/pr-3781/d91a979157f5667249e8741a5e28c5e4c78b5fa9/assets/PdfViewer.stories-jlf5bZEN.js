import{j as r,M as s}from"./iframe-nHeyQ6G0.js";import{P as p}from"./pdf-viewer-CvWN6X7j.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-RJDsydU4.js";import"./preload-helper-CQHnyaJj.js";import"./PdfViewer-B3o71uyf.js";import"./index-Cepl2Gdo.js";import"./BasePdfViewer-DFf3nF4O.js";import"./BasePdfViewer.module.css-CUxy_z-V.js";import"./PdfViewerAnnotationLayer-aieMHvnm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B9EDjJM-.js";import"./PdfViewerOutlineSidebar-C9KgGrNL.js";import"./PdfViewerSidebarHeader-Cvrt280d.js";import"./useBaseUiId-WP9Qsa8B.js";import"./useControlled-BEwPeN8G.js";import"./CompositeRoot-DVmkgFb8.js";import"./CompositeItem-Y1Nghizw.js";import"./ToolbarRootContext-CrhI_j71.js";import"./composite-BYQJTx_c.js";import"./svgIconContainer-CLZNV5by.js";import"./PdfViewerSearchBar-CjClrbJc.js";import"./chevron-up-CL7eFYbY.js";import"./chevron-down-DWkmyfL1.js";import"./cross-BY7_vW_g.js";import"./PdfViewerSidebar-B6sgfuwd.js";import"./index-BzvZTbEJ.js";import"./index-DDrT1OpE.js";import"./index-BwIe69Hj.js";import"./PdfViewerToolbar-XJXNc7kd.js";import"./Button-OJtt4Wi3.js";import"./chevron-right-BI3pBzJQ.js";import"./Input-LHo6mX7j.js";import"./search-nN6muyjH.js";import"./spin-CwgQSer6.js";import"./error-qX2wkXkr.js";import"./withOsdkMetrics-CYsyTWZq.js";import"./makeExternalStore-COs31IKH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
