import{j as r,M as s}from"./iframe-i_9Nw0aL.js";import{P as p}from"./pdf-viewer-DiIkYy8T.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BazOwCrp.js";import"./preload-helper-B6z7q6ev.js";import"./PdfViewer-Crplm50g.js";import"./index-xy7OH4WM.js";import"./BasePdfViewer-5YLSo0Zr.js";import"./BasePdfViewer.module.css-BqJsqkyU.js";import"./PdfViewerAnnotationLayer-C78QyEUY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5LsTgfP.js";import"./PdfViewerOutlineSidebar-Dde66wMO.js";import"./PdfViewerSidebarHeader-CQzLwxQg.js";import"./useBaseUiId-BMuu8nEn.js";import"./useControlled-gY6NMr8Z.js";import"./CompositeRoot-BeR-tiBg.js";import"./CompositeItem-CcQI67Uz.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./composite-BEolDa-D.js";import"./svgIconContainer-3Y9_T1l7.js";import"./PdfViewerSearchBar-EL2APkwG.js";import"./chevron-up-C8kRn7e0.js";import"./chevron-down-D5tyPu8s.js";import"./cross-QqYP1fee.js";import"./PdfViewerSidebar-Ck_Zqsqy.js";import"./index-DABPjbUn.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./PdfViewerToolbar-Cb_s3fm3.js";import"./Button-Cqo_9NuU.js";import"./chevron-right-RF8KUQPg.js";import"./Input-DSjQkga5.js";import"./search-CEIky3LJ.js";import"./spin-u7Se95nR.js";import"./error-BtW_-Bd0.js";import"./withOsdkMetrics-Bn9NhK2D.js";import"./makeExternalStore-DV-2pdTM.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
