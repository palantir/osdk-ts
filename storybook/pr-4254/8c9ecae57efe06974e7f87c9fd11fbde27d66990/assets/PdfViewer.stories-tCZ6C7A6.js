import{j as r,M as s}from"./iframe-CZ6tfr7m.js";import{P as p}from"./pdf-viewer-BGSjUIYn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CnWQde2o.js";import"./preload-helper-CkfrOY1H.js";import"./PdfViewer-DP8tCQWQ.js";import"./index-DLNBYVnV.js";import"./BasePdfViewer-Cn21s43F.js";import"./BasePdfViewer.module.css-BcWUtBsH.js";import"./PdfViewerAnnotationLayer-CAD5djnq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C_80a8SN.js";import"./PdfViewerOutlineSidebar-DNjeOXhH.js";import"./PdfViewerSidebarHeader-cRV39C_F.js";import"./useBaseUiId-Cj6LeXHN.js";import"./useControlled-BvU1uW5X.js";import"./CompositeRoot-Crsul0J8.js";import"./CompositeItem-Cl5PbTL3.js";import"./ToolbarRootContext-CRrNmffx.js";import"./composite-BbwXcuXn.js";import"./svgIconContainer-Dvg9KYVw.js";import"./PdfViewerSearchBar-RByMXIk8.js";import"./chevron-up-DRnXouIx.js";import"./chevron-down-DVcYPRuD.js";import"./cross-CPXyH5jR.js";import"./PdfViewerSidebar-qbi7rhHG.js";import"./index-DtElecf-.js";import"./index-DeteMldf.js";import"./index-BfO80qBP.js";import"./PdfViewerToolbar-FB3PCddW.js";import"./Button-3RbWO35b.js";import"./chevron-right-DDRyC-zb.js";import"./Input-BkVAz5rQ.js";import"./search-ztvSGVr9.js";import"./spin-CeL5cYXp.js";import"./error-d7pkadgS.js";import"./withOsdkMetrics-B2DbhWLJ.js";import"./makeExternalStore-D-O-FofH.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
