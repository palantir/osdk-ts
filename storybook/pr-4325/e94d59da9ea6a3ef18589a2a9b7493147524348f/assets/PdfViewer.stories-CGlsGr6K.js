import{j as r,M as s}from"./iframe-D0BcpvbQ.js";import{P as p}from"./pdf-viewer-C9AezEfV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CGeJq40k.js";import"./preload-helper-25-JBzXD.js";import"./PdfViewer-CKNWRnku.js";import"./index-J-5LjNrj.js";import"./BasePdfViewer-CavMAMcU.js";import"./BasePdfViewer.module.css-BR6scZoh.js";import"./PdfViewerAnnotationLayer-BjdfrNhj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CeUUJyKB.js";import"./PdfViewerOutlineSidebar-C2FoV807.js";import"./PdfViewerSidebarHeader-BvC2tMoY.js";import"./useBaseUiId-DKDRPBwJ.js";import"./useControlled-2QWb7bZB.js";import"./CompositeRoot-DJnNIRKJ.js";import"./CompositeItem-CKKkXKKr.js";import"./ToolbarRootContext-4_oBwQs6.js";import"./composite-oTuSysNj.js";import"./svgIconContainer-C3Yfvyd2.js";import"./PdfViewerSearchBar-CXoDJeUE.js";import"./chevron-up-DrnWvkrq.js";import"./chevron-down-WrvVs3Y7.js";import"./cross-CjHwEj-1.js";import"./PdfViewerSidebar-DwN6OXJE.js";import"./index-Ujvos5Bu.js";import"./index-DnyQlPpk.js";import"./index-Boycosi1.js";import"./PdfViewerToolbar-BQZQ6y8_.js";import"./Button-X3pcCJxf.js";import"./chevron-right-BZV0nJA5.js";import"./Input-CmqnqFxK.js";import"./search-CSQzmj9y.js";import"./spin-O52gtVsJ.js";import"./error-BGGXhU_S.js";import"./withOsdkMetrics-DmAggtUS.js";import"./makeExternalStore-NS27kiyv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
