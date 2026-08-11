import{j as r,M as s}from"./iframe-C03US_I6.js";import{P as p}from"./pdf-viewer-CL1ok5iu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CbFOMktO.js";import"./preload-helper-C_hpKMU_.js";import"./PdfRenderer-D3XIl0Of.js";import"./index-C0TeYPg1.js";import"./PdfViewer-B196oeYu.js";import"./PdfViewer.module.css-V5aKc-2Q.js";import"./PdfViewerAnnotationLayer-Ct1E5hyy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tp-HIcpG.js";import"./PdfViewerOutlineSidebar-ClOePCJO.js";import"./PdfViewerSidebarHeader-BUl_-FXo.js";import"./useBaseUiId-D-uzqdoM.js";import"./useControlled-Ce_eW3Tc.js";import"./CompositeRoot-CprOHUBz.js";import"./CompositeItem-5t-e12Jc.js";import"./ToolbarRootContext-BcfMYFrd.js";import"./composite-UEsmsm-V.js";import"./svgIconContainer-EwnPmkII.js";import"./PdfViewerSearchBar-OSR8720T.js";import"./chevron-up-DId1NNDd.js";import"./chevron-down-DSf6y05Z.js";import"./cross-B_4MYCZ_.js";import"./PdfViewerSidebar-D6hhIdHl.js";import"./index-BcDzzwMS.js";import"./index-YgCpM4My.js";import"./index-nwRvsWdy.js";import"./PdfViewerToolbar-BHLlgj0N.js";import"./Button-Cia6mCYi.js";import"./chevron-right-BQsk8FSQ.js";import"./Input-kXzLNjp1.js";import"./search-tIkv7nJO.js";import"./spin-H__pyZIG.js";import"./error-BY2GZ9CK.js";import"./withOsdkMetrics-n1LItz_B.js";import"./makeExternalStore-Cj2cBj8H.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
