import{j as r,M as s}from"./iframe-DwYLkjIm.js";import{P as p}from"./pdf-viewer-BoGDE7rk.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FhcyJ1H_.js";import"./preload-helper-ATh-df95.js";import"./PdfViewer-BNq_tYNO.js";import"./index-BjvNbQ5u.js";import"./BasePdfViewer-Bz_525CN.js";import"./BasePdfViewer.module.css-DjwGQFbX.js";import"./PdfViewerAnnotationLayer-CsK0itnE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-efj28Q1T.js";import"./PdfViewerOutlineSidebar-vOyjNg7X.js";import"./PdfViewerSidebarHeader-Dh05ChLP.js";import"./useBaseUiId-BLNd3-C8.js";import"./useControlled-B5ZJB9TM.js";import"./CompositeRoot-D2N9YbOp.js";import"./CompositeItem-CqCnARzh.js";import"./ToolbarRootContext-y1EgqHY_.js";import"./composite-DkREeV9G.js";import"./svgIconContainer-BO0D2b3B.js";import"./PdfViewerSearchBar-UgxAGeGh.js";import"./chevron-up-BMGLxzIX.js";import"./chevron-down-gw5VoLqI.js";import"./cross-8A5W1-mq.js";import"./PdfViewerSidebar-jRIaG_pg.js";import"./index-C80pQDpv.js";import"./index-DaP8hSau.js";import"./index-Cp5k1JkI.js";import"./PdfViewerToolbar-BLcCkOHL.js";import"./Button-De4eCp5V.js";import"./chevron-right-HEh5H6mH.js";import"./Input-COaOuFmv.js";import"./search-DbuZ2eC4.js";import"./spin-rErBRrsV.js";import"./error-CtWk7aa4.js";import"./withOsdkMetrics-BwdGT6RG.js";import"./makeExternalStore-BtQFwu78.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
