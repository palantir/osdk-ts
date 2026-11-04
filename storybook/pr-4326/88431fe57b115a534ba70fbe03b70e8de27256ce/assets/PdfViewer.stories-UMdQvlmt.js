import{j as r,M as s}from"./iframe-DcblcpsD.js";import{P as p}from"./pdf-viewer-BgYHKsKO.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-Dbh-tOsM.js";import"./preload-helper-D_wMhyaD.js";import"./PdfViewer-58hON4KO.js";import"./index-7ach3CvX.js";import"./BasePdfViewer-CVDFjcqq.js";import"./BasePdfViewer.module.css-CD6GOI9G.js";import"./PdfViewerAnnotationLayer-CXHNofmB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FDLV_wxo.js";import"./PdfViewerOutlineSidebar-COzH1V2Z.js";import"./PdfViewerSidebarHeader-B3aiqo6S.js";import"./useBaseUiId-kDJ62DAx.js";import"./useControlled-i2WyCNOr.js";import"./CompositeRoot-DsNLUUbX.js";import"./CompositeItem-BDLcpoAw.js";import"./ToolbarRootContext-DePr5kCC.js";import"./composite-C6NGEWFA.js";import"./svgIconContainer-BNnsBEK2.js";import"./PdfViewerSearchBar-CSoBR6t6.js";import"./chevron-up-BTQdR-nu.js";import"./chevron-down-CzYSE9_L.js";import"./cross-BsrNuqdH.js";import"./PdfViewerSidebar-BnjwpfId.js";import"./index-DjzvDUKT.js";import"./index-5vhpnJCd.js";import"./index-Dyr0XLHo.js";import"./PdfViewerToolbar-DfKQn5vk.js";import"./Button-BDRb-Pkx.js";import"./chevron-right-Bwp-BU1o.js";import"./Input-DFCeqSqF.js";import"./search-DNqBvZq5.js";import"./spin-mwSqoZ4x.js";import"./error-CKNR4CvZ.js";import"./withOsdkMetrics-CBgzbsXI.js";import"./makeExternalStore-DRuwFA-0.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
        code: \`// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const W=["Default"];export{o as Default,W as __namedExportsOrder,U as default};
