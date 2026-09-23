import{j as r,M as s}from"./iframe-VFEBMkmT.js";import{P as p}from"./pdf-viewer-CL0I2C6U.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C8P7XOv_.js";import"./preload-helper-07eHVQFi.js";import"./PdfViewer-BTtFVvbo.js";import"./index-BNFDG_ll.js";import"./BasePdfViewer-Bv7Cs78Z.js";import"./BasePdfViewer.module.css-MFod6puN.js";import"./PdfViewerAnnotationLayer-BkyMr_w7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ss70OkMN.js";import"./PdfViewerOutlineSidebar-Bg6hEpEo.js";import"./PdfViewerSidebarHeader-DsHeh1aV.js";import"./useBaseUiId-vs4tfZGS.js";import"./useControlled-C_z4AA7y.js";import"./CompositeRoot-O9dh-36j.js";import"./CompositeItem-CC1BkCel.js";import"./ToolbarRootContext-7k7RnlYE.js";import"./composite-DW9K0ypD.js";import"./svgIconContainer-CrmB8eAh.js";import"./PdfViewerSearchBar-r281L-Nl.js";import"./chevron-up-jxPXNp-0.js";import"./chevron-down-DVKmbjNv.js";import"./cross-klKqW7pD.js";import"./PdfViewerSidebar-FvKiN2eM.js";import"./index-npggFz05.js";import"./index-C-ds3Per.js";import"./index-CHgbm3vu.js";import"./PdfViewerToolbar-CzwLUSvy.js";import"./Button-CSWptMiw.js";import"./chevron-right-ClaspzGG.js";import"./Input-CRGuLcp8.js";import"./search-VMyVN87B.js";import"./spin-Bzt604MK.js";import"./error-BAVEcOGP.js";import"./withOsdkMetrics-BVlvQats.js";import"./makeExternalStore-C0Q3dAYA.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
