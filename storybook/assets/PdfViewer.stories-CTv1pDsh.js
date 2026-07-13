import{j as r,M as s}from"./iframe-ChzR6EVC.js";import{P as p}from"./pdf-viewer-BPoHmior.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-n5Jq_Whs.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-CvcFmV13.js";import"./index-Cn1hQvlV.js";import"./PdfViewer-CM5Jh6TQ.js";import"./PdfViewer.module.css-DDizGG6s.js";import"./PdfViewerAnnotationLayer-CEhTp3cQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-8OWLAKSW.js";import"./PdfViewerOutlineSidebar-C2Y0eUnQ.js";import"./PdfViewerSidebarHeader-CSBloY9l.js";import"./useBaseUiId-BsL2agaP.js";import"./useControlled-_LNvV6S5.js";import"./CompositeRoot-RFAJb2ja.js";import"./CompositeItem-tssO9pUU.js";import"./ToolbarRootContext-B0rq4szH.js";import"./composite-8zYYWnNF.js";import"./svgIconContainer-DYQ-SYjk.js";import"./PdfViewerSearchBar-B_LJWTcz.js";import"./chevron-up--ynLCry0.js";import"./chevron-down-zucsOjC7.js";import"./cross-DBnzcNv7.js";import"./PdfViewerSidebar-BS-ho7E3.js";import"./index-CoH0-Nst.js";import"./index-CXAQlbfj.js";import"./index-Dl2h0rkd.js";import"./PdfViewerToolbar-CnSE3LD2.js";import"./Button-D0YlxXk7.js";import"./chevron-right-Bz1l5Pb1.js";import"./Input-C6RJf1GZ.js";import"./search-C8I1aszc.js";import"./spin-DDcKVm-O.js";import"./error-Cjw6l58M.js";import"./withOsdkMetrics-q2D2P-r0.js";import"./makeExternalStore-C5Yt7kIe.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
