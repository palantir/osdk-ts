import{j as r,M as s}from"./iframe-DGt_wNwK.js";import{P as p}from"./pdf-viewer-H0sUWCiP.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2iqcLcn.js";import"./preload-helper-DROywWZr.js";import"./PdfViewer-BZw-E01Q.js";import"./index-DQChOSqq.js";import"./BasePdfViewer-DEvCy422.js";import"./BasePdfViewer.module.css-B-0ts2NT.js";import"./PdfViewerAnnotationLayer-BUbV4Yse.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Mprd8iVR.js";import"./PdfViewerOutlineSidebar-BqxkVW31.js";import"./PdfViewerSidebarHeader-DGzz-yeK.js";import"./useBaseUiId-C69sf6z7.js";import"./useControlled-CVm____s.js";import"./CompositeRoot-CxqmDkqJ.js";import"./CompositeItem-CarXUbLm.js";import"./ToolbarRootContext-CszZ8CJF.js";import"./composite-LkGdti_A.js";import"./svgIconContainer-D7UZVecC.js";import"./PdfViewerSearchBar-Dsk-Btcx.js";import"./chevron-up-DbBFvFx-.js";import"./chevron-down-Dgt5xHaY.js";import"./cross-BGkapFHE.js";import"./PdfViewerSidebar-DkuPn-8h.js";import"./index-D9K6xCG_.js";import"./index-CvHeI6FX.js";import"./index-D8zmmPkx.js";import"./PdfViewerToolbar-Dt04ScH4.js";import"./Button-BNxQZVJ4.js";import"./chevron-right-BPzhbRYd.js";import"./Input-TkUYfjKo.js";import"./search-DyFNjb5Q.js";import"./spin-BRxK3e7W.js";import"./error-CIpMfC0e.js";import"./withOsdkMetrics-CDbkSkNJ.js";import"./makeExternalStore-UXCR43hi.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
