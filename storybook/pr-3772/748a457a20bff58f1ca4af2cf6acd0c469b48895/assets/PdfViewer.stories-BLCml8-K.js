import{j as r,M as s}from"./iframe-CY1bley7.js";import{P as p}from"./pdf-viewer-BZVbeurr.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DZ0E9NNP.js";import"./preload-helper-D3osyoeZ.js";import"./PdfViewer-C8zvAxO1.js";import"./index-rh2lseoR.js";import"./BasePdfViewer-n3YgWSLf.js";import"./BasePdfViewer.module.css-BtId80lc.js";import"./PdfViewerAnnotationLayer-BZjF7P6x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1UoZxWq.js";import"./PdfViewerOutlineSidebar-Brhb1Elw.js";import"./PdfViewerSidebarHeader-C6E_rKbH.js";import"./useBaseUiId-DVcIvI44.js";import"./useControlled-fFwZP0Ap.js";import"./CompositeRoot-HV9BrKro.js";import"./CompositeItem-BpiTOIyl.js";import"./ToolbarRootContext-rjSxP1dE.js";import"./composite-CiwpWFDy.js";import"./svgIconContainer-CzZrnJM2.js";import"./PdfViewerSearchBar-BRJghT9R.js";import"./chevron-up-B-kb44Hy.js";import"./chevron-down-BiDqtejG.js";import"./cross-cJ3Efo1g.js";import"./PdfViewerSidebar-D0eFnvrn.js";import"./index-DlXpweC6.js";import"./index-Bn4JMmGr.js";import"./index-gS5-xXe0.js";import"./PdfViewerToolbar-BiUTCxjZ.js";import"./Button-B5JcIIcB.js";import"./chevron-right-BkzwuBl8.js";import"./Input-DEo9NwDI.js";import"./search-146DDh_k.js";import"./spin-YaHFnoVw.js";import"./error-B6HE4awo.js";import"./withOsdkMetrics-Y9b7QhtM.js";import"./makeExternalStore-Hj73T8jD.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
