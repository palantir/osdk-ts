import{j as r,M as s}from"./iframe-DUMXb5nI.js";import{P as p}from"./pdf-viewer-B6yGnLgs.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CMN4fE4a.js";import"./preload-helper-BJwXp4Q-.js";import"./PdfViewer-CEDFtJmo.js";import"./index-BbwFJ-ta.js";import"./BasePdfViewer-D9jyAdT8.js";import"./BasePdfViewer.module.css-EXz7eVf8.js";import"./PdfViewerAnnotationLayer-MUNk1WCL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--uT6X3D4.js";import"./PdfViewerOutlineSidebar-DLijMWu9.js";import"./PdfViewerSidebarHeader-lN_cgCi1.js";import"./useBaseUiId-_e14ZC1l.js";import"./useControlled-BDe8NiPs.js";import"./CompositeRoot-bLUdZNHz.js";import"./CompositeItem-HBdNGEyu.js";import"./ToolbarRootContext-LKaZxJnb.js";import"./composite-D-SRMe6j.js";import"./svgIconContainer-sVTzBKmW.js";import"./PdfViewerSearchBar-JFPU6FMX.js";import"./chevron-up-D6G-6csF.js";import"./chevron-down-C-ZMpNeB.js";import"./cross-D_uZDyQx.js";import"./PdfViewerSidebar-DdAy3GKE.js";import"./index-CwUqs_yy.js";import"./index-CNSnRqug.js";import"./index-DYmqgljQ.js";import"./PdfViewerToolbar-pzB_gNaQ.js";import"./Button-BgjvY2h6.js";import"./chevron-right-BYcD7BDQ.js";import"./Input-DiFVGF-l.js";import"./search-TGSQVeh_.js";import"./spin-BKKmdTjU.js";import"./error-Cm3UeO8R.js";import"./withOsdkMetrics-pgg1h4tV.js";import"./makeExternalStore-BwFxLGns.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
