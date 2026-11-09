import{j as r,M as s}from"./iframe-D-NjJf8E.js";import{P as p}from"./pdf-viewer-BJkwf0P8.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8rNr6c1.js";import"./preload-helper-CTOkYOfH.js";import"./PdfViewer-BsP21EPP.js";import"./index-BfNG9SBg.js";import"./BasePdfViewer-obHO1sgj.js";import"./BasePdfViewer.module.css-ChUU7eSL.js";import"./PdfViewerAnnotationLayer-DEDfNB3L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tdZbMwiF.js";import"./PdfViewerOutlineSidebar-DWa5IDCf.js";import"./PdfViewerSidebarHeader-DpcCUSCW.js";import"./useBaseUiId-fJObIM_9.js";import"./useControlled-D1sspD4r.js";import"./CompositeRoot-BRGD-0t1.js";import"./CompositeItem-CnMema5w.js";import"./ToolbarRootContext-CUS2wfRS.js";import"./composite-CYVlE3X-.js";import"./svgIconContainer-CGGP5dln.js";import"./PdfViewerSearchBar-D__MWW-a.js";import"./chevron-up-BlCfNBDw.js";import"./chevron-down-C-c1FjW5.js";import"./cross-CeDP8iYL.js";import"./PdfViewerSidebar-otVOu3Fo.js";import"./index-BgxA68V1.js";import"./index-Xmptx6KB.js";import"./index-CGk_yh5o.js";import"./PdfViewerToolbar-vtlRTIrS.js";import"./Button-B1_GO9AJ.js";import"./chevron-right-yIMTAfXZ.js";import"./Input-Djaz_ktk.js";import"./search-CjsZbzMa.js";import"./spin-m9_rFMyx.js";import"./error-BoBBM1re.js";import"./withOsdkMetrics-BLPi8trO.js";import"./makeExternalStore-BW52Pv17.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
