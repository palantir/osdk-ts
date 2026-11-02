import{j as r,M as s}from"./iframe-BITxIQXM.js";import{P as p}from"./pdf-viewer-BPIpN8yv.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lJlWL-99.js";import"./preload-helper-CJCZF6BK.js";import"./PdfViewer-D9HWZFk0.js";import"./index-BXV9FcBB.js";import"./BasePdfViewer--Ovk_X1s.js";import"./BasePdfViewer.module.css-uk79k73m.js";import"./PdfViewerAnnotationLayer-DvYRVeRi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DH5zx7Pz.js";import"./PdfViewerOutlineSidebar-CAR1H1Zj.js";import"./PdfViewerSidebarHeader-BQaFH3ia.js";import"./useBaseUiId-DoTbd__l.js";import"./useControlled-Yy2fJI9L.js";import"./CompositeRoot-BSUx5Jdj.js";import"./CompositeItem-TvjrH8CY.js";import"./ToolbarRootContext-Ddl053qU.js";import"./composite-CqBnb1yV.js";import"./svgIconContainer-4yskBugb.js";import"./PdfViewerSearchBar-y92KfuIZ.js";import"./chevron-up-CoLjarCK.js";import"./chevron-down-DVE6tSD6.js";import"./cross-DYXRPDx7.js";import"./PdfViewerSidebar-DbRTHuM0.js";import"./index-DoQAUbhM.js";import"./index-UMWtaZVa.js";import"./index-DQpYD4zL.js";import"./PdfViewerToolbar-C6w7YXEB.js";import"./Button-CrhbLtNZ.js";import"./chevron-right-BUbsE24c.js";import"./Input-DB8ShKaf.js";import"./search-Bb0Ck9Ps.js";import"./spin-eAmeeLkz.js";import"./error-DxPjfWes.js";import"./withOsdkMetrics-B04gc41f.js";import"./makeExternalStore-C_t-r-t8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
