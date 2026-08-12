import{j as r,M as s}from"./iframe-zt8gp64C.js";import{P as p}from"./pdf-viewer-CrPzS3eR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-vvvyDJ-o.js";import"./preload-helper-D2a9Td0v.js";import"./PdfRenderer-B0AeSumi.js";import"./index-DoHyhu1H.js";import"./PdfViewer-BH33sqUH.js";import"./PdfViewer.module.css-CTnd0NkY.js";import"./PdfViewerAnnotationLayer-DDtm7s2f.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-WX2-mpTq.js";import"./PdfViewerOutlineSidebar-B1nmODTy.js";import"./PdfViewerSidebarHeader-CqOKYQXo.js";import"./useBaseUiId-CCqwL6UI.js";import"./useControlled-B2Qs_OA4.js";import"./CompositeRoot-NodSbLyf.js";import"./CompositeItem-Brt2sv8U.js";import"./ToolbarRootContext-C57K8W0-.js";import"./composite-CiBYjtJq.js";import"./svgIconContainer-0IC9WVdo.js";import"./PdfViewerSearchBar-a8tQItOn.js";import"./chevron-up-CSM3mvqe.js";import"./chevron-down-CBSyC7tf.js";import"./cross-De0nnUUS.js";import"./PdfViewerSidebar-CxWrU7FK.js";import"./index-D_xoP6e4.js";import"./index-D5-rUW4c.js";import"./index-DKrLb4UT.js";import"./PdfViewerToolbar-FtK6j8ug.js";import"./Button-DeMnr8Np.js";import"./chevron-right-uuKLnXEV.js";import"./Input-CSTLDdZZ.js";import"./search-CkhkhpUr.js";import"./spin-BFdN9M7g.js";import"./error-9mYmZixJ.js";import"./withOsdkMetrics-C6hfCkXD.js";import"./makeExternalStore-kuj4NcTB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
