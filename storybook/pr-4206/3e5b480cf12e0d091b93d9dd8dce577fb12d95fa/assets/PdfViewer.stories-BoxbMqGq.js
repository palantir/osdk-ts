import{j as r,M as s}from"./iframe-Cul2E1vG.js";import{P as p}from"./pdf-viewer-BH8C9l6q.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BGZAZIis.js";import"./preload-helper--6M4Khrx.js";import"./PdfViewer-CDfdu2zJ.js";import"./index-Bn5VDq5b.js";import"./BasePdfViewer-BySBWFJg.js";import"./BasePdfViewer.module.css-CzMJ3gB6.js";import"./PdfViewerAnnotationLayer-aSjw3Pjj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Caot4xpq.js";import"./PdfViewerOutlineSidebar-BradOUv1.js";import"./PdfViewerSidebarHeader-4BN92mw0.js";import"./useBaseUiId-BQIQ8jck.js";import"./useControlled-CzFr7QRD.js";import"./CompositeRoot-BiKaUxyj.js";import"./CompositeItem-CvRXWH1T.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./composite-SNvyYtRl.js";import"./svgIconContainer-mVJAcMp8.js";import"./PdfViewerSearchBar-BlgberjP.js";import"./chevron-up-BRfUTmQt.js";import"./chevron-down-zZ58BLda.js";import"./cross-C6zh1HjN.js";import"./PdfViewerSidebar-BYEV6I1G.js";import"./index-C8CW-UMA.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./PdfViewerToolbar-h9xn2MGz.js";import"./Button-oDRXfShn.js";import"./chevron-right-AgUlQs3w.js";import"./Input-DRePQ-W6.js";import"./search-BwSeGY7Y.js";import"./spin-XJiyoZ8V.js";import"./error-Bp_j0tyg.js";import"./withOsdkMetrics-Cv3w3vr0.js";import"./makeExternalStore-Dw-8aD8B.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
