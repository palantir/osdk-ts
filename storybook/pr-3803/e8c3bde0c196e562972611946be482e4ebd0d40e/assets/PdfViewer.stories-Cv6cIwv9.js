import{j as r,M as s}from"./iframe-B4bpzrvR.js";import{P as p}from"./pdf-viewer-cRIxGxtZ.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-DkbFBj3p.js";import"./preload-helper-ygR31QqW.js";import"./PdfRenderer-j4opoZ2k.js";import"./index-BsbymTi9.js";import"./PdfViewer-BhQkkH7L.js";import"./PdfViewer.module.css-DNeM42BP.js";import"./PdfViewerAnnotationLayer-FA1thU4W.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-M6KIy4Iw.js";import"./PdfViewerOutlineSidebar-D6HweKn0.js";import"./PdfViewerSidebarHeader-B5N4B_Bo.js";import"./useBaseUiId-DQnro2m8.js";import"./useControlled-c3mF7Crf.js";import"./CompositeRoot-B8OqwGyN.js";import"./CompositeItem-CBqdXCF4.js";import"./ToolbarRootContext-BdeRPzt2.js";import"./composite-CWXRwiuA.js";import"./svgIconContainer-_zfJv1vm.js";import"./PdfViewerSearchBar-CAOyuoR4.js";import"./chevron-up-Ch9AJQBA.js";import"./chevron-down-BzusAapG.js";import"./cross-n7An2nll.js";import"./PdfViewerSidebar-Cs1Ci92D.js";import"./index-CurRzgfb.js";import"./index-sIpWfZRY.js";import"./index-BCiKLWSQ.js";import"./PdfViewerToolbar-G9LzQNZR.js";import"./Button-CsATp9gq.js";import"./chevron-right-CzhAO4ab.js";import"./Input-ruAaTYrP.js";import"./search-Cyz40xHr.js";import"./spin-DTLsWuqB.js";import"./error-CD3Qxrj1.js";import"./withOsdkMetrics-srCrwIqC.js";import"./makeExternalStore-qWLMmryU.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
