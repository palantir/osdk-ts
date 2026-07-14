import{j as r,M as s}from"./iframe-BQv7n_vV.js";import{P as p}from"./pdf-viewer-cpVeK1yH.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CDFpD6aa.js";import"./preload-helper-DEVig5aK.js";import"./PdfRenderer-CykTojNj.js";import"./index-BcN-U8CC.js";import"./PdfViewer-Cf49itF3.js";import"./PdfViewer.module.css-B1Vd3Yov.js";import"./PdfViewerAnnotationLayer-CJHgl825.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ddecmun2.js";import"./PdfViewerOutlineSidebar-BvlbJp3E.js";import"./PdfViewerSidebarHeader-BOQnkBbe.js";import"./useBaseUiId-DPVfkf9G.js";import"./useControlled-Dar1laVH.js";import"./CompositeRoot-BsoBz-1B.js";import"./CompositeItem-2NdUk1U5.js";import"./ToolbarRootContext-CjG6N3wE.js";import"./composite-CRej-fZo.js";import"./svgIconContainer-BBgMyLyq.js";import"./PdfViewerSearchBar-CUJDsa9t.js";import"./chevron-up-ExLBCF3v.js";import"./chevron-down-BsaukfyV.js";import"./cross-C1zSmiXC.js";import"./PdfViewerSidebar-Bs-P2I-n.js";import"./index-D6idOZm7.js";import"./index-C7TmdYI1.js";import"./index-CQWwpl2a.js";import"./PdfViewerToolbar-CAQXIoqG.js";import"./Button-DDAxgBEA.js";import"./chevron-right-5hzQoTCX.js";import"./Input-N3OSKqBO.js";import"./search-CdAz0L_I.js";import"./spin-Bn0SStAQ.js";import"./error-wI3sUvOo.js";import"./withOsdkMetrics-C9EWKsra.js";import"./makeExternalStore-DmjCbjCh.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
