import{j as r,M as s}from"./iframe-CaEl2eka.js";import{P as p}from"./pdf-viewer-CHNZPdUK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BcLOVCQg.js";import"./preload-helper-CKJhYclM.js";import"./PdfViewer-BSXXq77p.js";import"./index-Dao3z4xN.js";import"./BasePdfViewer--SZuRB_-.js";import"./BasePdfViewer.module.css-TM8QDCFG.js";import"./PdfViewerAnnotationLayer-AUBunZfG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-6OpQQZYj.js";import"./PdfViewerOutlineSidebar-DBSu6EgM.js";import"./PdfViewerSidebarHeader-DnK4VGzi.js";import"./useBaseUiId-C6NCgBGS.js";import"./useControlled-DCzWHf0h.js";import"./CompositeRoot-DKm_B_-x.js";import"./CompositeItem-_nl0E7_8.js";import"./ToolbarRootContext--ihq9xQk.js";import"./composite-CDJBgnca.js";import"./svgIconContainer-BZS1llvH.js";import"./PdfViewerSearchBar-BzQBKdka.js";import"./chevron-up-BsGVRBWQ.js";import"./chevron-down-CoZ1s0t9.js";import"./cross-w8xD3Kul.js";import"./PdfViewerSidebar-BxBZIh6O.js";import"./index-DaKhz2zi.js";import"./index-B-jhfDuh.js";import"./index-BWzb8A31.js";import"./PdfViewerToolbar-DP9tv6ln.js";import"./Button-Bv8tSuuM.js";import"./chevron-right-Ae9a0qZD.js";import"./Input-Dxv9-Vzq.js";import"./search-00eTLW-R.js";import"./spin-BkmnMZ_F.js";import"./error-Zn5rVwYN.js";import"./withOsdkMetrics-B62KTojI.js";import"./makeExternalStore-CmUF4kPq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
