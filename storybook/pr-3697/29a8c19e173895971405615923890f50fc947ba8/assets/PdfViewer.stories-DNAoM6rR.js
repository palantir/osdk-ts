import{j as r,M as s}from"./iframe-DvMdQBvd.js";import{P as p}from"./pdf-viewer-s5Cbk8XV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-BE0bvonb.js";import"./preload-helper-BjpjdvaZ.js";import"./PdfRenderer-CDLk_qLY.js";import"./index-HPU5XEkS.js";import"./PdfViewer-Bo23nkB2.js";import"./PdfViewer.module.css-OyAqqZrL.js";import"./PdfViewerAnnotationLayer-DHq-rIu6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Burip1I3.js";import"./PdfViewerOutlineSidebar-DvnmB28-.js";import"./PdfViewerSidebarHeader-BWgUjWbh.js";import"./useBaseUiId-DUxEP0JG.js";import"./useControlled-uyqWxroq.js";import"./CompositeRoot-C1AH97-9.js";import"./CompositeItem-hputHC9b.js";import"./ToolbarRootContext--8pzFarC.js";import"./composite-WNMviQTM.js";import"./svgIconContainer-Bsqq_-j9.js";import"./PdfViewerSearchBar-D2WCmLyW.js";import"./chevron-up-CWGGc20z.js";import"./chevron-down-E3rxB9-r.js";import"./cross-C9iQ620L.js";import"./PdfViewerSidebar-vAFhfOh4.js";import"./index-DFO59pxo.js";import"./index-D4pRvPWl.js";import"./index--x_DOZdN.js";import"./PdfViewerToolbar-CIEpZZp0.js";import"./Button-4P7Cih8_.js";import"./chevron-right-DuizI13Y.js";import"./Input-Ce190kRT.js";import"./search-BL-w9WEV.js";import"./spin-DPFwlIG6.js";import"./error-NZ2vfALl.js";import"./withOsdkMetrics-Dpcl__Mh.js";import"./makeExternalStore-Bvm_N1o6.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
