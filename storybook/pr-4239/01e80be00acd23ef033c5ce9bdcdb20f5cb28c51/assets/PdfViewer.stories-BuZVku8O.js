import{j as r,M as s}from"./iframe-Dm6fEHSl.js";import{P as p}from"./pdf-viewer-Ggc4VujD.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BWBtSArx.js";import"./preload-helper-Bqb1rZ_1.js";import"./PdfViewer-DRwyksSF.js";import"./index-0oZqapnL.js";import"./BasePdfViewer-B2qPtTkw.js";import"./BasePdfViewer.module.css-DAHjFdP8.js";import"./PdfViewerAnnotationLayer-f4-L2QYk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CK7oES0p.js";import"./PdfViewerOutlineSidebar-oNWslsZa.js";import"./PdfViewerSidebarHeader-DQSmAHSM.js";import"./useBaseUiId-DheuxufY.js";import"./useControlled-BNqne-mh.js";import"./CompositeRoot-XCQyhoud.js";import"./CompositeItem-BlaUOs4g.js";import"./ToolbarRootContext-2ybRt6Lm.js";import"./composite-Dro01qd5.js";import"./svgIconContainer-DQYcgJEu.js";import"./PdfViewerSearchBar-CGv-evVg.js";import"./chevron-up-sNU6IFZ_.js";import"./chevron-down-CWH7kW7k.js";import"./cross-Bt5YxcTr.js";import"./PdfViewerSidebar-DxyOhCnr.js";import"./index-nzPy6itP.js";import"./index-B9LtevwQ.js";import"./index-CFKD3KmR.js";import"./PdfViewerToolbar-45yOZ08S.js";import"./Button-DtwGlaif.js";import"./chevron-right-BDVBet4C.js";import"./Input-C1Iecv69.js";import"./search-C7KxNUeL.js";import"./spin-sUSpfuNh.js";import"./error-CtkZoki4.js";import"./withOsdkMetrics-BttmRgw9.js";import"./makeExternalStore-Ctl6TIlE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
