import{j as r,M as s}from"./iframe-DWzCX6-u.js";import{P as p}from"./pdf-viewer-C3NVVwRR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CvfEX-iX.js";import"./preload-helper-Bs5f62Fj.js";import"./PdfRenderer-DuU2QMoa.js";import"./index-olyefH4j.js";import"./PdfViewer-Bz_t5cLv.js";import"./PdfViewer.module.css-DxnTALjz.js";import"./PdfViewerAnnotationLayer-qa7poTvU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVUj8IbP.js";import"./PdfViewerOutlineSidebar-CEEgdXbZ.js";import"./PdfViewerSidebarHeader-BeqUVeK9.js";import"./useBaseUiId-DwbVetPl.js";import"./useControlled-DZa9xgJF.js";import"./CompositeRoot-BRTaGPJ3.js";import"./CompositeItem-DIcJ9YLb.js";import"./ToolbarRootContext-IwK3YXju.js";import"./composite-Bu4Kb6op.js";import"./svgIconContainer-Cei3XUPp.js";import"./PdfViewerSearchBar-CpL8ZbuJ.js";import"./chevron-up-DuBDwVdi.js";import"./chevron-down-CXhUHAc-.js";import"./cross-Ba2KcsSF.js";import"./PdfViewerSidebar-rUzi4W3F.js";import"./index-BULJ_7AJ.js";import"./index-BweUTSSM.js";import"./index-BxBdE1lP.js";import"./PdfViewerToolbar-xPgz13bN.js";import"./Button-CCcd_o0O.js";import"./chevron-right-0Ay9ilmS.js";import"./Input-DU8RlMQy.js";import"./search-B_4Qd157.js";import"./spin-DrWT5yp8.js";import"./error-FXATP8Qk.js";import"./withOsdkMetrics-DoMBRpSv.js";import"./makeExternalStore-DSrWS5Uq.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
