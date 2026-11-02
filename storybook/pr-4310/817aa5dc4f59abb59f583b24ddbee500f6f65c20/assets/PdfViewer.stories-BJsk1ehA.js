import{j as r,M as s}from"./iframe-DycPRZ3_.js";import{P as p}from"./pdf-viewer-CwrAS1uA.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-B8NJ7DoH.js";import"./preload-helper-CwFGYy97.js";import"./PdfViewer-BB1JHtXN.js";import"./index-D8OuJnBD.js";import"./BasePdfViewer-e1iZP7RK.js";import"./BasePdfViewer.module.css-Czg1DQdG.js";import"./PdfViewerAnnotationLayer-DjCXHvpW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjPAHdg7.js";import"./PdfViewerOutlineSidebar-Bz7TUWiF.js";import"./PdfViewerSidebarHeader-DflgPEX5.js";import"./useBaseUiId-BcdZIsRg.js";import"./useControlled-CSrl2eWz.js";import"./CompositeRoot-Bv3EQm_U.js";import"./CompositeItem-BFpto-ga.js";import"./ToolbarRootContext-O9iZr2zE.js";import"./composite-BS35o5ci.js";import"./svgIconContainer-CdogxpvZ.js";import"./PdfViewerSearchBar-C3Vin-vI.js";import"./chevron-up-DTvHtvAF.js";import"./chevron-down-oahySAf9.js";import"./cross-BCqcqOvJ.js";import"./PdfViewerSidebar-CNmGClQP.js";import"./index-Cmvp_WNS.js";import"./index-DsXNa1nt.js";import"./index-CUewPl3I.js";import"./PdfViewerToolbar-BIei9ofW.js";import"./Button-BRZRYHG0.js";import"./chevron-right-DzVRi8J1.js";import"./Input-DlxWReQQ.js";import"./search-_YpI-rXF.js";import"./spin-KacapLV8.js";import"./error-CfB5jUCL.js";import"./withOsdkMetrics-BKuNAfM3.js";import"./makeExternalStore-Ko2ktWoV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
