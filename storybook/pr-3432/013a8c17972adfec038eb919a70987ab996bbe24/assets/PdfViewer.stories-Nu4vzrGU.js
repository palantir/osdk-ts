import{j as r,M as s}from"./iframe-RSBzroZA.js";import{P as p}from"./pdf-viewer-CRzP3a6i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-FUeePAFU.js";import"./preload-helper-B4pqtO3e.js";import"./PdfRenderer-DwEyQOcM.js";import"./index-DsipxA2q.js";import"./PdfViewer-BEOaMOit.js";import"./PdfViewer.module.css-DC8M3eE3.js";import"./PdfViewerAnnotationLayer-DMKbS6z-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmcOaE2p.js";import"./PdfViewerOutlineSidebar-Bauv6cwu.js";import"./PdfViewerSidebarHeader-BpA9ftKn.js";import"./useBaseUiId-CJ4Ks2Ai.js";import"./useControlled-DfRhNfSK.js";import"./CompositeRoot-JXGEzy7b.js";import"./CompositeItem-Ct757kGS.js";import"./ToolbarRootContext-DSQWIziF.js";import"./composite-DIcLGdQ7.js";import"./svgIconContainer-BxXFYwkv.js";import"./PdfViewerSearchBar-D37rvujc.js";import"./chevron-up-BRsXDYtH.js";import"./chevron-down-Bi6ZiHsZ.js";import"./cross-CABh21Cd.js";import"./PdfViewerSidebar-BA-ojZKz.js";import"./index-Bww72sbW.js";import"./index-DJJ0-3Pk.js";import"./index-dlV8mm3m.js";import"./PdfViewerToolbar-DYvKlOku.js";import"./Button-B0v0hQqc.js";import"./chevron-right-xnaO5a0k.js";import"./Input-Csq9oOiA.js";import"./search-C4loYzDO.js";import"./spin-B4e49K5Z.js";import"./error-DiYS0a7N.js";import"./withOsdkMetrics-CUzP3NKP.js";import"./makeExternalStore-CIv3ExRP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
