import{j as r,M as s}from"./iframe-j4hxb_Xi.js";import{P as p}from"./pdf-viewer-CaeFJ_1P.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHN3Y5tc.js";import"./preload-helper-Do_lUb4H.js";import"./PdfRenderer-DInMAjIZ.js";import"./index-C2vlaWfk.js";import"./PdfViewer-0Vrnow-V.js";import"./PdfViewer.module.css-uEnTLIe3.js";import"./PdfViewerAnnotationLayer-B1FsiskY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CAS8ISET.js";import"./PdfViewerOutlineSidebar-DbrKCQlA.js";import"./PdfViewerSidebarHeader-Corv5cBx.js";import"./useBaseUiId-D5s976C8.js";import"./useControlled-BmMzvKVf.js";import"./CompositeRoot-CBm-5LsE.js";import"./CompositeItem-DUNLWbkZ.js";import"./ToolbarRootContext-DnOPaxZU.js";import"./composite-8AKIVtYF.js";import"./svgIconContainer-ML2hE1ik.js";import"./PdfViewerSearchBar-CkSoxfcq.js";import"./chevron-up-CM73aMsm.js";import"./chevron-down-RSAghytU.js";import"./cross-V5IOmaZQ.js";import"./PdfViewerSidebar-BNmcF0Yg.js";import"./index-UqWZCDPB.js";import"./index-BMB9qZtR.js";import"./index-C7oNg6UJ.js";import"./PdfViewerToolbar-LLGBXQjn.js";import"./Button-GEQzl9-M.js";import"./chevron-right-PuCQmJtc.js";import"./Input-D8fXhbo_.js";import"./search-DCDkF9iN.js";import"./spin-Bg86Ejlh.js";import"./error-C23fB5PK.js";import"./withOsdkMetrics-BYBtK9LJ.js";import"./makeExternalStore-BjQ810PL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
