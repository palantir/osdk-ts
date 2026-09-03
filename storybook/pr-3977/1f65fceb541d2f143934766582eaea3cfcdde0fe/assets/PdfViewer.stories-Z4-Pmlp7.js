import{j as r,M as s}from"./iframe-B9NaG1GB.js";import{P as p}from"./pdf-viewer-Pkfe9yWd.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D7w1oRo5.js";import"./preload-helper-udZSqlM2.js";import"./PdfViewer-BIVt0257.js";import"./index-yUq6Iven.js";import"./BasePdfViewer-3rI6XrSl.js";import"./BasePdfViewer.module.css-BVXqcrzF.js";import"./PdfViewerAnnotationLayer-CufARflR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJosHNbX.js";import"./PdfViewerOutlineSidebar-DS-znB9P.js";import"./PdfViewerSidebarHeader-BuI-Yz4U.js";import"./useBaseUiId-DgxXXPsW.js";import"./useControlled-CxdGo8Ww.js";import"./CompositeRoot-CojgliJq.js";import"./CompositeItem-D9-3_2mb.js";import"./ToolbarRootContext-Dkc8a9C0.js";import"./composite-B_1l4wbr.js";import"./svgIconContainer-Ch9sOYGG.js";import"./PdfViewerSearchBar-C6OZBoLE.js";import"./chevron-up-McO66pj9.js";import"./chevron-down-CsyXd9Xe.js";import"./cross-BaJlm1ee.js";import"./PdfViewerSidebar-aRW97y57.js";import"./index-bgsc7zUx.js";import"./index-DqyKTsev.js";import"./index-oAe2VpPP.js";import"./PdfViewerToolbar-D0Y9WpIZ.js";import"./Button-D3MlS94Q.js";import"./chevron-right-BFgNda7l.js";import"./Input-BjAUxC1s.js";import"./search-C7EjfmAX.js";import"./spin-DQzPwWlO.js";import"./error-BcUNHOKh.js";import"./withOsdkMetrics-1M7RvxJT.js";import"./makeExternalStore-Ct-9sVSe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
