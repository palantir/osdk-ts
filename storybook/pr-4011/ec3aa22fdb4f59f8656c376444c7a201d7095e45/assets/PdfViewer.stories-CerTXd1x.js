import{j as r,M as s}from"./iframe-DdU1btI5.js";import{P as p}from"./pdf-viewer-CvgYtIj2.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BDMqKivN.js";import"./preload-helper-CJIdcoC_.js";import"./PdfViewer-B9UVaaRr.js";import"./index-Bjdg2prT.js";import"./BasePdfViewer-LT8Pznj4.js";import"./BasePdfViewer.module.css-BQsdRzqA.js";import"./PdfViewerAnnotationLayer-Cf-jk5wz.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEr9xFeR.js";import"./PdfViewerOutlineSidebar-FPmVg8Lz.js";import"./PdfViewerSidebarHeader-BHHOLZsc.js";import"./useBaseUiId-BlXBlP0f.js";import"./useControlled-BwHcuxO_.js";import"./CompositeRoot-Dlc1rXDZ.js";import"./CompositeItem-Dd62h_6-.js";import"./ToolbarRootContext--cZJ7PMX.js";import"./composite-DKrCSbZ1.js";import"./svgIconContainer-CevOR6cS.js";import"./PdfViewerSearchBar-CCIj4TVu.js";import"./chevron-up-8kUjq9o7.js";import"./chevron-down-BBg4HQxv.js";import"./cross-DezMrsVo.js";import"./PdfViewerSidebar-B_uBSxQi.js";import"./index-I-zAiBXy.js";import"./index-CyCoQlJK.js";import"./index-CzZ9sR41.js";import"./PdfViewerToolbar--tx7r9X7.js";import"./Button-DOSUJ3M5.js";import"./chevron-right-CCecF7hG.js";import"./Input-DBMe1jVC.js";import"./search-DFTmIh4d.js";import"./spin-BHT3hTEr.js";import"./error-NWRP_Q29.js";import"./withOsdkMetrics--yltK86k.js";import"./makeExternalStore-BXvxNDLv.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
