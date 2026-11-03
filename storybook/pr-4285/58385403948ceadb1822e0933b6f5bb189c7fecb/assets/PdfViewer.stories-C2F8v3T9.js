import{j as r,M as s}from"./iframe-Do-VpOjh.js";import{P as p}from"./pdf-viewer-M9wHNEZB.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-lCEJXtMb.js";import"./preload-helper-5MNjctgv.js";import"./PdfViewer-BhOTEpaV.js";import"./index-guBT-Q22.js";import"./BasePdfViewer-BIYH8Vfz.js";import"./BasePdfViewer.module.css-1JH4Qxnz.js";import"./PdfViewerAnnotationLayer-D1Kxs6AH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdWFS-uH.js";import"./PdfViewerOutlineSidebar-CxJ5aNQh.js";import"./PdfViewerSidebarHeader-DgJMEV3f.js";import"./useBaseUiId-NGuXhXtm.js";import"./useControlled-Bktt7DnW.js";import"./CompositeRoot-myMewfo8.js";import"./CompositeItem-tVccsBIo.js";import"./ToolbarRootContext-ABr2rsL3.js";import"./composite-XuPIjsZ0.js";import"./svgIconContainer-Daa0qYJx.js";import"./PdfViewerSearchBar-DB3Z14qB.js";import"./chevron-up-DIgDXVQX.js";import"./chevron-down-CEDyHpu0.js";import"./cross-ogJb6_71.js";import"./PdfViewerSidebar-CqPiaBmh.js";import"./index-BCFomdyL.js";import"./index-BPQdlCoY.js";import"./index-Bl0nKd-v.js";import"./PdfViewerToolbar-D6WJjVFL.js";import"./Button-CyEQqHyS.js";import"./chevron-right-DSI3uTcZ.js";import"./Input-DBYDuVVL.js";import"./search-CUVFG7hS.js";import"./spin-C5C9RtAB.js";import"./error-CfZglkqO.js";import"./withOsdkMetrics-C1OJVKTR.js";import"./makeExternalStore-C6Ji6_pQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
