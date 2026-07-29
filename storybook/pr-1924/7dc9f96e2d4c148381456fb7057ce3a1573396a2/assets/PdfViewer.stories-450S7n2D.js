import{j as r,M as s}from"./iframe-BlKzkmtn.js";import{P as p}from"./pdf-viewer-35CWmCGp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D3wmDCVi.js";import"./preload-helper-CJb7ZBwp.js";import"./PdfRenderer-BanfMuFC.js";import"./index-BE33dGXM.js";import"./PdfViewer-D_3OXWeL.js";import"./PdfViewer.module.css-DtVv72J3.js";import"./PdfViewerAnnotationLayer-D-DaEldm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtLLti9t.js";import"./PdfViewerOutlineSidebar-BzE3mHyW.js";import"./PdfViewerSidebarHeader-DrSQWldn.js";import"./useBaseUiId-QFjXRhmc.js";import"./useControlled-C8Xhu7sh.js";import"./CompositeRoot-BUip1TGL.js";import"./CompositeItem-DdICfa7h.js";import"./ToolbarRootContext-DkjfOPRa.js";import"./composite-DWj46q8f.js";import"./svgIconContainer-DTMdlGkn.js";import"./PdfViewerSearchBar-DJlWAROQ.js";import"./chevron-up-B8ZPbCpH.js";import"./chevron-down-CEf4r7Rj.js";import"./cross-CDSlzZ_j.js";import"./PdfViewerSidebar-iB-VfJuE.js";import"./index-DXLdK1XH.js";import"./index-DVqE6h_f.js";import"./index-EtRT7Ia5.js";import"./PdfViewerToolbar-Joknfyaw.js";import"./Button-CR_nzyNk.js";import"./chevron-right-DkV9weGE.js";import"./Input-BdMnwJ3c.js";import"./search-DTlUtZ9H.js";import"./spin-BCn6SRLy.js";import"./error-xYUSpHPn.js";import"./withOsdkMetrics-DjHdw3vL.js";import"./makeExternalStore-CI1ZTcF0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
