import{j as r,M as s}from"./iframe-fPd3ZPuu.js";import{P as p}from"./pdf-viewer-CwtasOZL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DolPZst6.js";import"./preload-helper-5yag0Mtu.js";import"./PdfRenderer-dQehk8Ss.js";import"./index-CSsrsxtE.js";import"./PdfViewer-DuuZMxcC.js";import"./PdfViewer.module.css-C9LUWnpE.js";import"./PdfViewerAnnotationLayer-D3qdowZ_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BS6mAzy7.js";import"./PdfViewerOutlineSidebar-DJxqDXu7.js";import"./PdfViewerSidebarHeader-BwsemvFk.js";import"./useBaseUiId-DLwhWcM7.js";import"./useControlled-BKaFuND4.js";import"./CompositeRoot-CBTdyUlo.js";import"./CompositeItem-VGwfDYt4.js";import"./ToolbarRootContext-h03d-5AE.js";import"./composite-DajFV86i.js";import"./svgIconContainer-DNWpTeVC.js";import"./PdfViewerSearchBar-D-TbWiHB.js";import"./chevron-up-DxE2RV5q.js";import"./chevron-down-8zAyFdFU.js";import"./cross-BySQGXOf.js";import"./PdfViewerSidebar-DzdYfl1A.js";import"./index-DqcMwp2a.js";import"./index-Dg0pnNJ_.js";import"./index-DBW89Y8Z.js";import"./PdfViewerToolbar-Bqul3jw2.js";import"./Button-DDSU9lrV.js";import"./chevron-right-CmSrquFD.js";import"./Input-bozW2I1f.js";import"./search-B6gvipFg.js";import"./spin-B2eOndx9.js";import"./error-BlTYrgdb.js";import"./withOsdkMetrics-DPWNWq30.js";import"./makeExternalStore-eN0OdWna.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
