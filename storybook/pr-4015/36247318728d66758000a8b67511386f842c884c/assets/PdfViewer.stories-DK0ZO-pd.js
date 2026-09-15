import{j as r,M as s}from"./iframe-Y1CUkKP1.js";import{P as p}from"./pdf-viewer-CS0hyB3w.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SSM6ddzF.js";import"./preload-helper-8Wffe73s.js";import"./PdfViewer-ClAG3p9M.js";import"./index-BgIb3D7l.js";import"./BasePdfViewer-BBcZZZYg.js";import"./BasePdfViewer.module.css-Ddkh5nLu.js";import"./PdfViewerAnnotationLayer-BRrbVeyV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BntWxKaf.js";import"./PdfViewerOutlineSidebar-DVHMEXtp.js";import"./PdfViewerSidebarHeader-CHaV5EFh.js";import"./useBaseUiId-AScn4b_2.js";import"./useControlled-21Syoeuq.js";import"./CompositeRoot-ByAMmmOq.js";import"./CompositeItem-Dj9wX2bL.js";import"./ToolbarRootContext-MbtwPZ1o.js";import"./composite-BF49Bsji.js";import"./svgIconContainer-zBluTTvF.js";import"./PdfViewerSearchBar-Tud2Wz-x.js";import"./chevron-up-C1kyhv0K.js";import"./chevron-down-AzVM-11H.js";import"./cross-C6CQ-Bph.js";import"./PdfViewerSidebar-CjJETJlo.js";import"./index-DGNKT7_4.js";import"./index-iBVyzjTo.js";import"./index-Bp2ZqYOt.js";import"./PdfViewerToolbar-Dk9ArggS.js";import"./Button-DxN7lWSP.js";import"./chevron-right-DNv9rbtc.js";import"./Input-Db9jSpBp.js";import"./search-kvTlC8VP.js";import"./spin-f9fzC8tO.js";import"./error-CxOGSZqi.js";import"./withOsdkMetrics-B3ENf8sD.js";import"./makeExternalStore-BeEve9Lc.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
