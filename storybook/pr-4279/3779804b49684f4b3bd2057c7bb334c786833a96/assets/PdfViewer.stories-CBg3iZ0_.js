import{j as r,M as s}from"./iframe-Cs9u2FNJ.js";import{P as p}from"./pdf-viewer-nsUJRA2D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BhOkB3o2.js";import"./preload-helper-DEnCUJIu.js";import"./PdfViewer-DqBMm0Ai.js";import"./index-DWrTTHxb.js";import"./BasePdfViewer-CP_NenI_.js";import"./BasePdfViewer.module.css-CMotn3LB.js";import"./PdfViewerAnnotationLayer-C2rv0sPR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C77q0Sgl.js";import"./PdfViewerOutlineSidebar-DwSQBnOJ.js";import"./PdfViewerSidebarHeader-CJa6_SUy.js";import"./useBaseUiId-B04InLuC.js";import"./useControlled-DWa2oiP8.js";import"./CompositeRoot-CvQyq0eu.js";import"./CompositeItem-D6sZhCIa.js";import"./ToolbarRootContext-BXn8yWld.js";import"./composite-DoMN_SNj.js";import"./svgIconContainer-bmBt8PNs.js";import"./PdfViewerSearchBar-DDO5DhkJ.js";import"./chevron-up-DoSMFkZ5.js";import"./chevron-down-D0MyTtqt.js";import"./cross-Jki0Zf7X.js";import"./PdfViewerSidebar-qd3JoT-p.js";import"./index-C2_rmR-A.js";import"./index-B9LdyWis.js";import"./index-DSEOcFQR.js";import"./PdfViewerToolbar-HhvvfMKE.js";import"./Button-_OIC0QgO.js";import"./chevron-right-Bhg7MGe5.js";import"./Input-BxHTTwfQ.js";import"./search-QgkUbhew.js";import"./spin-y56LYZg6.js";import"./error-92AiuNPh.js";import"./withOsdkMetrics-BHorCkdK.js";import"./makeExternalStore-CtNpDvOI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
