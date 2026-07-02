import{j as r,M as s}from"./iframe-FIKeu7rC.js";import{P as p}from"./pdf-viewer-BABaNK91.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CwIOICFx.js";import"./preload-helper-BYmwUabe.js";import"./PdfRenderer-BLhJl47f.js";import"./index-C8m-l_2B.js";import"./PdfViewer-yQS4k60E.js";import"./PdfViewer.module.css-nSGqgf_D.js";import"./PdfViewerAnnotationLayer-CdfYORc2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CarFYeK4.js";import"./PdfViewerOutlineSidebar-CyBBrj2F.js";import"./PdfViewerSidebarHeader-bFesiUbs.js";import"./useBaseUiId-BHBJwszI.js";import"./useControlled-VBj-g8FR.js";import"./CompositeRoot-Bb4xXOwq.js";import"./CompositeItem-b0s0-9xu.js";import"./ToolbarRootContext-DxDDBzph.js";import"./composite-FkhmDVAb.js";import"./svgIconContainer-Btl_W2rg.js";import"./PdfViewerSearchBar-aczgp6x8.js";import"./chevron-up-vgRHK8yX.js";import"./chevron-down-afmMEC7e.js";import"./cross-BvZ8T6Jx.js";import"./PdfViewerSidebar-CXzLFfpf.js";import"./index-B_zCYSJl.js";import"./index-fEwkxJCO.js";import"./index-DY_9CGdP.js";import"./PdfViewerToolbar-D8RWP0k3.js";import"./Button-MV80I6nm.js";import"./chevron-right-CB1wSKOS.js";import"./Input-BxhzS_7f.js";import"./minus-DE2Oc8L6.js";import"./search-_Y49WGbC.js";import"./spin-D7Jq2PaO.js";import"./error-eMCCINaW.js";import"./withOsdkMetrics-CgsmUUPG.js";import"./makeExternalStore-BhxepKXE.js";const W={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const X=["Default"];export{o as Default,X as __namedExportsOrder,W as default};
