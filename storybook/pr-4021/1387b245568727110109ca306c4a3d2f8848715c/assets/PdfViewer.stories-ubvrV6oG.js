import{j as r,M as s}from"./iframe-62_AXEOv.js";import{P as p}from"./pdf-viewer-mOsPdDuM.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CFe0-f-u.js";import"./preload-helper-CFT5weAC.js";import"./PdfViewer-CMROXgIE.js";import"./index-BBxmoCpH.js";import"./BasePdfViewer-nQpm_IyE.js";import"./BasePdfViewer.module.css-v0_pPFdT.js";import"./PdfViewerAnnotationLayer-DwW1J0Ot.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CKKwPGPV.js";import"./PdfViewerOutlineSidebar-BpuGLppf.js";import"./PdfViewerSidebarHeader-DjZwEFCB.js";import"./useBaseUiId-DxeaWUqe.js";import"./useControlled-BvDlAnVr.js";import"./CompositeRoot-D0wNAoJa.js";import"./CompositeItem-BaakSNrp.js";import"./ToolbarRootContext-Cx34GHdJ.js";import"./composite-D1RGgOF8.js";import"./svgIconContainer-B2ejb94d.js";import"./PdfViewerSearchBar-Ct3mqHFl.js";import"./chevron-up-CtNejs2C.js";import"./chevron-down-CLeFx5id.js";import"./cross-DUPyqLs7.js";import"./PdfViewerSidebar-CHgWArie.js";import"./index-DoWx18q-.js";import"./index-DqKHmJ5-.js";import"./index-IeLwL8MY.js";import"./PdfViewerToolbar-DHY_LQZm.js";import"./Button-CHJGiQMj.js";import"./chevron-right-DBmxCO1x.js";import"./Input-B1gv6X7f.js";import"./search-BDESzP6B.js";import"./spin-Osrj1PhO.js";import"./error-BRCVBLBe.js";import"./withOsdkMetrics-DHRPDUGo.js";import"./makeExternalStore-ChHrabzP.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
