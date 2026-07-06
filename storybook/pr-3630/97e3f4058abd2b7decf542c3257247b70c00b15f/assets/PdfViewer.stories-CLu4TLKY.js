import{j as r,M as s}from"./iframe-CUJD_feO.js";import{P as p}from"./pdf-viewer-5IKeGb2m.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BzroN_3z.js";import"./preload-helper-CwMci636.js";import"./PdfRenderer-CVz1Q1VV.js";import"./index-dod05_4l.js";import"./PdfViewer-B4TMuHOb.js";import"./PdfViewer.module.css-CChaS5jF.js";import"./PdfViewerAnnotationLayer-BJzZck1Q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjIX1NGJ.js";import"./PdfViewerOutlineSidebar-g8ODVvAK.js";import"./PdfViewerSidebarHeader-CyepQcnX.js";import"./useBaseUiId-DBPD4Etj.js";import"./useControlled-CKQPn_St.js";import"./CompositeRoot-DOJArKnd.js";import"./CompositeItem-CHPYeA1T.js";import"./ToolbarRootContext-KbzTQeVs.js";import"./composite-D39qFuWe.js";import"./svgIconContainer-Bz-Xjm7j.js";import"./PdfViewerSearchBar-B_acj-Yh.js";import"./chevron-up-Dx4-C5f5.js";import"./chevron-down-BKDgpmvX.js";import"./cross-ByES0shH.js";import"./PdfViewerSidebar-7oGl7Apb.js";import"./index-r_ox1X8s.js";import"./index-Bu5v0TuY.js";import"./index-W8ATP_2c.js";import"./PdfViewerToolbar-D1LKMK4P.js";import"./Button-Dz5hys-D.js";import"./chevron-right-B3k_LU4S.js";import"./Input-BUE8rj0W.js";import"./search-dJzbdeML.js";import"./spin-yEr6WPyA.js";import"./error-FGAi1Ish.js";import"./withOsdkMetrics-gtUsoLlW.js";import"./makeExternalStore-CcDXnPev.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
