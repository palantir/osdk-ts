import{j as r,M as s}from"./iframe-Dl62X5ic.js";import{P as p}from"./pdf-viewer-Bn-bh1yu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DPgFgUiO.js";import"./preload-helper-9xagDZWN.js";import"./PdfRenderer-MhRupu19.js";import"./index-r58F3SRz.js";import"./PdfViewer-B2QKDauz.js";import"./PdfViewer.module.css-1smN5rV0.js";import"./PdfViewerAnnotationLayer-CJtiSzW1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VtGPghav.js";import"./PdfViewerOutlineSidebar-BT20h6jP.js";import"./PdfViewerSidebarHeader-C1Nx78sj.js";import"./useBaseUiId-BZmuLScT.js";import"./useControlled-DXjG9kLU.js";import"./CompositeRoot-DXBUl9md.js";import"./CompositeItem-9M5fDXNa.js";import"./ToolbarRootContext-Bw5Q4Aok.js";import"./composite-5K-iGM63.js";import"./svgIconContainer-CDF0MBN3.js";import"./PdfViewerSearchBar-BQXUeHRQ.js";import"./chevron-up-nE4X6P8E.js";import"./chevron-down-B-xg4ZpH.js";import"./cross-Dz9bobDU.js";import"./PdfViewerSidebar-DwdIu6gt.js";import"./index-KYGZGSHD.js";import"./index-CnSx04IC.js";import"./index-VVu8Dx_K.js";import"./PdfViewerToolbar-Cl3WSpTh.js";import"./Button-ChSQqWTn.js";import"./chevron-right-B-GfVJbl.js";import"./Input-D7jaCKwy.js";import"./search-C2kc8148.js";import"./spin-CLHEwlQT.js";import"./error-Bdp21cmx.js";import"./withOsdkMetrics-Ycu2Npgr.js";import"./makeExternalStore-BL6KvBj8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
