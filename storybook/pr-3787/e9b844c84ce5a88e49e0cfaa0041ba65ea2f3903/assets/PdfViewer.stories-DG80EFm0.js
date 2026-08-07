import{j as r,M as s}from"./iframe-B0W1tjyx.js";import{P as p}from"./pdf-viewer-CD71eUPS.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C7YhHHAS.js";import"./preload-helper-9BNFzYVn.js";import"./PdfRenderer-DFbWFVHt.js";import"./index-B0ZI_T4A.js";import"./PdfViewer-CK1Cs6Vz.js";import"./PdfViewer.module.css-DgCDtUND.js";import"./PdfViewerAnnotationLayer-5jXJ3Zi4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKkuj15D.js";import"./PdfViewerOutlineSidebar-CsGbeOGv.js";import"./PdfViewerSidebarHeader-DQhI2mW5.js";import"./useBaseUiId-Dg0EtU88.js";import"./useControlled-CFQJO6Op.js";import"./CompositeRoot-BdkKCAy_.js";import"./CompositeItem-B3C1me1o.js";import"./ToolbarRootContext-D6BYbpCQ.js";import"./composite-BvCgECMb.js";import"./svgIconContainer-JVsHGGQJ.js";import"./PdfViewerSearchBar-La_EfDOg.js";import"./chevron-up-D55b56so.js";import"./chevron-down-BO0Ma7WA.js";import"./cross-Bvf_hoCy.js";import"./PdfViewerSidebar-BPw09wjV.js";import"./index-B26rJ8sm.js";import"./index-0JUS0bl9.js";import"./index-D_b8RHzl.js";import"./PdfViewerToolbar-ejMw9xmc.js";import"./Button-CllyD5Fk.js";import"./chevron-right-Cvvub1jW.js";import"./Input-CJ9Yoyko.js";import"./search-BdvsCHgj.js";import"./spin-Cqx3oT_T.js";import"./error-hxPE7cUz.js";import"./withOsdkMetrics-Dl2A3XwS.js";import"./makeExternalStore-s1PuIN2e.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
