import{j as r,M as s}from"./iframe-C-b6oTOJ.js";import{P as p}from"./pdf-viewer-Cz2oCKj7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BTPKaZO0.js";import"./preload-helper-BeH59gqJ.js";import"./PdfViewer-CMEHE7o6.js";import"./index-DE1s0YYF.js";import"./BasePdfViewer-Bb1GxKDl.js";import"./BasePdfViewer.module.css-DjwK060C.js";import"./PdfViewerAnnotationLayer-CQ2_MTI6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D540CxjQ.js";import"./PdfViewerOutlineSidebar-BoNQ4lFb.js";import"./PdfViewerSidebarHeader-BjeOX70j.js";import"./useBaseUiId-CkMODpS3.js";import"./useControlled-g-pxj8O4.js";import"./CompositeRoot-By7QrvDw.js";import"./CompositeItem-BEGPA2jt.js";import"./ToolbarRootContext-D9YuleTy.js";import"./composite-4UqYDIuK.js";import"./svgIconContainer-OHRV30Tv.js";import"./PdfViewerSearchBar-DAOxzz1O.js";import"./chevron-up-BOSh8gY-.js";import"./chevron-down-D7cmGpd4.js";import"./cross-CHQB6uFl.js";import"./PdfViewerSidebar-8csFJavl.js";import"./index-D6jWMBsi.js";import"./index-0ZNUZbhg.js";import"./index-BVjVMQ97.js";import"./PdfViewerToolbar-Bo_jdLCk.js";import"./Button-CV_yYG-R.js";import"./chevron-right-CHRf1YWp.js";import"./Input-BSxN1vwO.js";import"./search-JVftW7k-.js";import"./spin-CYHqXpOb.js";import"./error-ByhaKTr1.js";import"./withOsdkMetrics-BrJ-pBLm.js";import"./makeExternalStore-B_SxmnOK.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
