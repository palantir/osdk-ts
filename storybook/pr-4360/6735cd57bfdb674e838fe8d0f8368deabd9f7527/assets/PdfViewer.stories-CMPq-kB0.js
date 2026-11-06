import{j as r,M as s}from"./iframe-D0hYQ0ZS.js";import{P as p}from"./pdf-viewer-DgaguuVV.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CZ9DnPL9.js";import"./preload-helper-CA2FQp3d.js";import"./PdfViewer-qsPj4k4y.js";import"./index-DmARC5st.js";import"./BasePdfViewer-CxnFTCIo.js";import"./BasePdfViewer.module.css-tvcbN5xR.js";import"./PdfViewerAnnotationLayer-SqyFlRGy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CqktX2_d.js";import"./PdfViewerOutlineSidebar-DIlMqPpP.js";import"./PdfViewerSidebarHeader-D5lmJDj3.js";import"./useBaseUiId-XRgD1fAc.js";import"./useControlled-DFsigNjS.js";import"./CompositeRoot-eTw2gpKR.js";import"./CompositeItem-BfeA3NJO.js";import"./ToolbarRootContext-B3P_Il02.js";import"./composite-DkKFn4B2.js";import"./svgIconContainer-Bnj1Dnpn.js";import"./PdfViewerSearchBar-7cU5s7t4.js";import"./chevron-up-CuguSENz.js";import"./chevron-down-DpAIzyvb.js";import"./cross-DGfZ9I8q.js";import"./PdfViewerSidebar-C6p_0y69.js";import"./index-CwuOLTmH.js";import"./index-dclRq-mv.js";import"./index-DET9q48x.js";import"./PdfViewerToolbar-zncUR-Wp.js";import"./Button-BBjgpomd.js";import"./chevron-right-8pXzmSOz.js";import"./Input-DppPciYW.js";import"./search-DXnEIY7b.js";import"./spin-DQ6aGHuN.js";import"./error-DZHrzjAe.js";import"./withOsdkMetrics-Dqap3OIg.js";import"./makeExternalStore-BcCQ6g4O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
