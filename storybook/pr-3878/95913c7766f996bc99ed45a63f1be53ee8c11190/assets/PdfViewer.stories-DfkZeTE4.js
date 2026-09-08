import{j as r,M as s}from"./iframe--ccl4y8N.js";import{P as p}from"./pdf-viewer-D4XX0cSL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-TiD2DKJe.js";import"./preload-helper-eDRQxybW.js";import"./PdfViewer-D9gyA7av.js";import"./index-Vig6W4vx.js";import"./BasePdfViewer-BUdKHB5I.js";import"./BasePdfViewer.module.css-C4UORDqd.js";import"./PdfViewerAnnotationLayer-B7OC-M_o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3-Hubs2.js";import"./PdfViewerOutlineSidebar-BFF7rf8w.js";import"./PdfViewerSidebarHeader-CIGQcAxQ.js";import"./useBaseUiId-fZY9l5U4.js";import"./useControlled-DnjkEDg6.js";import"./CompositeRoot-CsJQ-X5P.js";import"./CompositeItem-CgDhVlw6.js";import"./ToolbarRootContext-DphUk-b_.js";import"./composite-BIOD5O0o.js";import"./svgIconContainer-DanQ2deo.js";import"./PdfViewerSearchBar-DO0degCG.js";import"./chevron-up-furDnydF.js";import"./chevron-down-CjjtTKBP.js";import"./cross-DXpDqiaU.js";import"./PdfViewerSidebar-R_edSDmj.js";import"./index-DlRKciFL.js";import"./index-DaU8wHoE.js";import"./index-DHS-gUYg.js";import"./PdfViewerToolbar-Cl-kj4-G.js";import"./Button-WLNHPk3M.js";import"./chevron-right-CD69Zy4_.js";import"./Input-CMEDwRP1.js";import"./search-BSNzJLm0.js";import"./spin-DT-pF9vz.js";import"./error-C1s20D2H.js";import"./withOsdkMetrics-CgPXr3ib.js";import"./makeExternalStore-CgFnBRv9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
