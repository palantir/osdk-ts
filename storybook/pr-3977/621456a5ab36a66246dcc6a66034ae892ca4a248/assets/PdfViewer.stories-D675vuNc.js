import{j as r,M as s}from"./iframe-BbienW_k.js";import{P as p}from"./pdf-viewer-CYs2a-1B.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-sRXEBFOE.js";import"./preload-helper-BwYT6GBt.js";import"./PdfViewer-Cf9aSOgC.js";import"./index-BtVRX5ik.js";import"./BasePdfViewer-zDDC4eP_.js";import"./BasePdfViewer.module.css-79lFclnK.js";import"./PdfViewerAnnotationLayer-BjFMVxk8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAt4uRXA.js";import"./PdfViewerOutlineSidebar-B2CCG_Fx.js";import"./PdfViewerSidebarHeader-Byq87whF.js";import"./useBaseUiId-mGNAwuSb.js";import"./useControlled-BbPCoZLB.js";import"./CompositeRoot-B-dOwwJo.js";import"./CompositeItem-BtZO_Q27.js";import"./ToolbarRootContext-tNJYHhh0.js";import"./composite-DehmI49I.js";import"./svgIconContainer-9jKJCEtA.js";import"./PdfViewerSearchBar-b0mkOBQz.js";import"./chevron-up-BiA9DoDj.js";import"./chevron-down-BvQtKUUh.js";import"./cross-D79BwPuA.js";import"./PdfViewerSidebar-yZ65Rd7Z.js";import"./index-Bvo9wdGf.js";import"./index-_tXk15dP.js";import"./index-CBwDIYK2.js";import"./PdfViewerToolbar-CQtvNPPh.js";import"./Button-DgQWdRpI.js";import"./chevron-right-DrzFBKFc.js";import"./Input-C02zCytb.js";import"./search-DtpodeH8.js";import"./spin-DcTEdUef.js";import"./error-Re8NGQni.js";import"./withOsdkMetrics-dw5qmcGp.js";import"./makeExternalStore-D54vu3Pa.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
