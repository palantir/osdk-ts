import{j as r,M as s}from"./iframe-Bbj8rm_V.js";import{P as p}from"./pdf-viewer-DNu_9HPj.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Cm68JXxa.js";import"./preload-helper-D6Fx-mKo.js";import"./PdfViewer-DoCr_i_P.js";import"./index-Dq2MMzil.js";import"./BasePdfViewer-dV46k2Jz.js";import"./BasePdfViewer.module.css-CJtTqpK5.js";import"./PdfViewerAnnotationLayer-Vz1iVYAA.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCAJNv_3.js";import"./PdfViewerOutlineSidebar-D_xKjl6p.js";import"./PdfViewerSidebarHeader-Fc-SZU1P.js";import"./useBaseUiId-DNWEd936.js";import"./useControlled-CA2uOZy1.js";import"./CompositeRoot-VTWr677U.js";import"./CompositeItem-CBUY4KWM.js";import"./ToolbarRootContext-ZiL2Vz-F.js";import"./composite-Dd0Cawl-.js";import"./svgIconContainer-BUx50-vg.js";import"./PdfViewerSearchBar-CL_shY6s.js";import"./chevron-up-BUCeiBPv.js";import"./chevron-down-CHGSFnin.js";import"./cross-DBtpPd0D.js";import"./PdfViewerSidebar-B4Y50-zU.js";import"./index-BFuwLodk.js";import"./index-wCPgzdXR.js";import"./index-DijupkwT.js";import"./PdfViewerToolbar-8lTKyKq6.js";import"./Button-Dy0jx2Ef.js";import"./chevron-right-B36xhKok.js";import"./Input-CHlhWJjT.js";import"./search-PnNyfQZV.js";import"./spin-C2ysZ0mk.js";import"./error-UxBVQGvQ.js";import"./withOsdkMetrics-BeB3Egw6.js";import"./makeExternalStore-B9UD_2Tu.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
