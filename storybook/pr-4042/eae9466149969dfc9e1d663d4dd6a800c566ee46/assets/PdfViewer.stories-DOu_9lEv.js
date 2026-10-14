import{j as r,M as s}from"./iframe-DxocSyIf.js";import{P as p}from"./pdf-viewer-D8zUpeqq.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BJT0-C-n.js";import"./preload-helper-D56zqST7.js";import"./PdfViewer-Da57dsF5.js";import"./index-DfYEtxmC.js";import"./BasePdfViewer-DpnbjFod.js";import"./BasePdfViewer.module.css-JXYNR7ak.js";import"./PdfViewerAnnotationLayer-DagPR5yc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Baqxu7ts.js";import"./PdfViewerOutlineSidebar-DOnBRxg0.js";import"./PdfViewerSidebarHeader-Dm_zaxN0.js";import"./useBaseUiId--lgIG0_P.js";import"./useControlled-BTWGqHDE.js";import"./CompositeRoot-Bh71PsqW.js";import"./CompositeItem-idLXSPQh.js";import"./ToolbarRootContext-B-Vz0eah.js";import"./composite-Cghpi3uk.js";import"./svgIconContainer-Bj1sIzvv.js";import"./PdfViewerSearchBar-Cac4k3Xi.js";import"./chevron-up-BSkLi7Xh.js";import"./chevron-down-myOLqEz6.js";import"./cross-CVx988bJ.js";import"./PdfViewerSidebar-DsRryVdo.js";import"./index-DNErSg1e.js";import"./index-02gWXqYk.js";import"./index-_cAiPY8y.js";import"./PdfViewerToolbar-Bculs23X.js";import"./Button-wSc2Yx62.js";import"./chevron-right-oGfeYakA.js";import"./Input-Bw3XbqGk.js";import"./search-CQuVvSo7.js";import"./spin-DHDFV3Jy.js";import"./error-CCnxuUsF.js";import"./withOsdkMetrics-CH0zpjho.js";import"./makeExternalStore-C5-_T4ZS.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
