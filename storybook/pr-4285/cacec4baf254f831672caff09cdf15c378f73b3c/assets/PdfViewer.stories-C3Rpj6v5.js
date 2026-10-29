import{j as r,M as s}from"./iframe-CjqaNb_6.js";import{P as p}from"./pdf-viewer-D2DNnibZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D73ZvXPI.js";import"./preload-helper-CGa3vgnS.js";import"./PdfViewer-BrgotF4x.js";import"./index-vq-4ZEFu.js";import"./BasePdfViewer-B4LD-VPs.js";import"./BasePdfViewer.module.css-BsDm-ELZ.js";import"./PdfViewerAnnotationLayer-DfM4Nhr-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CD-W7rlT.js";import"./PdfViewerOutlineSidebar-DzftEhGP.js";import"./PdfViewerSidebarHeader-DYzV4h36.js";import"./useBaseUiId-BlK4VlOb.js";import"./useControlled-DENE4AVf.js";import"./CompositeRoot-CK-TwHMb.js";import"./CompositeItem-DdNr1E7d.js";import"./ToolbarRootContext-BkN7DcjO.js";import"./composite-C2vCaoMT.js";import"./svgIconContainer-DjFXNtcD.js";import"./PdfViewerSearchBar-zWzZ13Je.js";import"./chevron-up-DWov7Pwm.js";import"./chevron-down-DCYjYXHO.js";import"./cross-BpdOGJyJ.js";import"./PdfViewerSidebar-CU6tCvCT.js";import"./index-Dd6FNa4t.js";import"./index-CicBoOrA.js";import"./index-_mZt-hWo.js";import"./PdfViewerToolbar-uWkTxjfZ.js";import"./Button-d7ygQEjr.js";import"./chevron-right-DYyoJlza.js";import"./Input-BvVBd0y-.js";import"./search-DVbD0a3n.js";import"./spin-BxizeP_K.js";import"./error-CICrjBQf.js";import"./withOsdkMetrics-DqLs3Yq6.js";import"./makeExternalStore-DymPkA7f.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
