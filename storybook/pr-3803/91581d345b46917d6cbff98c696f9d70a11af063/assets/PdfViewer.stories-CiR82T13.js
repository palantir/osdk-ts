import{j as r,M as s}from"./iframe-6a0axaYb.js";import{P as p}from"./pdf-viewer-BSd8VhKT.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DlNO3EXV.js";import"./preload-helper-C65r43dF.js";import"./PdfRenderer-B1E_r1SI.js";import"./index-Bx8WIjbQ.js";import"./PdfViewer-DlAfJJdl.js";import"./PdfViewer.module.css-B6ov3M6h.js";import"./PdfViewerAnnotationLayer-CL78LI-g.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BJHazACZ.js";import"./PdfViewerOutlineSidebar-DtT8lUqN.js";import"./PdfViewerSidebarHeader-BZWLh87i.js";import"./useBaseUiId-Cbq5nu5V.js";import"./useControlled-CjqN0_NF.js";import"./CompositeRoot-BLKLoidL.js";import"./CompositeItem-QPaHlaAE.js";import"./ToolbarRootContext-3aAm6U4A.js";import"./composite-C5OCHPh0.js";import"./svgIconContainer-CaPxp0ph.js";import"./PdfViewerSearchBar-BFTIOE93.js";import"./chevron-up-Bf8Pb3-P.js";import"./chevron-down-ZwgymyQM.js";import"./cross-ui5GjUpZ.js";import"./PdfViewerSidebar-Du--hdio.js";import"./index-BaPDJwEJ.js";import"./index-BGOIdxxc.js";import"./index-lSA6E12E.js";import"./PdfViewerToolbar-D-iaZkW2.js";import"./Button-De2gQHI6.js";import"./chevron-right-CVU1kbJ4.js";import"./Input-DMbXSCc_.js";import"./search-BNwfslCq.js";import"./spin-C6W4Ni5R.js";import"./error-ZufoUxds.js";import"./withOsdkMetrics-DDxseQIl.js";import"./makeExternalStore-BIiPaBhV.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
