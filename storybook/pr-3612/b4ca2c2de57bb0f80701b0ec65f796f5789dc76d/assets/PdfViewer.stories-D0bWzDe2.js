import{j as r,M as s}from"./iframe-B067mJJD.js";import{P as p}from"./pdf-viewer-YUYXqmVA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CKnbye23.js";import"./preload-helper-aRVleQ9n.js";import"./PdfRenderer-DcUtdfWt.js";import"./index-CXujijaa.js";import"./PdfViewer-DIyWAH0b.js";import"./PdfViewer.module.css-ClQltfOL.js";import"./PdfViewerAnnotationLayer-B8Q916KR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HFAhCLif.js";import"./PdfViewerOutlineSidebar-B4ZRn_JH.js";import"./PdfViewerSidebarHeader-ClQGANz9.js";import"./useBaseUiId-en620839.js";import"./useControlled-CvBct5IX.js";import"./CompositeRoot-tNLOIbXy.js";import"./CompositeItem-05lTREnB.js";import"./ToolbarRootContext-IgAccb3_.js";import"./composite-C_8lS0YD.js";import"./svgIconContainer-BLpqKIxS.js";import"./PdfViewerSearchBar-CPbpqd5Q.js";import"./chevron-up-BB5yMu7w.js";import"./chevron-down-DbRcCkwb.js";import"./cross-Dtg5Zx2w.js";import"./PdfViewerSidebar-BKouTMsU.js";import"./index-Bh98dWqx.js";import"./index-DsXIJ6vq.js";import"./index-owqdD4rE.js";import"./PdfViewerToolbar-fM61IRyK.js";import"./Button-dOwtzEcM.js";import"./chevron-right-P2JDMkOM.js";import"./Input-DC_kXmOS.js";import"./search-Bnkq9xxo.js";import"./spin-hdxJI7tt.js";import"./error-1vaoDyk6.js";import"./withOsdkMetrics-D6KobcbQ.js";import"./makeExternalStore-DN-iw-FW.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
