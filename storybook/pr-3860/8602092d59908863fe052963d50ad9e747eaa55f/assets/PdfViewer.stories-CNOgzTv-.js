import{j as r,M as s}from"./iframe-CCkfybyg.js";import{P as p}from"./pdf-viewer-DUNQGaQC.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0Rq0zt7.js";import"./preload-helper-DsTZDItY.js";import"./PdfViewer-DPl0fRSf.js";import"./index-CRuKazN2.js";import"./BasePdfViewer-CnExvIVJ.js";import"./BasePdfViewer.module.css-BDZdNyXn.js";import"./PdfViewerAnnotationLayer-7s2oUwjx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQi9YZGQ.js";import"./PdfViewerOutlineSidebar-BGlXgsdM.js";import"./PdfViewerSidebarHeader-DMEFaiu5.js";import"./useBaseUiId-D3c2AYue.js";import"./useControlled-B0KHjJp9.js";import"./CompositeRoot-CrBLpufM.js";import"./CompositeItem-C3VXcNTq.js";import"./ToolbarRootContext-BENsoGE2.js";import"./composite-CvsgNL3g.js";import"./svgIconContainer-D9rYUMKl.js";import"./PdfViewerSearchBar-pClpoka2.js";import"./chevron-up-CyrCC1nX.js";import"./chevron-down-BUd5pETS.js";import"./cross-DztAW50z.js";import"./PdfViewerSidebar-5Sqa8PZr.js";import"./index-BSEK-fsb.js";import"./index-BjdCoA9s.js";import"./index-DK7vLZsC.js";import"./PdfViewerToolbar-B9FDlzkR.js";import"./Button-Dk9snPZU.js";import"./chevron-right-DNNRVFBO.js";import"./Input-fn0miJxb.js";import"./search-DY10Czwo.js";import"./spin-hAn_NU50.js";import"./error-aAb7DCQN.js";import"./withOsdkMetrics-CC5JIT8j.js";import"./makeExternalStore-CGDWyW6x.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
