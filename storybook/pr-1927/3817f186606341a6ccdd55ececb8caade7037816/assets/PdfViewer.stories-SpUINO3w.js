import{j as r,M as s}from"./iframe-DmjyB9qr.js";import{P as p}from"./pdf-viewer-CWzef0OA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Blr7AFSz.js";import"./preload-helper-CAx3wjDj.js";import"./PdfViewer-CyyALH4v.js";import"./index-D4TDlc_O.js";import"./BasePdfViewer-BihJ5UhZ.js";import"./BasePdfViewer.module.css-BEyGm1Wi.js";import"./PdfViewerAnnotationLayer-zZSou8f-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mbOlqkjO.js";import"./PdfViewerOutlineSidebar-R9p1H_1B.js";import"./PdfViewerSidebarHeader-BSexjVYi.js";import"./useBaseUiId-BIBlatd5.js";import"./useControlled-Bb9znHKm.js";import"./CompositeRoot-CwGyj2Cf.js";import"./CompositeItem-DhSM1hah.js";import"./ToolbarRootContext-9w_REGks.js";import"./composite-ClGRLeRM.js";import"./svgIconContainer-D2c8Ba4-.js";import"./PdfViewerSearchBar-BGHS5GiN.js";import"./chevron-up-ChvIVDyp.js";import"./chevron-down-8HOE1Tp7.js";import"./cross-C5lxgD8z.js";import"./PdfViewerSidebar-C7_2bpmp.js";import"./index-ByDovlnf.js";import"./index-CaiUNbzc.js";import"./index-Cv1wdKn8.js";import"./PdfViewerToolbar-Bezx1Vr5.js";import"./Button-DBHSL7QN.js";import"./chevron-right-CSPvlqX9.js";import"./Input-CLw0N-7T.js";import"./search-CQ17z9WA.js";import"./spin-DJbmMb_j.js";import"./error-C5ZuOycH.js";import"./withOsdkMetrics-DRRr7i5M.js";import"./makeExternalStore-BpvdNYu5.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
