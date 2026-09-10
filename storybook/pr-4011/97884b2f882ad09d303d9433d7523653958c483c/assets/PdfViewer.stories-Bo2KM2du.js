import{j as r,M as s}from"./iframe-EfiBoZIR.js";import{P as p}from"./pdf-viewer-CkTyaPRR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CSTb9EnS.js";import"./preload-helper-D_Wykq9t.js";import"./PdfViewer-DH9ZJFfo.js";import"./index-0eA-Cgh_.js";import"./BasePdfViewer-B7dEx6yh.js";import"./BasePdfViewer.module.css-q0mFaiLW.js";import"./PdfViewerAnnotationLayer-BUE2Q6G0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hhDMt5Eg.js";import"./PdfViewerOutlineSidebar-CV_Lk9RD.js";import"./PdfViewerSidebarHeader-3ohe6gFe.js";import"./useBaseUiId-cd03ijFK.js";import"./useControlled-RgsLbGbj.js";import"./CompositeRoot-C0VK9r29.js";import"./CompositeItem-Bcq4203w.js";import"./ToolbarRootContext-VaUVpuNK.js";import"./composite-CC9kaygZ.js";import"./svgIconContainer-Daui2Dw7.js";import"./PdfViewerSearchBar-gXIzShsD.js";import"./chevron-up-B0NzWakg.js";import"./chevron-down-Bjf9KWk2.js";import"./cross-BOeJXaLq.js";import"./PdfViewerSidebar-BAGqtaCR.js";import"./index-kHpZltIW.js";import"./index-CaF7GUuf.js";import"./index-B7OwTQ75.js";import"./PdfViewerToolbar-DdqNBi8H.js";import"./Button-WoBFNDMc.js";import"./chevron-right-CWkvq6Yb.js";import"./Input-Bf8UFFCR.js";import"./search-DW9KpidM.js";import"./spin-B780Ry0q.js";import"./error-CzXhBCLL.js";import"./withOsdkMetrics-EFBhc3BK.js";import"./makeExternalStore-DJM-d-Lr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
