import{j as r,M as s}from"./iframe-DqI30U40.js";import{P as p}from"./pdf-viewer-B64gIfa3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-higBCSL9.js";import"./preload-helper-lMu0note.js";import"./PdfViewer-D32Wbm1E.js";import"./index-C4ZwlQTR.js";import"./BasePdfViewer-DCKuFK2S.js";import"./BasePdfViewer.module.css-C48Fn9q7.js";import"./PdfViewerAnnotationLayer-D53udIfb.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BY-eIYE8.js";import"./PdfViewerOutlineSidebar-CBH1-qU9.js";import"./PdfViewerSidebarHeader-Dm-I8VAl.js";import"./useBaseUiId-C0PciSz-.js";import"./useControlled-BwDcV046.js";import"./CompositeRoot-DuFayj6h.js";import"./CompositeItem-BGXf_W0J.js";import"./ToolbarRootContext-1u8sCZzb.js";import"./composite-C615e4nX.js";import"./svgIconContainer-C-3DfKaO.js";import"./PdfViewerSearchBar-DaIjhAZ4.js";import"./chevron-up-BBa7os7a.js";import"./chevron-down-BZP6l7fc.js";import"./cross-kpf8tVcy.js";import"./PdfViewerSidebar-BnaETCdb.js";import"./index-KjlsTGzF.js";import"./index-tM4--8t5.js";import"./index-CEfGdJuZ.js";import"./PdfViewerToolbar-Cf-mypM3.js";import"./Button-Dn7tfqeo.js";import"./chevron-right-DDBju0d6.js";import"./Input-DI7Qw37x.js";import"./search-DDH0C-qs.js";import"./spin-B0fDQCui.js";import"./error-C07e4O30.js";import"./withOsdkMetrics-vCc5CCLF.js";import"./makeExternalStore-BVsnNdhZ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
