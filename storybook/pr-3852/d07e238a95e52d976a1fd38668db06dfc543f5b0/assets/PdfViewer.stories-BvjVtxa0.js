import{j as r,M as s}from"./iframe-DPU4dU5t.js";import{P as p}from"./pdf-viewer-AlkevP6M.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7m72R2D.js";import"./preload-helper-BfY5BfRw.js";import"./PdfRenderer-Dth7zIto.js";import"./index-BWZ_jsFd.js";import"./PdfViewer-kCr7m4kS.js";import"./PdfViewer.module.css-C0SqAsOm.js";import"./PdfViewerAnnotationLayer-CNwWSTcX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DTDJTZ-2.js";import"./PdfViewerOutlineSidebar-mi5xpsJq.js";import"./PdfViewerSidebarHeader-CcCt4HtD.js";import"./useBaseUiId-DL2j5itx.js";import"./useControlled-7lGv1XpS.js";import"./CompositeRoot-BkWZB2Gh.js";import"./CompositeItem-CDOXdB89.js";import"./ToolbarRootContext-DHSfKOeF.js";import"./composite-CBPw2eZY.js";import"./svgIconContainer-DMEc4fQs.js";import"./PdfViewerSearchBar-BQKkhY8U.js";import"./chevron-up-Dc4Xra-8.js";import"./chevron-down-CAPpObNP.js";import"./cross-GP91ECu7.js";import"./PdfViewerSidebar-mm-j-Z0K.js";import"./index-AkfEBwJt.js";import"./index-CQuzS6zi.js";import"./index-BuyWU3Mi.js";import"./PdfViewerToolbar-C7477QIW.js";import"./Button-CHOirzFo.js";import"./chevron-right-CF_OBwSc.js";import"./Input-CkOmJ7l-.js";import"./search-CWx5rAiq.js";import"./spin-QQpCekb4.js";import"./error-hkPL5XIl.js";import"./withOsdkMetrics-DVg-5hEq.js";import"./makeExternalStore-GTeGNvOb.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
