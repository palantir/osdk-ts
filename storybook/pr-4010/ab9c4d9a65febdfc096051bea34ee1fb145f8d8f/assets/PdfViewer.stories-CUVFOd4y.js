import{j as r,M as s}from"./iframe-DzKgN3qu.js";import{P as p}from"./pdf-viewer-Db6mWS_V.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CgX_866K.js";import"./preload-helper-Bq44pRuA.js";import"./PdfViewer-CN0r8ryu.js";import"./index-BdOs7mw_.js";import"./BasePdfViewer-D6TYIuNI.js";import"./BasePdfViewer.module.css-DF2HcsLo.js";import"./PdfViewerAnnotationLayer-CWv-gk9P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIUEHYx2.js";import"./PdfViewerOutlineSidebar-BwmohKoM.js";import"./PdfViewerSidebarHeader-C_1g8e4N.js";import"./useBaseUiId-Dv29B-pr.js";import"./useControlled-DrMtPDwW.js";import"./CompositeRoot-7r82i8q4.js";import"./CompositeItem-yqIim0nf.js";import"./ToolbarRootContext-CCsiwlz9.js";import"./composite-CC7knVWa.js";import"./svgIconContainer-XLXcJGX1.js";import"./PdfViewerSearchBar-Vr9ngm6y.js";import"./chevron-up-CI5dW6fR.js";import"./chevron-down-vPjMV4aO.js";import"./cross-qDkjCQ52.js";import"./PdfViewerSidebar-ChvXvdR0.js";import"./index-DZ2KvGi_.js";import"./index-Gldmiip-.js";import"./index-C67GGcUR.js";import"./PdfViewerToolbar-Dh_QbeZb.js";import"./Button-M7h6gJdh.js";import"./chevron-right-DxXFFiSa.js";import"./Input-CzkZobpW.js";import"./search-C4jktGRC.js";import"./spin-DI9V2JjK.js";import"./error-T16LD8HE.js";import"./withOsdkMetrics-CgGyBohZ.js";import"./makeExternalStore-DmfOAvnN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
