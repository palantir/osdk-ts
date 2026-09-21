import{j as r,M as s}from"./iframe-BOj5ppke.js";import{P as p}from"./pdf-viewer-B7d4egXs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B81jdGNz.js";import"./preload-helper-CBHct16F.js";import"./PdfViewer-BHSQhPPW.js";import"./index-HKvlrTBa.js";import"./BasePdfViewer-BKRYF9Cx.js";import"./BasePdfViewer.module.css-CWFE0DGk.js";import"./PdfViewerAnnotationLayer-B558P0eZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjeY3ZwI.js";import"./PdfViewerOutlineSidebar-coMcfHuT.js";import"./PdfViewerSidebarHeader-CRSdV96Y.js";import"./useBaseUiId-BNy53Xwg.js";import"./useControlled-7cY7BcCI.js";import"./CompositeRoot-P1GK0rN_.js";import"./CompositeItem-DOYu6l81.js";import"./ToolbarRootContext-BwQvbarU.js";import"./composite-BIYhI5rN.js";import"./svgIconContainer-BuTDWv6N.js";import"./PdfViewerSearchBar-CcMQ_RdB.js";import"./chevron-up-CqVYUoaB.js";import"./chevron-down-CNYfkkhw.js";import"./cross-DNHN82gf.js";import"./PdfViewerSidebar-B-k1qO4O.js";import"./index-CZ8HqYif.js";import"./index-yY_I17Ls.js";import"./index-D09ehKI5.js";import"./PdfViewerToolbar-tkdRpkHw.js";import"./Button-KVqGzs9n.js";import"./chevron-right-Ca4oCfv8.js";import"./Input-D8jSSVKT.js";import"./search-Df27sRIb.js";import"./spin-B7uU6706.js";import"./error-DVmdWFmh.js";import"./withOsdkMetrics-RevSluC0.js";import"./makeExternalStore-EqBWCSWE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
