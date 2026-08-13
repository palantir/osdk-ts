import{j as r,M as s}from"./iframe-DKy1AV9s.js";import{P as p}from"./pdf-viewer-CnUT9pk6.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C2JLd6fO.js";import"./preload-helper-BQnNVSqD.js";import"./PdfViewer-DRb4rEHY.js";import"./index-Du9AgFeI.js";import"./BasePdfViewer-Dkna23-K.js";import"./BasePdfViewer.module.css-Bcz9n1bV.js";import"./PdfViewerAnnotationLayer-BBSJsXKL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMEh_Ic-.js";import"./PdfViewerOutlineSidebar-C8pNKPJK.js";import"./PdfViewerSidebarHeader-BVw2AgEq.js";import"./useBaseUiId-DXR-gGQN.js";import"./useControlled-BeCa4j1K.js";import"./CompositeRoot-Bv_ng9ji.js";import"./CompositeItem-D1YEdKX1.js";import"./ToolbarRootContext-B96YkNbH.js";import"./composite-DIA_5bjb.js";import"./svgIconContainer-CmdDPKdW.js";import"./PdfViewerSearchBar-BdOk221O.js";import"./chevron-up-Ihmnrz87.js";import"./chevron-down-BgiHHBSL.js";import"./cross-DWvNM6aD.js";import"./PdfViewerSidebar-CJuyJfpL.js";import"./index-DUh9Rd_7.js";import"./index-DYHGdsLl.js";import"./index-WeJ_Lope.js";import"./PdfViewerToolbar-DucTdOH6.js";import"./Button-CT75AnP8.js";import"./chevron-right-BujHJDzi.js";import"./Input-ClkjPeCn.js";import"./search-CoqdhJoi.js";import"./spin-D-SdCGuS.js";import"./error-B2JG09GC.js";import"./withOsdkMetrics-DmspcQnU.js";import"./makeExternalStore-O-ViDFSd.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

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
