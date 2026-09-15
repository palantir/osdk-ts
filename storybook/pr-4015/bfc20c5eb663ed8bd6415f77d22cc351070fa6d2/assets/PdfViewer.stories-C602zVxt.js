import{j as r,M as s}from"./iframe-DFW0mMZ1.js";import{P as p}from"./pdf-viewer-Bb3Xl2Kg.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-ClVtziGG.js";import"./preload-helper-Qawhc3UJ.js";import"./PdfViewer-Cmlg0Oqe.js";import"./index-o6yCYR6Q.js";import"./BasePdfViewer-R2np4pLV.js";import"./BasePdfViewer.module.css-CA7iu7-e.js";import"./PdfViewerAnnotationLayer-BvKfkfTh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-shIGwJ.js";import"./PdfViewerOutlineSidebar-DtpPQENJ.js";import"./PdfViewerSidebarHeader-MlQjKMKk.js";import"./useBaseUiId-CXLWSjxr.js";import"./useControlled-CgydVt6m.js";import"./CompositeRoot-C3XNL3G3.js";import"./CompositeItem-CKYwdTed.js";import"./ToolbarRootContext-BwtTYckl.js";import"./composite-C9QpehYt.js";import"./svgIconContainer-VOBSJ15n.js";import"./PdfViewerSearchBar-Db89BLTJ.js";import"./chevron-up-BHMBK8jh.js";import"./chevron-down-s8opNKgU.js";import"./cross-BkPI5BMI.js";import"./PdfViewerSidebar-DMZyLWo9.js";import"./index-B7I1fXI4.js";import"./index-Ntq27F76.js";import"./index-CJTfQw-N.js";import"./PdfViewerToolbar-D13BKr4P.js";import"./Button-6FT0QBh6.js";import"./chevron-right-BmJmRiKY.js";import"./Input-Bw8rrVtq.js";import"./search-B2NWGFRm.js";import"./spin-C3UOvUcZ.js";import"./error-B3Dge2Yv.js";import"./withOsdkMetrics-CjCOoV_f.js";import"./makeExternalStore-DQcTHSYH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
