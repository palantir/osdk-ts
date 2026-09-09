import{j as r,M as s}from"./iframe-b_8xiy3W.js";import{P as p}from"./pdf-viewer-lX8D-QaE.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Qna54av4.js";import"./preload-helper-D0v6g8Db.js";import"./PdfViewer-BKfHBtlt.js";import"./index-oZ2AYheq.js";import"./BasePdfViewer-3GnMhbUo.js";import"./BasePdfViewer.module.css-uyztFer5.js";import"./PdfViewerAnnotationLayer-DhzGfvhu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_pqB94L.js";import"./PdfViewerOutlineSidebar-CcdL5ADc.js";import"./PdfViewerSidebarHeader-Dm46_-HK.js";import"./useBaseUiId-DT31E3Yo.js";import"./useControlled-CAq9EV0h.js";import"./CompositeRoot-Bl25qG29.js";import"./CompositeItem-O5ez4ulJ.js";import"./ToolbarRootContext-BKksKq4U.js";import"./composite-cYMewAOc.js";import"./svgIconContainer-ByDmaFbM.js";import"./PdfViewerSearchBar-CWcc6AYY.js";import"./chevron-up-BJdWY50h.js";import"./chevron-down-DItPxyzq.js";import"./cross-CALAWLOA.js";import"./PdfViewerSidebar-CIA1tiMN.js";import"./index-BHrpVXex.js";import"./index-C8Xx4cgL.js";import"./index-xZwO_cAf.js";import"./PdfViewerToolbar-2xTLO3D0.js";import"./Button-CQKahg2d.js";import"./chevron-right-I2Slh1Sk.js";import"./Input-Co7UsBkP.js";import"./search-CbAtzBKJ.js";import"./spin-BDlCqIVl.js";import"./error-BHsdjMmH.js";import"./withOsdkMetrics-BpRFFsXx.js";import"./makeExternalStore-c0rjbvLB.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
