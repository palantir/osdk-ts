import{j as r,M as s}from"./iframe-DSCKXMMn.js";import{P as p}from"./pdf-viewer-D7hmUPkQ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CORLKSAR.js";import"./preload-helper-ByptHhz6.js";import"./PdfViewer-Nk3inTG1.js";import"./index-C7t8d6sq.js";import"./BasePdfViewer-BTmfnnhs.js";import"./BasePdfViewer.module.css-ncJrM6qZ.js";import"./PdfViewerAnnotationLayer-DcHiMKjx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bjhuo9S1.js";import"./PdfViewerOutlineSidebar-8JiICScO.js";import"./PdfViewerSidebarHeader-MD3IGbmZ.js";import"./useBaseUiId-C9Ey5z8I.js";import"./useControlled-D9fcHZz8.js";import"./CompositeRoot-ZRLs-cek.js";import"./CompositeItem-DuylraaY.js";import"./ToolbarRootContext-DcygcfWk.js";import"./composite-CJGYUM8R.js";import"./svgIconContainer-D4l9MrWe.js";import"./PdfViewerSearchBar-tc76DYKm.js";import"./chevron-up-DELVbimy.js";import"./chevron-down-CoJlRxaZ.js";import"./cross-D9ih38aN.js";import"./PdfViewerSidebar-DqLPL6N1.js";import"./index-BNKB-ErD.js";import"./index-CCGpCs03.js";import"./index-DTvEyVWA.js";import"./PdfViewerToolbar-Db44h2Cm.js";import"./Button-DsHbP2Ls.js";import"./chevron-right-BsNInbZM.js";import"./Input-BzhFYkRc.js";import"./search-D1zNkldZ.js";import"./spin-Rea7EiH1.js";import"./error-KXOxkvIx.js";import"./withOsdkMetrics-DIi3nPfP.js";import"./makeExternalStore-BTu3d_5y.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
