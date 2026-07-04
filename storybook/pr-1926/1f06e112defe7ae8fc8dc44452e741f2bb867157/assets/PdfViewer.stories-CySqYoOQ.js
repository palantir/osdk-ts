import{j as r,M as s}from"./iframe-Cbvz--ap.js";import{P as p}from"./pdf-viewer-DUAQZF8p.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-pRRCWDeH.js";import"./preload-helper-FkStB5Zs.js";import"./PdfRenderer-DFDREYV-.js";import"./index-CvbvMARM.js";import"./PdfViewer-BKIqGxFj.js";import"./PdfViewer.module.css-Bs9mfZJ1.js";import"./PdfViewerAnnotationLayer-oja6tqhC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CR0F8t24.js";import"./PdfViewerOutlineSidebar-DjcBOrx9.js";import"./PdfViewerSidebarHeader-B8B5K0I6.js";import"./useBaseUiId-Df_vl-3Z.js";import"./useControlled--RTYo_QZ.js";import"./CompositeRoot-BwPWGB0O.js";import"./CompositeItem-DPkyiQny.js";import"./ToolbarRootContext-ISXILCdO.js";import"./composite-Bcrw3nO4.js";import"./svgIconContainer-DyoXLVNM.js";import"./PdfViewerSearchBar-DqQy0qdl.js";import"./chevron-up-BJylSC33.js";import"./chevron-down-DcPxx9A3.js";import"./cross-CBeCnkf0.js";import"./PdfViewerSidebar-BpfPB0WV.js";import"./index-DnwSP-ip.js";import"./index-QV0aMfVF.js";import"./index-CP3ZTFUy.js";import"./PdfViewerToolbar-DI_pYc81.js";import"./Button-CG_Kv4Or.js";import"./chevron-right-CYDJRS4X.js";import"./Input-D2cwtccY.js";import"./search-CE0tvX4w.js";import"./spin-DgJHPyQa.js";import"./error-DxlZumZ3.js";import"./withOsdkMetrics-CgzEmCLz.js";import"./makeExternalStore-C3eOyFVJ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
