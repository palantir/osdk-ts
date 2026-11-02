import{j as r,M as s}from"./iframe-DSFURlDA.js";import{P as p}from"./pdf-viewer-BeJJDeAw.js";import{E as d}from"./Employee-BAk2o20h.js";import{u as a}from"./useOsdkObject-EPuvKxBA.js";import"./preload-helper-B1VAjeN0.js";import"./PdfViewer-BrMl6zGc.js";import"./index-n2cVRLUV.js";import"./BasePdfViewer-BNXoLyLH.js";import"./BasePdfViewer.module.css-DnH-ZeK7.js";import"./PdfViewerAnnotationLayer-BXR1Tc22.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DX2NA0Sq.js";import"./PdfViewerOutlineSidebar-Cayfo4LN.js";import"./PdfViewerSidebarHeader-BQyjjx5z.js";import"./useBaseUiId-CPQbMaU1.js";import"./useControlled-C2QQWcpQ.js";import"./CompositeRoot-Co6W6f7L.js";import"./CompositeItem-4TlbRyqO.js";import"./ToolbarRootContext-D4dmc43x.js";import"./composite-zLymdlB4.js";import"./svgIconContainer-DdvBD_9a.js";import"./PdfViewerSearchBar-DbaVy0yd.js";import"./chevron-up-Ce33y_zj.js";import"./chevron-down-DT3G6LtT.js";import"./cross-BfC9nIFZ.js";import"./PdfViewerSidebar-CvcJQ4to.js";import"./index-ojfPVnys.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./PdfViewerToolbar-BtB8-I54.js";import"./Button-B9oX6qDj.js";import"./chevron-right-CUDBSdZ9.js";import"./Input-TT4Euawv.js";import"./search-BUp5dxQj.js";import"./spin-kh0G29qe.js";import"./error-DUIlp0md.js";import"./withOsdkMetrics-CcZF-o22.js";import"./makeExternalStore-DipsHuCX.js";const U={title:"Components/DocumentViewer/Renderers/PdfViewer",component:p,tags:["beta"],parameters:{controls:{expanded:!0}}},o={render:()=>{const{object:e,isLoading:n}=a(d,s);return n||!(e!=null&&e.employeeDocuments)?r.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):r.jsx("div",{style:{height:"600px"},children:r.jsx(p,{media:e.employeeDocuments})})},parameters:{docs:{source:{code:`// Access media from an OSDK object's media reference property
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
