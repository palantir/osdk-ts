import{j as r,M as s}from"./iframe--rHM778H.js";import{P as p}from"./pdf-viewer-C9L5VZsq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZCRSRB5.js";import"./preload-helper-DpVBsV2L.js";import"./PdfViewer-mtNwwXuR.js";import"./index-BElFIwyB.js";import"./BasePdfViewer-j0qDuOFD.js";import"./BasePdfViewer.module.css-Mb2J-rj8.js";import"./PdfViewerAnnotationLayer-B7GW-Qgo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zfzVXMld.js";import"./PdfViewerOutlineSidebar-Bm2Lh68m.js";import"./PdfViewerSidebarHeader-ow50m8rB.js";import"./useBaseUiId-BT7Lgjzv.js";import"./useControlled-BERkl8jy.js";import"./CompositeRoot-Bvt1bQsi.js";import"./CompositeItem-5osJRFVq.js";import"./ToolbarRootContext-DNOQmnhU.js";import"./composite-CaRBo0mp.js";import"./svgIconContainer-CjX9_w9R.js";import"./PdfViewerSearchBar-CZgXRF6_.js";import"./chevron-up-TTOku_SS.js";import"./chevron-down-BlvURY3l.js";import"./cross-CHXgNJax.js";import"./PdfViewerSidebar-B5PHkgd7.js";import"./index-CmizMsna.js";import"./index-B1NiRkYf.js";import"./index-D6fdAiU5.js";import"./PdfViewerToolbar-Wzf9xqob.js";import"./Button-BOD28ASd.js";import"./chevron-right-DZ5Fn4yI.js";import"./Input-DqZJVW1Y.js";import"./search-ZsY-Nyc_.js";import"./spin-DDlC4aAL.js";import"./error-CPHhJfnm.js";import"./withOsdkMetrics-DWwTgGIe.js";import"./makeExternalStore-CUNRgSrC.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
