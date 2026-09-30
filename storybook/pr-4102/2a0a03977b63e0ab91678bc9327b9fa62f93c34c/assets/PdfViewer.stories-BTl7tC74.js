import{j as r,M as s}from"./iframe-CAOw1_Np.js";import{P as p}from"./pdf-viewer-BrsBqJTi.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C26U4XTu.js";import"./preload-helper-BtDOje63.js";import"./PdfViewer-CrtCDW9g.js";import"./index-rKNeW6R2.js";import"./BasePdfViewer-CpAs4jAP.js";import"./BasePdfViewer.module.css-DxqprhRV.js";import"./PdfViewerAnnotationLayer-B4IyFgNM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dg9KAUfR.js";import"./PdfViewerOutlineSidebar-CkV0v8Pz.js";import"./PdfViewerSidebarHeader-C7OikEow.js";import"./useBaseUiId-BRTQVt9V.js";import"./useControlled-BcHOqTg-.js";import"./CompositeRoot-Dibs-RKo.js";import"./CompositeItem-CJnfXQEg.js";import"./ToolbarRootContext-kfYngOQa.js";import"./composite-ceXOKcGl.js";import"./svgIconContainer-DJZ5kPqi.js";import"./PdfViewerSearchBar-DjkyZovP.js";import"./chevron-up-ChEOdxdh.js";import"./chevron-down-CrNYgO2n.js";import"./cross-6UH6f3dc.js";import"./PdfViewerSidebar-DVn64dTx.js";import"./index-DAICdrKF.js";import"./index-B9i7IC3F.js";import"./index-Bj9jZdxR.js";import"./PdfViewerToolbar-DYl9Pyic.js";import"./Button-BCAtXo9W.js";import"./chevron-right-CL0En3Ry.js";import"./Input-BIFRYkQa.js";import"./search-CAyVB4HI.js";import"./spin-BSm0GpHN.js";import"./error-BklEgYFX.js";import"./withOsdkMetrics-C9zKllhN.js";import"./makeExternalStore-BP-pbk-j.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
