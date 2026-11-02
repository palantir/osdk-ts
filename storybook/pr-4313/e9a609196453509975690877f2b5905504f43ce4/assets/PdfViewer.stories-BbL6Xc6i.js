import{j as r,M as s}from"./iframe-CiI5PS6K.js";import{P as p}from"./pdf-viewer-BS1U_bO3.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkxMjMxF.js";import"./preload-helper-BScoV-ON.js";import"./PdfViewer-B0TgKQMX.js";import"./index-DTPqzTra.js";import"./BasePdfViewer-DiuJWFaK.js";import"./BasePdfViewer.module.css-DvnmBH0O.js";import"./PdfViewerAnnotationLayer-Bme88dAa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGZlYFif.js";import"./PdfViewerOutlineSidebar-BLnaJnxY.js";import"./PdfViewerSidebarHeader-Csk3_BxS.js";import"./useBaseUiId-DReynxDq.js";import"./useControlled-C0rSVFZc.js";import"./CompositeRoot-BSTwkYF7.js";import"./CompositeItem-D4PTMtSQ.js";import"./ToolbarRootContext-CTDjgR90.js";import"./composite-BrOoGgaN.js";import"./svgIconContainer-tdqH8iqE.js";import"./PdfViewerSearchBar-Bd0-46Bv.js";import"./chevron-up-JC5Qs0Jg.js";import"./chevron-down-F9mPI0PG.js";import"./cross-DgjL-w3z.js";import"./PdfViewerSidebar-D34LVfM1.js";import"./index-DzwnFRrI.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./PdfViewerToolbar-BbToIw1F.js";import"./Button-BP56zFTn.js";import"./chevron-right-CeKh0A4X.js";import"./Input-gM0suFmQ.js";import"./search-BRtPHFLM.js";import"./spin-BrA2FSOA.js";import"./error-Dp2Yeg1s.js";import"./withOsdkMetrics-BRB4GNZb.js";import"./makeExternalStore-BiFRWY5t.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
