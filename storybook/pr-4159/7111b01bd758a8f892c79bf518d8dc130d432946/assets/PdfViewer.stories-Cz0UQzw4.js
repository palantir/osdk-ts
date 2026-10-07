import{j as r,M as s}from"./iframe-BnQn1FlY.js";import{P as p}from"./pdf-viewer-DTqvKnJ7.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CcHMEs2X.js";import"./preload-helper-BecbOaxr.js";import"./PdfViewer-BaoqaRwC.js";import"./index-CfSflYMd.js";import"./BasePdfViewer-Cqhb2tv2.js";import"./BasePdfViewer.module.css-BKkR6QVV.js";import"./PdfViewerAnnotationLayer-BhKOfFT3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BU02Za5Y.js";import"./PdfViewerOutlineSidebar-BMRWwAlJ.js";import"./PdfViewerSidebarHeader-BgODebZW.js";import"./useBaseUiId-D_n7SQSX.js";import"./useControlled-i3XBhDi5.js";import"./CompositeRoot-07GyAGRf.js";import"./CompositeItem-DQ-KZaEd.js";import"./ToolbarRootContext-DpVEn9hT.js";import"./composite-D7QBQd-n.js";import"./svgIconContainer-C8CWCK4h.js";import"./PdfViewerSearchBar-CqSvgjJB.js";import"./chevron-up-CPeZT1cr.js";import"./chevron-down-CBuocP3-.js";import"./cross-CQwrttsU.js";import"./PdfViewerSidebar-DaoqbWeL.js";import"./index-CzWHx20P.js";import"./index-TO_0y0N3.js";import"./index-C1lVCR7D.js";import"./PdfViewerToolbar-UgFv0fN9.js";import"./Button-DdWl47ZG.js";import"./chevron-right-2hKrIZhJ.js";import"./Input-DoQKk1PO.js";import"./search-DRs0Pqxh.js";import"./spin-kMKGR1vb.js";import"./error-HPj_xS2_.js";import"./withOsdkMetrics-BE7G7j9y.js";import"./makeExternalStore-CydlKeaD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
