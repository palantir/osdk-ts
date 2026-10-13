import{j as r,M as s}from"./iframe-Dig_Ahq7.js";import{P as p}from"./pdf-viewer-HdRXSOJL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C_CKUYmX.js";import"./preload-helper-Eyc3oojg.js";import"./PdfViewer-DPhhmJiK.js";import"./index-BAoTCyK2.js";import"./BasePdfViewer-DX0cfHX1.js";import"./BasePdfViewer.module.css-f06tqEOd.js";import"./PdfViewerAnnotationLayer-CPy19uY3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gmemh2me.js";import"./PdfViewerOutlineSidebar-CBtq1nHe.js";import"./PdfViewerSidebarHeader-C85LB2Ae.js";import"./useBaseUiId-BXYV1Ucu.js";import"./useControlled-9l0-iUGA.js";import"./CompositeRoot-CgIqtHlb.js";import"./CompositeItem-CjjvTweq.js";import"./ToolbarRootContext-5tRY-prW.js";import"./composite-GVV5HeYl.js";import"./svgIconContainer-Cx17DJom.js";import"./PdfViewerSearchBar-BxqSR1q4.js";import"./chevron-up-VVP3vy4s.js";import"./chevron-down-D5J97Xaa.js";import"./cross-BbZdDJWd.js";import"./PdfViewerSidebar-DawMHPEh.js";import"./index-DZ8Usuwg.js";import"./index-r_flECQw.js";import"./index-BkAj4YFS.js";import"./PdfViewerToolbar-DhVqrJwy.js";import"./Button-Cg2kaI0u.js";import"./chevron-right-CZlYQWRQ.js";import"./Input-DERIfaLU.js";import"./search-C4f4g9Ue.js";import"./spin-CFjZcKnU.js";import"./error-D0UPEL3v.js";import"./withOsdkMetrics-hTvMF2O-.js";import"./makeExternalStore-CcSZq8Dl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
