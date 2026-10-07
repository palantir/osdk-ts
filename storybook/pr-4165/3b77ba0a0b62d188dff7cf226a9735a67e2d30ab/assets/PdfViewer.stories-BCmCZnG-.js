import{j as r,M as s}from"./iframe-DX49BiZ-.js";import{P as p}from"./pdf-viewer-XSaurFKX.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pG5Ezfuc.js";import"./preload-helper-9LHBCYVI.js";import"./PdfViewer-CzKTT5d3.js";import"./index-DxuHGCjB.js";import"./BasePdfViewer-B8ADU6BQ.js";import"./BasePdfViewer.module.css-BH-6VxB4.js";import"./PdfViewerAnnotationLayer-DoL29gub.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Oj9--JDb.js";import"./PdfViewerOutlineSidebar-CWS2VMR7.js";import"./PdfViewerSidebarHeader-DhQXWIcS.js";import"./useBaseUiId-DI7HJ1sZ.js";import"./useControlled-C31TKFPE.js";import"./CompositeRoot-C4mjLNI7.js";import"./CompositeItem-1DFf-U3D.js";import"./ToolbarRootContext-BkXM-WhV.js";import"./composite-BTvCmLum.js";import"./svgIconContainer-B548BSI_.js";import"./PdfViewerSearchBar-DQYi6VPo.js";import"./chevron-up-DAVFCRMo.js";import"./chevron-down-CPeorV8q.js";import"./cross-CauetHLv.js";import"./PdfViewerSidebar-D81TupZT.js";import"./index-DxqztkoM.js";import"./index-Ygr_7AWn.js";import"./index-C4WszJy1.js";import"./PdfViewerToolbar-DM3Jlbyq.js";import"./Button-RYY6ZBF7.js";import"./chevron-right-DpXTTHXi.js";import"./Input-BQDPJQM6.js";import"./search-D15_q6tD.js";import"./spin-D8AyJJ9U.js";import"./error-DKDHu63B.js";import"./withOsdkMetrics-DxWj1HC0.js";import"./makeExternalStore-Ckt0eied.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
