import{j as r,M as s}from"./iframe-Dku1rot2.js";import{P as p}from"./pdf-viewer-vPLKAN3m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-cmHYYpXE.js";import"./preload-helper-B1jRvLNW.js";import"./PdfViewer-DORc6gWw.js";import"./index-CpbATsh6.js";import"./BasePdfViewer-BdMBILFp.js";import"./BasePdfViewer.module.css-B64e3MFt.js";import"./PdfViewerAnnotationLayer-2RjSpHwP.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bitu7Ou2.js";import"./PdfViewerOutlineSidebar-BhLXh3sn.js";import"./PdfViewerSidebarHeader-DY2EsVRU.js";import"./useBaseUiId-BUKWDElb.js";import"./useControlled-DwMnSwB6.js";import"./CompositeRoot-3Aq8sZem.js";import"./CompositeItem-BreNqiOh.js";import"./ToolbarRootContext-CXEqftjp.js";import"./composite-BePe6hVW.js";import"./svgIconContainer--MRhEEk0.js";import"./PdfViewerSearchBar-DkVIGJKX.js";import"./chevron-up-Dzh4oNVQ.js";import"./chevron-down-B4TAPheD.js";import"./cross-CYdU8q6K.js";import"./PdfViewerSidebar-Bj21JKKd.js";import"./index-DTheSZ4d.js";import"./index-rdZNlnOZ.js";import"./index--u9NxfUY.js";import"./PdfViewerToolbar-yOI9zME5.js";import"./Button-CGaTAwDT.js";import"./chevron-right-5oCO42l0.js";import"./Input-DJRIt2l4.js";import"./search-UFTU3MKj.js";import"./spin-BDooCahx.js";import"./error-setnCXRk.js";import"./withOsdkMetrics-n7CfGLfD.js";import"./makeExternalStore-rRh8-oZl.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
