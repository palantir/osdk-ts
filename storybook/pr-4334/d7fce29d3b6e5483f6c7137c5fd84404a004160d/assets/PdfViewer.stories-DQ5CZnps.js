import{j as r,M as s}from"./iframe-BrmQZ3gv.js";import{P as p}from"./pdf-viewer-BIXDFGUV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DTGO6E5m.js";import"./preload-helper-bFlMnFhE.js";import"./PdfViewer-BBwGbOga.js";import"./index-BukqnFRF.js";import"./BasePdfViewer-DbmaKasu.js";import"./BasePdfViewer.module.css-C6FQfuNW.js";import"./PdfViewerAnnotationLayer-DKQ14nDz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-yj7Cr6Nt.js";import"./PdfViewerOutlineSidebar-CtNfHLBJ.js";import"./PdfViewerSidebarHeader-BSl9s0Is.js";import"./useBaseUiId-DOEJb2YQ.js";import"./useControlled-BKcLfL-m.js";import"./CompositeRoot-COp-ZJW3.js";import"./CompositeItem-Cj9sjJEA.js";import"./ToolbarRootContext-DVJYWBBz.js";import"./composite-CToHHLnK.js";import"./svgIconContainer-1ZxcqWPt.js";import"./PdfViewerSearchBar-CVzJ5_VC.js";import"./chevron-up-TwyymfBW.js";import"./chevron-down-DjoNZ0eU.js";import"./cross-CyQ2LR1N.js";import"./PdfViewerSidebar-BoSMIYyr.js";import"./index-Lz8g2hRL.js";import"./index-DrxXiExk.js";import"./index-BHysiYNZ.js";import"./PdfViewerToolbar-Bm4C0N-s.js";import"./Button-DFW8ZRr_.js";import"./chevron-right-BapW_1iO.js";import"./Input-CJbUQK7W.js";import"./search-3yVqV9Ja.js";import"./spin-CjKcjTDl.js";import"./error-BoTJC5k7.js";import"./withOsdkMetrics-CjsWDT1I.js";import"./makeExternalStore-B5wDpA-S.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
