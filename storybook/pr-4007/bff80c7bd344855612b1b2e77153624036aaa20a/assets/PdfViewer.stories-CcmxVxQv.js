import{j as r,M as s}from"./iframe-XZT6dXfR.js";import{P as p}from"./pdf-viewer-DyH1Or-N.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C__A5s6u.js";import"./preload-helper-Bq4RjIN3.js";import"./PdfViewer-CGYCAtSU.js";import"./index-DBmC_ZXQ.js";import"./BasePdfViewer-xrzZV36A.js";import"./BasePdfViewer.module.css-BBHrLAQz.js";import"./PdfViewerAnnotationLayer-B2vtiUOO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNU70m8X.js";import"./PdfViewerOutlineSidebar-SjEaOYTA.js";import"./PdfViewerSidebarHeader-BBWVORx8.js";import"./useBaseUiId-B8UoJpnF.js";import"./useControlled-eor914uw.js";import"./CompositeRoot-DcGXb8Oq.js";import"./CompositeItem-CFpArZRZ.js";import"./ToolbarRootContext-DmE1Zvel.js";import"./composite-8to6_dHI.js";import"./svgIconContainer-CU7rRNTz.js";import"./PdfViewerSearchBar-BgC3a9uL.js";import"./chevron-up-CE-W5bVQ.js";import"./chevron-down-7slW-jes.js";import"./cross-DhoAWiHd.js";import"./PdfViewerSidebar-BQEIjH-6.js";import"./index-CAFrt6ka.js";import"./index-CNzOt5rB.js";import"./index-DBvBEYmO.js";import"./PdfViewerToolbar-CTtMUPp1.js";import"./Button-CFmpzwcx.js";import"./chevron-right-BWYm7qwx.js";import"./Input-ieeoajuX.js";import"./search-JQ5a7a7P.js";import"./spin-BnwWfZf1.js";import"./error-CE5bRqvK.js";import"./withOsdkMetrics-waGd8POl.js";import"./makeExternalStore-DkP425EE.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
