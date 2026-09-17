import{j as r,M as s}from"./iframe-BtGRzxci.js";import{P as p}from"./pdf-viewer-BR-Y93eM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DYE8611g.js";import"./preload-helper-CyrDjGUQ.js";import"./PdfViewer-zIh5ZuGX.js";import"./index-tVIozFN1.js";import"./BasePdfViewer-C5R3iOxM.js";import"./BasePdfViewer.module.css-CDOjcUeJ.js";import"./PdfViewerAnnotationLayer-yvMxGMaO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-c-U1xWRi.js";import"./PdfViewerOutlineSidebar-BNu6dVrB.js";import"./PdfViewerSidebarHeader-Dp5q31l8.js";import"./useBaseUiId-XRf534_a.js";import"./useControlled-rccl1Nao.js";import"./CompositeRoot-C6E6Nju3.js";import"./CompositeItem-CG89Nl1U.js";import"./ToolbarRootContext-D3OhDsHo.js";import"./composite-Btju52rS.js";import"./svgIconContainer-CN6dxZIp.js";import"./PdfViewerSearchBar-BQ-amnkx.js";import"./chevron-up-BZf-LWm3.js";import"./chevron-down-C1HWTq_e.js";import"./cross-7jkwYPrY.js";import"./PdfViewerSidebar-BEOar2bx.js";import"./index-DLTZ7l6I.js";import"./index-Dv2SWeyR.js";import"./index-BV7_z1j7.js";import"./PdfViewerToolbar-DWXsEm_M.js";import"./Button-CmbUXSv3.js";import"./chevron-right-C-WJHM1Y.js";import"./Input-DGQhm6BR.js";import"./search-BPr2MDER.js";import"./spin-BddQEUUA.js";import"./error-swCJC4aW.js";import"./withOsdkMetrics-7PiZwI5Y.js";import"./makeExternalStore-DP55EZzE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
