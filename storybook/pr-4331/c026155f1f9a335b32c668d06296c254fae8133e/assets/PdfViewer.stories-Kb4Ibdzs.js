import{j as r,M as s}from"./iframe-Ck95bxu4.js";import{P as p}from"./pdf-viewer-D2RWMwSg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C86ZWzqv.js";import"./preload-helper-KA9de6lE.js";import"./PdfViewer-BhQF09Pn.js";import"./index-Cif5jAEJ.js";import"./BasePdfViewer-BOi4u6qz.js";import"./BasePdfViewer.module.css-C3uUz-wQ.js";import"./PdfViewerAnnotationLayer-B95J-nKi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9Waikjx.js";import"./PdfViewerOutlineSidebar-CcoNTyU7.js";import"./PdfViewerSidebarHeader-C71MmEe_.js";import"./useBaseUiId-CWyLFOC8.js";import"./useControlled-B8TEOr6k.js";import"./CompositeRoot-fnIddyY_.js";import"./CompositeItem-B10VO3gZ.js";import"./ToolbarRootContext-BRWZ8sOA.js";import"./composite-Yh1yynjC.js";import"./svgIconContainer-CPHbIRji.js";import"./PdfViewerSearchBar-BVvk4laA.js";import"./chevron-up-Deo3COxs.js";import"./chevron-down-bheQQ_PQ.js";import"./cross-D4AVy5in.js";import"./PdfViewerSidebar-6QuFIs0K.js";import"./index-K_6WRtRx.js";import"./index-BhAq9v2h.js";import"./index-QaBJUBwA.js";import"./PdfViewerToolbar-D-zR-Gty.js";import"./Button-PWPX_ks7.js";import"./chevron-right-CtH8Okro.js";import"./Input-s6yy9vkz.js";import"./search-BS_g30el.js";import"./spin-DeVa36ku.js";import"./error-RnJ96IVH.js";import"./withOsdkMetrics-Dr6WHfBD.js";import"./makeExternalStore-BMm4gCLi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
