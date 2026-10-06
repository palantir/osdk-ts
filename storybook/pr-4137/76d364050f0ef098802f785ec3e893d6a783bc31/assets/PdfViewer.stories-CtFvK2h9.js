import{j as r,M as s}from"./iframe-D8wUjP5Q.js";import{P as p}from"./pdf-viewer-CdedQ1rO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BEXnojkj.js";import"./preload-helper-C60jAzLY.js";import"./PdfViewer-JlkY5mI-.js";import"./index-BIu9Kojc.js";import"./BasePdfViewer-Eyw4ovTo.js";import"./BasePdfViewer.module.css-CSTl2mXR.js";import"./PdfViewerAnnotationLayer-CulzFmyO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BF8dog06.js";import"./PdfViewerOutlineSidebar-Dz23SlSE.js";import"./PdfViewerSidebarHeader-C9DrxVR0.js";import"./useBaseUiId-BUaCAPTV.js";import"./useControlled-DRmCkPiT.js";import"./CompositeRoot-B38ob4_b.js";import"./CompositeItem-Df57X5b8.js";import"./ToolbarRootContext-Cng6yUXD.js";import"./composite-C2EdyOaO.js";import"./svgIconContainer-DfD-bPJ9.js";import"./PdfViewerSearchBar-Doihf0Kl.js";import"./chevron-up-CzrTJ-Ex.js";import"./chevron-down-BCcrHoHV.js";import"./cross-uw8rTCsg.js";import"./PdfViewerSidebar-zJ7ZcMeM.js";import"./index-BopS7lH3.js";import"./index-Urfc-aXa.js";import"./index-9bYJqJha.js";import"./PdfViewerToolbar-egatbTTZ.js";import"./Button-Db1yV2vy.js";import"./chevron-right-Cmqp5uaQ.js";import"./Input-DqsKhBeK.js";import"./search-CqoqcUsr.js";import"./spin-CJoaGaJp.js";import"./error-CtMjuQbV.js";import"./withOsdkMetrics-cJOGTvbe.js";import"./makeExternalStore-CO9Wus6n.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
