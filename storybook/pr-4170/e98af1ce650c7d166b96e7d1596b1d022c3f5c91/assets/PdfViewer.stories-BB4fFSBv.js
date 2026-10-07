import{j as r,M as s}from"./iframe-q2c2VLg1.js";import{P as p}from"./pdf-viewer-DuvyHtlR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BjeXHkjy.js";import"./preload-helper-Dd4fXQyN.js";import"./PdfViewer-CJ95BsnL.js";import"./index-CRaifptZ.js";import"./BasePdfViewer-CLGb0yYE.js";import"./BasePdfViewer.module.css-BhvA2JQx.js";import"./PdfViewerAnnotationLayer-BMIz35Jw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOG2wh02.js";import"./PdfViewerOutlineSidebar-Cb1YaglW.js";import"./PdfViewerSidebarHeader-8udpdpqv.js";import"./useBaseUiId-omTFJ4IU.js";import"./useControlled-CAFIwmV7.js";import"./CompositeRoot-34k3_Kr-.js";import"./CompositeItem-DvufjjXa.js";import"./ToolbarRootContext-gOhTdtut.js";import"./composite-NSumfvPY.js";import"./svgIconContainer-BlrvzrEz.js";import"./PdfViewerSearchBar-Bn22xYiG.js";import"./chevron-up-XvGVS-mL.js";import"./chevron-down-BiLdY5Pu.js";import"./cross-CcrMbm-0.js";import"./PdfViewerSidebar-CqCuAdAE.js";import"./index-Br8J5rfr.js";import"./index-4j_oKqKk.js";import"./index-9q1QNwoC.js";import"./PdfViewerToolbar-Ct_J3koE.js";import"./Button-BsjIA1gg.js";import"./chevron-right-DF3ZNCMV.js";import"./Input-BRmugyzW.js";import"./search-B-fHJPoD.js";import"./spin-BkH7-Xde.js";import"./error-D-r93luQ.js";import"./withOsdkMetrics-DYLb2cmM.js";import"./makeExternalStore-BO8xauxU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
