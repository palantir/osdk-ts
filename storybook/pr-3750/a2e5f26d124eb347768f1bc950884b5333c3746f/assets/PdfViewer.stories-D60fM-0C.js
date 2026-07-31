import{j as r,M as s}from"./iframe-CMhwc6yu.js";import{P as p}from"./pdf-viewer-B6s9XgQn.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BtGVhqhG.js";import"./preload-helper-CbbeoF4N.js";import"./PdfRenderer-BW5iucyu.js";import"./index-C2NWml_0.js";import"./PdfViewer-TqRlHvSY.js";import"./PdfViewer.module.css-CIoWD2Bm.js";import"./PdfViewerAnnotationLayer-BgE4jxMq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNXK4iC2.js";import"./PdfViewerOutlineSidebar-BrivkrF8.js";import"./PdfViewerSidebarHeader-CxBgR6R1.js";import"./useBaseUiId-C-AKSjpe.js";import"./useControlled-MLlvuDBf.js";import"./CompositeRoot-C-Bm-Ilh.js";import"./CompositeItem-C5Pf2lIH.js";import"./ToolbarRootContext-otfQj27w.js";import"./composite-BeSuuE0r.js";import"./svgIconContainer-Do_XH38C.js";import"./PdfViewerSearchBar-Dpw6-0oO.js";import"./chevron-up-CAsD2HVb.js";import"./chevron-down-B9twCniC.js";import"./cross-CI2EuVLe.js";import"./PdfViewerSidebar-BWO0Mf1Q.js";import"./index-DCQ6MC0R.js";import"./index-CLTQ2YZZ.js";import"./index-CYf-jFq0.js";import"./PdfViewerToolbar-Ay9yWpOV.js";import"./Button-CE_QE-eV.js";import"./chevron-right-mpjx3fDZ.js";import"./Input-7eUEZAd2.js";import"./search-BYZu81Ts.js";import"./spin-DsDQ29HE.js";import"./error-DiGCKWWT.js";import"./withOsdkMetrics-C7tthBfr.js";import"./makeExternalStore-Cd3U3q8T.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
