import{j as r,M as s}from"./iframe-CNX9e2vb.js";import{P as p}from"./pdf-viewer-qO2Xft7E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-D-pE9zNR.js";import"./preload-helper-ZMNA8h9P.js";import"./PdfViewer-B_YbMgNQ.js";import"./index-BIHn_wHI.js";import"./BasePdfViewer-CbSGtTKL.js";import"./BasePdfViewer.module.css-58CR6Gqk.js";import"./PdfViewerAnnotationLayer-CrV0-5E-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_Pf3f_Fc.js";import"./PdfViewerOutlineSidebar-B7Ur394n.js";import"./PdfViewerSidebarHeader-CCR4IDuu.js";import"./useBaseUiId-DVajJCtq.js";import"./useControlled-CAgAp9qH.js";import"./CompositeRoot-_lJY_HJ_.js";import"./CompositeItem-WdRO-_hy.js";import"./ToolbarRootContext-tIEjfpOU.js";import"./composite-DPfaHyL7.js";import"./svgIconContainer-nouhoaqF.js";import"./PdfViewerSearchBar-hZmOZP-z.js";import"./chevron-up-B-9Jm597.js";import"./chevron-down-BjfbDPyK.js";import"./cross-CoOqaEol.js";import"./PdfViewerSidebar-KVJugTpH.js";import"./index-CAwx3j0M.js";import"./index-DLyOpAuF.js";import"./index-DzwDShI9.js";import"./PdfViewerToolbar-CjnrTW0Q.js";import"./Button-DqD_xK8o.js";import"./chevron-right-DUM_cfBB.js";import"./Input-DsowkJey.js";import"./search-PqF1ps1R.js";import"./spin-DS90-lPT.js";import"./error-B93ABaLs.js";import"./withOsdkMetrics-DMNQhU4Q.js";import"./makeExternalStore-DE_Ve778.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
