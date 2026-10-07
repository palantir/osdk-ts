import{j as r,M as s}from"./iframe-CvX9Pygi.js";import{P as p}from"./pdf-viewer-Bgc9hc5D.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Vm30yJO5.js";import"./preload-helper-BB8WBYsV.js";import"./PdfViewer-CpPmNJiS.js";import"./index-BZTqeQuD.js";import"./BasePdfViewer-DKtDbCxV.js";import"./BasePdfViewer.module.css-DN-leJtz.js";import"./PdfViewerAnnotationLayer-Dg32gj8B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-fldKlzMX.js";import"./PdfViewerOutlineSidebar-C-na6z7k.js";import"./PdfViewerSidebarHeader-BHik_-7H.js";import"./useBaseUiId-BW2Ufhyw.js";import"./useControlled-qJqObmnH.js";import"./CompositeRoot-1OzStjU4.js";import"./CompositeItem-LESBwLaD.js";import"./ToolbarRootContext-BT80oNNA.js";import"./composite-B1Ef3_vs.js";import"./svgIconContainer-Cik9z__5.js";import"./PdfViewerSearchBar-D1H6HTR2.js";import"./chevron-up-DKdg2fIw.js";import"./chevron-down-o9sdxfCV.js";import"./cross-a0pxU8ye.js";import"./PdfViewerSidebar-4DLkYopW.js";import"./index-w6IpT_oR.js";import"./index-C3D6pCjL.js";import"./index-EBKlSRA8.js";import"./PdfViewerToolbar-neCW-eA5.js";import"./Button-D5Y-liWD.js";import"./chevron-right-CawBGeWA.js";import"./Input-B4YDDaMi.js";import"./search-D9_8mB8g.js";import"./spin-D0bIkg7-.js";import"./error-B2uabQYe.js";import"./withOsdkMetrics-DTO1kugV.js";import"./makeExternalStore-M2yjAWof.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
