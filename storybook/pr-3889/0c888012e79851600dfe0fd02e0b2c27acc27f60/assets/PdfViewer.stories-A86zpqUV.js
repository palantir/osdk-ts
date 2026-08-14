import{j as r,M as s}from"./iframe-CMZM34Nm.js";import{P as p}from"./pdf-viewer-D7uccBMf.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DixzTr7Y.js";import"./preload-helper-T_55Ld-4.js";import"./PdfViewer-i_GBGL9A.js";import"./index-CPwwZizP.js";import"./BasePdfViewer-Dha1WMIS.js";import"./BasePdfViewer.module.css-CHMLa-aB.js";import"./PdfViewerAnnotationLayer-DnKSU9Z0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dh9Eb4sD.js";import"./PdfViewerOutlineSidebar-FY4xjTzs.js";import"./PdfViewerSidebarHeader-BWMXxTRY.js";import"./useBaseUiId-3LVIhb8Q.js";import"./useControlled-DrBMs-2h.js";import"./CompositeRoot-Dx2pGdPc.js";import"./CompositeItem-CAkD41ki.js";import"./ToolbarRootContext-Q3-albnw.js";import"./composite-BLgd2D-S.js";import"./svgIconContainer-MNS-5CB_.js";import"./PdfViewerSearchBar-BBBlJJKp.js";import"./chevron-up-B8IKEgQK.js";import"./chevron-down-DGTOO9UD.js";import"./cross-EHESnZVq.js";import"./PdfViewerSidebar-DNTdd5st.js";import"./index-EiUiPvzp.js";import"./index-DseLBzy9.js";import"./index-DIXzfJRB.js";import"./PdfViewerToolbar-Csf8y8sk.js";import"./Button-ClIIGhQ-.js";import"./chevron-right-BxfxQjP0.js";import"./Input-CXcmcuOy.js";import"./search-oY9nbA70.js";import"./spin-CL5xWgTD.js";import"./error-CWU2GFiR.js";import"./withOsdkMetrics-DRVxGjiO.js";import"./makeExternalStore-C8qTazFT.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
