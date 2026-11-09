import{j as r,M as s}from"./iframe-HL5MQevY.js";import{P as p}from"./pdf-viewer-C3mo_qVL.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BQ8IhvQX.js";import"./preload-helper-_Ar_KgCE.js";import"./PdfViewer-CIwgF5Ui.js";import"./index-CgN-SBJb.js";import"./BasePdfViewer-CnDmBkBW.js";import"./BasePdfViewer.module.css-BCotYhMM.js";import"./PdfViewerAnnotationLayer-DesAcXnv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxPEHcbV.js";import"./PdfViewerOutlineSidebar-iG4GVZNT.js";import"./PdfViewerSidebarHeader-KiFcL_1j.js";import"./useBaseUiId-DySigJtL.js";import"./useControlled-BtrL0bqk.js";import"./CompositeRoot-DUWp4233.js";import"./CompositeItem-BWnHlDKK.js";import"./ToolbarRootContext-Egv6Ob_q.js";import"./composite-DWznhUuB.js";import"./svgIconContainer-BLMvF_H6.js";import"./PdfViewerSearchBar-DGspY_OG.js";import"./chevron-up-CpKkvq-o.js";import"./chevron-down-BP0kQuP_.js";import"./cross-peQbcr5N.js";import"./PdfViewerSidebar-CxkQtkUv.js";import"./index-D0tF1Jnd.js";import"./index-CrQU1n-1.js";import"./index-f_DjFpxo.js";import"./PdfViewerToolbar-BMFVmCYT.js";import"./Button-CqmZF1Qg.js";import"./chevron-right-DQgtJ94j.js";import"./Input-DgL7dTdA.js";import"./search-BmC04ZEV.js";import"./spin-DoXBpbn_.js";import"./error-CIfjiXVi.js";import"./withOsdkMetrics-B6341jPo.js";import"./makeExternalStore-CTUMxwBz.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
