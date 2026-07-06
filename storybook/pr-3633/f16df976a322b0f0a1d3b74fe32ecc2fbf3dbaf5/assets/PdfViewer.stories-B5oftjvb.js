import{j as r,M as s}from"./iframe-DfJhIhu_.js";import{P as p}from"./pdf-viewer-ifpRA5i9.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-SwBeF9xq.js";import"./preload-helper-BiiVQhZ9.js";import"./PdfRenderer-DR08Ef5i.js";import"./index-D_m2ASIi.js";import"./PdfViewer-BwKsGzs1.js";import"./PdfViewer.module.css-RfEVG6yN.js";import"./PdfViewerAnnotationLayer-Bf4iWInw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiPKM77W.js";import"./PdfViewerOutlineSidebar-C6qm4dem.js";import"./PdfViewerSidebarHeader-CgVZOnmw.js";import"./useBaseUiId-BMs10Hh5.js";import"./useControlled-Bo4-eIoG.js";import"./CompositeRoot-9p3LA6aY.js";import"./CompositeItem-C2KYvISR.js";import"./ToolbarRootContext-MU20rXUI.js";import"./composite-C_3MGNYL.js";import"./svgIconContainer-qAimi4Lj.js";import"./PdfViewerSearchBar-BoybOERL.js";import"./chevron-up-B5tfwE75.js";import"./chevron-down-COgGFCkV.js";import"./cross-B1BuAWDS.js";import"./PdfViewerSidebar-BXcRIaAM.js";import"./index-DJPcQfe5.js";import"./index-D3S5E9oN.js";import"./index-Wqk8veWD.js";import"./PdfViewerToolbar-Vem81kxV.js";import"./Button-BjHErpMY.js";import"./chevron-right-COZzAt0O.js";import"./Input-BHEqfEgo.js";import"./search-BpqAmkpd.js";import"./spin-CEwLg4wA.js";import"./error-CrZDmH0I.js";import"./withOsdkMetrics-iLNwKQ_p.js";import"./makeExternalStore-DMymaRlN.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
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
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
