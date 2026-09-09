import{j as r,M as s}from"./iframe-C5ao1IvQ.js";import{P as p}from"./pdf-viewer-DhBeytlu.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-C0ln8Vmh.js";import"./preload-helper-DGRqXtXi.js";import"./PdfViewer-UyJGAGUl.js";import"./index-Ceo1TM0H.js";import"./BasePdfViewer-BPLagPrE.js";import"./BasePdfViewer.module.css-Cfe6BO-_.js";import"./PdfViewerAnnotationLayer-Ct9YsIBH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BMS92Bre.js";import"./PdfViewerOutlineSidebar-BGgARa-t.js";import"./PdfViewerSidebarHeader-DiE2kABy.js";import"./useBaseUiId-CnKjhxxS.js";import"./useControlled-BT4ixp-u.js";import"./CompositeRoot-CkS6ptRI.js";import"./CompositeItem-CbSSSK8r.js";import"./ToolbarRootContext-DALSiAmf.js";import"./composite-C9s-0UsJ.js";import"./svgIconContainer-XtON82xh.js";import"./PdfViewerSearchBar-tbxczbSO.js";import"./chevron-up-DN8532C2.js";import"./chevron-down-CMM_2MNN.js";import"./cross-tL6C68Y8.js";import"./PdfViewerSidebar-C6X1Oj4v.js";import"./index-BrUG7ik_.js";import"./index-BdE4NmrR.js";import"./index-BR9sQfcO.js";import"./PdfViewerToolbar-C1FnA4jY.js";import"./Button-dQ0hHaFn.js";import"./chevron-right-B1O74W_E.js";import"./Input-jSAQ8Oo5.js";import"./search-Cn03k3ET.js";import"./spin-BsVwgArD.js";import"./error-MOhUoXAM.js";import"./withOsdkMetrics-vcpuoudd.js";import"./makeExternalStore-CCjQfhEF.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
