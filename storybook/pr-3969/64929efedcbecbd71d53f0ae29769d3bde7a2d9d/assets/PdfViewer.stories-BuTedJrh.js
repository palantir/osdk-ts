import{j as r,M as s}from"./iframe-Cha5bzcQ.js";import{P as p}from"./pdf-viewer-EJ2kkBeU.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rnRXXP2B.js";import"./preload-helper-DTIBEWF3.js";import"./PdfViewer-BEqeaP0T.js";import"./index-Bm3NhGlH.js";import"./BasePdfViewer-BLlzkA3u.js";import"./BasePdfViewer.module.css-Cmp3b-pn.js";import"./PdfViewerAnnotationLayer-CUAmrbvd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRlLjmvx.js";import"./PdfViewerOutlineSidebar-CwaARCbl.js";import"./PdfViewerSidebarHeader-CggG6kXl.js";import"./useBaseUiId-CoAf4zJ1.js";import"./useControlled-BsFUux1R.js";import"./CompositeRoot-BBj7b1_y.js";import"./CompositeItem-CI63tMYo.js";import"./ToolbarRootContext-BCJzUdOe.js";import"./composite-DwMGYBdi.js";import"./svgIconContainer-DA_Ed81f.js";import"./PdfViewerSearchBar-DUI0TuBf.js";import"./chevron-up-8p9sc37z.js";import"./chevron-down-BImkdPvb.js";import"./cross-sYD9GiNz.js";import"./PdfViewerSidebar-Nl_lzj4C.js";import"./index-Wr7-HV8X.js";import"./index-BuHsw6tX.js";import"./index-CRCMyzG5.js";import"./PdfViewerToolbar-DU7HxgQb.js";import"./Button-KiGmPYx_.js";import"./chevron-right-DH633oAQ.js";import"./Input-CS3x1fIq.js";import"./search-LEzBZeqH.js";import"./spin-D_XGl-_h.js";import"./error-JfmuoEvN.js";import"./withOsdkMetrics-5Xu_aVjO.js";import"./makeExternalStore-DIkaw39a.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
