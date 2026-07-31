import{j as r,M as s}from"./iframe-MF63RCUZ.js";import{P as p}from"./pdf-viewer-CJPfn3aq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BCpBWrUZ.js";import"./preload-helper-DvQeEzbA.js";import"./PdfRenderer-Bvhg7UJ8.js";import"./index-BsS8Ad6v.js";import"./PdfViewer-DiuPeLSy.js";import"./PdfViewer.module.css-b6yvgmuf.js";import"./PdfViewerAnnotationLayer-BrbxbpiB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJYTV8po.js";import"./PdfViewerOutlineSidebar-CCOW9aOE.js";import"./PdfViewerSidebarHeader-NaNffktO.js";import"./useBaseUiId-D7wMMgsQ.js";import"./useControlled-TaG5JPxa.js";import"./CompositeRoot-Bc5MyaFw.js";import"./CompositeItem-ChERQduX.js";import"./ToolbarRootContext-BoLp0fCS.js";import"./composite-CBfzCsM2.js";import"./svgIconContainer-CzxYuxa2.js";import"./PdfViewerSearchBar-Y26keYjs.js";import"./chevron-up-B65ImNYK.js";import"./chevron-down-qOKU7sUg.js";import"./cross-C5H7VazR.js";import"./PdfViewerSidebar-CxU_xRrP.js";import"./index-HZptSSoa.js";import"./index-B1tq7kv6.js";import"./index-B06jfM7c.js";import"./PdfViewerToolbar-B86M38AE.js";import"./Button-Bzl-gWe6.js";import"./chevron-right-BVzw__MA.js";import"./Input-B6hVPh5g.js";import"./search-4dF9BFi8.js";import"./spin-DHV5hlPH.js";import"./error-CctGQP8r.js";import"./withOsdkMetrics-Bxcv8v2w.js";import"./makeExternalStore-wceSjJpr.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
