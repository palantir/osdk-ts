import{j as r,M as s}from"./iframe-BPejH73A.js";import{P as p}from"./pdf-viewer-Ba8llk-5.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-3fN9a1m3.js";import"./preload-helper-DroWujke.js";import"./PdfRenderer-5mRkmrjw.js";import"./index-B90tI0ID.js";import"./PdfViewer-DM3MiKoh.js";import"./PdfViewer.module.css-CYe7YfP_.js";import"./PdfViewerAnnotationLayer-Cg0jlppj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B4WV4feM.js";import"./PdfViewerOutlineSidebar-BOI5B4A_.js";import"./PdfViewerSidebarHeader-Dp6Tuay1.js";import"./useBaseUiId-CFfBCCWK.js";import"./useControlled-CsZk8XdE.js";import"./CompositeRoot-CymwYsxG.js";import"./CompositeItem-CePwhpAH.js";import"./ToolbarRootContext-BfoWDH0x.js";import"./composite-_PR9ooYN.js";import"./svgIconContainer-CEusbL27.js";import"./PdfViewerSearchBar-7QByTq5_.js";import"./chevron-up-DRm62Mrd.js";import"./chevron-down-B-cXR2Ke.js";import"./cross-DBEmAhHS.js";import"./PdfViewerSidebar-CTlEwc9J.js";import"./index-CxUM6NOw.js";import"./index-2yc_vRjp.js";import"./index-CbqreBW3.js";import"./PdfViewerToolbar-YNWJKjDc.js";import"./Button-Ckubio33.js";import"./chevron-right-DvLu0zgW.js";import"./Input-BzT6UcMr.js";import"./search-Dr4m-uvV.js";import"./spin-C_qqq_wI.js";import"./error-Cd-jBlIi.js";import"./withOsdkMetrics-Wb8pNEXr.js";import"./makeExternalStore-BSENvNfl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
