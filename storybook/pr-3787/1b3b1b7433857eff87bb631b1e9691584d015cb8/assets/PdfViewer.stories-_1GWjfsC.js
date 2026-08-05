import{j as r,M as s}from"./iframe-DFNsoP3X.js";import{P as p}from"./pdf-viewer-Bz5B_uNK.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CYsj6Xuz.js";import"./preload-helper-BnvOcoub.js";import"./PdfRenderer-JnyTKvio.js";import"./index-BAf1JHF8.js";import"./PdfViewer-lalGCSVY.js";import"./PdfViewer.module.css-xyEX_d4k.js";import"./PdfViewerAnnotationLayer-J2URMClD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GVZsBExV.js";import"./PdfViewerOutlineSidebar-Bx_0qibz.js";import"./PdfViewerSidebarHeader-CImv2iT5.js";import"./useBaseUiId-DV1E2N8q.js";import"./useControlled-B1rQefwr.js";import"./CompositeRoot-Ckzhmfpn.js";import"./CompositeItem-HoQHK7Za.js";import"./ToolbarRootContext-Cq_OLprv.js";import"./composite-DbYvbJJQ.js";import"./svgIconContainer-aDF4o5gq.js";import"./PdfViewerSearchBar-LSuqT03d.js";import"./chevron-up-BEuTzmit.js";import"./chevron-down-BOoKZVr9.js";import"./cross-Bg80tPH2.js";import"./PdfViewerSidebar-RqGTa2Tv.js";import"./index-DUsvYWV3.js";import"./index-H_W3OuJT.js";import"./index-B-idBXyv.js";import"./PdfViewerToolbar-C1G_RQ6-.js";import"./Button-sZvKHtmc.js";import"./chevron-right-Bx_8wa75.js";import"./Input-BtXsYgmE.js";import"./search-bneiCuCd.js";import"./spin-B2_GgUV8.js";import"./error-Cyul2rOd.js";import"./withOsdkMetrics-C2t_lHCG.js";import"./makeExternalStore-oXaeTCyi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
