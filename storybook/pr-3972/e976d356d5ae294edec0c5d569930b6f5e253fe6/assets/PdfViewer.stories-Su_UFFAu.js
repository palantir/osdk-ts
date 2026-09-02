import{j as r,M as s}from"./iframe-fyhOhwEJ.js";import{P as p}from"./pdf-viewer-BapZqUUy.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cj8u5mCR.js";import"./preload-helper-DZoapQc5.js";import"./PdfViewer-CjXodhax.js";import"./index-D-0-qAO5.js";import"./BasePdfViewer-B8KV4ISf.js";import"./BasePdfViewer.module.css-KlqqP99Q.js";import"./PdfViewerAnnotationLayer-CJBnIN96.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJrvIHty.js";import"./PdfViewerOutlineSidebar-ByXkQV8U.js";import"./PdfViewerSidebarHeader-D7KyADfF.js";import"./useBaseUiId-CZh58POx.js";import"./useControlled-ClsMoo9s.js";import"./CompositeRoot-ff8yIbLv.js";import"./CompositeItem-BW8rxov7.js";import"./ToolbarRootContext-D9LUIP1a.js";import"./composite-7m6ynQ4d.js";import"./svgIconContainer-D3XXZDFA.js";import"./PdfViewerSearchBar-DZ2BahPE.js";import"./chevron-up-BVsCwZtx.js";import"./chevron-down-BpyNxw-E.js";import"./cross-DcnXKO8D.js";import"./PdfViewerSidebar-C9SLaUqv.js";import"./index-Vhqxhhfj.js";import"./index-B_-hV7j3.js";import"./index-CYvM2k13.js";import"./PdfViewerToolbar-CMxpphsi.js";import"./Button-Co7avqcv.js";import"./chevron-right-Dcz4gmuG.js";import"./Input-Cz7IuMZA.js";import"./search-wMsJ6744.js";import"./spin-BTctDu3W.js";import"./error-CMmhcpte.js";import"./withOsdkMetrics-Bf5xCGJp.js";import"./makeExternalStore-NbT1IyrN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
