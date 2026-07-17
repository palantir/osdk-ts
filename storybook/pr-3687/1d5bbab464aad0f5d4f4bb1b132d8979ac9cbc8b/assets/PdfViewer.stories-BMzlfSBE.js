import{j as r,M as s}from"./iframe-BPiQ61NS.js";import{P as p}from"./pdf-viewer-3CiQvx2i.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-rBB0jffA.js";import"./preload-helper-CJQ9k_fi.js";import"./PdfRenderer-jd4VJ95s.js";import"./index-SZSXhZUW.js";import"./PdfViewer-BSAwq8_h.js";import"./PdfViewer.module.css-Btqxu1lG.js";import"./PdfViewerAnnotationLayer-DEYnwjMt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_PglS5ew.js";import"./PdfViewerOutlineSidebar-DUj3Ac6T.js";import"./PdfViewerSidebarHeader-CSmL3GaQ.js";import"./useBaseUiId-Dvfg6NNH.js";import"./useControlled-BltYGfw_.js";import"./CompositeRoot-0NGqXTnJ.js";import"./CompositeItem-BsWK_ELB.js";import"./ToolbarRootContext-CXU6ndfp.js";import"./composite-By-vLfBy.js";import"./svgIconContainer-DDtODrDy.js";import"./PdfViewerSearchBar-DoH8VYP2.js";import"./chevron-up-BvQ46poK.js";import"./chevron-down-gsnURcSJ.js";import"./cross-DvC9490N.js";import"./PdfViewerSidebar-DUyXkzc5.js";import"./index-CVebdf2y.js";import"./index-CqBvzeKE.js";import"./index-D5i89T0j.js";import"./PdfViewerToolbar-D-afi2r4.js";import"./Button-DJAQG-pE.js";import"./chevron-right-QiAwipXz.js";import"./Input-DiYsbwYq.js";import"./search-C6hujKpf.js";import"./spin-DWtFoCpu.js";import"./error-NzoaNWEe.js";import"./withOsdkMetrics-Cl-rqjb5.js";import"./makeExternalStore-BNSm35RL.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
