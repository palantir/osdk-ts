import{j as r,M as s}from"./iframe-BX7t1m7X.js";import{P as p}from"./pdf-viewer-CaMcdUjD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C9nJj3kd.js";import"./preload-helper-vs1LH6RG.js";import"./PdfViewer-B6tKlPYQ.js";import"./index-CWnEVrcD.js";import"./BasePdfViewer-C9hiOjp-.js";import"./BasePdfViewer.module.css-DT6LT3zi.js";import"./PdfViewerAnnotationLayer-DRw058MQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-t7m8yv0g.js";import"./PdfViewerOutlineSidebar-Ct8RVlk3.js";import"./PdfViewerSidebarHeader-BpenkkuT.js";import"./useBaseUiId-Bmd4FcfN.js";import"./useControlled-CIYqr8vl.js";import"./CompositeRoot-zGI4VsJ4.js";import"./CompositeItem-DzuKssIv.js";import"./ToolbarRootContext-D-cnH9Zf.js";import"./composite-quGdXDs4.js";import"./svgIconContainer-B1_oouOg.js";import"./PdfViewerSearchBar-CxOVHWpm.js";import"./chevron-up-B_BYF8A4.js";import"./chevron-down-Bo5JkLwj.js";import"./cross-DHmTrIXq.js";import"./PdfViewerSidebar-Cv6B0qRU.js";import"./index-BjcqwpJd.js";import"./index-CKebcxwg.js";import"./index--sVV4r8-.js";import"./PdfViewerToolbar-C9afpQ-R.js";import"./Button-HBtTsXNU.js";import"./chevron-right-BDmrxXQe.js";import"./Input-ffGk1Cv0.js";import"./search-BOoacuk7.js";import"./spin-Du50ZcRd.js";import"./error-CwXOiZUY.js";import"./withOsdkMetrics-XI_BAq5U.js";import"./makeExternalStore-NTXRhgR1.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
