import{j as r,M as s}from"./iframe-BUf-CLqY.js";import{P as p}from"./pdf-viewer-D2KP0Lvp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DOMAv8Gd.js";import"./preload-helper-riapeqtP.js";import"./PdfViewer-DFeynw6E.js";import"./index-C_MybgQ3.js";import"./BasePdfViewer-DIkSqsDy.js";import"./BasePdfViewer.module.css-BF45Ad1C.js";import"./PdfViewerAnnotationLayer-BzGLfRdW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-iOOnngHX.js";import"./PdfViewerOutlineSidebar-C-AhBN8X.js";import"./PdfViewerSidebarHeader-DQhn2_73.js";import"./useBaseUiId-gpzCx-rm.js";import"./useControlled-DEV21H7B.js";import"./CompositeRoot-j4f49CaV.js";import"./CompositeItem-Cjz_Qy2T.js";import"./ToolbarRootContext-tqZMT8gQ.js";import"./composite-ByB7nSsB.js";import"./svgIconContainer-DU0Ye5dG.js";import"./PdfViewerSearchBar-CnDRt7Oc.js";import"./chevron-up-DOerge61.js";import"./chevron-down-CRvVeW5r.js";import"./cross-CGc-Hcb9.js";import"./PdfViewerSidebar-iASjLwuY.js";import"./index-CD5GlWla.js";import"./index-CrCMLvTm.js";import"./index-DvN6Rba3.js";import"./PdfViewerToolbar-BSsCdCW2.js";import"./Button-cOSWZtuo.js";import"./chevron-right-CRIrTXqv.js";import"./Input-DnSUiNyS.js";import"./search-pVr5xk4n.js";import"./spin-CY_ytf6p.js";import"./error-CZVIneLk.js";import"./withOsdkMetrics-BtUVOcAG.js";import"./makeExternalStore-BFB7Uams.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
