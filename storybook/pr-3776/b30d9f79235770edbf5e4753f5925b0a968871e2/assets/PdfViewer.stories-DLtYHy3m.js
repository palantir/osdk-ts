import{j as r,M as s}from"./iframe--zC_rNSE.js";import{P as p}from"./pdf-viewer-jGEUMGnt.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dv4Ovutr.js";import"./preload-helper-DYnZD4Bp.js";import"./PdfRenderer-D5iBrexM.js";import"./index-C7vK7TKT.js";import"./PdfViewer-VKi4kzUD.js";import"./PdfViewer.module.css-BK5Am_tf.js";import"./PdfViewerAnnotationLayer-BtMzADPv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BfBhMvYV.js";import"./PdfViewerOutlineSidebar-DLeYtglO.js";import"./PdfViewerSidebarHeader--mmoYvAK.js";import"./useBaseUiId-Du6_ka1U.js";import"./useControlled-DosfrPgq.js";import"./CompositeRoot-CCinzzWe.js";import"./CompositeItem-CFehnZQL.js";import"./ToolbarRootContext-D5d-Ayel.js";import"./composite-D6i-F4zZ.js";import"./svgIconContainer-BSLGGDPy.js";import"./PdfViewerSearchBar-DhhgDFEx.js";import"./chevron-up-Dkv8mqW0.js";import"./chevron-down-nViOd0cr.js";import"./cross-psL1fqiM.js";import"./PdfViewerSidebar-B8mWxJVo.js";import"./index-D27uMw8-.js";import"./index-BzW3EPJ0.js";import"./index-C2WM2yYl.js";import"./PdfViewerToolbar-BVx2Xbyo.js";import"./Button-9EpLya_p.js";import"./chevron-right-ow2vG1-H.js";import"./Input-D1rn4ByC.js";import"./search-9tv9kX9R.js";import"./spin-CE5zeend.js";import"./error-d8Uq0Jbt.js";import"./withOsdkMetrics-CljqM64x.js";import"./makeExternalStore-CC4dIOh5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
