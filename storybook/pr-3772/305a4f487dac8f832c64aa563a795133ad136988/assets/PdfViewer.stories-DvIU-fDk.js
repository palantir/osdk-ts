import{j as r,M as s}from"./iframe-vcLMjbea.js";import{P as p}from"./pdf-viewer-DNPz0Uug.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DF0Q39jK.js";import"./preload-helper-RU1OdimD.js";import"./PdfViewer-DW1cYDJo.js";import"./index-CG3KkM6y.js";import"./BasePdfViewer-D9CYxTFA.js";import"./BasePdfViewer.module.css-BOfaC5bv.js";import"./PdfViewerAnnotationLayer-DrSV1byS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ba9M38MC.js";import"./PdfViewerOutlineSidebar-Bww23GWx.js";import"./PdfViewerSidebarHeader-CETAIeR4.js";import"./useBaseUiId-DnJ4weT2.js";import"./useControlled-BXjUIo-l.js";import"./CompositeRoot-h-5MBkNI.js";import"./CompositeItem-BN5pExu_.js";import"./ToolbarRootContext-6uR7xL1n.js";import"./composite-CT0DZWF7.js";import"./svgIconContainer-Gicaxf1s.js";import"./PdfViewerSearchBar-DyP2AFWV.js";import"./chevron-up-BF_YOLkd.js";import"./chevron-down-CCBKa1Fl.js";import"./cross-D-EFak3i.js";import"./PdfViewerSidebar-D_eitpU_.js";import"./index-DM0ijL_x.js";import"./index-BIHIRrhw.js";import"./index-CU58PLdw.js";import"./PdfViewerToolbar-B1RJ5bp0.js";import"./Button-DY9kTYfp.js";import"./chevron-right-CCV9WDS6.js";import"./Input-B07SGOjF.js";import"./search-3IXTuiXl.js";import"./spin-D-Ab4iHN.js";import"./error-CrN3ijuU.js";import"./withOsdkMetrics-BcVOHfX1.js";import"./makeExternalStore-SiSiEnyI.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
