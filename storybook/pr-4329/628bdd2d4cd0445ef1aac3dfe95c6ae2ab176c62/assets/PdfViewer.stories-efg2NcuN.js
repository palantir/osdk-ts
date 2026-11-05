import{j as r,M as s}from"./iframe-D7QeARop.js";import{P as p}from"./pdf-viewer-CfhbuA8l.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-CHbU3Rfu.js";import"./preload-helper-ByO2gGG-.js";import"./PdfViewer-BEyco65A.js";import"./index-vZOnCZIt.js";import"./BasePdfViewer-C8aoO1hJ.js";import"./BasePdfViewer.module.css-CIlagYz9.js";import"./PdfViewerAnnotationLayer-BfacVNa8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-WF7CSP2N.js";import"./PdfViewerOutlineSidebar-BHQwQx8E.js";import"./PdfViewerSidebarHeader-CsVJxj_c.js";import"./useBaseUiId-Dh_4-Vt2.js";import"./useControlled-BpgKR5hH.js";import"./CompositeRoot-DviRqeBr.js";import"./CompositeItem-BgFz1mHQ.js";import"./ToolbarRootContext-3MdV9Srh.js";import"./composite-CP3yMwV3.js";import"./svgIconContainer-CpkzxylD.js";import"./PdfViewerSearchBar-BKQFH_Hm.js";import"./chevron-up-CFRpdRrm.js";import"./chevron-down-YhKS7YTd.js";import"./cross-CCN51Rj8.js";import"./PdfViewerSidebar-Dh2rwh46.js";import"./index-CoGsxT9Q.js";import"./index-CJ9QavcY.js";import"./index-DjN3vWUU.js";import"./PdfViewerToolbar-3VklDpev.js";import"./Button-BlwuwcGr.js";import"./chevron-right-iEVopLNq.js";import"./Input-CLM1j4JP.js";import"./search-9NK7v0NO.js";import"./spin-D8HYvxiM.js";import"./error-CL_q_Pjq.js";import"./withOsdkMetrics-CaR_BdPF.js";import"./makeExternalStore-BcgbNS0d.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
