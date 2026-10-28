import{j as r,M as s}from"./iframe-JML89ya1.js";import{P as p}from"./pdf-viewer-B78FAsmw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dw9rN8ui.js";import"./preload-helper-CM_flLUX.js";import"./PdfViewer-BgUvWAKh.js";import"./index-Dc7pQO3f.js";import"./BasePdfViewer-BGvhMZhs.js";import"./BasePdfViewer.module.css-CMDZSxXX.js";import"./PdfViewerAnnotationLayer-BBQxdvGQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cczdx7qd.js";import"./PdfViewerOutlineSidebar-4hPsOvz2.js";import"./PdfViewerSidebarHeader-BUdiF1MS.js";import"./useBaseUiId-ClxBcpvR.js";import"./useControlled-Dmeb-XiS.js";import"./CompositeRoot-DzcW0TyE.js";import"./CompositeItem-DNfCdbW9.js";import"./ToolbarRootContext-CcT7wUi-.js";import"./composite-lR6NpWTP.js";import"./svgIconContainer-Cy1tbGmj.js";import"./PdfViewerSearchBar-DeFkknlU.js";import"./chevron-up-BB4OzOUe.js";import"./chevron-down-CvzFuZ8A.js";import"./cross-CdcqVyzX.js";import"./PdfViewerSidebar-I0tInZt9.js";import"./index-liHaAzJ1.js";import"./index-DlPnlhaK.js";import"./index-BPJRAXu1.js";import"./PdfViewerToolbar-DR79iUig.js";import"./Button-B2QAh7AV.js";import"./chevron-right-D3vKKm1l.js";import"./Input-BPVftMna.js";import"./search-BoZa_HcP.js";import"./spin-BWvHtQ-T.js";import"./error-yEc2n_E2.js";import"./withOsdkMetrics-DBKIKizN.js";import"./makeExternalStore-C3BRy9aQ.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
