import{j as r,M as s}from"./iframe-CvJ7R438.js";import{P as p}from"./pdf-viewer-D7EJchFR.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-51eOpiad.js";import"./preload-helper-DIeUWadq.js";import"./PdfViewer-BAFpcCXi.js";import"./index-Yp0JQF0Q.js";import"./BasePdfViewer-DZwjn6p8.js";import"./BasePdfViewer.module.css-zb6pr8fM.js";import"./PdfViewerAnnotationLayer-BB-6LmmJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BYb46tfb.js";import"./PdfViewerOutlineSidebar-xn-SIQgk.js";import"./PdfViewerSidebarHeader-BsGvHDSl.js";import"./useBaseUiId-DvuukT3m.js";import"./useControlled-CupkKwbr.js";import"./CompositeRoot-BBH4x_Nn.js";import"./CompositeItem-DpqRoFwU.js";import"./ToolbarRootContext-pG56Avmq.js";import"./composite-DfVEv5DW.js";import"./svgIconContainer-Do6jakIy.js";import"./PdfViewerSearchBar-DpY1OmaJ.js";import"./chevron-up-DbnK0pFa.js";import"./chevron-down-B1-Mj5AF.js";import"./cross-Bghy2D6j.js";import"./PdfViewerSidebar-DFViwja1.js";import"./index-g6hJSz-5.js";import"./index-BYKE8oqY.js";import"./index-C9e5xM7h.js";import"./PdfViewerToolbar-CUchPAP_.js";import"./Button-E3u3fwJi.js";import"./chevron-right-DD8D9CRX.js";import"./Input-DgEbo1rm.js";import"./search-E1Tz1S2U.js";import"./spin-Clu4DVtW.js";import"./error-E1ZphxDs.js";import"./withOsdkMetrics-ByVOuDU9.js";import"./makeExternalStore-Q33cok2O.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
