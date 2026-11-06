import{j as r,M as s}from"./iframe-DlzpeYey.js";import{P as p}from"./pdf-viewer-C_RXCazp.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ByERqDhX.js";import"./preload-helper-D49cnuzB.js";import"./PdfViewer-BdHxQXFU.js";import"./index-CLOJWpvR.js";import"./BasePdfViewer-D58rDpoP.js";import"./BasePdfViewer.module.css-CX7rvjV3.js";import"./PdfViewerAnnotationLayer-WzdmWYmR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBUB7jzW.js";import"./PdfViewerOutlineSidebar-LBpwdTRB.js";import"./PdfViewerSidebarHeader-C4F5UmT9.js";import"./useBaseUiId-0fwu-5sC.js";import"./useControlled-fZuEx10T.js";import"./CompositeRoot-D2Db5Di6.js";import"./CompositeItem-B1K0j6t8.js";import"./ToolbarRootContext-DdMsogNF.js";import"./composite-CPVo-XsX.js";import"./svgIconContainer-s_VNNREI.js";import"./PdfViewerSearchBar-Cb6W1Yiw.js";import"./chevron-up-DrfB9smu.js";import"./chevron-down-wlUp9z9T.js";import"./cross-C9f-NEvt.js";import"./PdfViewerSidebar-Btgx_38s.js";import"./index-Dx8CT-jt.js";import"./index-Dp-4F4Kh.js";import"./index-B42S07sI.js";import"./PdfViewerToolbar-DkATAFEk.js";import"./Button-D-qtDRYT.js";import"./chevron-right-yf8yKPcc.js";import"./Input-BI9FrHdv.js";import"./search-DvttvRVv.js";import"./spin-C_GE0YSh.js";import"./error-DWCk07vu.js";import"./withOsdkMetrics-Bqhu_QPV.js";import"./makeExternalStore-BPbjLuQ9.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
