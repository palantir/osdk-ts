import{j as r,M as s}from"./iframe-nukQkA9I.js";import{P as p}from"./pdf-viewer-DxoztT37.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DwBccsLM.js";import"./preload-helper-SAYG1EIe.js";import"./PdfViewer-Ddx_SPub.js";import"./index-D-GlitYq.js";import"./BasePdfViewer-Bev-_bJz.js";import"./BasePdfViewer.module.css-Ds5eGEpb.js";import"./PdfViewerAnnotationLayer-BxZmsYj9.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-7FecUwJJ.js";import"./PdfViewerOutlineSidebar-Bl4Wj5Tt.js";import"./PdfViewerSidebarHeader-CvcgQVlg.js";import"./useBaseUiId-DDz0NCTS.js";import"./useControlled-CCaNPmgV.js";import"./CompositeRoot-DZYY8Zax.js";import"./CompositeItem-FfzK-6cQ.js";import"./ToolbarRootContext-fpQvlLhR.js";import"./composite-C4ibImfR.js";import"./svgIconContainer-BRLU7q7E.js";import"./PdfViewerSearchBar-BCraiYQM.js";import"./chevron-up-7_oGliCJ.js";import"./chevron-down-A-s4tptO.js";import"./cross-AUKdXd6S.js";import"./PdfViewerSidebar-Ds_QKEEJ.js";import"./index-DHZErGjk.js";import"./index-C3FqsozF.js";import"./index-BNEnQN8B.js";import"./PdfViewerToolbar-H-hyXOcN.js";import"./Button-DH7_1I4V.js";import"./chevron-right-_67KYaJa.js";import"./Input-BpkcbvD3.js";import"./search-DU9QOFIa.js";import"./spin-2cX19QXq.js";import"./error-Btym7AAe.js";import"./withOsdkMetrics--rpBEpu9.js";import"./makeExternalStore-BULRIBYo.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
