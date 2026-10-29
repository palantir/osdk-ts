import{j as r,M as s}from"./iframe-BGwIwWEh.js";import{P as p}from"./pdf-viewer-DuBhBuva.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Da-vy-rp.js";import"./preload-helper-DaJMqj_l.js";import"./PdfViewer-NCv6xVS8.js";import"./index-IqKqgeW3.js";import"./BasePdfViewer-pTiqir-t.js";import"./BasePdfViewer.module.css-C3d45gCD.js";import"./PdfViewerAnnotationLayer-scHy2JFu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B137Lp7y.js";import"./PdfViewerOutlineSidebar-BBwvpqSo.js";import"./PdfViewerSidebarHeader-CqZlC2iZ.js";import"./useBaseUiId-Bx0PVkvu.js";import"./useControlled-DZytncd1.js";import"./CompositeRoot-DwumeJDc.js";import"./CompositeItem-D-aFyv1W.js";import"./ToolbarRootContext-BU6MqSEl.js";import"./composite-B2YG03DA.js";import"./svgIconContainer-o0yAa7DN.js";import"./PdfViewerSearchBar-F2x3JOCV.js";import"./chevron-up-DzkX_bFA.js";import"./chevron-down-Bm6Tj7Z6.js";import"./cross-CCJ4Erjw.js";import"./PdfViewerSidebar-Dsvos6Wl.js";import"./index-CTSacj2z.js";import"./index-CbmIHl_7.js";import"./index-Bo6Tdt1f.js";import"./PdfViewerToolbar-Dt2wdCBL.js";import"./Button-BhV9_fzg.js";import"./chevron-right-CbmSY-i6.js";import"./Input-D41ZdIt3.js";import"./search-BpQNC6sv.js";import"./spin-CesCyfwZ.js";import"./error-D5T_pCuL.js";import"./withOsdkMetrics-_pxO3ZE7.js";import"./makeExternalStore-BRaFC0yj.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
