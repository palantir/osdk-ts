import{j as r,M as s}from"./iframe-ChQS4fGd.js";import{P as p}from"./pdf-viewer-DGkzj8CR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject--pagsVs8.js";import"./preload-helper-o8EhEng-.js";import"./PdfRenderer-DVfmvTLM.js";import"./index-DZsfYQUh.js";import"./PdfViewer-C3OgRvTk.js";import"./PdfViewer.module.css-zxmmQKtR.js";import"./PdfViewerAnnotationLayer-BmC3d8Y3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CM8SibFB.js";import"./PdfViewerOutlineSidebar-Dnhoe7vm.js";import"./PdfViewerSidebarHeader-DAS5maDM.js";import"./useBaseUiId-Dg-otjCc.js";import"./useControlled-BniVA-EE.js";import"./CompositeRoot-DMMZMkx3.js";import"./CompositeItem-Bn7WLSGF.js";import"./ToolbarRootContext-BjBgCtBr.js";import"./composite-f13ydLOS.js";import"./svgIconContainer-UT5S-Qtm.js";import"./PdfViewerSearchBar-CbOpEt4v.js";import"./chevron-up-CSifF-eK.js";import"./chevron-down-DFnbRAwR.js";import"./cross-BqJybnVy.js";import"./PdfViewerSidebar-BVf7ohPW.js";import"./index-Bn32b-Uw.js";import"./index-9CgMei2H.js";import"./index-nt6OvndA.js";import"./PdfViewerToolbar-C7rXOUbZ.js";import"./Button-CYlIk1Nd.js";import"./chevron-right-B5ROIyik.js";import"./Input-BFNpbac3.js";import"./search-BFdafJgA.js";import"./spin-BxElhpjC.js";import"./error-eFbYOEWl.js";import"./withOsdkMetrics-BCsSlf5g.js";import"./makeExternalStore-CrnVNZp8.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
