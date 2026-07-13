import{j as r,M as s}from"./iframe-Cj5kRxtc.js";import{P as p}from"./pdf-viewer-DNWQDViq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Ceu6HnIW.js";import"./preload-helper-gv4OSTpO.js";import"./PdfRenderer--EPzGFMZ.js";import"./index-h3U-6pk3.js";import"./PdfViewer-DuAeOqRH.js";import"./PdfViewer.module.css-lyGXgFFB.js";import"./PdfViewerAnnotationLayer-DM7YV3a0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dc_HGNzM.js";import"./PdfViewerOutlineSidebar-By4s3MMu.js";import"./PdfViewerSidebarHeader-D4sDfhqZ.js";import"./useBaseUiId-DLWDq50N.js";import"./useControlled-D0OderS4.js";import"./CompositeRoot-PEt4Eket.js";import"./CompositeItem-BLdfQxuH.js";import"./ToolbarRootContext-BWrS8Fbo.js";import"./composite-cykJJ9WN.js";import"./svgIconContainer-Cf4A2tFb.js";import"./PdfViewerSearchBar-BEr5f6KM.js";import"./chevron-up-DXE22tit.js";import"./chevron-down-qz7KlM0E.js";import"./cross-BG55D_WO.js";import"./PdfViewerSidebar-DqE2P6jG.js";import"./index-CSR_UVHA.js";import"./index-DS9u3jBh.js";import"./index-a0FCqlaX.js";import"./PdfViewerToolbar-DniCG7BT.js";import"./Button-wcLol09e.js";import"./chevron-right-CgH_pOn2.js";import"./Input-CkR9HP68.js";import"./search-CmTqx7Sz.js";import"./spin-C3i4-grd.js";import"./error-CXDLgeUT.js";import"./withOsdkMetrics-Dx0BBnsy.js";import"./makeExternalStore-CxvPzi28.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
