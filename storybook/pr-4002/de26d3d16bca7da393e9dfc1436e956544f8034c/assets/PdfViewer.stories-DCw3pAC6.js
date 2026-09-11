import{j as r,M as s}from"./iframe-CDKj6riZ.js";import{P as p}from"./pdf-viewer-KxRfW33E.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-f7h0f8Ub.js";import"./preload-helper-2bCQFHut.js";import"./PdfViewer-CCZgjqqF.js";import"./index-DetP7shj.js";import"./BasePdfViewer-DoRod8FW.js";import"./BasePdfViewer.module.css-D1MKEfEj.js";import"./PdfViewerAnnotationLayer-nJsqhaLf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DXtrY0pq.js";import"./PdfViewerOutlineSidebar-OATsMcbB.js";import"./PdfViewerSidebarHeader-DvKIRFS8.js";import"./useBaseUiId-_WJi2oWJ.js";import"./useControlled-XE9pZf79.js";import"./CompositeRoot-B6gPBFF4.js";import"./CompositeItem-B3wPzhHU.js";import"./ToolbarRootContext-BCzvZYHk.js";import"./composite-CqNHIi7L.js";import"./svgIconContainer-CbX48z79.js";import"./PdfViewerSearchBar-C26zpkM8.js";import"./chevron-up-BeMcZKJw.js";import"./chevron-down-BsLIY-zC.js";import"./cross-BYAFUA7Y.js";import"./PdfViewerSidebar-bqK4uuVL.js";import"./index-CMQpOErY.js";import"./index-B2o7iGnK.js";import"./index-CjcUdmkL.js";import"./PdfViewerToolbar-BPg3WxTG.js";import"./Button-CG5FCWgZ.js";import"./chevron-right-BfZrVPSG.js";import"./Input-BFZp6n3R.js";import"./search-DvJSVec5.js";import"./spin-BJKOmOZI.js";import"./error-RLt_WdpY.js";import"./withOsdkMetrics-RKhA3pS2.js";import"./makeExternalStore-jqVUK_Pp.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
